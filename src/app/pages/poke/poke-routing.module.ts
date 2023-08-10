import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PokePage } from './poke.page';

const routes: Routes = [
  {
    path: '',
    component: PokePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PokePageRoutingModule {}
