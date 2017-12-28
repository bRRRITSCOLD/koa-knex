// ** Router decleration ** //
const Router = require('koa-router');
const router = new Router();

// ** Query declerations **//
const queries = require('../../db/queries');

// ** Table declerations ** //
const tables = require('../../db/tables');

// Route prefix 'http://domain/api/v1/invoices'
router.prefix('/api/v1/line-items')

router.get('/:id/timestamps', async (ctx) => {
  try {
    let selectReference = '*';

    let whereReference = await {
      line_item_id: parseInt(ctx.params.id)
    };

    const dataLineItemTimestamps = await queries.timestamps.getSingleTimestamp(
      tables.lineItems.lineItemsTimestampsTable,
      selectReference,
      whereReference
    );
    if (dataLineItemTimestamps.length) {
      ctx.body = {
        status: 'success',
        timestamp: dataLineItemTimestamps
      };
    } else {
      ctx.status = 404;
      ctx.body = {
        status: 'error',
        message: 'That line item\'s timestamps do not exist.'
      };
    }
  } catch (err) {
    console.log(err)
  }
})

module.exports = router;
