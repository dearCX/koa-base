const Koa = require('koa')
const app = new Koa()
app.use( async ( ctx ) => {
  // 获取GET请求,从request中获得
  let url = ctx.url
  let request = ctx.request
  let reqQuery = request.query
  let reqQueryString = request.querystring
  // 得到GET请求，从上下文中获取
  let ctxQuery = ctx.query
  let ctxQueryString = ctx.querystring
  ctx.body={
    url,
    reqQuery,
    reqQueryString,
    ctxQuery,
    ctxQueryString
  }
})

app.listen(3000)
console.log('[demo] start-quick is starting at port 3000    ')