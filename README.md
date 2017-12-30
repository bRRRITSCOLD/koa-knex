# koa-knex API

Rough company customers, products, line items, and invoices back-end API using Koa.js, knex.js, pg.js and PostgreSQL. Seeds are included and resemble a catering companies input.

### Getting Started

A) Make sure that PostgreSQL is installed on your machine. My suggestion would be to use postgres through Homebrew, as this was developed on a Mac.

B) Navigate to application's directory and install dependencies.

```bash
npm install
```

C) Configure knexfile.js to use a current PostgreSQL, or create a database with the name blainerichardson to simply trial run the application.

D) Run knex migrations to create all necessary tables.

```bash
knex migrate:latest
```

E) If you wish you may seed the database with given data, you may choose to fill it with your own, or start from scratch.

```bash
knex seed:run
```

F) Start the server with npm.

```bash
npm Start
```
G) You should see the following, if you do not and encounter an error please raise an issue or retry from Step One.

```bash
> server@0.0.0 start path/to/directory/koa-knex
> node ./index.js

Server listening on port: 1337
```

 H) Now using your favorite browser you may travel to https://localhost:1337 and use any of the endpoints given below. I suggest using Postman as it allows the ability to easily switch between all the built-in http method urls.

Customers:

* GET: https://localhost:1337/api/v1/customers
* GET: https://localhost:1337/api/v1/customers?
* GET: https://localhost:1337/api/v1/customers/create
* GET: https://localhost:1337/api/v1/customers/search
* GET: https://localhost:1337/api/v1/customers/search-query?id=:id
* GET: https://localhost:1337/api/v1/customers/:id
* GET: https://localhost:1337/api/v1/customers/:id/invoices
* GET: https://localhost:1337/api/v1/customers/:id/timestamps
* POST: https://localhost:1337/api/v1/customers
* PUT: https://localhost:1337/api/v1/customers/:id
* DELETE: https://localhost:1337/api/v1/customers/:id

Products:

* GET: https://localhost:1337/api/v1/products
* GET: https://localhost:1337/api/v1/products?
* GET: https://localhost:1337/api/v1/products/create
* GET: https://localhost:1337/api/v1/products/search
* GET: https://localhost:1337/api/v1/products/search-query?id=:id
* GET: https://localhost:1337/api/v1/products/:id
* GET: https://localhost:1337/api/v1/products/:id/timestamps
* POST: https://localhost:1337/api/v1/products
* PUT: https://localhost:1337/api/v1/products/:id
* DELETE: https://localhost:1337/api/v1/products/:id

Line Items:

* GET: https://localhost:1337/api/v1/line-items
* GET: https://localhost:1337/api/v1/line-items?
* GET: https://localhost:1337/api/v1/line-items/create
* GET: https://localhost:1337/api/v1/line-items/search
* GET: https://localhost:1337/api/v1/line-items/search-query?id=:id
* GET: https://localhost:1337/api/v1/line-items/:id
* GET: https://localhost:1337/api/v1/line-items/:id/timestamps
* POST: https://localhost:1337/api/v1/line-items
* PUT: https://localhost:1337/api/v1/line-items/:id
* DELETE: https://localhost:1337/api/v1/line-items/:id

Invoices:

* GET: https://localhost:1337/api/v1/invoices
* GET: https://localhost:1337/api/v1/invoices?
* GET: https://localhost:1337/api/v1/invoices/create
* GET: https://localhost:1337/api/v1/invoices/search
* GET: https://localhost:1337/api/v1/invoices/search-query?id=:id
* GET: https://localhost:1337/api/v1/invoices/:id
* GET: https://localhost:1337/api/v1/invoices/:id/timestamps
* POST: https://localhost:1337/api/v1/invoices
* PUT: https://localhost:1337/api/v1/invoices/:id
* DELETE: https://localhost:1337/api/v1/invoices/:id
