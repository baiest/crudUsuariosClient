import { UserService } from './../../services/user.service';
import { User, UserForm } from './../../models/User';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  update = false
  user: UserForm = {
    id: '',
    username: '',
    name: '',
    last_name: '',
    id_type: '',
    birthdate: new Date(),
    email: '',
    password: ''
  }
  constructor(
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute

  ) {}

  ngOnInit(): void {
    this.route.params
      .subscribe((params: Params) => {
      this.update = !!params['id']
      if(this.update){
        this.userService.getByIdEdit(params['id'])
          .subscribe(data => this.user = data.data)
      }
    })
  }
  
  saveUser(){
    this.user.birthdate = new Date(this.user.birthdate)
    if(this.update){
      this.userService.update(this.user.id, this.user)
        .subscribe(() => {
          this.router.navigate(['/users'])
        })
    }else{
      this.userService.create(this.user)
        .subscribe(() => {
          this.router.navigate(['/users'])
        })
    }
    
  }
}
