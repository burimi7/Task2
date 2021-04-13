import { Component } from '@angular/core';

import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import '@fortawesome/fontawesome-free/js/all.js';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  registerForm: FormGroup;
    submitted = false;

    profileForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required])
  });

  title = 'task2';
  hero={
    name:''
  }
  emailisValid=true;

  passwordlength=false;
  passwordnumber=false;
  passwordspecial=false;
  passwordspaces=false;
  passwordfirstlast=false;

  NewUser={
    firstname:'',
    lastname:'',
    email:'',
    address:'',
password:'',
passwordconfirmation:''
  }

  validateEmail($event) {
    const regularExpression = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    this.emailisValid = regularExpression.test($event.target.value);
    console.log($event.target.value+': '+this.emailisValid)
   }

   PasswordRequirements($event){
     console.log($event.target.value.includes(this.NewUser.firstname) )
     //min 10 characters
     if(this.NewUser.password.length<=10){this.passwordlength=false;}else{this.passwordlength=true}
     if(new RegExp("[0-9]+").test($event.target.value)){this.passwordnumber=true}else{this.passwordnumber=false}
     var specialcharacter = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]{3}/;
     if( specialcharacter.test($event.target.value) ){this.passwordspecial=true} else {this.passwordspecial=false}
var spaces="\\s+"
     if(new RegExp(spaces).test($event.target.value)){this.passwordspaces=false} else { this.passwordspaces=true}
if( $event.target.value.includes(this.NewUser.firstname) || $event.target.value.includes(this.NewUser.lastname) ) {this.passwordfirstlast=true} else {this.passwordfirstlast=false}
   }

   


}
