import { Component, Input } from '@angular/core';
import { ModelloTipo } from '../models/tipi';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrl: './items.component.css'
})
export class ItemsComponent {
@Input()
transazioneInput?:ModelloTipo;
}
