import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/providers/services/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

loginForm = new FormGroup({
  email: new FormControl('hadeer1@test.com'),
  password: new FormControl('123456')
})
  _router: any;

get email() {return this.loginForm.get('email')}
get password() {return this.loginForm.get('password')}
  constructor(private _user:UserService, _router:Router) { }

  ngOnInit(): void {
  }
login(){
  this._user.loginUser(this.loginForm.value).subscribe(
    res => {
      localStorage.setItem('appToken',res.data.token)
    },
    (e)=>{},
    ()=>{
      this._router.navigate('user/all')
    }
  )
}


}
