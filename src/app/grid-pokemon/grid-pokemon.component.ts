import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonService } from '../pokemon.service';
import { Pokemon } from '../models/pokemon.model';

@Component({
  selector: 'app-grid-pokemon',
  imports: [CommonModule],
  templateUrl: './grid-pokemon.component.html',
  styleUrl: './grid-pokemon.component.scss'
})
export class GridPokemonComponent implements OnInit {

  pokemonService = inject(PokemonService);

  results: { name: string, url: string }[] = []
  pokemonList: Pokemon[] = []

  ngOnInit(): void {
    this.getFirstsPokemons();
  }

  getFirstsPokemons(): void {
    this.pokemonService.getFirst151Pokemons()
      .subscribe(data => {
        console.log(data);
        this.results = data.results;
        this.getPokemonDetails();
      })
  }

  getPokemonDetails(): void {
    this.results.forEach((data) => {
      console.log(data);
      this.pokemonService.getPokemonDetails(data.url).subscribe(data => {
        this.pokemonList.push(data);
      })
    })
  }
}
