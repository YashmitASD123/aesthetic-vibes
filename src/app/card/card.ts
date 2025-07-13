import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.css'
})
export class Card {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() image: string = '';
  @Input() price: number = 0;
}
