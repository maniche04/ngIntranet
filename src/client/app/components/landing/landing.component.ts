// libs
import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

// app
import { RouterExtensions, Config } from '../../shared/core/index';

@Component({
  moduleId: module.id,
  selector: 'landing',
  templateUrl: 'landing.component.html',
  styleUrls: ['landing.component.css']
})

export class LandingComponent {
    public appAlert: object;
    
    constructor() {
        this.appAlert = {

        }
    }
}
