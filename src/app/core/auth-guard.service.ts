import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { AuthService } from 'ionic-appauth';
import { Observable } from 'rxjs';
import { filter, switchMap, tap } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

	constructor(
		private auth: AuthService,
		private router: Router,

		) { }

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
		return this.auth.initComplete$.pipe(
			filter(complete => complete),
			switchMap(() => this.auth.isAuthenticated$),
			tap(isAuthenticated => {
			if(!isAuthenticated) {
			console.log('AuthGuardService.canActivate: isAuthenticated: ' + isAuthenticated);
					this.router.navigate(['/login']);
			
				}
			}),
		);
	}

	// public async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
	//	 
	// }
}
