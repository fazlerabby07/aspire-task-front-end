import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { User } from 'src/app/interfaces/user';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {
  displayedColumns: string[] = ['nickname', 'githubProfile', 'action'];
  dataSource = new MatTableDataSource<User>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private service: ApiService) {}

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers() {
    this.service.getAllUsers().subscribe((data:User[]) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    } );
  }

}
