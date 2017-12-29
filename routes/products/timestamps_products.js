// ** Router decleration ** //
const Router = require('koa-router');
const router = new Router();

// ** Query declerations **//
const queries = require('../../db/queries');

// ** Table declerations ** //
const tables = require('../../db/tables');

const marko = require('koa-marko');

// ** Marko template/view declerations ** //
const singleProductTimestampTemplate = require('./templates/timestamp/index.marko');

// ** Explicitly tell router to use marko ** //
router.use(marko());

// Route prefix 'http://domain/api/v1/customers'
router.prefix('/api/v1/products/timestamps')

router.get('/:product_id', async (ctx) => {
  try {
    let selectReference = '*';

    let whereReference = await {
      product_id: parseInt(ctx.params.product_id)
    };

    const dataProductTimestamps = await queries.timestamps.getSingleTimestamp(
      tables.products.productsTimestampsTable,
      selectReference,
      whereReference
    );

    if (dataProductTimestamps.length) {
      ctx.render(singleProductTimestampTemplate, {
        status: 'success',
        timestamp: dataProductTimestamps
      });
    } else {
      ctx.status = 404;
      ctx.body = {
        status: 'error',
        message: 'That product\'s timestamps do not exist.'
      };
    }
  } catch (err) {
    console.log(err)
  }
})

module.exports = router;
