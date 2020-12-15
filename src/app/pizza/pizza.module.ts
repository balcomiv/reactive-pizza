import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PizzaButtonComponent } from './components/pizza-button/pizza-button.component';
import { PizzaFormComponent } from './components/pizza-form/pizza-form.component';
import { PizzaListComponent } from './components/pizza-list/pizza-list.component';
import { PizzaNameComponent } from './components/pizza-name/pizza-name.component';
import { PizzaSelectedComponent } from './components/pizza-selected/pizza-selected.component';
import { ToppingsSelectorComponent } from './components/toppings-selector/toppings-selector.component';
import { PizzaCreatorComponent } from './containers/pizza-creator/pizza-creator.component';
import { PizzaService } from './services/pizza/pizza.service';

@NgModule({
  declarations: [
    PizzaFormComponent,
    PizzaButtonComponent,
    ToppingsSelectorComponent,
    PizzaNameComponent,
    PizzaSelectedComponent,
    PizzaListComponent,
    PizzaCreatorComponent,
  ],
  imports: [CommonModule],
  providers: [PizzaService],
})
export class PizzaModule {}
