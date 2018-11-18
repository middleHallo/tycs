// pages/home/home.js
var config = require('../../utils/config.js')
var banners = config.banners
var jj = config.jj
var host = config.host
Page({

  /**
   * 页面的初始数据
   */
  data: {
    banners: banners,
    jj: jj,
    products:[
      {
        title:'浓香型铁观音500克',
        desc:'新茶专享，买一送一',
        yj:'108',
        msj:'88',
        imgurl:`${host}/tycs/img/products/shangpin1.png`
      },
      {
        title: '浓香型铁观音500克',
        desc: '新茶专享，买一送一',
        yj: '108',
        msj: '88',
        imgurl: `${host}/tycs/img/products/shangpin2.png`
      },
      {
        title: '浓香型铁观音500克',
        desc: '新茶专享，买一送一',
        yj: '108',
        msj: '88',
        imgurl: `${host}/tycs/img/products/shangpin3.png`
      },
      {
        title: '浓香型铁观音500克',
        desc: '新茶专享，买一送一',
        yj: '108',
        msj: '88',
        imgurl: `${host}/tycs/img/products/shangpin4.png`
      }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(host)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})