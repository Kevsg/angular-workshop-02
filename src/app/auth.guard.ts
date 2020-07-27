import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    // TODO :: Check authentication
    const param = route.params.name;
    if (!param) {
      return true;
    } else {
      // not logged in : redirect to login page
      this.router.navigate([`/login/${param}`]);
      return false;
    }
  }

}
