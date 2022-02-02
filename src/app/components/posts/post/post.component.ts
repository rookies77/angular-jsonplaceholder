import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from 'src/app/services/posts.service';
import { PostModel } from '../../models/post.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  post!: PostModel;
  para!: any;

  constructor(private postsService: PostsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getPost()
  }
  getPost() {
    const id = this.route.snapshot.params['id']
    this.postsService.getOnePost(id).subscribe((data) => {
      console.log(data);
      this.post = data;
    })
  }
}
