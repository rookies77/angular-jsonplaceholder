import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { UserModel } from '../models/user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users!: UserModel[];
  user!: UserModel;
  id!: number
  constructor(private userService: UserService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    // this.getUsers()
     this.id = this.route.snapshot.params['id']
    console.log('id :', this.id);
    if (this.id == undefined) {
    console.log(' on rentre dans la condition:', );
      this.getUsers()
    } else {
      this.getUser()
    }

  }

  getUsers() {
    this.userService.getAllusers().subscribe((data) => {
      console.log(data);
      this.users = data
    })
  }
  getUser() {
    const id = this.route.snapshot.params['id']
    this.userService.getOneUser(id).subscribe((data) => {
      console.log('data :', data);
      this.user = data
    })
  }
  onBack(){
    this.router.navigate(['/'])
  }
}
