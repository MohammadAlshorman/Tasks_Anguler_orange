import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { RegComponent } from './reg/reg.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './Admin/dashboard/dashboard.component';
import { GetCategoryComponent } from './Admin/get-category/get-category.component';
import { GetProductComponent } from './Admin/get-product/get-product.component';
import { AddCategoryComponent } from './Admin/add-category/add-category.component';
import { AddProductComponent } from './Admin/add-product/add-product.component';
import { EditCategoryComponent } from './Admin/edit-category/edit-category.component';
import { EditProductComponent } from './Admin/edit-product/edit-product.component';
import { ProfileComponent } from './Admin/profile/profile.component';

const routes: Routes = [
  { path: "Category", component: CategoryComponent },
  { path: "Product/:id", component: ProductComponent },
  { path: "ProductDetails/:id", component: ProductDetailsComponent },
  { path: "Register", component: RegComponent },
  { path: "Login", component: LoginComponent },


  {
    path: "Dashboard", component: DashboardComponent, children: [

      { path: "ShowAllCategory", component: GetCategoryComponent },
      { path: "ShowAllProduct", component: GetProductComponent },
      { path: "AddProduct", component: AddProductComponent },
      { path: "AddCategory", component: AddCategoryComponent },
      { path: "EditCategory/:id", component: EditCategoryComponent },
      { path: "EditProduct/:id", component: EditProductComponent },
      { path: "Profile/:id", component: ProfileComponent }
  ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
