# angular-todo-list
An introductory project for trying out angular by creating a simple to-do list application.

💛 Hosted on Github Pages: https://yuelchen.github.io/angular-todo-list/
## Preview:
![ToDo List Preview](https://github.com/yuelchen/angular-todo-list/blob/main/src/preview.png)

---
## Command Line Reference
#### Install Angular CLI using npm
```:
npm install -g @angular/cli
```

#### Create the project using Angular CLI (ng).
```:
ng new angular-todo-list
```

#### Change into the project directory.
```:
cd angular-todo-list/
```

#### Start the application.
> Option -o, --open will automatically open browser page for localhost:4200.
```:
ng serve --open
```

#### Build the application. 
```:
ng build --prod
```

#### Deploying the application to GitHub pages.
> See angular-cli-ghpages standalone [README](https://github.com/angular-schule/angular-cli-ghpages/blob/master/docs/README_standalone.md) for more in-depth information.
1. Under the project directory, install angular-cli-gh-pages module (first-time-only).
```:
npm i angular-cli-ghpages --save-dev
```

2. Build the application for GitHub pages. 
```:
ng build --prod --base-href "https://username.github.io/repository-name/"
```

3. Deploy the application (Angular 6+). 
> The project-name can be found under angular.json; see defaultProject key-value. 
```:
npx angular-cli-ghpages --dir=dist/project-name
```

---
🚩 Disclaimer:
This project was generated with [Angular CLI](https://github.com/angular/angular-cli).  

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
