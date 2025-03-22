import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Category } from '../models/category';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ApiMockService {
  private categories: Array<Category> = [];
  private products: Array<Product> = [];

  constructor() {
    this.initMocks();
   }

  public getCategories(name: string):Observable<Array<Category>> {
    return of(this.categories.filter(c => name === '' || c.name.toLowerCase().includes(name.toLocaleLowerCase())));
  }

  public getProducts():Observable<Array<Category>> {
    return of(this.products);
  }

  initMocks(){ 
    this.categories = [
      { id: 1, name: 'category 1' },
      { id: 2, name: 'category 2' },
      { id: 3, name: 'category 3' },
      { id: 4, name: 'category 4' },
      { id: 5, name: 'category 5' },
    ];

    this.products = [
      { id: 1, name: 'product 1', categoryId: 1 }, 
      { id: 2, name: 'product 2', categoryId: 1 }, 
      { id: 3, name: 'product 3', categoryId: 1 }, 
      { id: 4, name: 'product 4', categoryId: 1 }, 
      { id: 5, name: 'product 5', categoryId: 2 }, 
      { id: 6, name: 'product 6', categoryId: 2 }, 
      { id: 7, name: 'product 7', categoryId: 3 }, 
      { id: 8, name: 'product 8', categoryId: 3 }, 
      { id: 9, name: 'product 9', categoryId: 3 }, 
      { id: 10, name: 'product 10', categoryId: 3 }, 
      { id: 11, name: 'product 11', categoryId: 3 }, 
      { id: 12, name: 'product 12', categoryId: 4 }, 
      { id: 13, name: 'product 13', categoryId: 4 }, 
      { id: 14, name: 'product 14', categoryId: 5 }, 
    ];
  }
}
