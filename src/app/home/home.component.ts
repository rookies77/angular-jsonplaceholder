import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router} from '@angular/router'
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
userForm!: string;
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {

  }


  onSubmitUser(form: NgForm) {
console.log(form.value['users']);
console.log(form.value);
const id = form.value.users
if(id ==''){

  this.router.navigate(['/users'])
}else{
  // this.userService.getOneUser(id)
  this.router.navigate(['/users/', id])
}

  }
}
