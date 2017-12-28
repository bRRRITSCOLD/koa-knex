// ** Router decleration ** //
const Router = require('koa-router');
const router = new Router();

// ** Query declerations **//
const queries = require('../../db/queries');

// ** Table declerations ** //
const tables = require('../../db/tables');

const marko = require('koa-marko');

const singleProductTemplate = require('./templates/product.marko');

router.use(marko());

// ** Router prefix decleration ** //
router.prefix('/api/v1/products')

// ** Router methods decleration ** //
// ** Router GET / ** //
router.get('/', async (ctx) => {
  try {
    let selectReference = '*';

    const dataProducts = await queries.objects.getAllObjects(
      tables.products.productsTable,
      selectReference
    );

    ctx.body = {
      status: 'success',
      products: dataProducts
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

    const dataProduct = await queries.objects.getSingleObject(
      tables.products.productsTable,
      selectReference,
      whereReference
    );
    if (dataProduct.length) {
      ctx.render(singleProductTemplate, {
        status: 'success',
        product: dataProduct
      });
    } else {
      ctx.status = 404;
      ctx.body = {
        status: 'error',
        message: 'That product does not exist. Please retry your entry using another product\'s id.'
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
    let insertReferenceProduct = await ctx.request.body;

    const dataProduct = await queries.objects.addObject(
      tables.products.productsTable,
      insertReferenceProduct,
      returningReference
    );

    let insertReferenceTimestamps = await {
      product_id: dataProduct[0]['id']
    };

    const dataProductTimestamps = await queries.timestamps.addTimestamps(
      tables.products.productsTimestampsTable,
      insertReferenceTimestamps,
      returningReference
    );

    if (dataProduct.length && dataProductTimestamps.length) {
      ctx.status = 201;
      ctx.body = {
        status: 'success',
        product: dataProduct,
        timestamps: dataProductTimestamps
      };
    } else {
      ctx.status = 400;
      ctx.body = {
        status: 'error',
        message: 'Something went wrong. The system was unable to process the product\'s information or was unable to add the product period. Please try again and re-evaluate your entry fields.'
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

    let whereReferenceProduct = await {
      id: parseInt(ctx.params.id)
    };

    const dataProduct = await queries.objects.updateObject(
      tables.products.productsTable,
      updateReference,
      whereReferenceProduct,
      returningReference
    );

    let whereReferenceTimestamp = await {
      product_id: dataProduct[0]['id']
    };

    const dataProductTimestamps = await queries.timestamps.updateTimestamps(
      tables.products.productsTimestampsTable,
      whereReferenceTimestamp,
      returningReference
    );
    if (dataProduct.length && dataProductTimestamps.length) {
      ctx.status = 200;
      ctx.body = {
        status: 'success',
        product: dataProduct,
        timestamps: dataProductTimestamps
      };
    } else {
      ctx.status = 404;
      ctx.body = {
        status: 'error',
        message: 'That product does not exist. Please re-evaluate your input and try again.'
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

    const dataProduct = await queries.objects.deleteObject(
      tables.products.productsTable,
      whereReferenceInvoice,
      returningReference
    );

    let whereReferenceTimestamps = await {
      product_id: dataProduct[0]['id']
    };

    const dataProductTimestamps = await queries.timestamps.deleteTimestamps(
      tables.products.productsTimestampsTable,
      whereReferenceTimestamps,
      returningReference
    );

    if (dataProduct.length && !dataProductTimestamps.length) {
      ctx.status = 200;
      ctx.body = {
        status: 'success',
        invoice: dataProduct
      };
    } else {
      ctx.status = 404;
      ctx.body = {
        status: 'error',
        message: 'That product does not exist. Please re-evaluate your input and try again.'
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
