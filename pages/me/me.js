// pages/me/me.js
var config = require('../../utils/config.js')
var host = config.host
var mebackimg = config.mebackimg
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bkurl: mebackimg,
    menu:[
      {
        url:'/images/me/dfk.png',
        title:'待付款'
      },
      {
        url: '/images/me/dfh.png',
        title: '待发货'
      },
      {
        url: '/images/me/yfh.png',
        title: '已发货'
      },
      {
        url: '/images/me/ywc.png',
        title: '已完成'
      },
      {
        url: '/images/me/wddz.png',
        title: '我的地址'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
   * gotoOrder
   */
  gotoOrder:function(e){
    let idx = e.currentTarget.dataset.idx
    let url = '/pages/order/order?idx=' + idx
    wx.navigateTo({
      url: url,
    })
  }, 

  /**
   * 扫描条形码
   * 此处为测试内容，忽略即可
   */
  scanTXM:function(){
    wx.scanCode({
      success:function(res){
        console.log(res)
      }
    })
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