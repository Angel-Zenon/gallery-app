import { HttpClient, HttpParams } from "@angular/common/http";
import { inject, Service } from "@angular/core";
import { environment } from "environments/environment";
import { CartsResponse } from "../interfaces/carts-response.interface";
import { CartMapper } from "../mapper/cart.mapper";

@Service()
export class OrdersService {
    private http = inject(HttpClient);

    constructor() {
        this.getData();
    }

    public getData() {

        let params = new HttpParams()
        
        this.http.get<CartsResponse>(`${environment.API_DUMMY}/carts`, {params} )
            .subscribe( (res) => {
                const allCarts = CartMapper.mapCartItemsResponseToCartItems(res.carts);
                console.log(allCarts);
            }  )
    }
}