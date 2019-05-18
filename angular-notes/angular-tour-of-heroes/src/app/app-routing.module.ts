import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { CommonModule } from '@angular/common';

import { HeroesComponent } from './heroes/heroes.component';

const routes: Routes = [
  { path: 'heroes', component: HeroesComponent }
  // ,
  // { path: '', component: HeroesComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
    // CommonModule ,
  ],
  exports: [
    RouterModule
  ]
  // declarations: []
})
export class AppRoutingModule {
}
