import { Component } from '@angular/core';
import { ModelloTipo } from '../models/tipi';
import transition  from '../json/transactions.json';

@Component({
  selector: 'app-lista-transizioni',
  templateUrl: './lista-transizioni.component.html',
  styleUrl: './lista-transizioni.component.css'
})
export class ListaTransizioniComponent {
     listaIntera:ModelloTipo[]=transition
}


