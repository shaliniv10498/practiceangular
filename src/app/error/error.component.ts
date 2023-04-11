import { Component } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent {
   errorMessage = 'An internal error has occurred. Contact Shalini Verma for support!';
}
