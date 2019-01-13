// pages/order/order.js
let config = require('../../utils/config.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    csel:0,
    message:"",
    munulist:[
      {
        "menu": "待付款",
        "message":"等待买家付款",
      },
      {
        "menu": "待发货",
        "message": "等待卖家发货",
      },
      {
        "menu": "已发货",
        "message": "卖家已发货",
      },
      {
        "menu": "已完成",
        "message": "订单已完成"
      }
    ],
    willPay:[],
    willSend:[],
    hadSend:[],
    hadFinish:[],
    orderList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let idx = parseInt(options.idx)
    this.setMenu(idx)
    this.setOrderData()
  },

  /**
   * 设置数据(假数据)
   */
  setOrderData:function(){
    this.setData({
      orderList:config.order
    })
  },

  /**
   * 设置正确的菜单
   */
  setMenu:function(idx){
    /**
    * 设置menu 
    */
    let current = this.data.munulist[idx]
    let message = current.message
    this.setData({
      csel: idx,
      message: message
    })
    this.getData(idx)
  },

  /**
   * getList
   */
  getList:function(e){
    
    let idx = e.currentTarget.dataset.idx
    let current = this.data.munulist[idx]
    let message = current.message
    this.setData({
      csel:idx,
      message:message
    })
    this.getData(idx)
  },

  /**
  * getData 请求数据
  */
  getData:function(idx){
    let len = this.getListLength(idx)
    if (len>0){
      this.setSelectedData(idx)
      return 0
    }

    /**
     * 数据请求
     */
    
  },

  /**
   * setData 如果有缓存数据，直接写入数据，不再请求
   */
  setSelectedData:function(idx){

  },

  // 判断数据是否有相应的数据
  // 有则读取缓存数据写入
  getListLength:function(idx){
    switch (idx) {
      case 0:
        let willPay = this.data.willPay
        return willPay.length
        break;
      case 1:
        let willSend = this.data.willSend
        return willSend.length
        break;
      case 2:
        let hadSend = this.data.hadSend
        return hadSend.length
        break;
      case 3:
        let hadFinish = this.data.hadFinish
        return hadFinish.length
        break;
      default:
        return 0;
        break;
    }
  },

  /**
   * goDetail 跳转详情
   */
  goDetail:function(event){
    let csel = this.data.csel
    let idx = event.currentTarget.dataset.idx
    // 获取到订单号

    // 跳转
    wx.navigateTo({
      url: '../orderDetail/orderDetail',
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