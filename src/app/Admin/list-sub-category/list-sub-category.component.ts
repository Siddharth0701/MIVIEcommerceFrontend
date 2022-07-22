import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ISubCategory } from 'src/app/isub-category';
import { SubcategoryService } from 'src/app/subcategory.service';
@Inject(SubcategoryService)

@Component({
  selector: 'app-list-sub-category',
  templateUrl: './list-sub-category.component.html',
  styleUrls: ['./list-sub-category.component.css']
})
export class ListSubCategoryComponent implements OnInit {
  subcategorys!:ISubCategory[];

  constructor(private subcategoryService:SubcategoryService) { }

  ngOnInit(): void {
    this.subcategoryService.getAllSubCategory().subscribe(subcategory=>{
      this.subcategorys=subcategory
    });

  }

}
