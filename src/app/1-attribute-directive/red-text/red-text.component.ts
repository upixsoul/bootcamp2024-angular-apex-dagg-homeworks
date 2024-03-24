import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-red-text',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './red-text.component.html',
  styleUrl: './red-text.component.scss'
})
export class RedTextComponent {
calculateStyles(): { [klass: string]: any; }|null|undefined {
  if(this.activeStyle)
  {
    return { 'color': 'red' };
  }
  else
  {
    return { };
  }
}
toggleStyleFunc() {
  this.activeStyle = !this.activeStyle;
}

toggleFunc() {
  this.active = !this.active;
}
  public active : boolean = false;
  public activeStyle : boolean = false;

}
