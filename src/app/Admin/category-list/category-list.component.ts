import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICategory } from 'src/app/icategory';
import { CategoryService } from 'src/app/category.service';
@Inject(CategoryService)

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  catgeorys!:ICategory[];

  constructor( private categoryService:CategoryService) { }

  ngOnInit(): void {
    this.categoryService.getAllCategory().subscribe(category=>{this.catgeorys=category})
    
  }

}
