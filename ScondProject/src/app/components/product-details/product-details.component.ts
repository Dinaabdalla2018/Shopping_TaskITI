import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { productsList } from '../models/productsList';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  productId: any;
  product:any;
  constructor(private activatedRoute: ActivatedRoute, private router: Router, private productservice:ProductsService) {
    this.productId = this.activatedRoute.snapshot.paramMap.get('id');
    let product = productsList.find(obj => obj.id === Number(this.productId));
  }
  ngOnInit(): void {
    this.productservice.getproductById(this.productId).subscribe({
      next: (response) => {
        this.product = response;
      },
      error: (error) => {
        console.log('error');
      },
    });
  }
  backToHome() {
    this.router.navigate(['/products']);
  }
}
