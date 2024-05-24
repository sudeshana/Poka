# Poka

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `npm test` to execute the unit tests via Jest.

## Used technologies

- `angular: 17.3.0`,
- `@ngrx/effects: 17.2.0`,

* `@ngrx/router-store: 17.2.0`,
* `@ngrx/store: 17.2.0`,
* `@ngrx/store-devtools: 17.2.0`,
* `rxjs: 7.8.0`,
* `jest: 29.7.0`,
* `typescript: 5.4.2`

## Sample test result

````
PS Test\Poka> npm test
> poka@0.0.0 test
> jest

 PASS  src/app/core/services/plant.service.spec.ts
 PASS  src/app/core/services/persistance.service.spec.ts
 PASS  src/app/core/services/details.service.spec.ts
 PASS  src/app/shared/components/button/button.component.spec.ts
 PASS  src/app/app.component.spec.ts
 PASS  src/app/shared/components/card/card.component.spec.ts
 PASS  src/app/shared/components/header/header.component.spec.ts
 PASS  src/app/shared/components/back-button/back-button.component.spec.ts
 PASS  src/app/modules/plants/components/list/details/details.component.spec.ts
 PASS  src/app/modules/plants/components/list/list.component.spec.ts

Test Suites: 10 passed, 10 total
Tests:       25 passed, 25 total
Snapshots:   0 total
Time:        9.772 s
Ran all test suites.```
````
