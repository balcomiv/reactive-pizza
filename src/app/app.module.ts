import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PizzaModule } from './pizza/pizza.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, PizzaModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
