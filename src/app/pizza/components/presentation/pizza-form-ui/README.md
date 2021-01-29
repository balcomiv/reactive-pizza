# Presentational Form

## Input(s)

- toppings (array of toppings)

## Output(s)

- add (EventEmitter of form.value)

## Injected Items

- FromBuilder

## Public API

### Properties

- form (FormGroup)

### Getter(s)

- toppingsControl = (): FormArray

### Method(s)

- addToppings = (Topping): void

- removeToppings = (number): void

- selectTopping = (Topping): void

- onSubmit = (): void
