import { Component } from '@angular/core';
import { DataService } from '../core/services/data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html' 
})
export class AboutComponent {
  constructor(private dataService: DataService) { }
  ngOnInit() {
    // this.dataService.getCustomersWithOrders(1).subscribe(data => {
    //   console.log(data);
    // })
    this.dataService.getCustomerInfoFromOrder(102).subscribe(data => {
      console.log(data);
    });
  }  
}