import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { NoweZamowienie } from './nowe-zamowienie';

import { NoweZamowienieComponent } from './nowe-zamowienie.component';

@Injectable()
export class NoweZamowienieService {

  constructor(private http: Http) { }

	saveOrder(noweZamowienie: NoweZamowienie){
		console.log(noweZamowienie);
		const body = JSON.stringify(noweZamowienie);
		const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post('http://localhost:3000/nowe-zamowienie/garnitur', body, {headers: headers});
	}

}
