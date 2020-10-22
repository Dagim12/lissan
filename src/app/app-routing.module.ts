import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { RepoListComponent } from './repo/repo-list/repo-list.component';


const routes: Routes = [
  // { path: 'repositories', component: RepoListComponent},
  // { path: 'repoDetail', loadChildren: () => import('./repo/owner.module').then(m => m.OwnerModule) },
  { path: '', redirectTo: '/repositories', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
