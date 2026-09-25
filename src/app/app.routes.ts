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
