/**
 * 小程序配置文件
 */
// 此处服务器域名地址，用于生产环境
var host2 = 'http://47.106.210.58:8080/tytea/'
var cloudhost = 'cloud://tycs-produce-e60e3b.7479-tycs-produce-e60e3b'
// 
var config = {
  // 
  cloudhost: cloudhost,
  service: {
    baseurl: `${host2}`
  },
  products:[
    {
      title: '浓香型铁观音500克',
      desc: '新茶专享，买一送一',
      yj: '108',
      msj: '88',
      imgurl: `${cloudhost}/home/products/shangpin1.png`,
      counts: 2,
      isSelected: false
    },
    {
      title: '浓香型铁观音500克',
      desc: '新茶专享，买一送一',
      yj: '108',
      msj: '88',
      imgurl: `${cloudhost}/home/products/shangpin2.png`,
      counts: 3,
      isSelected: false
    },
    {
      title: '浓香型铁观音500克',
      desc: '新茶专享，买一送一',
      yj: '108',
      msj: '88',
      imgurl: `${cloudhost}/home/products/shangpin3.png`,
      counts: 1,
      isSelected: true
    },
    {
      title: '浓香型铁观音500克',
      desc: '新茶专享，买一送一',
      yj: '108',
      msj: '88',
      imgurl: `${cloudhost}/home/products/shangpin4.png`,
      counts: 1,
      isSelected: true
    }],
  products2:[
    {
      title: '明前头采九曲红梅15泡茶装 红茶的小清新 鲜醇蜜香',
      desc: '新茶专享，买一送一',
      yj: '108',
      msj: '88',
      imgurl: `${cloudhost}/home/products/shangpin1.png`,
      counts: 2,
      isSelected: false
    },
    {
      title: '浓香型铁观音500克',
      desc: '新茶专享，买一送一',
      yj: '108',
      msj: '68',
      imgurl: `${cloudhost}/home/products/shangpin2.png`,
      counts: 1,
      isSelected: false
    }
  ],
  jj:[
    `${cloudhost}/home/jj/jianjie1.png`,
    `${cloudhost}/home/jj/jianjie2.png`,
    `${cloudhost}/home/jj/jianjie3.png`
  ],
  search: `${cloudhost}/home/search.png`,
  mebackimg:`${cloudhost}/me/bk.png`,
  detailbanner:[
    `${cloudhost}/detail/banner/banner1.png`,
    `${cloudhost}/detail/banner/banner1.png`,
    `${cloudhost}/detail/banner/banner1.png`
  ],
  payImg: `${cloudhost}/detail/banner/banner1.png`,
  order: [
    [
      {
        title: '明前头采九曲红梅15泡茶装 红茶的小清新 鲜醇蜜香1',
        img: `${cloudhost}/home/products/shangpin1.png`,
        count: 2,
        price: 78
      },
      {
        title: '明前头采九曲红梅15泡茶装 红茶的小清新 鲜醇蜜香2',
        img: `${cloudhost}/home/products/shangpin2.png`,
        count: 3,
        price: 80
      }
    ],
    [
      {
        title: '浓香型铁观音500克',
        img: `${cloudhost}/home/products/shangpin1.png`,
        count: 1,
        price: 69
      },
      {
        title: '明前头采九曲红梅15泡茶装 红茶的小清新 鲜醇蜜香1',
        img: `${cloudhost}/home/products/shangpin2.png`,
        count: 5,
        price: 99
      },
      {
        title: '明前头采九曲红梅15泡茶装 红茶的小清新 鲜醇蜜香3',
        img: `${cloudhost}/home/products/shangpin3.png`,
        count: 2,
        price: 32
      }
    ]
  ]
}
module.exports = config