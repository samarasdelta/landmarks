import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';  // Import FormsModule for ngModel

@Component({
  selector: 'app-root',
  standalone: true, // Mark this as a standalone component
  imports: [RouterModule, FormsModule], // Import RouterModule and FormsModule
  template: `    
    <router-outlet></router-outlet>
  `
})
export class AppComponent {}
