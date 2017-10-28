import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AboutComponent, DoctorcelularComponent } from './components/index.paginas';


const APP_ROUTES: Routes = [
    { path: '', component: DoctorcelularComponent },
    { path: 'about', component: AboutComponent },
    // { path: 'path3', component: Name3Component },
    // { path: 'path4', component: Name4Component },
    { path: '**', pathMatch:'full', redirectTo:'' },

    //{ path: 'path/:routeParam', component: MyComponent },
    //{ path: 'staticPath', component: ... },
    //{ path: '**', component: ... },
    //{ path: 'oldPath', redirectTo: '/staticPath' },
    //{ path: ..., component: ..., data: { message: 'Custom' }
];


export const app_routing = RouterModule.forRoot(APP_ROUTES, {useHash: true});
