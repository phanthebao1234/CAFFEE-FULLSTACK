export class Blogs {
  id:number = 0;
  title:string = "";
  date:Date|string = new Date;
  description:string = "";
  content:string = "";
  hashtags:string = ""
  images:Array<string> = [];
  imagesThumbnails:string = ""
}
