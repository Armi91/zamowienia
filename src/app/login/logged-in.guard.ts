import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

import { LoginService } from './login.service';

@Injectable()

export class LoggedInGuard implements CanActivate{
	constructor(private router: Router, private user: LoginService){}

	canActivate(){

		if(this.user.isLoggedIn()){
			return true;
		} else{
			this.router.navigate(['/login']);
			return false;
		}

	}
}