import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

interface Product {
  id: number;
  name: string;
  price: number;
  idCategory: number;
}

@Component({
  selector: 'app-sluts',
  templateUrl: './sluts.component.html',
  styleUrls: ['./sluts.component.css']
})
export class SlutsComponent implements OnInit {

  products: Product[] = [];

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
  }

  loadProducts(): void {
    this.http.get<Product[]>('https://localhost:44368/api/Products').subscribe(data => this.products = data);

    console.dir(this.products);
  }

}
