import { Component, OnInit } from '@angular/core';
import { DataService } from '../core/services/data.service';
import { ICustomer  } from '../shared/interfaces';


@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent  implements OnInit {
    customers: ICustomer[] = [];
    filteredCustomers: ICustomer[] = [];

    searchText: string = "";
    constructor(private dataService: DataService) { }

    ngOnInit() {
        this.dataService.getCustomers()
        .subscribe((response:  ICustomer[]) => {
          this.customers = this.filteredCustomers = response;
       },
        (err: any) => console.log(err),
        () => console.log('getCustomer() retrieved customers' ));
    }

    doFilter() {
        console.log(this.searchText);
        let result: ICustomer[] = [];
        this.customers.forEach(c => {
            if(c.firstName.toUpperCase().indexOf(this.searchText.toUpperCase()) >=0 ||
            c.lastName.toUpperCase().indexOf(this.searchText.toUpperCase()) >=0) {
                result.push(c);
            }
        });
        this.filteredCustomers = result;
    }
}