// ** Router decleration ** //
const Router = require('koa-router');
const router = new Router();

// ** Query declerations **//
const queries = require('../../db/queries');

// ** Table declerations ** //
const tables = require('../../db/tables');

// ** Router prefix decleration ** //
router.prefix('/api/v1/customers')



// ** Router methods decleration ** //
// ** Router GET / ** //
router.get('/', async (ctx) => {
  try {
    let selectReference = '*';

    const dataCustomers = await queries.objects.getAllObjects(
      tables.customers.customersTable,
      selectReference
    );

    ctx.body = {
      status: 'success',
      customers: dataCustomers
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

    const dataCustomer = await queries.objects.getSingleObject(
      tables.customers.customersTable,
      selectReference,
      whereReference
    );

    if (dataCustomer.length) {
      ctx.body = {
        status: 'success',
        customer: dataCustomer
      };
    } else {
      ctx.status = 404;
      ctx.body = {
        status: 'error',
        message: 'That customer does not exist. Please retry your entry using another customer\'s id.'
      };
    }
  } catch (err) {
    console.log(err)
  }
})


// ** Router GET /:id/invoices ** //
router.get('/:id/invoices', async (ctx) => {
  try {

    let selectReference = [
      'invoices.customer_id',
      'invoices.id',
      'invoices.line_items_total',
      'invoices.additional_fees',
      'invoices.tax_rate',
      'invoices.sub_total'
    ];

    let whereReference = await {
      customer_id: parseInt(ctx.params.id)
    };

    let columnReferenceTableOne = await 'customers.id';
    let columnReferenceTableTwo = await 'invoices.customer_id';

    const dataCustomerInvoices = await queries.relationals.joinRelatedObjects(
      tables.invoices.invoicesTable,
      whereReference,
      tables.customers.customersTable,
      columnReferenceTableOne,
      columnReferenceTableTwo,
      selectReference
    );

    if (dataCustomerInvoices.length) {
      ctx.body = {
        status: 'success',
        customerInvoices: dataCustomerInvoices
      };
    } else {
      ctx.status = 404;
      ctx.body = {
        status: 'error',
        message: 'That customer does not have any current or past invoices.'
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
    let insertReferenceCustomer = await ctx.request.body;

    const dataCustomer = await queries.objects.addObject(
      tables.customers.customersTable,
      insertReferenceCustomer,
      returningReference
    );

    let insertReferenceTimestamps = await {
      customer_id: dataCustomer[0]['id']
    };

    const dataCustomerTimestamps = await queries.timestamps.addTimestamps(
      tables.customers.customersTimestampsTable,
      insertReferenceTimestamps,
      returningReference
    );

    if (dataCustomer.length && dataCustomerTimestamps.length) {
      ctx.status = 201;
      ctx.body = {
        status: 'success',
        customer: dataCustomer,
        timestamps: dataCustomerTimestamps
      };
    } else {
      ctx.status = 400;
      ctx.body = {
        status: 'error',
        message: 'Something went wrong. The system was unable to process the customer\'s information or was unable to add the customer period. Please try again and re-evaluate your entry fields.'
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

    let whereReferenceCustomer = await {
      id: parseInt(ctx.params.id)
    };

    const dataCustomer = await queries.objects.updateObject(
      tables.customers.customersTable,
      updateReference,
      whereReferenceCustomer,
      returningReference
    );

    let whereReferenceTimestamp = await {
      customer_id: dataCustomer[0]['id']
    };

    const dataCustomerTimestamps = await queries.timestamps.updateTimestamps(
      tables.customers.customersTimestampsTable,
      whereReferenceTimestamp,
      returningReference
    );

    if (dataCustomer.length && dataCustomerTimestamps.length) {
      ctx.status = 200;
      ctx.body = {
        status: 'success',
        customer: dataCustomer,
        timestamps: dataCustomerTimestamps
      };
    } else {
      ctx.status = 404;
      ctx.body = {
        status: 'error',
        message: 'That customer does not exist. Please re-evaluate your input and try again.'
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

    let whereReferenceCustomer = await {
      id: parseInt(ctx.params.id)
    };

    let whereReferenceTimestamps = await {
      id: parseInt(ctx.params.id)
    };

    const dataCustomer = await queries.objects.deleteObject(
      tables.customers.customersTable,
      whereReferenceCustomer,
      returningReference
    );

    const dataCustomerTimestamps = await queries.timestamps.deleteTimestamps(
      tables.customers.customersTimestampsTable,
      whereReferenceTimestamps,
      returningReference
    );

    if (dataCustomer.length && !dataCustomerTimestamps.length) {
      ctx.status = 200;
      ctx.body = {
        status: 'success',
        customer: dataCustomer
      };
    } else {
      ctx.status = 404;
      ctx.body = {
        status: 'error',
        message: 'That customer does not exist. Please re-evaluate your input and try again.'
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
