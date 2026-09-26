import { HttpClient, HttpParams } from "@angular/common/http";
import { effect, inject, Service, signal } from "@angular/core";
import { environment } from "environments/environment";
import { CartsResponse } from "../interfaces/carts-response.interface";
import { CartMapper } from "../mapper/cart.mapper";
import { Cart } from "../interfaces/cart.interface";
import { map, tap } from "rxjs";

@Service()
export class OrdersService {
    private http = inject(HttpClient);
    private _orders = signal<Cart[]>([]);
    public  orders = this._orders;

    constructor() {
        this.getData();
        
    }

    public getData() {
        let params = new HttpParams()
        
        this.http.get<CartsResponse>(`${environment.API_DUMMY}/carts`, {params} )
            .subscribe( (res) => {
                const allCarts = CartMapper.mapCartItemsResponseToCartItems(res.carts);
                this._orders.set(allCarts);
            }  )
    }

    public searchClient(userId : number) {

        return this.http.get<CartsResponse> (`${environment.API_DUMMY}/carts/user/${userId}`)
            .pipe(
                map( ({ carts }) => carts), // tap no rompe el flujo
                map( (items) => CartMapper.mapCartItemsResponseToCartItems(items) )
            );

    }
}