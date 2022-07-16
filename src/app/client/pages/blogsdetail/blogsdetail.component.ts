import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Blogs } from 'src/app/models/blogs.model';
import { BlogsService } from 'src/app/services/blogs.service';

@Component({
  selector: 'app-blogsdetail',
  templateUrl: './blogsdetail.component.html',
  styleUrls: ['./blogsdetail.component.scss']
})
export class BlogsdetailComponent implements OnInit {
  listBlogs: any;
  id: any;
  constructor(private blogsService: BlogsService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = +params['id'];
    });
    this.getProductDetail();
  }

  getProductDetail() {
    this.blogsService
      .getAllBlogsDetail(this.id)
      .then((res: any) => {
        console.log(res);
        this.listBlogs = res;
        console.log(this.listBlogs);

      })
      .catch((error: any) => {
        console.log(error);
      });
  }
}
