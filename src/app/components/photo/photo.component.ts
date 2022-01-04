import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PhotoService } from 'src/app/services/photo.service';
import { PhotoModel } from '../models/photo.model';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss']
})
export class PhotoComponent implements OnInit {

  id!: number;
  photoInfo!: PhotoModel;
  number!: number;
  constructor(private photoService: PhotoService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    this.getPicture(this.id)
  }

  getPicture(id: number) {
    // const id = this.route.snapshot.params['id'];
    this.photoService.getPicture(id).subscribe((data) => {
      console.log(data);

      this.photoInfo = data
    })
  }
  randomNumber() {
    this.number = Math.round(Math.random() * 5000)
    this.router.navigate(['photo', this.number])
    this.getPicture(this.number)
  }
}
