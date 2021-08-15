import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PreAuthLayoutComponent } from './layouts/pre-auth-layout/pre-auth-layout.component';
import { PostAuthLayoutComponent } from './layouts/post-auth-layout/post-auth-layout.component';
import { APP_ROUTES, PRE_AUTH_ROUTES, POST_AUTH_ROUTES } from './shared/routes';
import { AuthGuard } from './shared/guards';

const routes: Routes = [
	{ 
		path: APP_ROUTES.root, 
		redirectTo: APP_ROUTES.login, 
		pathMatch: 'full' 
	},
    { 
    	path: APP_ROUTES.root, 
    	component: PreAuthLayoutComponent,
    	data: { title: 'Pre Auth Views' }, 
    	children: PRE_AUTH_ROUTES 
    },
	{ 
		path: APP_ROUTES.root, 
		component: PostAuthLayoutComponent, 
		data: { title: 'Post Auth Views' }, 
		children: POST_AUTH_ROUTES, 
		canActivate: [AuthGuard]
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})

export class AppRoutingModule { }