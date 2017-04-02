// libs
import { Component, ElementRef, ViewChild, OnInit }
from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute } from '@angular/router';
// app
import { RouterExtensions, Config } from '../../core/index';
import * as auth from '../../base/index';
import { Auth } from '../services/auth.service';

@Component({
    moduleId: module.id,
    selector: 'login-form',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.css']
})

export class LoginComponent {
    private isError;
    private credentials = {
        username: '',
        password: ''
    }

    constructor(
        private authService: Auth, 
        public routertext: RouterExtensions,
        private route: ActivatedRoute,
        private router: Router
    ) {
        this.isError = 0;
        
    }

    doLogin() {
        this.authService.login(this.credentials)
        .subscribe(
            data => {
                this.router.navigate(['home']);
            },
            error => {
                this.isError = 1;
                this.credentials.password = '';
            });
    }

}