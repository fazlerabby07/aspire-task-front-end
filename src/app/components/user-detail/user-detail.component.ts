import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { Organization, PullRequest, User } from 'src/app/interfaces/user';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
})
export class UserDetailComponent implements OnInit {
  organizationDisplayedColumns: string[] = ['position', 'login', 'avatar_url', 'link'];
  pullRequestDisplayedColumns: string[] = ['title', 'issue_url', 'repo_name', 'created_at', 'body'];
  
  organizationDataSource = new MatTableDataSource<Organization>;
  pullRequestDataSource = new MatTableDataSource<PullRequest>;

  constructor(private service: ApiService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) =>
      this.getUserByNickname(params['nickname'])
    );
    
  }

  user: User | undefined;

  getUserByNickname(nickname: string) {
    this.service
      .getUserByNickname(nickname)
      .subscribe((data: User) => {
        this.user = data;
        this.organizationDataSource = new MatTableDataSource(data.organizations)
        this.pullRequestDataSource = new MatTableDataSource(data.pullRequests);
      });
  }
  
}
