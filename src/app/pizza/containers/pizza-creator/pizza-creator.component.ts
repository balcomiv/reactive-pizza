import { Component } from '@angular/core';
import { Pizza } from '../../interfaces/pizza';
import { PizzaService } from '../../services/pizza/pizza.service';

@Component({
  selector: 'app-pizza-creator',
  templateUrl: './pizza-creator.component.html',
  styleUrls: ['./pizza-creator.component.scss'],
})
export class PizzaCreatorComponent {
  pizza$ = this.pizzaService.select('pizzas');
  toppings$ = this.pizzaService.select('toppings');

  constructor(private pizzaService: PizzaService) {}

  addPizza(event: Pizza): void {
    this.pizzaService.addPizza(event);
  }
}
