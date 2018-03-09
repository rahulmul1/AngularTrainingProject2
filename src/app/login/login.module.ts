import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

 
import { LoginRoutingModule } from './login-routing.module';

@NgModule({
  imports: [ ReactiveFormsModule,  LoginRoutingModule ],
  declarations: [ LoginRoutingModule.components ]
})
export class LoginModule { }