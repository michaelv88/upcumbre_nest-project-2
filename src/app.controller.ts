import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { Request, request } from 'express';
import { log } from 'console';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // Index 
  @Get()
  getProduct(){
    return this.appService.index();
  }
  // create
  @Post()
  createProduct(@Body() jsonRequest: Request){
    return this.appService.create(jsonRequest);
  }

  // Show 
  @Get(':id')
  showProduct(@Param('id') id: string ){
    return this.appService.show(id);
  }

  // Edit 
  @Post(':id')
  editProduct(@Param('id') id: string, @Body() request: Request ){
    return this.appService.edit(id, request);
  }

  // Delete
  @Get(':id')
  deleteProduct(@Param('id') id: string) {
  return this.appService.delete(id);
}
  

}
 