import { Component } from '@angular/core';

// decoratore like annotation 
@Component({
  // seleziona app-root nell html 
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-way';
}
