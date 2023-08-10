import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {
  private url: String = "//pokeapi.co/api/v2/pokemon/";
  constructor(private http: HttpClient) { }

  listar(nome: any): Observable<any> {
    return this.http.get(`${this.url}` + nome);
 }

 lista_poke(nome: any) {
  return this.http.get(`${this.url}` + nome);
 }
}
