import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { ZamowieniaComponent } from './zamowienia/zamowienia.component';
import { NoweZamowienieComponent } from './nowe-zamowienie/nowe-zamowienie.component';

import { ClientRoutingModule } from './client-routing.module';

@NgModule({
	declarations: [
		ZamowieniaComponent,
		NoweZamowienieComponent
	],
	imports: [
		ClientRoutingModule,
		FormsModule,
		BrowserModule
	]
})

export class ClientModule {}