import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { from } from 'rxjs';
import { RepositoryService } from 'src/app/apis/repository.service';
import {Repository} from '../../models/repository.model';
// import {Contributor} from '../../models/repository.model';

@Component({
  selector: 'app-repo-list',
  templateUrl: './repo-list.component.html',
  styleUrls: ['./repo-list.component.css']
})
export class RepoListComponent implements OnInit {


  // ngOnInit(): void {
  // }
  public displayedColumns = ['Full Name', 'Contributions', 'Followers', 'Following', 'User Type', 'delete'
];
  public dataSource = new MatTableDataSource<Repository>();
  constructor(private repoService: RepositoryService) { }
  ngOnInit() {
    this.getContributors();
  }
  public getContributors = () => {
    this.repoService.getData('repositories?since=364')
    .subscribe(res => {
      this.dataSource.data = res as Repository[];
    })
  }
  public redirectToDetails = (id: string) => {

  }
  public redirectToUpdate = (id: string) => {

  }
  public redirectToDelete = (id: string) => {

  }
}
