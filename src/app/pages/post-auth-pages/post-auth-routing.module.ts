import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from './home/home.component';
import { APP_ROUTES } from "../../shared/routes";

const routes: Routes = [
	{
		path: APP_ROUTES.home,
		component: HomeComponent,
		data: {
			title: "Home",
		},
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})

export class PostAuthRoutingModule { }