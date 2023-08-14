import { Component,EventEmitter,Input,OnChanges,OnInit, Output, SimpleChanges } from '@angular/core';

interface Pokemon{
      nome: String
      tipo: String
      mosse: Array<string>
      image: String
      disponibile:Boolean
}

@Component({
  selector: 'app-prova',
  templateUrl: './prova.component.html',
  styleUrls: ['./prova.component.css']
})
export class ProvaComponent implements OnInit, OnChanges{
@Input() data:Array<Pokemon> = [];
@Output() datiInviatiParent = new EventEmitter<string>()
cani = [{
  nome : "jesus",
  razza : "doggo",
  description : "broken doggo"
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
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
  }

  ngOnInit(): void {
    console.log(this.data)
    setInterval(()=>{
    this.isDisabled = !this.isDisabled

      if (this.isDisabled) {
        this.immagine = this.immagineSwap

      }else{

        this.immagine = this.immagineswap1
      }
    }, 2000)
  }
mandaDati(){
  this.datiInviatiParent.emit(this.cani[0].nome)
}

}
