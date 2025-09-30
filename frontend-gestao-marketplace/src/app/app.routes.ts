import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Products } from './pages/products/products';
import { Layout } from './pages/layout/layout';
import { NewProduct } from './pages/new-product/new-product';

export const routes: Routes = [
    {
        path: 'login',
        component: Login,
    
    },
    {
        path: '',
        component: Layout,
        canActivateChild: [],
        children: [
            {
                path: 'products',
                component: Products
            },
            {
                path: 'new-product',
                component: NewProduct
            }
        ]
    },
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: '/login'
    }
];