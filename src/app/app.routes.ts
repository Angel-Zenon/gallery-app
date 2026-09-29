import { Routes } from '@angular/router';

export const routes: Routes = [

    {
        path : 'dashboard',
        loadComponent:  () => 
            import('./gifs/pages/dashboard-page/dashboard-page'),
        children : [
            {
                path : 'sales',
                loadComponent:  () => 
                    import('./gifs/pages/sales-page/sales-page')
            },

            {
                path : 'products',
                loadComponent:  () => 
                    import('./gifs/pages/products-page/products-page')
            },
            {
                path : 'orders',
                loadComponent:  () => 
                    import('./gifs/pages/orders-page/orders-page')
            },
            {
                path : 'order-history/:query',
                loadComponent:  () => 
                    import('./gifs/pages/gif-history/gif-history')
            },


            {
                path :  '**',
                redirectTo : 'products'
            }

        ]
    },

    
    {
        path: '**',
        redirectTo : 'dashboard'
    },
];
