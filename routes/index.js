const Router = require('koa-router');
const router = new Router();

// ** Query declerations **//
const queries = require('../db/queries');

// ** Table declerations ** //
const tables = require('../db/tables');

router.get('/', async (ctx) => {
    ctx.body = {
      status: 'success'
    };
  })
module.exports = router;
