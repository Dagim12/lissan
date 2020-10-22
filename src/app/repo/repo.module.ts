import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RepoListComponent } from './repo-list/repo-list.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
const routes: Routes = [
  { path: 'repositories', component: RepoListComponent }
];

@NgModule({
  imports: [
    CommonModule,
    MatTabsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule,
    RepoListComponent,
    MatTabsModule,
    MatToolbarModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule,
  ],
  declarations: [RepoListComponent]
})
export class RepoModule { }
