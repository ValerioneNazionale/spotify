import { Component, OnInit } from '@angular/core';
import {Card} from "../../shared/models/Card";
import {CardStore} from "../../core/store/songStore";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cards:Card[]=[];


  constructor(private songStore:CardStore) { }

  ngOnInit(): void {
    this.cards = [...this.songStore.getCards()];
  }


}
