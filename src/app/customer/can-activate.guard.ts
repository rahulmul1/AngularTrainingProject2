import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
 

@Injectable()
export class CanActivateGuard implements CanActivate {

  constructor(  private router: Router) { } 

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
     
    //  return true;
     
   
    // this.router.navigate(['/login']);
    return true;
  }

}