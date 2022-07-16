import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Blogs } from 'src/app/models/blogs.model';
import { BlogsService } from 'src/app/services/blogs.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {
  p: number = 1;
  count: number = 5;
  listBlogs: Blogs[] = [];
  newBlogs: Blogs = new Blogs();
  editBlogs: Blogs = new Blogs();
  constructor(private blogsService: BlogsService) { }

  ngOnInit(): void {
    this.loadBlogs();
    this.newBlogs.id = new Date().getTime();
  }

  // load data
  loadBlogs() {
    this.blogsService.getAllBlogs()
      .then((res:any) => {
        this.listBlogs = res;
      })
      .catch((err:any) =>{
        console.log(err);
      });
  }

  //Add Blogs
  addBlogs(frmAddBlogs: NgForm) {
    if (frmAddBlogs.valid) {
      this.blogsService.addBlogs(frmAddBlogs.value);
      this.listBlogs.push(frmAddBlogs.value);
      frmAddBlogs.reset();
      alert("Thêm bài viết thành công");
      this.loadBlogs();
    }
    else {
      console.log("Thêm sản phẩm không thành công");
    }
  }

  // Edit blog
  edit(item: Blogs) {
    this.editBlogs = item
  }

  // Delete blog
  delete(id: number, title: string) {
    if (window.confirm("Bạn chắc chắn xóa chứ ? Bài viết ID: " + title)) {
      this.blogsService.deteleBlogs(id)
      .then(response => {
        this.listBlogs.splice(this.listBlogs.findIndex(e => e.id === id), 1);
        this.loadBlogs();
        alert("Xóa thành công!")
      })
    }
  }

  handleEdit(frmEditBlogs: NgForm) {
    if (frmEditBlogs.valid) {
      this.blogsService.editBlogs(this.editBlogs, this.editBlogs.id)
        .then((res) => {
          frmEditBlogs.reset();
          this.loadBlogs();
          alert("Cập nhật bài viết thành công");
        })
    }
  }
}
