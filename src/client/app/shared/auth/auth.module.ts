import { NgModule } from '@angular/core';
import { Http, RequestOptions } from '@angular/http';
import { AuthHttp, AuthConfig } from 'angular2-jwt';

//angular
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AUTH_PROVIDERS } from './services/index';
import { AUTH_COMPONENTS } from './components/index';
import { ClarityModule } from 'clarity-angular';

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
    return new AuthHttp(new AuthConfig(), http, options);
}

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        RouterModule,
        HttpModule,
        ClarityModule
        
    ],
    declarations: [
        AUTH_COMPONENTS,
    ],
    providers: [
        {
            provide: AuthHttp,
            useFactory: authHttpServiceFactory,
            deps: [Http, RequestOptions]
        },
        AUTH_PROVIDERS
    ],
    exports: [
        AUTH_COMPONENTS,
    ]
})

export class AuthModule {}