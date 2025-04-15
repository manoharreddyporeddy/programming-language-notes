import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListEmployeeComponent } from '../employee/list-employee/list-employee.component';
import { CreateEmployeeComponent } from '../employee/create-employee/create-employee.component';


const appRoutes: Routes = [
  { path: 'empcreate', component: CreateEmployeeComponent },
  { path: 'emplist', component: ListEmployeeComponent },
  // { path: 'heroes', component: HeroListComponent, data: { title: 'Heroes List' } },
  // { path: '**', component: PageNotFoundComponent },
  { path: '', redirectTo: '/emplist', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
    // CommonModule
  ],
  // declarations: [],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
