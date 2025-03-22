import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { RegComponent } from './reg/reg.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './Admin/dashboard/dashboard.component';
import { GetCategoryComponent } from './Admin/get-category/get-category.component';
import { GetProductComponent } from './Admin/get-product/get-product.component';
import { AddCategoryComponent } from './Admin/add-category/add-category.component';
import { AddProductComponent } from './Admin/add-product/add-product.component';
import { EditCategoryComponent } from './Admin/edit-category/edit-category.component';
import { EditProductComponent } from './Admin/edit-product/edit-product.component';
import { ProfileComponent } from './Admin/profile/profile.component';



@NgModule({
    declarations: [
        AppComponent,
        CategoryComponent,
        ProductComponent,
        NavbarComponent,
        ProductDetailsComponent,
        RegComponent,
        LoginComponent,
        DashboardComponent,
        GetCategoryComponent,
        GetProductComponent,
        AddCategoryComponent,
        AddProductComponent,
        EditCategoryComponent,
        EditProductComponent,
        ProfileComponent
    ],
    imports: [
        BrowserModule, HttpClientModule,
        AppRoutingModule,
        FormsModule

    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
