import { Component, OnInit } from '@angular/core';
import { Iproduct } from '../models/iproducts';
import { productsList } from '../models/productsList';
import { ProductsService } from 'src/app/services/products.service';
import { Router } from '@angular/router';
import { elementAt } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{
  products: any[]=[];
  constructor(private productservice:ProductsService,private router:Router){}
  ngOnInit(): void {
      this.productservice.getAllproducts().subscribe({
        next:(response): void=>{
          this.products=response as any[];

        },
        error:(error)=>{
console.log(error);

        }

      });
  }
  deleteProduct(id:number){
    this.productservice.deleteProduct(id).subscribe(
      () => {
        this.products = this.products.filter(p=> p.id !== id);

      },
      error => {
        console.error('Error deleting item');

      })


  }
}
