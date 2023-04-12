import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector:'app-welcome',
    templateUrl : './welcome.component.html'
})
export class WelcomeComponent implements OnInit {
    message  = "Welcome to the welcome page";
    name = '';
    //INJECTING ACTIVATEDROUTE dependency to WelcomeComponent to accept path variable params;
    constructor(private route : ActivatedRoute){}
    ngOnInit(): void {
        this.name = this.route.snapshot.params['name'];
       // throw new Error("Method not implemented.");
    }

}