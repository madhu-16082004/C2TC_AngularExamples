import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';


@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  title = 'Angular App';

  sayHello() {
    alert('Hello Students'); //Event Binding - Dhanush
  }


isLoggedIn = true; 

//Property Binding img [src]='path'

items = ['Java', 'Angular', 'React']; 

// Event binding - Akash

name = 'angular'; //Akshatha - one way data binding

}


