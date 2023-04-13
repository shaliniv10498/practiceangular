import { Component } from '@angular/core';

@Component({
  selector: 'app-listtodos',
  templateUrl: './listtodos.component.html',
  styleUrls: ['./listtodos.component.scss']
})
export class ListtodosComponent {
  todos = [
    {id : 1 , description : "Learn Angular"},
    {id : 2 , description : "Learn Elastic Search"},
    {id : 3 , description : "Learn Spring MVC"}
  ]
  
}
