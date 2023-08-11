import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-prova',
  templateUrl: './prova.component.html',
  styleUrls: ['./prova.component.css']
})
export class ProvaComponent implements OnInit{

cani = [{
  nome : "jesus",
  razza : "doggo",
  description : "broken doggo"
},
{
  nome : "Volcarona",
  razza : "BigDoggo",
  description : "gigadrain, Lanciafiamme"
},{
  nome : "Raichu",
  razza : "Elettro",
  description : "Fulmine, Codacciaio"
},{
  nome : "Gyrados",
  razza : "Acqua/Volante",
  description : "Surf, Acquagetto, Danzaspada"
}]
immagine = "https://lorempokemon.fakerapi.it/pokemon/200";
immagineswap1 = "https://lorempokemon.fakerapi.it/pokemon/200";
immagineSwap= "https://lorempokemon.fakerapi.it/pokemon";

isDisabled=true

change = () =>{
  this.isDisabled = !this.isDisabled
}
 
    constructor() {
      console.log("Constructor")

    }

  ngOnInit(): void {
    console.log("ngOnInit")
    setInterval(()=>{
    this.isDisabled = !this.isDisabled

      if (this.isDisabled) {
        this.immagine = this.immagineSwap

      }else{

        this.immagine = this.immagineswap1
      }
    }, 2000)
  }
}
