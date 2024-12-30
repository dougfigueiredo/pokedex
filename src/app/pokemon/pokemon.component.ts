import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { NgIf } from '@angular/common';
import { Pokemon } from '../models/pokemon.model';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  imports: [NgIf],
  styleUrl: './pokemon.component.scss'
})
export class PokemonComponent implements OnInit {
  pokemon!: Pokemon;
  pokemonType: string[] = [];
  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
  }

  getPokemon(name: string): void {
    this.pokemonService.getPokemon(name).subscribe(data => {
      this.pokemon = data;
      this.getPokemonType();
    });
  }

  getPokemonType(): void {
    this.pokemonType = [];
    this.pokemon.types.forEach((type: any) => {
      this.pokemonType.push(type.type.name);
    })
  }
}
