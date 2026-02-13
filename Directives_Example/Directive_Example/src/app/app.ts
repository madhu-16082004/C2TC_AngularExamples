import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';



@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
title = signal('Directive_Example');

products = [{
  name: 'Laptop', description: 'New Product', price: '$10000'
},
{

  name: 'Mobile Phone', description: 'Newly Launchef Mobile', price: '$5000'
},

{
  name: 'Tablet', description: 'Branded Tablet', price: '$3000'
},

{
  name: 'Smart Watches', description: 'Long Lasting Battery', price: '$1500'
}

]




}
