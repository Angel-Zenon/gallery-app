import { HttpClient, HttpParams } from "@angular/common/http";
import { computed, effect, inject, Service, Signal, signal } from "@angular/core";
import { environment } from "environments/environment";
import { CartsResponse } from "../interfaces/carts-response.interface";
import { CartMapper } from "../mapper/cart.mapper";
import { Cart } from "../interfaces/cart.interface";
import { map, Observable, tap } from "rxjs";


export const loadFromLocalStorage =  () :Record<string, Cart[]> => {
    const ordersFromLocalStorage = localStorage.getItem('orders') ?? '{}';
    return JSON.parse(ordersFromLocalStorage) ;
    
}

@Service()
export class OrdersService {
    private http = inject(HttpClient);
    private _orders = signal<Cart[]>([]);
    public  orders = this._orders;

    searchHistory = signal<Record<number, Cart[]>>(loadFromLocalStorage()); // para guardar en cache, se usa el Record para objetvos dinamicos
    searchHistoryKeys = computed ( () => Object.keys( this.searchHistory() )); // obtenemos el valor de las llaves, de la señal
    constructor() {
        // this.getData();
        /*this.searchHistory.update( history => ( {
            ...history, 
            loadFromLocalStorage
        }) ) */
        
    }

    public getData() {
        let params = new HttpParams()
        
        this.http.get<CartsResponse>(`${environment.API_DUMMY}/carts`, {params} )
            .subscribe( (res) => {
                const allCarts = CartMapper.mapCartItemsResponseToCartItems(res.carts);
                this._orders.set(allCarts);
            }  )
    }

    public searchClientCarts(userId : number) :Observable<Cart[]> {

        return this.http.get<CartsResponse> (`${environment.API_DUMMY}/carts/user/${userId}`)
            .pipe(
                map( ({ carts }) => carts), // tap no rompe el flujo
                map( (items) => CartMapper.mapCartItemsResponseToCartItems(items) ),
                // guardamos en el historial
                tap(items => {
                    this.searchHistory.update( history => ({
                        ...history,
                        [userId] : items
                    }))
                    
                } )
            );
    }
    /*
    public getOrderById(id: number) {
        return this.http.get(`${environment.API_DUMMY}/carts/user/${id}`)
            .pipe()
    } */

    getHistoryOrderByUserId( userId : number ) : Cart[] {
        return this.searchHistory()[userId] ?? []; // obtenemos los carritos de ese user
    }

    saveToLocalStorage = effect( () => {
        // cuando cambia la señal de search history, guardamos en el local storage
        const ordersToSaveInLocalStorage = this.searchHistory();
        localStorage.setItem('orders', JSON.stringify(ordersToSaveInLocalStorage));
    })
}