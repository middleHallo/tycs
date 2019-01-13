// pages/cars/cars.js
var config = require('../../utils/config.js')
var host = config.host
var products = config.products
Page({
  /**
   * 页面的初始数据
   */
  data: {
    isSelected:false,
    isedit:false,
    isall:false,
    allprice:0,
    products: products
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 下面这句应在获取购物车数据之后进行执行
    this.hj()
  },

  /**
   * 计算商品总价格
   */
  hj:function(){
    let list = this.data.products
    let listlen = list.length
    let all = 0
    for(let i=0;i<listlen;i++){
      if(list[i].isSelected){
        all += parseInt(list[i].msj)
      }
    }

    this.setData({
      allprice:all
    })
  },

  /**
   * 选择商品
   * 每次选择完商品之后应重新计算价格
   */
  chooseproduct:function(e){
    let idx = e.currentTarget.dataset.idx
    let list = this.data.products
    let item = list[idx]
    item.isSelected = !item.isSelected
    this.setData({
      'products': list
    })
    this.hj()
  },

  /**
   * 全选商品
   * 每次选择完商品之后应重新计算价格
   */
  allin:function(){
    let isall = this.data.isall
    let isallval = !isall
    let list = this.data.products
    let listlen = list.length
    if(isall){
      for (let i = 0; i < listlen;i++){
        list[i].isSelected = false
      }
    }else{
      for (let i = 0; i < listlen; i++) {
        list[i].isSelected = true
      }
    }
    this.setData({
      isall: isallval,
      products: list
    })
    this.hj()
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