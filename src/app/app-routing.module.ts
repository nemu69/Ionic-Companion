import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './core/auth-guard.service';


const routes: Routes = [
	//{ path: '**', redirectTo: 'login' },
	{
		path: '',
		redirectTo: 'home',
		pathMatch: 'full'
	},
	{
		path: 'login',
		loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule),
	},
	{
		path: 'home',
		canActivate: [AuthGuardService],
		loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule),
	},
	{
		path: 'profile',
		canActivate: [AuthGuardService],
		loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule),
	},
	{ path: 'callback',
		loadChildren: () => import('./auth/auth-callback/auth-callback.module').then(m => m.AuthCallbackPageModule),
	},
	{ path: 'endsession',
		loadChildren: () => import('./auth/end-session/end-session.module').then(m => m.EndSessionPageModule),
	},

];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
	],
	exports: [RouterModule]
})
export class AppRoutingModule { }
