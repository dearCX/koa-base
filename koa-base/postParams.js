const Koa = require('koa')
const app = new Koa()

function parsePostData(ctx) {
  return new Promise((resolve, reject) => {
    try{
      let postdata="";
      ctx.req.on('data', (data)=>{
        postdata += data
      })
      ctx.req.addListener("end", function(){
        resolve(postdata)
      })
    } catch(error) {
      reject(error)
    }
  })
}

function parseQueryStr(queryStr) {
  let queryData = {}
  let queryStrList = queryStr.split('&')
  queryStrList.map(q => {
    let list = q.split('=')
    queryData[list[0]] = list[1]
  })
  return queryData
}

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
    let postData = await parsePostData(ctx)
    ctx.body = parseQueryStr(postData)
  } else {
    ctx.body= '<h1>页面不存在！</h1>'
  }
})
app.listen(3000, () => {
  console.log('服务已经在3000端口启动')
})