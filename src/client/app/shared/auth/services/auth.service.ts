// angular
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

// libs
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { tokenNotExpired } from 'angular2-jwt';

// app
import { Config } from '../../core/index';
import { Analytics, AnalyticsService } from 
'../../analytics/index';

@Injectable()
export class Auth extends Analytics {
    private authProvider = 'http://localhost:8000/auth/api-token-auth/';

    constructor(private http: Http,public analytics: AnalyticsService,) {
        super(analytics);
    }

    login(credentials) {
        return this.http.post(this.authProvider, credentials)
        .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let user = response.json();
                if (user) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('id_token', user.token);
                }
        });
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('id_token');
    }

    loggedIn() {
        return tokenNotExpired();
    }
}