import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from './models/pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private apiUrl = 'https://pokeapi.co/api/v2/pokemon/';

  constructor(private http: HttpClient) { }

  getPokemon(name: string): Observable<any> {
    return this.http.get(`${this.apiUrl}${name}`);
  }

  getFirst151Pokemons(): Observable<any> {
    return this.http.get(`${this.apiUrl}?limit=151`);
  }

  getPokemonDetails(url: string): Observable<Pokemon> {
    return this.http.get<Pokemon>(url);
  }
}

