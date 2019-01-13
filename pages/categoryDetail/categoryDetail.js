// pages/categoryDetail/categoryDetail.js
let config = require('../../utils/config.js')
let baseurl = config.service.baseurl
let request = require('../../utils/utilv1.0.js')
var products = config.products
Page({

  /**
   * 页面的初始数据
   */
  data: {
    products:products,
    id:'1'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      id:options.id
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.getData()
  },

  /**
   * getData
   */
  getData:function(){
    let id = this.data.id
    let myurl = baseurl + 'goods?category_id=' + id
    request.gk_get(myurl,function(res){
      console.log(res)
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 跳转商品详情
   */
  goProductDetail:function(row){

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