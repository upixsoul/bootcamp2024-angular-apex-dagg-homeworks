import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-multiple-lists-conditional',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './multiple-lists-conditional.component.html',
  styleUrl: './multiple-lists-conditional.component.scss'
})
export class MultipleListsConditionalComponent {
  public myArray: Array<string> = ["A", "B", "C"];

}
