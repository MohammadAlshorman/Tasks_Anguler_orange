import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AddProductComponent } from './Admin/add-product/add-product.component';
import { AddCategoryComponent } from './Admin/add-category/add-category.component';
import { DashboardComponent } from './Admin/dashboard/dashboard.component';
import { GetCategoriesComponent } from './Admin/get-categories/get-categories.component';
import { GetProductsComponent } from './Admin/get-products/get-products.component';
import { GetCategoryProductsComponent } from './Admin/get-category-products/get-category-products.component';
import { EditProductComponent } from './Admin/edit-product/edit-product.component';
import { EditCategoryComponent } from './Admin/edit-category/edit-category.component';
import { ProfileComponent } from './User/profile/profile.component';
import { GetAllVouchersComponent } from './Admin/get-all-vouchers/get-all-vouchers.component';
import { AddVoucherComponent } from './Admin/add-voucher/add-voucher.component';
import { EditVoucherComponent } from './Admin/edit-voucher/edit-voucher.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'category', component: CategoryComponent },
  { path: 'product/:id', component: ProductComponent },
  { path: 'ProD/:id', component: ProductDetailsComponent },
  { path: 'addCategory', component: AddCategoryComponent },
  { path: 'addProduct/:id', component: AddProductComponent },
  { path: 'profile', component: ProfileComponent },
  {
    path: 'dashboard', component: DashboardComponent, children: [
      { path: 'getCategories', component: GetCategoriesComponent },
      { path: 'getProdacts', component: GetProductsComponent },
      { path: 'addCategory', component: AddCategoryComponent },
      { path: 'addProduct', component: AddProductComponent },
      { path: 'addVoucher', component: AddVoucherComponent },
      { path: 'getVouchers', component: GetAllVouchersComponent },
      { path: 'getCategoryProducts/:id', component: GetCategoryProductsComponent },
      { path: 'editProduct/:id', component: EditProductComponent },
      { path: 'editCategory/:id', component: EditCategoryComponent },
      { path: 'editVoucher/:id', component: EditVoucherComponent },
      { path: '', redirectTo: '/dashboard/getCategories', pathMatch: 'full' } // Default route
    ]
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' } // Default route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
