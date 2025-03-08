import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  // Import CommonModule
import { FormsModule } from '@angular/forms';   // Import FormsModule
import { TodoComponent } from './todo.component'; // Import TodoComponent

@NgModule({
  declarations: [
      // Declare TodoComponent here
  ],
  imports: [
    CommonModule,  // Add CommonModule to imports
    FormsModule    // Add FormsModule to imports
  ],
  exports: [
      // Export TodoComponent to make it available outside this module
  ]
})
export class TodoModule { }
