// angular
import { Injectable } from '@angular/core';

// libs
import { Store, Action } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';

// module
import { NavMenuService } from '../services/nav-menu.service';
import * as navmenu from '../actions/nav-menu.action';

@Injectable()
export class NavMenuEffects {
    @Effect() init$: Observable<Action> = this.actions$
        .ofType(navmenu.ActionTypes.INIT)
        .startWith(new navmenu.InitAction)
        .switchMap(() => this.navMenuService.getMenu())
        .map(payload => {
            let menu = payload;
            return new navmenu.InitializedAction(menu);
        })
        .catch(() => Observable.of(
            new navmenu.InitFailedAction()));

    constructor(
        private store: Store<any>,
        private actions$: Actions,
        private navMenuService: NavMenuService
    ) { }
}