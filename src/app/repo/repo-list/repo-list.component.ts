import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { from } from 'rxjs';
import { RepositoryService } from 'src/app/apis/repository.service';
import {Repository} from '../../models/repository.model';
// import {Contributor} from '../../models/repository.model';
import { Contributor } from 'src/app/models/contributor.model';
import { NzTableModule } from 'ng-zorro-antd/table';

@Component({
  selector: 'app-repo-list',
  templateUrl: './repo-list.component.html',
  styleUrls: ['./repo-list.component.css']
})
export class RepoListComponent implements OnInit {


  // ngOnInit(): void {
  // }
  listOfColumn = [
    {
      title: 'User Name',
      compare: null,
      priority: false
    },
    {
      title: 'Contributions',
      compare: (a: Contributor, b: Contributor) => a.contributions - b.contributions,
      priority: 3
    },
    {
      title: 'Followers',
      compare: (a: any, b: any) => a.followers_url - b.followers_url,
      priority: 2
    },
    {
      title: 'Profile',
      // compare: (a: DataItem, b: DataItem) => a.english - b.english,
      priority: 1
    }
  ];
  public displayedColumns = ['FullName', 'Contributions', 'Followers', 'Following', 'UserType', 'Detail'];
  public dataSource = new MatTableDataSource<Repository>();
  contributors: Contributor[];
  constructor(private repoService: RepositoryService) { }
  ngOnInit() {
    this.getContributors();
    // this.getRepositories();
  }
  public getContributors = () => {
    this.repoService.getData('repos/angular/angular/contributors?since=364')
    .subscribe(res => {
      this.contributors = res as Contributor[];
    })
  }

  public getRepositories = () => {
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
