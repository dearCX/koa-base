const Koa = require('koa')
const app = new Koa()
const bodyParser = require('koa-bodyparser')
app.use(bodyParser())
app.use(async(ctx) => {
  if(ctx.url === '/' && ctx.method === 'GET'){
    let html =`
        <h1>Koa2 request post demo</h1>
        <form method="POST"  action="/">
            <p>userName</p>
            <input name="userName" /> <br/>
            <p>age</p>
            <input name="age" /> <br/>
            <p>webSite</p>
            <input name='webSite' /><br/>
            <button type="submit">submit</button>
        </form>
    `;
    ctx.body =html;
  //当请求时POST请求时
  } else if (ctx.url === '/' && ctx.method === 'POST') {
    ctx.body = ctx.request.body
  } else {
    ctx.body= '<h1>页面不存在！</h1>'
  }
})
app.listen(3000, () => {
  console.log('服务已经启动，请访问http://127.0.0.1:3000')
})