# ReactivePizza

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

### Tutorial used in this repo

- [Component architecture recipes for Angular's reactive forms](https://ultimatecourses.com/blog/component-architecture-reactive-forms-angular)

- [Github Code](https://github.com/toddmotto/reactive-pizza)

### Template driven version of component architecture

- [Stateful and stateless components, the missing manual](https://ultimatecourses.com/blog/stateful-stateless-components)

## Cypress Schematic (Removes Protractor and adds Cypress configured with TypeScript)

- `ng add @briebug/cypress-schematic`

-[npm](https://www.npmjs.com/package/@briebug/cypress-schematic)

### Running

- `ng e2e` | `ng run {your-project-name}:cypress-open` | `ng run {your-project-name}:cypress-run`

### Helpful Links

- https://www.cypress.io/

## Storybook

### Installation

- `npx sb init`

### Running

- `npm run storybook`

### Helpful Links

- [Getting Started](https://storybook.js.org/docs/angular/get-started/install) | [Learn Storybook](https://www.learnstorybook.com/) | [Intro to Writing Stories](https://storybook.js.org/docs/angular/writing-stories/introduction)

## Version Control

- [Version Control Basics with VS Code and GitHub](https://medium.com/@brygrill/version-control-basics-with-github-and-vs-code-1c1906cadd33#:~:text=When%20you%20open%20a%20project,left%20corner%20of%20your%20window.&text=If%20you%20click%20on,branches%20that%20you%20can%20checkout)

- [Merging with command line](https://stackoverflow.com/questions/20101994/git-pull-from-master-into-the-development-branch)

# Notes for 'steps taken' (will be using for gitbook etc.)

- I used Todd Motto's [Component architecture recipes for Angulars reactive forms](https://ultimatecourses.com/blog/component-architecture-reactive-forms-angular) for this. Added [Cypress](https://www.cypress.io/) for e2e and [Storybook](https://storybook.js.org/docs/angular/get-started/introduction) for component design. Big thank you to the community out there. You are all awesome!

## Create page module (page modules === routed pages)

- ng g m pizza

## Set up folder structure (CLI can do this too, but approach may help conceptualize design prior to making components etc.)

- TODO: Show folder structure

## Create UI/Presentational/View Components (good place to use Storybook)

- Pizza Form `ng g c pizza/components/pizza-form`

- Toppings Selector `ng g c pizza/components/toppings-selector`

- Pizza Name `ng g c pizza/components/pizza-name`

- Pizza Selected `ng g c pizza/components/pizza-selected`

- Pizza Button `ng g c pizza/components/pizza-button`

- Pizza List `ng g c pizza/components/pizza-list`

## Create Container Component

- Pizza Creator (Note: this is the routed feature page container component)
- `ng g c pizza/containers/pizza-creator`

## Add Route

## Create Service(s)

- Pizza Service `ng g s pizza/services/pizza --flat false`

## Create Pipe(s)

## Create Interfaces/Models

- Pizza Interface `ng g i pizza/interfaces/pizza`

## Create Validator. [Read more on custom validators](https://angular.io/api/forms/Validator)
