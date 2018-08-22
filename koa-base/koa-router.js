const Koa = require('koa')
const Router = require('koa-router')
const app = new Koa()
//全局写法
// const router = new Router({
//   prefix: '/connie'
// })
// router.get('/', function (ctx, next) {
//   ctx.body = "index page"
// }).get('/todo',(ctx, next)=>{
//   ctx.body="Todo page"
// });

//不同路由层级
const home = new Router()

home.get('/connie', function (ctx, next) {
  ctx.body = ctx.query
}).get('/todo',(ctx, next)=>{
  ctx.body="home Todo page"
})

const page = new Router()
page.get('/connie', function (ctx, next) {
  ctx.body = ctx.query
}).get('/todo',(ctx, next)=>{
  ctx.body="page Todo page"
})

let router = new Router()
router.use('/home', home.routes()).use(home.allowedMethods())
router.use('/page', page.routes()).use(page.allowedMethods())

app.use(router.routes())
   .use(router.allowedMethods())

app.listen(3000, () => {
  console.log('服务已经启动，请访问http://127.0.0.1:3000')
})
