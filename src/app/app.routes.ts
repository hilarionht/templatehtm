import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AboutComponent, DoctorcelularComponent, ProductoComponent ,SearchComponent} from './components/index.paginas';


const APP_ROUTES: Routes = [
    { path: 'home', component: DoctorcelularComponent },
    { path: 'about', component: AboutComponent },
    { path: 'producto/:id', component: ProductoComponent },
    { path: 'buscar/:term', component: SearchComponent },
    { path: '**', pathMatch:'full', redirectTo:'home' },

    //{ path: 'path/:routeParam', component: MyComponent },
    //{ path: 'staticPath', component: ... },
    //{ path: '**', component: ... },
    //{ path: 'oldPath', redirectTo: '/staticPath' },
    //{ path: ..., component: ..., data: { message: 'Custom' }
];


export const app_routing = RouterModule.forRoot(APP_ROUTES, {useHash: true});
