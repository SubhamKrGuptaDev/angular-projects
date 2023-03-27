import { Component } from '@angular/core';

@Component({
  selector: 'app-simpleform',
  templateUrl: './simpleform.component.html',
  styleUrls: ['./simpleform.component.css']
})
export class SimpleformComponent {
  userName:string = ''
  userEmail:string = ''
  userPassword:string = ''

  userDetails:boolean = false

  emailErrorMessage:string = ''
  passwordErrorMessage:string = ''

  onSubmitButton() {
    if(this.userName !== '' || this.userEmail !== '' ||this.userPassword !== '') {
      if(this.userEmail.endsWith("@gmail.com")) {
        if(this.userPassword.length >= 8) {
          this.emailErrorMessage = ''
          this.passwordErrorMessage = ''
          this.userDetails = true
        }
        else {
          this.emailErrorMessage = ''
           this.passwordErrorMessage = 'Password Should be more then 8 Character'
        }
      }
      else {
        this.passwordErrorMessage = ''
        this.emailErrorMessage = 'Email Should be add last "@gmail.com"'
      }
    }
  }

  onResetButton() {
    this.userName = ''
    this.userEmail = ''
    this.userPassword = ''

    this.userDetails = false

    this.emailErrorMessage = ''
    this.passwordErrorMessage = ''
  }

}
