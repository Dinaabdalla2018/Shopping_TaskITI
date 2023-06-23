import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { FormProductComponent } from './components/form-product/form-product.component';
import { NopageComponent } from './components/nopage/nopage.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'products',component:ProductComponent},
  {path:'products/:id',component:ProductDetailsComponent},
  {path:'products/:id/edit',component:FormProductComponent},
  {path:'login',component:LoginComponent},
  {path:'**',component:NopageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
