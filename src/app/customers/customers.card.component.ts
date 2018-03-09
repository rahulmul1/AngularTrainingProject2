import { Component, OnInit, Input } from '@angular/core';
import { ICustomer  } from '../shared/interfaces';
import { UpperCasePipe } from '@angular/common';
 



@Component({
  selector: 'app-customers-card',
  templateUrl: './customers.card.component.html',
  styleUrls: ['./customers.card.component.css']
 
})
export class CustomersCardComponent  implements OnInit {
    @Input()
    customers: ICustomer[] = [];
    state :string;

   
    constructor( ) { }

    ngOnInit() {
    }
}