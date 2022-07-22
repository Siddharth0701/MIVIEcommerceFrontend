import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CategoryAddComponent } from './Admin/category-add/category-add.component';
import { CategoryListComponent } from './Admin/category-list/category-list.component';
import { AddSubCategoryComponent } from './Admin/add-sub-category/add-sub-category.component';
import { ListSubCategoryComponent } from './Admin/list-sub-category/list-sub-category.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CategoryAddComponent,
    CategoryListComponent,
    AddSubCategoryComponent,
    ListSubCategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
