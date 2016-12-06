import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import {Observable} from 'rxjs/Rx';
 import 'rxjs/add/operator/map';

@Injectable()

export class LoginService {
	private loggedIn = false;

	constructor(private http: Http){
		this.loggedIn = !!localStorage.getItem('auth_token');
	}

	login(username, password){
		let headers = new Headers();
		headers.append('Content-Type', 'application/json');

		return this.http
			.post(
				'/login',
				JSON.stringify({username, password}),
				{headers}
			)
			.map(res => res.json())
			.map((res) => {
				if (res.success){
					localStorage.setItem('auth_token', res.token);
					this.loggedIn = true;
				}

				return res.success;

			})
	}

	logout(){
		localStorage.removeItem('auth_token');
		this.loggedIn = false;
	}

	isLoggedIn(){
		return this.loggedIn;
	}
}