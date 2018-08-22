// ctx.cookies.get(name,[optins]):读取上下文请求中的cookie。
// ctx.cookies.set(name,value,[options])：在上下文中写入cookie。
// domain：写入cookie所在的域名
// path：写入cookie所在的路径
// maxAge：Cookie最大有效时长
// expires：cookie失效时间
// httpOnly:是否只用http请求中获得
// overwirte：是否允许重写
const Koa = require('koa')
const app = new Koa()
app.use(async(ctx) => {
  if(ctx.url=== '/index'){
    ctx.cookies.set(
      'MyName','connie', {
        domain: '127.0.0.1',
        path: '/index',
        maxAge: 3600*24*30,
        expires: new Date('2018-12-31'),
        httpOnly: false,
        overwirte: false
      }
    );
    ctx.body = 'cookie is ok'
  } else{
    if (ctx.cookies.get('MyName')) {
      ctx.body = 'cookie is '+ ctx.cookies.get('MyName')
    } else {
      ctx.body = 'cookie is none'
    }
  }
})
app.listen(3000, () => {
  console.log('服务已经启动，请访问http://127.0.0.1:3000')
})