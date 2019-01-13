// pages/home/home.js
var config = require('../../utils/config.js')
let request = require('../../utils/utilv1.0.js')
let baseurl = config.service.baseurl
var jj = config.jj
var search = config.search
Page({

  /**
   * 页面的初始数据
   */
  data: {
    jj: jj,
    search: search,
    products:[],
    banners:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // this.getWxLoginCode()
    this.loadRotation()
    this.loadGoodProducts()
  },
  /**
   * getWxLoginCode
   */
  getWxLoginCode:function(){
    wx.login({
      success:function(res){
        console.warn('注意：每个code只能使用一次，code ======= ')
        console.log(res.code)
      },
      fail:function(){
        request.gk_showToastNoIcon('登录出错')
      }
    })
  },

  /**
   * loadRotation
   */
  loadRotation:function(){
    let that = this
    let url = baseurl + 'carousel?recommend_flag=Y'
    request.gk_get(url,function(e){
      if(e.data.status != 0){
        request.gk_showToastNoIcon('网络出错,请重试!')
        return 0;
      }
      that.setData({
        banners:e.data.data
      })
    })
  },

  /**
   * loadGoodProducts
   */
  loadGoodProducts:function(){
    let url = baseurl +'goods?recommend_flag=Y'
    let that = this
    request.gk_get(url,function(e){
      if(e.data.status != 0){
        request.gk_showToastNoIcon('网络出错，请重试!')
        return 0;
      }
      that.setData({
        products:e.data.data
      })
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
   * 跳转详情
   */
  gotodetail:function(e){
    let idx = e.currentTarget.dataset.idx
    let item = this.data.products[idx]
    let myurl = '../detail/detail?id=' + item.id
    wx.navigateTo({
      url: myurl,
    })
  },

  /**
   * 跳转搜索也页
   */
  gotoSearch:function(){
    wx.navigateTo({
      url: '/pages/search/search',
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