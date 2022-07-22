import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ISubCategory } from './isub-category';


@Injectable({
  providedIn: 'root'
})
export class SubcategoryService {

  constructor( private httpClient:HttpClient) { }
  addSubCategory(subcategory:ISubCategory){
    this.httpClient.post<ISubCategory>("https://localhost:44303/api/subcategory",subcategory,{
      headers:{
        "Access-Control-Allow-Origin":"*"
      }
    }).subscribe(result=>console.log("Done"));
  

  }
  getAllSubCategory(){
    return this.httpClient.get<ISubCategory[]>("https://localhost:44303/api/subcategory",{
      headers:{
        "Access-Control-Allow-Origin":"*"
      }
    });
  }
}
