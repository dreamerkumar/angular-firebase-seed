# Seed Angular 6 project with Firebase, Google Authentication and Nrwl

App Demo [https://angular-firebase-2907c.firebaseapp.com]( https://angular-firebase-2907c.firebaseapp.com)

## Features
This seed project can be useful if you are considering creating an app that stores user data with a Firebase backend. 

It has just enough to support the below capabilities with very little css or any theme dependencies. Start here and then style the page and components the way you want. 

* A sign in page is provided to login with Google as an example. Other social logins can be added in a similar fashion.
* A user can also login anonymously if he just wants to test out the app.
* The app shell has a top toolbar with options to sign in, view data or logout.
* A sample data page demonstrates how to create items which are stored against the authenticated user. This data is private to the logged in user.
* A profile page shows the logged in user details from his social profile. 

## Installation and Usage

### Installation
* `git clone` or download the project files. 
* Make sure you are using Node 10 or above. 
* Run `npm install` via terminal on the project folder to install all the dependencies.
* Go to [Firebase Console](https://console.firebase.google.com/) and create a new project
* Go to project settings, and copy the required key values to your `environment.ts` and `environment.prod.ts` files in the folder `your-app-root/apps/myapp/src/environments`
* From the `Cloud Messaging tab` in settings, copy the message sender id and update the above two environment files with that as well.
* Run `npm start` to start the app on localhost and port 4200.
* See the Nrwl section below for creating additional apps, building, running tests etc.
* If you are using Firebase command line tool to deploy to firebase, update your deployed app name in `.firebasesrc` file 
## Firebase
Firebase is a comprehensive mobile development platform to build apps fast without managing infrastructure. It comes with a lot of incredible features on the get go. Checkout [Firebase](https://firebase.google.com/)

## Social Login
Starting with a social login is a faster way to get your app to market. So this app supports a one click google login to get you started. You can later add support for other social logins or login using username and password. Building a complete authentication system with login, password reset and password change features is cumbersome to implement and can create security holes if not implemented properly. It is also added friction for a new user to register himself, as compared to logging in with a provider he is already registered with.

## Nrwl
Nrwl is an open source toolkit for enterprise Angular applications.

Nx is designed to help you create and build enterprise grade Angular applications. It provides an opinionated approach to application project structure and patterns.

 Learn more about Nrwl at [Nrwl Nx](https://nrwl.io/nx).


### Creating and running apps and libraries using Nrwl

[Watch a 5-minute video on how to get started with Nx.](http://nrwl.io/nx)

### Generate application

Run `ng generate app myapp` to generate an application. When using Nx, you can create multiple applications and libraries in the same CLI workspace. Read more [here](http://nrwl.io/nx).

### Development server

Run `ng serve --app=myapp` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name --app=myapp` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build --app=myapp` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
