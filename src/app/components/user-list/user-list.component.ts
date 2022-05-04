import { UserService } from './../../services/user.service';
import { User } from './../../models/User';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  dataSource = new MatTableDataSource<User>([]);
  find = ''
  displayedColumns: string[]= [
    'id',
    'username',
    'name',
    'last_name',
    'id_type',
    'birthdate',
    'email',
    'created_at',
    'updated_at',
    'options'
  ]
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator | null = null;
  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.getData()
  }

  getData(){
    this.userService.getAll()
    .subscribe((data) => {
      this.dataSource.data = data.data
      this.dataSource.paginator = this.paginator
    })
  }
  
  filtered(){
    this.dataSource.filter = this.find.trim().toLowerCase()
  }
  
  deleteUser(id: string){
    const rta = confirm('¿Seguro quiere borrar este usuario?')
    rta && this.userService.delete(id).subscribe(() => this.getData());
  }
}