import { Component } from '@angular/core'; 
import { RouterOutlet } from '@angular/router';
import { RedTextComponent } from './1-attribute-directive/red-text/red-text.component';
import { MultipleListsConditionalComponent } from './2-structural-directive/multiple-lists-conditional/multiple-lists-conditional.component';
import { CustomDirectiveComponent } from './3-custom-directive/custom-directive/custom-directive.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RedTextComponent, MultipleListsConditionalComponent,CustomDirectiveComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'bootcamp2024-angular-apex-dagg-homeworks';
}
