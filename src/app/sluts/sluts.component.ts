import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

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
  tempProduct: Product = {id: 0, name: '', price: 0, idCategory: 1};

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
  }

  loadProducts(): void {
    this.http.get<Product[]>('https://localhost:44368/api/Products').subscribe(data => this.products = data);
  }

  addNewProduct(): void {

    const myHeaders = new HttpHeaders().set('Content-Type', 'application/json');

    const body = JSON.stringify(this.tempProduct);

    console.log(body);

    this.http.post(
      'https://localhost:44368/api/Products',
      body,
      {headers: myHeaders}
    ).subscribe((data: Product) => this.products.push(data));
  }

  deleteProduct(): void {
    this.http.delete(
      'https://localhost:44368/api/Products/' + this.tempProduct.id,
    ).subscribe(data => {
      const finded = this.products.findIndex(item => item.id === data);
      this.products.splice(finded, 1);
    });
  }

}
