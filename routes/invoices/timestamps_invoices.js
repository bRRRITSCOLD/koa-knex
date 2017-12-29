// ** Router decleration ** //
const Router = require('koa-router');
const router = new Router();

// ** Query declerations **//
const queries = require('../../db/queries');

// ** Table declerations ** //
const tables = require('../../db/tables');

// ** Marko decleration ** //
const marko = require('koa-marko');

// ** Marko template/view declerations ** //
const singleInvoiceTimestampTemplate = require('./templates/timestamp/index.marko');

// ** Explicitly tell router to use marko ** //
router.use(marko());

// Route prefix 'http://domain/api/v1/invoices'
router.prefix('/api/v1/invoices/timestamps')

router.get('/:invoice_id', async (ctx) => {
  try {
    let selectReference = '*';

    let whereReference = await {
      invoice_id: parseInt(ctx.params.invoice_id)
    };

    const dataInvoiceTimestamps = await queries.timestamps.getSingleTimestamp(
      tables.invoices.invoicesTimestampsTable,
      selectReference,
      whereReference
    );

    if (dataInvoiceTimestamps.length) {
      ctx.render(singleInvoiceTimestampTemplate, {
        status: 'success',
        timestamp: dataInvoiceTimestamps
      });
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
