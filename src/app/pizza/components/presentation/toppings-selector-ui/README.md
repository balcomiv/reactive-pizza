# Presentational Topping Selector Component

## Input(s)

- parent (FormGroup)

- selected (Topping[])

- topping (Topping)

## Output(s)

- select (EventEmitter of Topping)

## Public API

### Properties

- touched (bool)

### Getter(s)

- invalid = (): void

### Method(s)

- exists = (Topping): bool

- isActive = (Topping): bool

- onSelect (Topping): void
