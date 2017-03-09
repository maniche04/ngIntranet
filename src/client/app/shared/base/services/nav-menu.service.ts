// angular
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

// libs
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

// app
import { Config } from '../../core/index';
import { Analytics, AnalyticsService } from 
'../../analytics/index';
import { CATEGORY } from '../common/category.common';

// module
import { IBaseState } from '../states/index'
import * as actions from '../actions/nav-menu.action';

@Injectable()
export class NavMenuService extends Analytics {
    constructor(
        public analytics: AnalyticsService,
        private store: Store<IBaseState>,
        private http: Http
    ) {
        super(analytics);
        this.category = CATEGORY;
    }

    getMenu(): Observable<Object> {
        return this.http.get(`${Config.IS_MOBILE_NATIVE() ? '/' : ''}assets/menu.json`)
            .map(res => res.json());
    }
}