// pages/categoryDetail/categoryDetail.js
let config = require('../../utils/config.js')
let baseurl = config.service.baseurl
let request = require('../../utils/utilv1.0.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    products:[],
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
    let that = this
    request.gk_get(myurl,function(res){
      if(res.data.status !== "0"){
        request.gk_showToastNoIcon('网络出错，请重试')
        return 0;
      }
      let dataArr = res.data.data

      if (dataArr.length === 0){
        request.gk_showToastNoIcon('暂无更多数据，敬请期待！')
        return 0;
      }
      that.setData({
        products:res.data.data
      })
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
    let idx = row.currentTarget.dataset.idx
    let data = this.data.products[idx]
    let id = data.id
    let myurl = "../detail/detail?id=" + id
    wx.navigateTo({
      url: myurl,
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