import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

 
import { IUserLogin } from '../shared/interfaces';
 

@Component({
    selector: 'cm-login',
    templateUrl: './login.component.html',
    styleUrls: [ './login.component.css' ]
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    errorMessage: string;

    constructor(private formBuilder: FormBuilder, 
                private router: Router ) { }

    ngOnInit() { 
        this.buildForm();
    }

    buildForm() {
        this.loginForm = this.formBuilder.group({
            email:      ['', [ Validators.required  ]],
            password:   ['', [ Validators.required  ]]
        });
    }

    submit({ value, valid }: { value: IUserLogin, valid: boolean }) {
        
                        this.router.navigate(['/customers']);
                   
    }

}