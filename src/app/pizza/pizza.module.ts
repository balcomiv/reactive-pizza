import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PizzaFormComponent } from './components/pizza-form/pizza-form.component';
import { PizzaButtonComponent } from './components/pizza-button/pizza-button.component';
import { ToppingsSelectorComponent } from './components/toppings-selector/toppings-selector.component';

@NgModule({
  declarations: [PizzaFormComponent, PizzaButtonComponent, ToppingsSelectorComponent],
  imports: [CommonModule],
})
export class PizzaModule {}
