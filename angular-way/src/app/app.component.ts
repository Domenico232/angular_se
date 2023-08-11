import { Component } from '@angular/core';

// decoratore like annotation 
@Component({
  // seleziona app-root nell html 
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  arrayPokemon = [
    {
      nome: "Pikachu",
      tipo: "Elettro",
      mosse: ["Tuonopugno", "Fulmine", "Rapidopugno"],
      image: "https://media.pokemoncentral.it/wiki/5/5e/Artwork0025_RFVF.png"
    },
    {
      nome: "Charizard",
      tipo: "Fuoco/Volante",
      mosse: ["Lancio Fiamme", "Zuffa", "Volo"],
      image: "https://media.pokemoncentral.it/wiki/4/48/Artwork0006_RFVF.png"
    },
    {
      nome: "Squirtle",
      tipo: "Acqua",
      mosse: ["Pistolacqua", "Guscioforte", "Idropompa"],
      image:"https://media.pokemoncentral.it/wiki/8/8d/Artwork0007_RFVF.png"
    },
    {
      nome: "Bulbasaur",
      tipo: "Erba/Veleno",
      mosse: ["Foglielama", "Raffica Semina", "Velenpuntura"],
      image:"https://media.pokemoncentral.it/wiki/9/9b/Artwork0001_RFVF.png"
    },
    {
      nome: "Jigglypuff",
      tipo: "Normale/Folletto",
      mosse: ["Canto", "Ipnosi", "Pugno"],
      image: "https://media.pokemoncentral.it/wiki/b/b5/Artwork0039_RFVF.png"
    }
  ];
  
  immaginepoke = "https://lorempokemon.fakerapi.it/pokemon/200"

  isVisible=true;

  title = 'angular-way';

  onInput = (e : Event) =>{
   this.title = (<HTMLInputElement>e.target).value
  }
  onClick = (e: Event) =>{
    this.isVisible = !this.isVisible;
   this.title = "EZBUTTON"
  }

}
