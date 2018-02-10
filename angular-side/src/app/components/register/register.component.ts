import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name : string;
  fullname : string;
  email : string;
  password : string;

  constructor() { }

  onRegister=()=>{
    console.log(this.name);
  }

  ngOnInit() {
  }

}
