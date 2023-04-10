import { Component } from "@angular/core";


@Component({
    selector : 'app-login',
    templateUrl : './login.component.html',
    styleUrls : ['./login.component.scss']

})

export class LoginComponent {
    username = 'shalini';
    password = '';

    handleLogin=()=>{
        console.log(this.username);
        console.log('inside handleLogin');
    }
}