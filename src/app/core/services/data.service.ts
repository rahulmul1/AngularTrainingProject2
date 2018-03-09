import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
// import { Observer } from 'rxjs/Observer';
import 'rxjs/add/operator/map'; 
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/operator/mergeMap';

import { ICustomer } from '../../shared/interfaces';

@Injectable()
export class DataService {
    customersBaseUrl: string = 'http://localhost:3000/customers';

    constructor(private http: Http) { }
    
    getCustomers() : Observable<ICustomer[]> {
        return this.http.get(this.customersBaseUrl)
                    .map((res: Response) => {
                        let customers = res.json();
                        return customers;
                    })
                    .catch(this.handleError);
    }

    getCustomer(id: number) : Observable<ICustomer> {
        return this.http.get(this.customersBaseUrl + '/' + id)
                   .map((res: Response) => {
                       let customer = res.json();
                       return customer;
                   })
                   .catch(this.handleError);
    }

    insertCustomer(customer: ICustomer) : Observable<ICustomer> {
        return this.http.post(this.customersBaseUrl, customer)
                   .map((res: Response) => res.json())
                   .catch(this.handleError);
    }
    
    updateCustomer(customer: ICustomer) : Observable<boolean> {
        return this.http.put(this.customersBaseUrl + '/' + customer.id, customer)
                   .map((res: Response) => res.json())
                   .catch(this.handleError);  
    }

    deleteCustomer(id: number) : Observable<boolean> {
        return this.http.delete(this.customersBaseUrl + '/' + id)
                   .map((res: Response) => res.json().status)
                   .catch(this.handleError);
    }
    

    handleError(error: any) {
        console.error('server error:', error); 
        if (error instanceof Response) {
          let errMessage = '';
          try {
            errMessage = error.json().error;
          } catch(err) {
            errMessage = error.statusText;
          }
          return Observable.throw(errMessage);
        }
        return Observable.throw(error || 'Node.js server error');
    }


    getCustomersWithOrders(id: number): Observable<any> {
        return Observable.forkJoin([
          this.http.get('http://localhost:3000/customers/' + id).map(res => res.json()),
          this.http.get('http://localhost:3000/orders/?customer_id=' + id).map(res => res.json())
        ])
        .map((data: any[]) => {
          let customers: any = data[0];
          let orders: any[] = data[1];
          customers.orders = orders;
          return customers;
        });
      }

      getCustomerInfoFromOrder(orderId: number) : Observable<any> {
        return this.http.get('http://localhost:3000/orders/' +orderId)
        .map((res: any) => res.json())
        .flatMap((orders: any) => {
          return this.http.get('http://localhost:3000/customers/' + orders.customer_id)
            .map((res: any) => res.json());
        });
      }
}