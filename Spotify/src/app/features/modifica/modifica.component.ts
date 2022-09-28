import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Card} from "../../shared/models/Card";
import {CardStore} from "../../core/store/songStore";
import {Router} from "@angular/router";



@Component({
  selector: 'app-modifica',
  templateUrl: './modifica.component.html',
  styleUrls: ['./modifica.component.css']
})
export class ModificaComponent implements OnInit {

  @Input() listaCard:any={};


  formABC: FormGroup = new FormGroup({})

  cards: Card[] = [];
  tempId: number = 3;
 // @Output()addEmitter: EventEmitter<Card> = new EventEmitter<Card>();
  //@Output()editEmitter:EventEmitter<Card> = new EventEmitter<Card>();

  constructor(private fb: FormBuilder,private songStore:CardStore,private router:Router) {
  }

  ngOnInit(): void {
    this.cards = [...this.songStore.getCards()];
    this.formABC = new FormGroup({
      id: new FormControl('', [
        Validators.required
      ]),
      titolo: new FormControl('', [
        Validators.required
      ]),
      autore: new FormControl('', [
        Validators.max(10)
      ]),
      categoria: new FormControl('', [
        Validators.required
      ])
    })
    }
    addCard() {
     let card=this.formABC.value
      this.tempId++;
      card.id = this.tempId
      this.cards.push(card);
      this.songStore.setCards(this.cards);
      this.router.navigateByUrl('home');
  }

  updateCard(){
      let card=this.formABC.value
      const index = this.cards.findIndex(u => u.id === card.id);
      this.cards[index] = card;
      this.songStore.setCards(this.cards);
      this.router.navigateByUrl('home')
    }




  resetForm() {
    this.formABC?.reset();
  }
}
