// libs
import { Component, ElementRef, ViewChild, OnInit }
from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute } from '@angular/router';

// app
import { RouterExtensions, Config } from '../../core/index';
import { IAppState, getMenu, getNames } from '../../ngrx/index';
import { Auth } from '../../auth/services/auth.service';
import * as navMenu from '../../base/index';

@Component({
    moduleId: module.id,
    selector: 'nav-menu',
    templateUrl: 'nav-menu.component.html',
    styleUrls: ['nav-menu.component.css']
})

export class NavMenuComponent implements OnInit {
    public menu$: Observable<any>;
    
    constructor(
        private authService: Auth, 
        private store: Store<IAppState>,
        public routertext: RouterExtensions,
        private router: Router
    ) {}

    ngOnInit() {
        this.menu$ = this.store.let(getMenu);
    }

    doLogOut() {
        this.authService.logout();
        this.router.navigate(['login']);
    }
}