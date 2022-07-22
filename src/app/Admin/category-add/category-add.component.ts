import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICategory } from 'src/app/icategory';
import { CategoryService } from 'src/app/category.service';
import { FormControl } from '@angular/forms';
@Inject(CategoryService)
@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.css']
})
export class CategoryAddComponent implements OnInit {
  name:FormControl=new FormControl("")

  constructor(private categoryService:CategoryService ) { }

  ngOnInit(): void {
  }
  save(){
    let category:ICategory={
      name:this.name.value,

    };
    alert("Saved data")
    this.categoryService.addCategory(category)
  }
 
   

}
