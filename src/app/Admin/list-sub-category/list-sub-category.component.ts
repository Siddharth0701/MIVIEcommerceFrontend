import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ISubCategory } from 'src/app/isub-category';
import { SubcategoryService } from 'src/app/subcategory.service';
import { CategoryService } from 'src/app/category.service';
import { ICategory } from 'src/app/icategory';
@Inject(SubcategoryService)

@Component({
  selector: 'app-list-sub-category',
  templateUrl: './list-sub-category.component.html',
  styleUrls: ['./list-sub-category.component.css']
})
export class ListSubCategoryComponent implements OnInit {
  subcategorys!:ISubCategory[];
  category!:ICategory[];

  constructor(private subcategoryService:SubcategoryService, private categoryService:CategoryService) { }

  ngOnInit(): void {
    this.categoryService.getAllCategory().subscribe(category=>{
      this.category=category
    });

  }

}
