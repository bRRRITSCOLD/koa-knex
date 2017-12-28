// ** Router decleration ** //
const Router = require('koa-router');
const router = new Router();

// ** Query declerations **//
const queries = require('../../db/queries');

// ** Table declerations ** //
const tables = require('../../db/tables');

// Route prefix 'http://domain/api/v1/customers'
router.prefix('/api/v1/customers')

router.get('/:id/timestamps', async (ctx) => {
  try {
    let selectReference = '*';

    let whereReference = await {
      customer_id: parseInt(ctx.params.id)
    };

    const dataCustomerTimestamps = await queries.timestamps.getSingleTimestamp(
      tables.customers.customersTimestampsTable,
      selectReference,
      whereReference
    );

    if (dataCustomerTimestamps.length) {
      ctx.body = {
        status: 'success',
        timestamp: dataCustomerTimestamps
      };
    } else {
      ctx.status = 404;
      ctx.body = {
        status: 'error',
        message: 'That customer\'s timestamps do not exist.'
      };
    }
  } catch (err) {
    console.log(err)
  }
})

module.exports = router;
