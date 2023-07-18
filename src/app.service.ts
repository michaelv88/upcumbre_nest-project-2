import { Body, Get, Injectable } from '@nestjs/common';
import { Request } from 'express';
import { request } from 'http';

@Injectable()
export class AppService {
  //Base de datos 
  private listaProduct =[
    {
      "name": "product_default", 
      "price": 1000,
      "brand": "generic"
   }


  ];

  public index() {
    return this.listaProduct;
    
  }

  public create (json){
    return this.listaProduct.push(json);
  }


  public show(id){
    return this.listaProduct[id - 1];
  }

  public edit(id, json){
    this.listaProduct[id - 1].name=json.name;
    this.listaProduct[id - 1].brand=json.brand;
    this.listaProduct[id - 1].price=json.price;
    return  this.listaProduct[id - 1];
  }

  public delete(id) {
    const index = id - 1;
    const deletedProduct = this.listaProduct[index];
    this.listaProduct.splice(id, 1);
    return deletedProduct;
  }
}
