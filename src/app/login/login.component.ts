import { Component } from "@angular/core";
import { Router } from "@angular/router";


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

    constructor(private router:Router){} //dependency injection & router variable becomes available as member variable
    // private ensures router variable is not used outside this class
    handleLogin=()=>{
        if(this.username == 'shalini' && this.password == 'shalini'){
            //redirect to welcome page
            this.router.navigate(['welcome',this.username]); //the second param will go as path variable
            this.inValidLogin=false;
        }
        else{
            this.inValidLogin=true;
        }
        console.log(this.username);
        console.log('inside handleLogin');
    }
}