import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Subject } from 'rxjs';
import { DataTable } from 'projects/my-lib/src/lib/asserts/interfaces';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  data: DataTable[] = [{
    category: 'БЛЯЯЯЯЯЯЯЯЯЯДь',
    subCategory: 'Очищение',
    brend: 'Academie',
    product: 'Гоммаж с кремом',
    cashback: '20%',
    completed: false
  }, {
    category: 'Эстетический уход',
    subCategory: 'Очищение',
    brend: 'Academie',
    product: 'Гоммаж с кремом',
    cashback: '20%',
    completed: false
  }, {
    category: 'Эстетический уход',
    subCategory: 'Очищение',
    brend: 'Academie',
    product: 'Гоммаж с кремом',
    cashback: '20%',
    completed: false
  }, {
    category: 'Эстетический уход',
    subCategory: 'Очищение',
    brend: 'Academie',
    product: 'Гоммаж с кремом',
    cashback: '20%',
    completed: false
  }, {
    category: 'Эстетический уход',
    subCategory: 'Очищение',
    brend: 'Academie',
    product: 'Гоммаж с кремом',
    cashback: '20%',
    completed: false
  }, {
    category: 'Эстетический уход',
    subCategory: 'Очищение',
    brend: 'Academie',
    product: 'Гоммаж с кремом',
    cashback: '20%',
    completed: false
  }, {
    category: 'Эстетический уход',
    subCategory: 'Очищение',
    brend: 'Academie',
    product: 'Гоммаж с кремом',
    cashback: '20%',
    completed: false
  }, {
    category: 'Эстетический уход',
    subCategory: 'Очищение',
    brend: 'Academie',
    product: 'Гоммаж с кремом',
    cashback: '20%',
    completed: false
  }, {
    category: 'Эстетический уход',
    subCategory: 'Очищение',
    brend: 'Academie',
    product: 'Гоммаж с кремом',
    cashback: '20%',
    completed: false
  }, {
    category: 'Эстетический уход',
    subCategory: 'Очищение',
    brend: 'Academie',
    product: 'Гоммаж с кремом',
    cashback: '20%',
    completed: false
  }, {
    category: 'Эстетический уход',
    subCategory: 'Очищение',
    brend: 'Academie',
    product: 'Гоммаж с кремом',
    cashback: '20%',
    completed: false
  }, {
    category: 'Эстетический уход',
    subCategory: 'Очищение',
    brend: 'Academie',
    product: 'Гоммаж с кремом',
    cashback: '20%',
    completed: false
  }, {
    category: 'Эстетический уход',
    subCategory: 'Очищение',
    brend: 'Academie',
    product: 'Гоммаж с кремом',
    cashback: '20%',
    completed: false
  }]
}
