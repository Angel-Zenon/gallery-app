export interface CartsResponse {
    carts: CartItemResponse[];
    total: number;
    skip:  number;
    limit: number;
}

export interface CartItemResponse {
    id:              number;
    products:        ProductCartResponse[];
    total:           number;
    discountedTotal: number;
    userId:          number;
    totalProducts:   number;
    totalQuantity:   number;
}
// interfaz que nos devuelve cuando obtenemos el producto de un carrito
export interface ProductCartResponse {
    id:                 number;
    title:              string;
    price:              number;
    quantity:           number;
    total:              number;
    discountPercentage: number;
    discountedTotal:    number;
    thumbnail:          string;
}
