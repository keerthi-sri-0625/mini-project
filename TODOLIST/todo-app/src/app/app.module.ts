import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component'; // Import your TodoComponent

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent // Declare TodoComponent here
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
