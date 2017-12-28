// ** Router decleration ** //
const Router = require('koa-router');
const router = new Router();

// ** Query declerations **//
const queries = require('../../db/queries');

// ** Table declerations ** //
const tables = require('../../db/tables');

// Route prefix 'http://domain/api/v1/invoices'
router.prefix('/api/v1/invoices')

router.get('/:id/timestamps', async (ctx) => {
  try {
    let selectReference = '*';

    let whereReference = await {
      invoice_id: parseInt(ctx.params.id)
    };

    const dataInvoiceTimestamps = await queries.timestamps.getSingleTimestamp(
      tables.invoices.invoicesTimestampsTable,
      selectReference,
      whereReference
    );

    if (dataTimestamps.length) {
      ctx.body = {
        status: 'success',
        timestamp: dataInvoiceTimestamps
      };
    } else {
      ctx.status = 404;
      ctx.body = {
        status: 'error',
        message: 'That invoice\'s timestamps do not exist.'
      };
    }
  } catch (err) {
    console.log(err)
  }
})

module.exports = router;
