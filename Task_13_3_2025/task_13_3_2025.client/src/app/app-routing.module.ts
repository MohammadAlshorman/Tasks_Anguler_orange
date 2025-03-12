import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { SignComponent } from './sign/sign.component';
import { RegComponent } from './reg/reg.component';
import { CategoryComponent } from './category/category.component';
import { ProudectComponent } from './proudect/proudect.component';

const routes: Routes = [

  //{ path: 'nav-bar', component: NavBarComponent },
  //{ path: 'home', component: HomeComponent },
  //{ path: 'sign-in', component: SignInComponent },
  //{ path: 'sign-up', component: SignUpComponent },
  //{ path: 'category', component: CategoryComponent },
  //{ path: 'product', component: ProductComponent },
  //{ path: '', redirectTo: '/home', pathMatch: 'full' } // Default route

  { path: 'nav', component: NavComponent },
  { path: 'foooter', component: FooterComponent },
  { path: 'sign', component: SignComponent },
  { path: 'reg', component: RegComponent },
  { path: 'category', component: CategoryComponent },
  { path: 'product', component:ProudectComponent   }





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
