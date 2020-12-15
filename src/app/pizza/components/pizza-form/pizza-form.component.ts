import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { Topping } from '../../interfaces/pizza';

@Component({
  selector: 'app-pizza-form',
  templateUrl: './pizza-form.component.html',
  styleUrls: ['./pizza-form.component.scss'],
})
export class PizzaFormComponent {
  @Input() toppings: Topping[] = [];

  @Output() add = new EventEmitter<void>();

  get control(): FormArray {
    return this.form.get('toppings') as FormArray;
  }

  form = this.fb.group(
    {
      name: ['', Validators.required],
      toppings: this.fb.array([]),
    },
    {
      //  validator: ToppingsValidator
    }
  );

  constructor(private fb: FormBuilder) {}

  addTopping(topping: Topping): void {
    return this.control.push(new FormControl(topping));
  }

  removeTopping(index: number): void {
    this.control.removeAt(index);
  }

  selectTopping(topping: Topping): void {
    const index = this.control.value.indexOf(topping);

    // He's flipping bits on -1... !!~(-1) === false
    if (!!~index) {
      this.removeTopping(index);
    } else {
      this.addTopping(topping);
    }
  }

  onSubmit(): void {
    if (this.form.invalid) {
      return;
    }
    this.add.emit(this.form.value);
  }
}
