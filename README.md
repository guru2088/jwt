# NODEJS-JWT-EXAMPLE
This project is a sample implementation of an authentication system that uses JSON Web Token to manage users' login data in Node.js web server.

Express.js, Mongoose, ES6 Syntax is used in this project.

## Getting Started
### Prerequisites
- node.js 6.9.x
- npm 3.x

### Installing & Configuration
1) Install dependencies
```
npm install
```
### DEV server
```
npm run dev
```

### Run the server
```
npm start
```

## APIs
#### Token
`POST /token`
```
{
    username,
    password
}
```
**Description**: generates a new token if credentials match and returns an token. username and password are default as "admin" and "admin" inside code

#### About
`GET /about`
```
{
    token (authorization)
}
```
**Description**: returns hello world page if token valid
