import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostsService } from 'src/app/services/posts.service';
import { PostModel } from '../models/post.model';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  para!: any;
  constructor(
    private postsService: PostsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  postUsers!: PostModel[];
  ngOnInit(): void {
    this.getPostAllUser();
  }

  getPostAllUser() {
    this.postsService.getAllPosts().subscribe((data) => {
      this.postUsers = data;
    });
  }

  getPosts(id: any) {
    // const id = this.route.snapshot.params['id']
    console.log(id);
    this.router.navigate(['/posts', id]);
  }
}
