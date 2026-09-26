// interfaz que usamos en la aplicacion, en el p´roducto de un carrito
export interface ProductCart {
    id:                 number;
    title:              string;
    price:              number;
    quantity:           number;
    total:              number;
    discountPercentage: number;
    discountedTotal:    number;
}