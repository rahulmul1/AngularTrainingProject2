import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import {CustomersComponent} from './customers/customers.component';
import { AboutComponent } from './about/about.component';


const app_routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/about' },
    { path: 'customers', loadChildren: 'app/customers/customers.module#CustomersModule' },
    { path: 'about', component: AboutComponent },
    { path: 'login', loadChildren: 'app/login/login.module#LoginModule' },
    { path: 'customers/:id', loadChildren: 'app/customer/customer.module#CustomerModule' },
    { path: '**', redirectTo: '/customers' }
];

export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(app_routes);