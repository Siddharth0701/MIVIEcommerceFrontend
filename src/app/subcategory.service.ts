import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ISubCategory } from './isub-category';


@Injectable({
  providedIn: 'root'
})
export class SubcategoryService {
  ApiUrl="https://localhost:44303/api/"

  constructor( private httpClient:HttpClient) { }
  addSubCategory(subcategory:ISubCategory){
    this.httpClient.post<ISubCategory>(this.ApiUrl+"Subcategory",subcategory,{
      headers:{
        "Access-Control-Allow-Origin":"*"
      }
    }).subscribe(result=>console.log("Done"));


  }
  getAllSubCategory(){
    return this.httpClient.get<ISubCategory[]>(this.ApiUrl+"Subcategory",{
      headers:{
        "Access-Control-Allow-Origin":"*"
      }
    });
  }
}
