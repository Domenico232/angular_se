import { Component, ElementRef, ViewChild } from '@angular/core';

// decoratore like annotation 
@Component({
  // seleziona app-root nell html 
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //si genedare onInit e si puo utilizzare AfterViewInit
  @ViewChild("inputSaluti") valoreInput! : ElementRef
  
  colore = "purple"
  
  cambiaColore(color:string ) {
  this.colore = color
  }
  arrayPokemon = [
    {
      nome: "Pikachu",
      tipo: "Elettro",
      mosse: ["Tuonopugno", "Fulmine", "Rapidopugno"],
      image: "https://media.pokemoncentral.it/wiki/5/5e/Artwork0025_RFVF.png",
      disponibile : false
    },
    {
      nome: "Charizard",
      tipo: "Fuoco/Volante",
      mosse: ["Lancio Fiamme", "Zuffa", "Volo"],
      image: "https://media.pokemoncentral.it/wiki/4/48/Artwork0006_RFVF.png",
      disponibile : true
    },
    {
      nome: "Squirtle",
      tipo: "Acqua",
      mosse: ["Pistolacqua", "Guscioforte", "Idropompa"],
      image:"https://media.pokemoncentral.it/wiki/8/8d/Artwork0007_RFVF.png",
      disponibile : false
    },
    {
      nome: "Bulbasaur",
      tipo: "Erba/Veleno",
      mosse: ["Foglielama", "Raffica Semina", "Velenpuntura"],
      image:"https://media.pokemoncentral.it/wiki/9/9b/Artwork0001_RFVF.png",
      disponibile : true
    },
    {
      nome: "Jigglypuff",
      tipo: "Normale/Folletto",
      mosse: ["Canto", "Ipnosi", "Pugno"],
      image: "https://media.pokemoncentral.it/wiki/b/b5/Artwork0039_RFVF.png",
      disponibile : true
    }
  ];
  
  immaginepoke = "https://lorempokemon.fakerapi.it/pokemon/200"

  isVisible=true;

  title = 'angular-way';

  onInput = (e : Event) =>{
   this.title = (<HTMLInputElement>e.target).value
  }
  onClick = (e: Event) =>{
    console.log(this.valoreInput.nativeElement.value)
    this.arrayPokemon = [
      {
        nome: "Blastoise",
        tipo: "Acqua",
        mosse: ["Idropompa", "Guscioforte", "Turbofuoco"],
        image: "https://lorempokemon.fakerapi.it/pokemon/200",
        disponibile: false
      },
      {
        nome: "Mewtwo",
        tipo: "Psichico",
        mosse: ["Psichico", "Raggio Psichico", "Confusione"],
        image: "https://lorempokemon.fakerapi.it/pokemon/200",
        disponibile: true
      },
      {
        nome: "Gengar",
        tipo: "Spettro/Veleno",
        mosse: ["Ombra Notturna", "Pugnodombra", "Velenpuntura"],
        image: "https://lorempokemon.fakerapi.it/pokemon/200",
        disponibile: true
      },
      {
        nome: "Machamp",
        tipo: "Lotta",
        mosse: ["Dinamipugno", "Calcio Basso", "Terremoto"],
        image: "https://lorempokemon.fakerapi.it/pokemon/200",
        disponibile: false
      },
      {
        nome: "Dragonite",
        tipo: "Drago/Volante",
        mosse: ["Dragartigli", "Iper Raggio", "Tuononda"],
        image: "https://lorempokemon.fakerapi.it/pokemon/200",
        disponibile: true
      }
    ];

    
  }
onDataRecived(value: string){
  console.log(value)
}
}
