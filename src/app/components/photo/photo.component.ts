import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  constructor(private photoService: PhotoService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    this.getPicture()
  }

  getPicture() {
    const id = this.route.snapshot.params['id']
    this.photoService.getPicture(id).subscribe((data) => {

      this.photoInfo = data
    })
  }
}
