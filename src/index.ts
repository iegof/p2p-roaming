import * as Koa from 'koa';
import * as Router from 'koa-router';
import roamingrouter from './routes/roaming';
import bodyparser = require('koa-bodyparser');
import logger = require('koa-logger');
import * as dotenv from "dotenv";

const app = new Koa();
const router = new Router();

app.use(logger());
app.use(bodyparser());
dotenv.config()
router.get('/', async (ctx) => {
    ctx.body = 'API v 0.1.0';
});
router.get('/data', async (ctx) => {
    ctx.body = ctx.headers;
});
router.post('/data', async (ctx) => {
    ctx.body = process.env.ROAMING_URL;
});

app.use(router.routes());
app.use(roamingrouter.routes());
app.listen(808);


console.log('Server UP')