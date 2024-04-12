import { HttpClient, HttpResponse} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MCard } from 'src/app/Model/card.models';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit{
  constructor(private http: HttpClient,) { }
  cards: MCard[] = [];

  ngOnInit() {
    this.fetchCards();
  }

  fetchCards(){
    this.http.get<any>(`http://localhost:3000/api/cards`).subscribe((card:MCard[])=> {
      try {
        this.cards = card;
      } catch (error) {
        console.log(error);
      }
    })
  }
}
