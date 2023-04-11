import { Component } from "@angular/core";


@Component({
    selector : 'app-login',
    templateUrl : './login.component.html',
    styleUrls : ['./login.component.scss']

})

export class LoginComponent {
    username = 'shalini';
    password = '';
    errorMessage = 'Invalid Credentials';
    inValidLogin = false;

    handleLogin=()=>{
        if(this.username == 'shalini' && this.password == 'shalini'){
            this.inValidLogin=false;
        }
        else{
            this.inValidLogin=true;
        }
        console.log(this.username);
        console.log('inside handleLogin');
    }
}