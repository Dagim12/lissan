import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RepoListComponent } from '../repo/repo-list/repo-list.component';

const routes: Routes = [
  { path: 'home', component: RepoListComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }
