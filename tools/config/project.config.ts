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
      // {src: '@angular/material/core/theming/prebuilt/indigo-pink.css', inject: true},
      {src: 'jquery/dist/jquery.min.js', inject: 'libs'},
      {src: '@webcomponents/custom-elements/custom-elements.min.js', inject: 'libs'},
      {src: 'clarity-icons/clarity-icons.min.js', inject: 'libs'},
      // {src: 'semantic-ui/dist/semantic.min.js', inject: 'libs'},
      // {src: 'semantic-ui/dist/semantic.min.css', inject: true}
      {src: 'clarity-icons/clarity-icons.min.css', inject: true},
      {src: 'clarity-ui/clarity-ui.min.css', inject: true}
    ];

    // Add `local` third-party libraries to be injected/bundled.
    this.APP_ASSETS = [
      ...this.APP_ASSETS,
      // {src: `${this.APP_SRC}/your-path-to-lib/libs/jquery-ui.js`, inject: true, vendor: false}
      // {src: `${this.CSS_SRC}/path-to-lib/test-lib.css`, inject: true, vendor: false},
    ];

    // Add packages (e.g. ng2-translate)
    // ng2-translate is already added with the advanced seed - here for example only
    let additionalPackages: ExtendPackages[] = [{
      name: 'ng-semantic',
      // Path to the package's bundle
      path: 'node_modules/ng-semantic/bundles/ng-semantic.js'
    },
    {
      name: 'clarity-angular',
      // Path to the package's bundle
      path: 'node_modules/clarity-angular/clarity-angular.umd.js'
    },
    // {
    //   name: '@ng-bootstrap/ng-bootstrap',
    //   path: 'node_modules/@ng-bootstrap/ng-bootstrap/bundles/ng-bootstrap.js'
    // },
    {
     name:'@angular/material',
     path:'node_modules/@angular/material/bundles/material.umd.js',
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
