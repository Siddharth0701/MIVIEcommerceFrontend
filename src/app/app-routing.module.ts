import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryAddComponent } from './Admin/category-add/category-add.component';
import { CategoryListComponent } from './Admin/category-list/category-list.component';
import { ListSubCategoryComponent } from './Admin/list-sub-category/list-sub-category.component';

const routes: Routes = [ 
{path:"add-category",component:CategoryAddComponent},
{path:"categorylist",component:CategoryListComponent},
{path:"subcategory",component:ListSubCategoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
