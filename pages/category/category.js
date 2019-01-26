// pages/category/category.js
let request = require('../../utils/utilv1.0.js')
let config = require('../../utils/config.js')
let baseurl = config.service.baseurl
Page({

  /**
   * 页面的初始数据
   */
  data: {
    categories:[]
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
    this.getCategoryList()
  },

  /**
   * getCategoryList
   */
  getCategoryList:function(){
    let url = baseurl + 'category'
    let that = this
    request.gk_get(url,function(res){
      if(res.data.status != 0){
        request.gk_showToastNoIcon('网络出错，请重试!')
        return 0;
      }
      that.setData({
        categories:res.data.data
      })
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 跳转分类详情
   */
  gotoCategoryDetail:function(row){
    let idx = row.currentTarget.dataset.idx
    let item = this.data.categories[idx]
    let id = item.id || '1'
    let myurl = '../categoryDetail/categoryDetail?id=' + id
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