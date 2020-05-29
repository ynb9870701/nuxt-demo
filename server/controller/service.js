const axios = require('axios')

module.exports = class ServiceController {

  /**
   * 
   * @param {*} ctx 
   */
  static async getAssets(ctx) {
    // 123.207.24.151:8080 iframe 地址
    console.log('ServiceController -> getAssets -> ctx', ctx.request.url)
    let ret = {}
    ret = ctx.request.url
    ctx.body = ret
  }
}