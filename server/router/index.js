const Router = require('koa-router') // koa 路由
const {
  service
} = require('../controller')

const apiRouter = new Router({ prefix: '/api' })

apiRouter.get('*', service.getAssets)

module.exports = {
  api: apiRouter
}