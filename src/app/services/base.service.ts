import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BaseService {
  API_URL = "http://localhost:3000"
  header:HttpHeaders|any;

  constructor(private HttpClient: HttpClient) {
    this.header = new HttpHeaders();
    this.header.set('Content-Type', 'application/json')
    // this.header = this.header.set("")
   }

   //Method REST FULL API
   get(path:string="", params={}) {
    return new Promise((resolve, reject) => {
      try {
        this.HttpClient.get(this.API_URL + path, { params, headers: this.header}).subscribe(res => {
          resolve(res);
        })
      }
      catch (err) {
        reject(err)
      }
    })
   }

   //Method POST
   post(path: string="", body:any = {}){
    return new Promise((resolve, reject) => {
      try {
        this.HttpClient.post(this.API_URL + path, body).subscribe(res => {
          resolve(res)
        })
      }
      catch (err) {
        reject(err)
      }
    })
   }
}
