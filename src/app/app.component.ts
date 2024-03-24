import { Component } from '@angular/core'; 
import { RouterOutlet } from '@angular/router';
import { RedTextComponent } from './1-attribute-directive/red-text/red-text.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RedTextComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'bootcamp2024-angular-apex-dagg-homeworks';
}
