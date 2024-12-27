import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  imports: [NgIf],
  styleUrl: './pokemon.component.scss'
})
export class PokemonComponent implements OnInit {
  pokemon: any;
  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
  }

  getPokemon(name: string): void {
    this.pokemonService.getPokemon(name).subscribe(data => {
      this.pokemon = data;
    });
  }
}
