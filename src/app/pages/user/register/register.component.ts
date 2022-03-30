import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/providers/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
// userData: {
//   name: "",
//   age: null,
//   phone: "",
//   password: "",
//   gender: null,
//   email:" "
// }

phoneSpecialError = ""
  constructor(private _user:UserService) { }


  ngOnInit(): void {
  }
  registerUser(register: NgForm){
    // let pStatus = this.checkPhone(this.userData.phone)
    if(register.valid){
      this._user.registerUser(register.value).subscribe(
        data => console.log(data)
        )
    }
  }


}
