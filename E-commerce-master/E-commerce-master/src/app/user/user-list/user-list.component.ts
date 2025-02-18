import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { User } from '../../models/userModel';

@Component({
  selector: 'app-user-list',
  standalone: false,
  
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit{
  constructor(private service:LoginService){}

  userList:Array<User>=[];

  ngOnInit(){
    this.userList=this.service.getUser();
    //console.log(this.userList);
  }

  removeUser(user:User){
    this.service.removeUser(user);
  }
}
