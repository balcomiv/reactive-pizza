import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PizzaFormComponent } from './components/pizza-form/pizza-form.component';
import { PizzaButtonComponent } from './components/pizza-button/pizza-button.component';
import { ToppingsSelectorComponent } from './components/toppings-selector/toppings-selector.component';
import { PizzaNameComponent } from './components/pizza-name/pizza-name.component';
import { PizzaSelectedComponent } from './components/pizza-selected/pizza-selected.component';
import { PizzaListComponent } from './components/pizza-list/pizza-list.component';

@NgModule({
  declarations: [PizzaFormComponent, PizzaButtonComponent, ToppingsSelectorComponent, PizzaNameComponent, PizzaSelectedComponent, PizzaListComponent],
  imports: [CommonModule],
})
export class PizzaModule {}
