import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
// import { CommonModule } from '@angular/common';

import { DashboardComponent } from "./dashboard/dashboard.component";
import { HeroesComponent } from "./heroes/heroes.component";
import { HeroDetailComponent } from "./hero-detail/hero-detail.component";

const routes: Routes = [
  { path: "", redirectTo: "/dashboard", pathMatch: "full" },
  // { path: '', component: HeroesComponent }
  { path: "dashboard", component: DashboardComponent },
  { path: "heroes", component: HeroesComponent },
  { path: "detail/:id", component: HeroDetailComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
    // CommonModule ,
  ],
  exports: [RouterModule]
  // declarations: []
})
export class AppRoutingModule {}
