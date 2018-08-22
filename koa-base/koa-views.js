const Koa = require('koa')
const views = require('koa-views')
const path = require('path')
const app = new Koa()

// 加载模板引擎
app.use(views(path.join(__dirname), './view', {
  extension: 'ejs'
}))

app.use( async ( ctx ) => {
  let title = 'hello koa2'
  await ctx.render('index', {
    title
  })
})
// app.use(async(ctx) => {
//   let title = 'hello koa2'
//   let todo = 'hello todo'
//   await ctx.render('index', {
//     title
//   }).render('todo', {
//     todo
//   })
// })
app.listen(3000, () => {
  console.log('服务已经启动，请访问http://127.0.0.1:3000')
})