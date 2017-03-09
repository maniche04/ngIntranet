// libs
import { Component, ElementRef, ViewChild, OnInit }
from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

// app
import { RouterExtensions, Config } from '../../core/index';
import { IAppState, getMenu } from '../../ngrx/index';
import * as navMenu from '../../base/index';

@Component({
    moduleId: module.id,
    selector: 'nav-menu',
    templateUrl: 'nav-menu.component.html',
    styleUrls: ['nav-menu.component.css']
})

export class NavMenuComponent implements OnInit {
    public menu$: Observable<any>;
    
    constructor(private store: Store<IAppState>,public routertext: RouterExtensions) {}

    ngOnInit() {
        this.menu$ = this.store.let(getMenu);
    }
}