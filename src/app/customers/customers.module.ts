
import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
// import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';

import { CustomersComponent } from './customers.component';
import {CustomersCardComponent} from './customers.card.component';

import { CustomersRoutingModule } from './customers.routing';

import {CustomerModule} from '../customer/customer.module';

 

@NgModule({
    declarations: [
        CustomersComponent, CustomersCardComponent
    ],
    imports: [CustomersRoutingModule, CommonModule, CustomerModule, FormsModule],
   
})
export class CustomersModule { }
