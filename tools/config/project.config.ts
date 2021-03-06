import { join } from 'path';
import { SeedAdvancedConfig } from './seed-advanced.config';
import { ExtendPackages } from './seed.config.interfaces';

/**
 * This class extends the basic seed configuration, allowing for project specific overrides. A few examples can be found
 * below.
 */

export class ProjectConfig extends SeedAdvancedConfig {

  PROJECT_TASKS_DIR = join(process.cwd(), this.TOOLS_DIR, 'tasks', 'project');
  
  constructor() {
    super();
    // this.APP_TITLE = 'Put name of your app here';

    /* Enable typeless compiler runs (faster) between typed compiler runs. */
    // this.TYPED_COMPILE_INTERVAL = 5;

    // Add `NPM` third-party libraries to be injected/bundled.
    this.NPM_DEPENDENCIES = [
      ...this.NPM_DEPENDENCIES,
      {src: '@angular/material/core/theming/prebuilt/deeppurple-amber.css', inject: true},
      {src: 'jquery/dist/jquery.min.js', inject: 'libs'},
    ];

    // Add `local` third-party libraries to be injected/bundled.
    this.APP_ASSETS = [
      ...this.APP_ASSETS,
      // {src: `${this.APP_SRC}/your-path-to-lib/libs/jquery-ui.js`, inject: true, vendor: false}
      // {src: `${this.CSS_SRC}/path-to-lib/test-lib.css`, inject: true, vendor: false},
    ];

    // Add packages (e.g. ng2-translate)
    // ng2-translate is already added with the advanced seed - here for example only
    let additionalPackages: ExtendPackages[] = [
    //   {
    //   name: 'ng-semantic',
    //   // Path to the package's bundle
    //   path: 'node_modules/ng-semantic/bundles/ng-semantic.js'
    // },
    {
      name: 'angular2-jwt',
      // Path to the package's bundle
      path: 'node_modules/angular2-jwt/angular2-jwt.js'
    },
    {
     name:'@angular/material',
     path:'node_modules/@angular/material/bundles/material.umd.js',
     packageMeta:{
       main: 'index.js',
       defaultExtension: 'js'
     }},
     {
       name: '@angular/flex-layout',
       path: 'node_modules/@angular/flex-layout/bundles/flex-layout.umd.js',
       packageMeta:{
       main: 'index.js',
       defaultExtension: 'js'
     }
   }];
    
    this.addPackagesBundles(additionalPackages);

    /* Add to or override NPM module configurations: */
    // this.mergeObject(this.PLUGIN_CONFIGS['browser-sync'], { ghostMode: false });
  }

}
