import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { TodoComponent } from './todo.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [TodoComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [TodoComponent],
})
export class AppModule {}
