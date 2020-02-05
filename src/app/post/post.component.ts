import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../api.service';
import { IPost } from '../ipost';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements IPost {
  @Input()
  title : string;
  url : string;
  image : any;

  public posts : IPost[];

  constructor ( public service: ApiService){}

  ngOnInit() {
    this.service.getPosts().subscribe((response:any)=>{
      this.posts=response.data.children;
  });
}
}
