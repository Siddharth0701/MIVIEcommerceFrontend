import { HttpClient } from '@angular/common/http';
import { ICategory } from './icategory';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor( private httpClient: HttpClient) { }
  addCategory(category:ICategory){
    this.httpClient.post<ICategory>("https://localhost:44303/api/category",category,{
      headers:{
        "Access-Control-Allow-Origin":"*"
      }
    }).subscribe(result=> console.log("Done"));
   }

   getAllCategory(){
   return this.httpClient.get<ICategory[]>("https://localhost:44303/api/Category",{
      headers:{
        "Access-Control-Allow-Origin":"*"
      }
    });
   }
}
