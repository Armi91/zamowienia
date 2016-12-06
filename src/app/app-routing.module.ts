import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ClientComponent } from './client/client.component';


@NgModule({
  imports: [
    RouterModule.forRoot([
	    {
	    	path: '',
	    	redirectTo: '/user',
	    	// component: LoginComponent,
	    	pathMatch: 'full'
	    },
	    {
	    	path: 'login',
	    	component: LoginComponent
	    },
	    {
	    	path: 'user',
	    	component: ClientComponent
	    }
	])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
