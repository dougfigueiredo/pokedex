import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PokemonComponent } from "./pokemon/pokemon.component";
import { GridPokemonComponent } from './grid-pokemon/grid-pokemon.component';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, GridPokemonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'pokedex';
}
