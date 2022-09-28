import {Card} from "../../shared/models/Card";


import {Injectable} from "@angular/core";

const LISTACARD:Card[]=[
  {
    id:1,
    titolo:'Lucid Dreams',
    autore:'Juice World',
    categoria:'Pop'
  },
  {
    id:2,
    titolo:'Tanto lo sai che ci penso',
    autore:'Gemitaiz',
    categoria:'Rap'
  },
  {
    id:3,
    titolo:'Solo per te',
    autore:'Negramaro',
    categoria:'Leggera',
  }
]
@Injectable({
  providedIn: 'root'
})
export class CardStore {
  private cards: Card[] = LISTACARD ;
  getCards(): Card[] {
    return this.cards;
  }
  setCards(elementArray: Card[]): void {
    this.cards = elementArray;
  }
  getById(id: number): Card | undefined {
    return this.cards.find(u => u.id == id);
  }
}
