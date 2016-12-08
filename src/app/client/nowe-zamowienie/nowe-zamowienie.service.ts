import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { ActivatedRoute } from '@angular/router';

import { NoweZamowienie } from './nowe-zamowienie';

import { NoweZamowienieComponent } from './nowe-zamowienie.component';

@Injectable()
export class NoweZamowienieService{

	sub: any;
	type: string;

  constructor(private http: Http, private route: ActivatedRoute) {
	  this.sub = this.route.params.subscribe(params => {
			this.type = params['type'];
		});
	 }


	saveOrder(noweZamowienie: any){
		console.log(noweZamowienie);
		const body = JSON.stringify(noweZamowienie);
		const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post('http://localhost:3000/user/nowe-zamowienie/' + this.type, body, {headers: headers});
	}

}
