import { HttpClient } from '@angular/common/http';
import { ICategory } from './icategory';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {
 // ApiUrl="https://localhost:5001/api/"
 ApiUrl="https://localhost:44303/api/"

  constructor( private httpClient: HttpClient) { }
  addCategory(category:ICategory){
    this.httpClient.post<ICategory>(this.ApiUrl+"Category",category,{
      headers:{
        "Access-Control-Allow-Origin":"*"
      }
    }).subscribe(result=> console.log("Done"));
   }

   getAllCategory(){
   return this.httpClient.get<ICategory[]>(this.ApiUrl+"Category",{
      headers:{
        "Access-Control-Allow-Origin":"*"
      }
    });
   }
}
