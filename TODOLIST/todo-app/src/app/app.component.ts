import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-root',
  
  
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone:false
} )
export class AppComponent {
  title = 'ToDoList';
}
