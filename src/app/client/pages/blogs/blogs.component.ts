import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Blogs } from 'src/app/models/blogs.model';
import { BlogsService } from 'src/app/services/blogs.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {
  listBlogs: Blogs[] = [];
  p: number = 1;
  count: number = 5;
  constructor(private blogsService: BlogsService,private router: Router) { }

  ngOnInit(): void {
    this.loadBlogs()
  }

  // Lấy danh mục blog
  loadBlogs() {
    this.blogsService.getAllBlogs()
      .then((res:any) => {
        this.listBlogs = res;
      })
      .catch((err:any) => {
        console.log(err);
      })
  }
  detail(id:number) {
    this.router.navigate(['client/blogs/'+ id]);
  }
}
