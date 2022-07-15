import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Blogs } from '../models/blogs.model';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class BlogsService extends BaseService{

  constructor(httpClient: HttpClient) {
    super(httpClient);
  }

  getAllBlogs() {
    return this.get("/blogs");
  }

  getAllBlogsDetail(id: number) {
    return this.get("/blogs/" + id);
  }

  deteleBlogs(id: number) {
    return this.delete("/blogs/" + id);
  }

  addBlogs(blogs: Blogs) {
    return this.post("/blogs/", blogs);
  }

  editBlogs(blogs: Blogs, id: number) {
    return this.put("/blogs/" + id, blogs)
  }
}
