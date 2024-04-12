import { Injectable } from '@angular/core';
import { CardWebService } from './dal/card-web-service.service';
import { MCard } from '../Model/card.models';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  private cardList:MCard[]=[];
  public cardObservable:  BehaviorSubject<MCard[]>= new BehaviorSubject<MCard[]>(this.cardList);
  constructor(private cardWebService:CardWebService) { }

  async getCard(){
    const card= await this.cardWebService.getCard()
    for(let c of card){
    this.cardList.push(card)
    }
    return this.cardList;
  }

  getCardById(id:number){
    return this.cardWebService.getCardById(id);
  }

  createCard(card:MCard){
    console.log(card)
    return this.cardWebService.createCard(card);
  }

  updateCard(card:MCard){
    return this.cardWebService.udapteCard(card);
  }

  deleteCard(id:number){
    return this.cardWebService.deleteCard(id);
  }
}
