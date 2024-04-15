import { HttpClient, HttpResponse} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
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

  cardToUpdate: MCard = {
    id: "",
    name: "",
    value: 0
  };

  newCardForm= new FormGroup({
    cardName: new FormControl('',Validators.required),
    cardValue: new FormControl(0,Validators.required),
  });

  cardForm = new FormGroup({
    cardName: new FormControl('',Validators.required),
    cardValue: new FormControl(0,Validators.required),
  });

  ngOnInit() {
    this.fetchCards();
  }

  setUpdateCarte(card:MCard){
    this.changeDisplay("cardForm");

    this.cardForm.patchValue({
      cardName: card.name,
      cardValue: card.value
    });

    this.cardToUpdate=card;
  }
  
  getUpdateCard(){
    return this.cardToUpdate;
  }

  deleteCard(card:MCard){
    //this.cards = this.cards.filter(c => c.id !== card.id);
    this.http.delete(`http://localhost:3000/api/cards/${card.id}`).subscribe(()=> {
      try {
        this.cardService.deleteCard(parseInt(card.id!));
        this.fetchCards();
      } catch (error) {
        console.log(error);
      }
    })
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

  updateForm() {
    const updateCard = {
      id:this.getUpdateCard().id,
      name:this.cardForm.value.cardName?this.cardForm.value.cardName:this.getUpdateCard().name,
      value:this.cardForm.value.cardValue?this.cardForm.value.cardValue:this.getUpdateCard().value
    }
    this.http.post<any>(`http://localhost:3000/api/cards/${updateCard.id}`,updateCard).subscribe((response:HttpResponse<any>)=> {
      try {
        if (response)
          this.cardService.updateCard(updateCard);
          this.fetchCards();
          alert("Votre carte a ete mis a jour");
          console.log("cardToUpdate ",updateCard)
      } catch (error) {
        console.log(error);
      }
    })
  }

  createCard(){
    this.changeDisplay("newCardForm")
    this.http.put<any>(`http://localhost:3000/api/cards`,this.newCardForm.value).subscribe((card:MCard[])=> {
      try {
        this.cardToUpdate={
          id:"",
          name: this.newCardForm.value.cardName!,
          value: this.newCardForm.value.cardValue!
        }
        this.cardService.createCard(this.cardToUpdate);
        this.fetchCards();
      } catch (error) {
        console.log(error);
      }
    })
  }

  changeDisplay(formType: string) {
    const form=document.getElementById(formType);
    if (form)
      form.style.display = form.style.display === "none" ? "flex" : "none";
  }

  cancel(formType: FormGroup){
    formType.patchValue({
      cardName: "",
      cardValue: 0
    });
  }
}
