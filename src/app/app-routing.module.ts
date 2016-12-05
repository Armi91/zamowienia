import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { IndywidualneComponent } from './indywidualne/indywidualne.component';
import { ZamowieniaComponent } from './zamowienia/zamowienia.component';
import { NoweZamowienieComponent } from './nowe-zamowienie/nowe-zamowienie.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
	    {
	    	path: '',
	    	// redirectTo: '/indywidualne',
	    	component: ZamowieniaComponent,
	    	pathMatch: 'full'
	    },
	    {
	    	path: 'indywidualne',
	    	component: IndywidualneComponent
	    },
	    {
	    	path: 'nowe-zamowienie/:type',
	    	component: NoweZamowienieComponent
	    }
	])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
