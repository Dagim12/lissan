import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { from } from 'rxjs';
import { RepositoryService } from 'src/app/apis/repository.service';
import {Repository} from '../../models/repository.model';
// import {Contributor} from '../../models/repository.model';
import { Contributor } from 'src/app/models/contributor.model';

@Component({
  selector: 'app-repo-list',
  templateUrl: './repo-list.component.html',
  styleUrls: ['./repo-list.component.css']
})
export class RepoListComponent implements OnInit {


  // ngOnInit(): void {
  // }
  list: Array<any>;
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
      title: 'Public Repos',
      compare: (a: any, b: any) => a.detail.public_repos - b.detail.public_repos,
      priority: 1
    },
    {
      title: 'Followers',
      compare: (a: any, b: any) => a.detail.followers - b.detail.followers,
      priority: 2
    },
    {
      title: 'Gists',
      compare: (a: any, b: any) => a.detail.public_gists - b.detail.public_gists,
      priority: 1
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
  public  getContributors = () => {
    this.repoService.getData('repos/angular/angular/contributors?since=364')
    .subscribe(res => {
      this.contributors = res as Contributor[];
      this.contributors.forEach((obj, index) => {
        this.repoService.getData("users/"+ obj.login)
          .subscribe(r=> {
            obj.detail = r;
          });
        // this.getRequestCount(obj.repos_url).then(value => {
        //   console.log(`promise result: ${value}`);
        // });
        console.log(obj.login,obj.detail);
      });
    });
  }
  async getRequestCount(url): Promise<any> {

    this.repoService.getFromUri(url)
    .subscribe(res => {
      this.list = res as any[];
      return this.list;
    });
    // return this.list.length;
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
