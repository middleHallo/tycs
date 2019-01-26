// pages/detail/detail.js
let config = require('../../utils/config.js')
let url = config.service.baseurl
let baseurl = config.service.baseurl
let request = require('../../utils/utilv1.0.js')
Page({
  /**
   * 页面的初始数据
   */
  data: {
    banner: [],
    product:{},
    jj:[],
    isBuy:false,
    payImg: config.payImg,
    sycount:99,
    buycount:1,
    id:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      id: options.id
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.loadDetail()
    this.getBanner()
  },

  /**
   * 加载详细信息
   */
  loadDetail:function(){
    let id = this.data.id
    let myurl = baseurl + 'goods/detail?goods_id=' + id
    let that = this
    request.gk_get(myurl, function (res) {
      if (res.data.status != 0) {
        request.gk_showToastNoIcon('网络出错啦，请重试!')
        return 0;
      }
      that.setData({
        product: res.data.data
      })
    })
  },

  /**
   * 加载轮播图
   */
  getBanner:function(){
    let id = this.data.id
    let myurl = baseurl + 'carousel?goods_id=' + id
    let that = this
    request.gk_get(myurl, function (res) {
      if (res.data.status != 0) {
        request.gk_showToastNoIcon('网络出错啦，请重试!')
        return 0;
      }
      that.setData({
        banner: res.data.data
      })
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * buybottom
   */
  buybottom:function(){
    let buyParams = []
    let title = this.data.product.title
    let money = this.data.product.money
    let count = this.data.buycount
    let img = this.data.payImg
    let one = {
      title:title,
      money:money,
      count:count,
      img:img
    }
    buyParams.push(one)
    wx.setStorageSync('buyparams', buyParams)
    wx.navigateTo({
      url: '/pages/uploadorder/uploadorder',
    })
  },

  /**
   * hiddenBuy
   */
  hiddenBuy:function(){
    this.setData({
      isBuy:false
    })
  },

  add:function(){
    let count = parseInt(this.data.buycount)
    this.setData({
      buycount:count +1 
    })

  },
  delete:function(){
    let count = parseInt(this.data.buycount)
    if(count > 1){
      this.setData({
        buycount: count - 1
      })
    }
  },

  /**
   * gotoCar
   */
  gotoCar:function(){
    wx.switchTab({
      url: '/pages/cars/cars',
    })
  },

  /**
   * addToCar
   */
  addToCar:function(){
    let wxurl = url + "cart/addCart"
    // 加入购物车的代码
    let id = this.data.id
    let userId = wx.getStorageSync('userId')
    let params = {
      "goods_id":id,
      "userId": userId
    }
    request.gk_post(wxurl, params,function(data){
      if(data.data.status !== "0"){
        request.gk_showToastNoIcon('网络出错，请稍后再试')
      }else{
        request.gk_showToastNoIcon('加入购物车成功')
      }
    })
  },

  /**
   * buyNow
   */
  buyNow:function(){
    this.setData({
      isBuy:true
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