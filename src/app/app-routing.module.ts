import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './core/auth-guard.service';


const routes: Routes = [
	{
		path: 'login',
		loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule),
	},
	{
		path: 'home',
		canActivate: [AuthGuardService],
		canLoad: [AuthGuardService],
		loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule),
	},
	{
		path: 'profile',
		canActivate: [AuthGuardService],
		canLoad: [AuthGuardService],
		loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule),
	},
	{
		path: '',
		redirectTo: '/login',
		pathMatch: 'full'
	},

];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
	],
	exports: [RouterModule]
})
export class AppRoutingModule { }
