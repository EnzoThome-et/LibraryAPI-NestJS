<h1> Library API </h1>

![e2f21593023da9958fab1dc0302a709d](https://user-images.githubusercontent.com/85764731/161664310-28847a0f-a5b9-4af7-9eb2-9abdfb93fbf8.gif)

### It is a web application that peforms CRUD operations.

## Some fields in main Model are:
+ codigo
+ nome
+ preco


## Technologies Used:

<table>
  <tr>
    <td>NestJs</td>
    <td>Sequelize</td>
    <td>MySql2</td>
  </tr>
  <tr>
    <td>8.0</td>
    <td>6.17</td>
    <td>2.3.3</td>
  </tr>
</table>

## Installation

```bash
$ npm install
```

## Configuration
In the project root create an .env file for the database connection and use your local environments
```bash
# Your MySql User
USER=user
# Your MySql Password
PASSWORD=123
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```
