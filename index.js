const Koa = require('koa');
const bodyParser = require('koa-bodyparser');

const indexRoutes = require('./routes/index');

const customerRoutes = require('./routes/customers/customers');
const customerTimestampsRoutes = require('./routes/customers/timestamps_customers');

const productRoutes = require('./routes/products/products');
const productTimestampsRoutes = require('./routes/products/timestamps_products');

const invoiceRoutes = require('./routes/invoices/invoices');
const invoiceTimestampsRoutes = require('./routes/invoices/timestamps_invoices');

const lineItemRoutes = require('./routes/line-items/line_items');
const lineItemTimestampsRoutes = require('./routes/line-items/timestamps_line_items');

const app = new Koa();
const PORT = process.env.PORT || 1337;

app.use(bodyParser());

app.use(indexRoutes.routes());

app.use(customerRoutes.routes());
app.use(customerTimestampsRoutes.routes());

app.use(productRoutes.routes());
app.use(productTimestampsRoutes.routes());

app.use(invoiceRoutes.routes());
app.use(invoiceTimestampsRoutes.routes());

app.use(lineItemRoutes.routes());
app.use(lineItemTimestampsRoutes.routes());

const server = app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = server;
