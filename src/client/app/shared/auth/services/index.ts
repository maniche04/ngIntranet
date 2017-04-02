import { Auth } from './auth.service';
import { AuthGuard } from '../guards/auth-guard.service';

export const AUTH_PROVIDERS: any[] = [
  Auth,AuthGuard
];

export * from './auth.service';
export * from '../guards/auth-guard.service';
