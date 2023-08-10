import { PokeApiService } from 'src/service/poke-api.service';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-poke',
  templateUrl: './poke.page.html',
  styleUrls: ['./poke.page.scss'],
})
export class PokePage implements OnInit {

  public folder!: string;
  private activatedRoute = inject(ActivatedRoute);

  public poke: any;
  public nome: any = "";

  public atualizacao: number = 0;

  constructor(private api: PokeApiService) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.listar();
  }

  listar() {
    this.api.lista_poke(this.nome).subscribe((e) => {
      this.poke = e;
      console.log(e);
    }, err => {
      console.log(err);
    })
  }

  atualizar() {
    this.atualizacao++;
    this.listar();
  }

}
