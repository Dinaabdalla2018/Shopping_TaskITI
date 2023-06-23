import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProductComponent } from './components/product/product.component';
import { NopageComponent } from './components/nopage/nopage.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormProductComponent } from './components/form-product/form-product.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { SliderComponent } from './components/slider/slider.component';
import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './components/footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ProductComponent,
    NopageComponent,
    AddProductComponent,
    NavbarComponent,
    FormProductComponent,
    ProductDetailsComponent,
    SliderComponent,
    AboutComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
