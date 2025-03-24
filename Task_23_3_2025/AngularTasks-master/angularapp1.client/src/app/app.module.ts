import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { FormsModule } from '@angular/forms';
import { AddProductComponent } from './Admin/add-product/add-product.component';
import { AddCategoryComponent } from './Admin/add-category/add-category.component';
import { GetCategoriesComponent } from './Admin/get-categories/get-categories.component';
import { GetProductsComponent } from './Admin/get-products/get-products.component';
import { DashboardComponent } from './Admin/dashboard/dashboard.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { GetCategoryProductsComponent } from './Admin/get-category-products/get-category-products.component';
import { EditProductComponent } from './Admin/edit-product/edit-product.component';
import { EditCategoryComponent } from './Admin/edit-category/edit-category.component';
import { ProfileComponent } from './User/profile/profile.component';
import { EditProfileComponent } from './User/edit-profile/edit-profile.component';
import { GetAllVouchersComponent } from './Admin/get-all-vouchers/get-all-vouchers.component';
import { EditVoucherComponent } from './Admin/edit-voucher/edit-voucher.component';
import { AddVoucherComponent } from './Admin/add-voucher/add-voucher.component';
import { ShormanComponent } from './shorman/shorman.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,  
    SignInComponent,
    SignUpComponent,
    CategoryComponent,
    ProductComponent,
    ProductDetailsComponent,
    AddProductComponent,
    AddCategoryComponent,
    GetCategoriesComponent,
    GetProductsComponent,
    DashboardComponent,
    GetCategoryProductsComponent,
    EditProductComponent,
    EditCategoryComponent,
    ProfileComponent,
    EditProfileComponent,
    GetAllVouchersComponent,
    EditVoucherComponent,
    AddVoucherComponent,
    ShormanComponent
  ],
  imports: [
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
