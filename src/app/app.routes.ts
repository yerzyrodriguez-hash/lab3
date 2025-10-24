import { Routes } from '@angular/router';

import { layout } from './layout/layout';

export const routes: Routes = [

    {
        path:'',
        component:layout,
        children:[
            {
                path:'',
                loadComponent:()=>
                    import('./home/home').then(m=>m.Home)
            },
            {
                path:'about',
                loadComponent:()=>
                    import('./about/about').then(m=>m.About)
            }
        ]
    }

];

