import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const SessionGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const checkSession = ():any => {
    const token = localStorage.getItem('token');
    if(!token) {
      router.navigate(['/','auth']);
      return false;
    }
    return token;
  } 
  return checkSession();
};
