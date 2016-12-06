import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';

import { NoweZamowienieModule } from './nowe-zamowienie.module';

import { NoweZamowienie } from './nowe-zamowienie';

import { NoweZamowienieService } from './nowe-zamowienie.service';

@Component({
	// moduleId: module.id,
	selector: 'app-nowe-zamowienie',
	templateUrl: './nowe-zamowienie.component.html',
	styleUrls: ['./nowe-zamowienie.component.css'],
	providers: [NoweZamowienieService]
})
export class NoweZamowienieComponent implements OnInit {

	type: string;
	private sub: any;
	order: any;
	general: any;
	asortyment: any;
	marynarka: any;
	spodnie: any;
	kamizelka: any;

	// noweZamowienie: NoweZamowienie;

	constructor(private route: ActivatedRoute, private noweZamowienieService: NoweZamowienieService) { }

	ngOnInit() {
		this.sub = this.route.params.subscribe(params => {
			this.type = params['type'];
		})

		this.general = {};
		this.asortyment = {};
		this.marynarka = {};
		this.spodnie = {};
		this.kamizelka = {};



		this.order = {};
	}

	onSubmitForm(event){
		this.order = Object.assign({}, this.general, this.asortyment, this.marynarka, this.spodnie, this.kamizelka)

		this.noweZamowienieService.saveOrder(this.order)
			.subscribe(() => console.log('Success! --------'), error => console.error(error))

		// console.log(this.order)


	}



}
