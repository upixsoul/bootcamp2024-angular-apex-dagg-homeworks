import { Component } from '@angular/core';
import { CustomDirective } from '../custom.directive';

@Component({
  selector: 'app-custom-directive',
  standalone: true,
  imports: [CustomDirective],
  templateUrl: './custom-directive.component.html',
  styleUrl: './custom-directive.component.scss'
})
export class CustomDirectiveComponent {

}
