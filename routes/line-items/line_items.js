// ** Router decleration ** //
const Router = require('koa-router');
const router = new Router();

// ** Query declerations **//
const queries = require('../../db/queries');

// ** Table declerations ** //
const tables = require('../../db/tables');


const marko = require('koa-marko');

const allLineItemsTemplate = require('./templates/line-items/index.marko');
const singleLineItemTemplate = require('./templates/line-item/index.marko');
const singleLineItemCreateTemplate = require('./templates/create/index.marko');

router.use(marko());

// ** Router prefix decleration ** //
router.prefix('/api/v1/line-items')

// ** Router methods decleration ** //
// ** Router GET /create ** //
router.get('/create', async (ctx) => {
  try {
    ctx.render(singleLineItemCreateTemplate, {
      status: 'success'
    });
  } catch (err) {
    console.log(err)
  }
})

// ** Router methods decleration ** //
// ** Router GET / ** //
router.get('/', async (ctx) => {
  try {
    let selectReference = '*';

    const dataLineItems = await queries.objects.getAllObjects(
      tables.lineItems.lineItemsTable,
      selectReference
    );

    ctx.render(allLineItemsTemplate, {
      status: 'success',
      lineItems: dataLineItems
    });
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

    const dataLineItem = await queries.objects.getSingleObject(
      tables.lineItems.lineItemsTable,
      selectReference,
      whereReference
    );

    if (dataLineItem.length) {
      ctx.render(singleLineItemTemplate, {
        status: 'success',
        lineItem: dataLineItem
      });
    } else {
      ctx.status = 404;
      ctx.body = {
        status: 'error',
        message: 'That line item does not exist. Please retry your entry using another line item\'s id.'
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
    let insertReferenceLineItem = await ctx.request.body;

    const dataLineItem = await queries.objects.addObject(
      tables.lineItems.lineItemsTable,
      insertReferenceLineItem,
      returningReference
    );

    let insertReferenceTimestamps = await {
      line_item_id: dataLineItem[0]['id']
    };

    const dataTimestamps = await queries.timestamps.addTimestamps(
      tables.lineItems.lineItemsTimestampsTable,
      insertReferenceTimestamps,
      returningReference
    );

    if (dataLineItem.length && dataTimestamps.length) {
      ctx.status = 201;
      ctx.body = {
        status: 'success',
        lineItem: dataLineItem,
        timestamps: dataTimestamps
      };
    } else {
      ctx.status = 400;
      ctx.body = {
        status: 'error',
        message: 'Something went wrong. The system was unable to process the line item\'s information or was unable to add the line item period. Please try again and re-evaluate your entry fields.'
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

    let whereReferenceLineItem = await {
      id: parseInt(ctx.params.id)
    };


    let whereReferenceTimestamp = await {
      line_item_id: parseInt(ctx.params.id)
    };

    const dataLineItem = await queries.objects.updateObject(
      tables.lineItems.lineItemsTable,
      updateReference,
      whereReferenceLineItem,
      returningReference
    );

    const dataTimestamps = await queries.timestamps.updateTimestamps(
      tables.lineItems.lineItemsTimestampsTable,
      whereReferenceTimestamp,
      returningReference
    );

    if (dataLineItem.length && dataTimestamps.length) {
      ctx.status = 200;
      ctx.body = {
        status: 'success',
        lineItem: dataLineItem,
        timestamps: dataTimestamps
      };
    } else {
      ctx.status = 404;
      ctx.body = {
        status: 'error',
        message: 'That line item does not exist. Please re-evaluate your input and try again.'
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

    let whereReferenceLineItem = await {
      id: parseInt(ctx.params.id)
    };

    const dataLineItem = await queries.objects.deleteObject(
      tables.lineItems.lineItemsTable,
      whereReferenceLineItem,
      returningReference
    );

    let whereReferenceTimestamps = await {
      line_item_id: dataLineItem[0]['id']
    };

    const dataTimestamps = await queries.timestamps.deleteTimestamps(
      tables.lineItems.lineItemsTimestampsTable,
      whereReferenceTimestamps,
      returningReference
    );

    if (dataLineItem.length) {
      ctx.status = 200;
      ctx.body = {
        status: 'success',
        lineItem: dataLineItem
      };
    } else {
      ctx.status = 404;
      ctx.body = {
        status: 'error',
        message: 'That line item does not exist. Please re-evaluate your input and try again.'
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
