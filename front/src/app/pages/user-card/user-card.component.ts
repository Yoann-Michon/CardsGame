import { HttpClient} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MCard } from 'src/app/Model/card.models';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit{
  constructor(private http: HttpClient, private cardService:CardService) { }
  cards: MCard[] = [];

  ngOnInit() {
    this.fetchCards();
  }

  updateCard(id:number){}

  deleteCard(card:MCard){
    const newList=this.cards;
    this.cards = this.cards.filter(c => c.id !== card.id);

    /* supprime les cartes de la base
    this.http.delete(`http://localhost:3000/api/cards/${card.id}`).subscribe(()=> {
      try {
        this.cardService.deleteCard(parseInt(card.id!));
        this.fetchCards();
      } catch (error) {
        console.log(error);
      }
    })*/
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
