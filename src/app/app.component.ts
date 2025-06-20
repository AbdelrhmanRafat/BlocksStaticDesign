import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router'; // Ensure this is present

@Component({
  selector: 'app-root',
  standalone: true, // Assuming it is standalone
  imports: [RouterOutlet], // RouterOutlet for the main app routing
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'BlocksStaticDesign'; // This can remain or be removed
}
