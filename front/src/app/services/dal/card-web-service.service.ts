import { Injectable } from '@angular/core';
import { MCard } from 'src/app/Model/card.models';

@Injectable({
  providedIn: 'root'
})
export class CardWebService {

  constructor() { }

  async getCard(){
    const response = await fetch("http://localhost:3000/api/cards");
    return response.json();
  }

  async getCardById(cardId: number){
    const response = await fetch(`http://localhost:3000/api/cards/${cardId}`);
    return response.json();
  }

  async createCard(card: MCard){
    const response = await fetch(`http://localhost:3000/api/cards`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(card)
    });
    return response.json();
  }

  async udapteCard(card: MCard){
    const response = await fetch(`http://localhost:3000/api/cards/${card.id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(card)
    });
    return response.json();
  }

  async deleteCard(cardId: number){
    const response = await fetch(`http://localhost:3000/api/cards/${cardId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(cardId)
    });
    return response.json();
  }
}

