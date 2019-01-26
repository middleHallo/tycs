// pages/orderDetail/orderDetail.js
let config = require('../../utils/config.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    addressObj: {
      userName:'张三',
      telNumber:'18620884621',
      provinceName:'广东省',
      cityName:'广州市',
      countyName:'天河区',
      detailInfo:'车陂西华社'
    },
    products: config.products2
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * addAdress
   */
  addAddress: function () {
    let that = this
    wx.chooseAddress({
      success: function (resultRes) {
        that.setData({
          addressObj: resultRes,
          isadd: true
        })
      },
      fail: function () {

      },
      complete: function () {

      }
    })
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