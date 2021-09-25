# CisUsers

## Problem

Angular application that will be used to manage user records. User records are stored and retrieved from an
external service using apis. The solution should leverage NgRx reactive state management and RxJs operators and include
testing.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.12.

### Install Node & NPM

This project requires latest node and npm
node -v ==> 14.16.1
npm -v ==> 6.14.12
ng --version ==> 11.2.14

### Install Packages

Now you can install this project's packages by running `npm install`.

### Run the Development Server

Run `npm start` for a dev server. Navigate to `https://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Project Structure

Project
  ├── src/app                  - Angular app
  │    ├── Services            - Folder contains all the service files for this project
  │    ├── users               - Lazy loaded user module
  │    |     ├── store         - Users Store folder (actions, reducer, state and selectors)
  |    |
  │    
  |
  ├── shared                   - Folder contains Angular material imports, NGX datatable imports
  ├── styles                   - Global Styling folder
  ├── models                   - Global models for the cis-user project
  ├── assets                   - Global assets for the cis-user project
  |
  |
  ├── licenses                 - MIT license


## Points taken care while doing this project
1. Not used any paid 3rd party libraries. This project is built on Angular material, bootstrap and NGX-datatable
2. DRY (DONT REPEAT YOURSELF)
3. Accessibility screen reader support taken care by adding aria-labels and roles.
4. Localization is taken care.
5. Using Observables or RXJS improperly leads to memory leak. I have used best practices to avoid memory leak.
6. Made sure Subscribed observables are unsubscribed otherwise HTML pipe `async` does it automatically.
7. Use of reusable components `datatable and buttons` can be used throughout the project.
8. Written unit test cases. `npm run test` to test
9. Lint errors and warnings are taken care use `ng lint` to test.
10. This Project is responsive. Flex layout itself did the job.
11. Type casting and Type assertion at its best. Avoided using type `any`

## I welcome Queries, questions and any suggestions :)
Please do Contact gurusamrudh@gmail.com
