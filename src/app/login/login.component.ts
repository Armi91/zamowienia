import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// import { FormsModule } from '@angular/forms';

import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router) { }

  user: any;
  login: string;
  password: string;

  ngOnInit() {
  }

  onSubmit(login, password){
  	this.loginService.login(login, password).subscribe((result) => {
  		if (result){
  			this.router.navigate(['/user/zamowienia']);
  			// console.log(result);
  		}
  	});
  }

}
