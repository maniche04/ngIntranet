// angular
import { NgModule, Optional, SkipSelf, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

// app
import { BASE_COMPONENTS } from './components/index';
import { BASE_PROVIDERS } from './services/index';
import { AUTH_PROVIDERS } from '../auth/services/index';
import { MultilingualModule } from '../i18n/multilingual.module';
import { FlexLayoutModule } from "@angular/flex-layout";

// libs
// import { NgSemanticModule } from 'ng-semantic/ng-semantic';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MaterialModule } from '@angular/material';

/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    RouterModule,
    MultilingualModule,
    // NgSemanticModule,
    MaterialModule,
    FlexLayoutModule
  ],
  declarations: [
    BASE_COMPONENTS,
  ],
  providers: [
    BASE_PROVIDERS,
    AUTH_PROVIDERS
  ],
  schemas: [
    NO_ERRORS_SCHEMA,
    CUSTOM_ELEMENTS_SCHEMA
  ],
  exports: [
    BASE_COMPONENTS,
    MultilingualModule
  ]
})
export class BaseModule {

  constructor(@Optional() @SkipSelf() parentModule: BaseModule) {
    if (parentModule) {
      throw new Error('SampleModule already loaded; Import in root module only.');
    }
  }
}
