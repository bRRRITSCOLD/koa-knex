// ** Router decleration ** //
const Router = require('koa-router');
const router = new Router();

// ** Query declerations **//
const queries = require('../../db/queries');

// ** Table declerations ** //
const tables = require('../../db/tables');

// ** Router prefix decleration ** //
router.prefix('/api/v1/invoices')

// ** Router methods decleration ** //
// ** Router GET / ** //
router.get('/', async (ctx) => {
  try {
    let selectReference = '*';

    const dataInvoices = await queries.objects.getAllObjects(
      tables.invoices.invoicesTable,
      selectReference
    );

    ctx.body = {
      status: 'success',
      invoices: dataInvoices
    };
  } catch (err) {
    console.log(err)
  }
})


// ** Router GET /:id ** //
router.get('/:id', async (ctx) => {
  try {
    let selectReference = '*';

    let whereReference = await {
      id: parseInt(ctx.params.id)
    };

    const dataInvoice = await queries.objects.getSingleObject(
      tables.invoices.invoicesTable,
      selectReference,
      whereReference
    );

    if (dataInvoice.length) {
      ctx.body = {
        status: 'success',
        invoice: dataInvoice
      };
    } else {
      ctx.status = 404;
      ctx.body = {
        status: 'error',
        message: 'That invoice does not exist. Please retry your entry using another invoice\'s id.'
      };
    }
  } catch (err) {
    console.log(err)
  }
})


// ** Router POST / ** //
router.post('/', async (ctx) => {
  try {
    let returningReference = '*';
    let insertReferenceInvoice = await ctx.request.body;

    const dataInvoice = await queries.objects.addObject(
      tables.invoices.invoicesTable,
      insertReferenceInvoice,
      returningReference
    );

    let insertReferenceTimestamps = await {
      invoice_id: dataInvoice[0]['id']
    };

    const dataInvoiceTimestamps = await queries.timestamps.addTimestamps(
      tables.invoices.invoicesTimestampsTable,
      insertReferenceTimestamps,
      returningReference
    );

    if (dataInvoice.length && dataInvoiceTimestamps.length) {
      ctx.status = 201;
      ctx.body = {
        status: 'success',
        invoice: dataInvoice,
        timestamps: dataInvoiceTimestamps
      };
    } else {
      ctx.status = 400;
      ctx.body = {
        status: 'error',
        message: 'Something went wrong. The system was unable to process the invoice\'s information or was unable to add the invoice period. Please try again and re-evaluate your entry fields.'
      };
    }
  } catch (err) {
    ctx.status = 400;
    ctx.body = {
      status: 'error',
      message: err.message || 'Sorry, an error has occurred.'
    };
  }
})


// ** Router PUT /:id ** //
router.put('/:id', async (ctx) => {
  try {
    let returningReference = '*';
    let updateReference = await ctx.request.body;

    let whereReferenceInvoice = await {
      id: parseInt(ctx.params.id)
    };

    const dataInvoice = await queries.objects.updateObject(
      tables.invoices.invoicesTable,
      updateReference,
      whereReferenceInvoice,
      returningReference
    );

    let whereReferenceTimestamp = await {
      invoice_id: dataInvoice[0]['id']
    };

    const dataInvoiceTimestamps = await queries.timestamps.updateTimestamps(
      tables.invoices.invoicesTimestampsTable,
      whereReferenceTimestamp,
      returningReference
    );

    if (dataInvoice.length && dataInvoiceTimestamps.length) {
      ctx.status = 200;
      ctx.body = {
        status: 'success',
        invoice: dataInvoice,
        timestamps: dataInvoiceTimestamps
      };
    } else {
      ctx.status = 404;
      ctx.body = {
        status: 'error',
        message: 'That invoice does not exist. Please re-evaluate your input and try again.'
      };
    }
  } catch (err) {
    ctx.status = 400;
    ctx.body = {
      status: 'error',
      message: err.message || 'Sorry, an error has occurred.'
    };
  }
})


// ** Router DELETE /:id ** //
router.delete('/:id', async (ctx) => {
  try {
    let returningReference = '*';

    let whereReferenceInvoice = await {
      id: parseInt(ctx.params.id)
    };

    let whereReferenceTimestamps = await {
      id: parseInt(ctx.params.id)
    };

    const dataInvoice = await queries.objects.deleteObject(
      tables.invoices.invoicesTable,
      whereReferenceInvoice,
      returningReference
    );

    const dataInvoiceTimestamps = await queries.timestamps.deleteTimestamps(
      tables.invoices.invoicesTimestampsTable,
      whereReferenceTimestamps,
      returningReference
    );

    if (dataInvoice.length && !dataInvoiceTimestamps.length) {
      ctx.status = 200;
      ctx.body = {
        status: 'success',
        Invoice: dataInvoice
      };
    } else {
      ctx.status = 404;
      ctx.body = {
        status: 'error',
        message: 'That invoice does not exist. Please re-evaluate your input and try again.'
      };
    }
  } catch (err) {
    ctx.status = 400;
    ctx.body = {
      status: 'error',
      message: err.message || 'Sorry, an error has occurred.'
    };
  }
})

module.exports = router;
