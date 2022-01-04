import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router'
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  userForm!: string;
  photoForm!: FormGroup;
  error: boolean = false;
  maxNumber!: boolean;


  constructor(private userService: UserService, private router: Router, private formBuild: FormBuilder) { }

  ngOnInit(): void {
    this.photoForm = this.formBuild.group({
      photo: ['', Validators.required]
    })
    console.log('this.error :', this.error);
  }


  onSubmitUser(form: NgForm) {
    const id = form.value.users
    if (id == '') {
      this.router.navigate(['/users'])
    } else {
      // this.userService.getOneUser(id)
      this.router.navigate(['/users/', id])
    }

  }
  onSubmitPhoto() {
    const photoid = this.photoForm.get('photo')?.value;
    this.error = isNaN(photoid) ;
    this.maxNumber = photoid>=5000;

    console.log('  this.maxNumber :',  this.maxNumber );
    console.log(' this.error :',  this.error);
    if (!isNaN(photoid) && photoid !== '' && photoid <= 5000)
      this.router.navigate(['photo/', photoid])

  }
}
