import { NgModule }      from '@angular/core';
import {HttpModule, Http} from '@angular/http';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import { CustomerRoutingModule } from './customer-routing.module';

@NgModule({
  imports:      [ CustomerRoutingModule, HttpModule,CommonModule,FormsModule],
  declarations: [ CustomerRoutingModule.components ] 
})
export class CustomerModule { }