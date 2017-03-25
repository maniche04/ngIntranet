// any operators needed throughout your application
import './operators';

// libs
import { Component, OnInit } from '@angular/core';

// app
import { AnalyticsService } from '../shared/analytics/index';
import { Config, LogService, AppService } from '../shared/core/index';

/**
 * This class represents the main application component.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-app',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appAlert: object;
  constructor(
    public analytics: AnalyticsService,
    public log: LogService,
    private appService: AppService,

  ) {
    this.appAlert = {

    }
    // this.appAlert = {
    //   type: 'info',
    //   buttonText: 'Open',
    //   link: 'www.google.com',
    //   message: 'Try the new Google Chrome!!'
    // }
    log.debug(`Config env: ${Config.ENVIRONMENT().ENV}`);
  }
}
