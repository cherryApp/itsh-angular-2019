# AngularCrud

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.19.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Json server authentication

We use json-server-auth package for authentication.  
[json-server-auth](https://www.npmjs.com/package/json-server-auth)  
Run server with authentication:  
`cd db && json-server-auth .\big-employee.json -r .\routes.json`  
The routes.json file contains the rules of authentication.  

### Register a new user
Registration process needs email and password, but you can give other data 
if it necessary. Example:  
`
POST /register
{
  "email": "olivier@mail.com",
  "password": "bestPassw0rd",
  "firstname": "Olivier",
  "lastname": "Monge",
  "age": 32
}
`

### Login
`
POST /login
{
  "email": "olivier@mail.com",
  "password": "bestPassw0rd"
}
`

## Generate module
`ng g module isth-form`

### Generate a component for the specified module
`ng g c -m itsh-form --selector=isth-form itsh-form/common/form`
