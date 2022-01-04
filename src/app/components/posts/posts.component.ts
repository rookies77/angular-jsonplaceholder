import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostsService } from 'src/app/services/posts.service';
import { PostModel } from '../models/post.model';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  constructor(private postsService: PostsService, private router: Router, private route: ActivatedRoute) { }
  postUsers!: PostModel[];
  ngOnInit(): void {
    this.getPostAllUser()
  }

  getPostAllUser() {
    this.postsService.getAllPosts().subscribe((data) => {
      console.log(data);
      this.postUsers = data
    })
  }

  getPost(id: number) {
    console.log(id);

  }
}
