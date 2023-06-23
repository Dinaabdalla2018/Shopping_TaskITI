import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.css']
})
export class FormProductComponent implements OnInit {
  productId:any;
  product:any;
  constructor(private activeRoute:ActivatedRoute,private router:Router,private productService:ProductsService ){

  }
  ngOnInit():void {
   this.productId=this.activeRoute.snapshot.paramMap.get('id');

   //edit
    if(this.productId!=0){
      this.productService.getproductById(this.productId).subscribe({
        next:(response)=>{
          this.product=response;

          this.ProductName.setValue(this.product.productName);
          this.ProductPrice.setValue(this.product.price);
          this.ProductQuantity.setValue(this.product.quantity);
        }
      })
    }
  }
 ProductForm= new FormGroup({
  productName: new FormControl('',[Validators.required,Validators.minLength(3)]),
  quantity: new FormControl('',[Validators.required,Validators.min(10)]),
  price: new FormControl('',[Validators.required])
 });

 get ProductName(){
  return this.ProductForm.controls['productName'];
 }
 get ProductQuantity(){
  return this.ProductForm.controls['quantity'];
 }
 get ProductPrice(){
  return this.ProductForm.controls['price'];
 }
 formHandler(e:any){
  e.preventDefault();
  if (this.ProductForm.status == 'VALID') {
  if (this.productId ==0) {
    this.productService.addproduct(this.ProductForm.value).subscribe({
      next:()=>{
        this.router.navigate(['/products']);
      }
    })
 }
 else{
  console.log(this.ProductForm.value);

  this.productService.editproduct(this.productId,this.ProductForm.value).subscribe({
    next:()=>{
      this.router.navigate(['/products']);
    }
  })
 }
}
}

}
