import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PokePageRoutingModule } from './poke-routing.module';

import { PokePage } from './poke.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PokePageRoutingModule
  ],
  declarations: [PokePage]
})
export class PokePageModule {}
