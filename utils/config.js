/**
 * 小程序配置文件
 */
// 此处服务器域名地址，用于生产环境
// var host = 'https://xcxa.guokehuyu.com'
// var host = 'http://192.168.0.250'
var host = 'http://192.168.1.104'
// 
// 开发环境用本地接口地址
// var host = 'http://192.168.1.110'
var config = {
  // 
  host: host,
  service: {
    requesturl: `${host}/tycs/`
  },
  products:[
    `${host}/tycs/img/products/shangpin1.png`,
    `${host}/tycs/img/products/shangpin2.png`,
    `${host}/tycs/img/products/shangpin3.png`,
    `${host}/tycs/img/products/shangpin4.png`
  ],
  banners:[
    `${host}/tycs/img/banner/banner_02.png`,
    `${host}/tycs/img/banner/banner_02.png`
  ],
  jj:[
    `${host}/tycs/img/jj/jianjie1.png`,
    `${host}/tycs/img/jj/jianjie2.png`,
    `${host}/tycs/img/jj/jianjie3.png`
  ],
  search: `${host}/tycs/img/home/search.png`
}
module.exports = config