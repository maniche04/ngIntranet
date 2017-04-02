import { LandingComponent } from './landing.component';
import { AuthGuard, LoginComponent } from '../../shared/auth/index';

import { HomeRoutes } from '../home/home.routes';
import { AboutRoutes } from '../about/about.routes';

export const LandingRoutes: Array<any> = [
  {
    path: '',
    component: LandingComponent,
    children: [
        ...AboutRoutes,
        ...HomeRoutes,
    ],
    canActivate: [AuthGuard],
  }, 
  {
    path: 'login',
    component: LoginComponent,
  }
  
];
