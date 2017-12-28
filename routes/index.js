const Router = require('koa-router');
const router = new Router();

const marko = require('koa-marko');
const template = require('./template.marko');
// ** Query declerations **//
const queries = require('../db/queries');

// ** Table declerations ** //
const tables = require('../db/tables');

router.use(marko());

router.get('/', async (ctx) => {
  try {
    let selectReference = '*';

    const dataCustomers = await queries.objects.getAllObjects(
      tables.customers.customersTable,
      selectReference
    );

    ctx.render(template, {customer: dataCustomers}) ;
  } catch (err) {
    console.log(err)
  }
})
module.exports = router;
