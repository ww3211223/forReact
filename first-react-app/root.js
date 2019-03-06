
const render = require('./lib/render');
const logger = require('koa-logger');
const router = require('koa-router')();
const koaBody = require('koa-body');

const Koa = require('koa');
const app = module.exports = new Koa();

app.use(logger());
app.use(render);
app.use(koaBody());

router.get('/todoList',todoList);

app.use(router.routes());

async function todoList(ctx) {
    await ctx.render('todoList.index');
}

// listen

if (!module.parent) app.listen(3001);
