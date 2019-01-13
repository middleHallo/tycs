// pages/search/search.js
var config = require('../../utils/config.js')
let request = require('../../utils/utilv1.0.js')
let baseurl = config.service.baseurl
Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchstr:'',
    list:[]
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
   * 输入查询内容
   */
  editstr:function(res){
    this.setData({
      searchstr:res.detail.value
    })
  },

  /**
   * 清空查询内容
   */
  clearstr:function(){
    this.setData({
      searchstr:''
    })
  },

  /**
   * 查询
   */
  confirm:function(){
    let value = this.data.searchstr
    let that = this
    /**
     * 网络请求
     */
    let url = baseurl + 'goods?title=' + value
    request.gk_get(url,function(res){
      if (res.data.status != 0){
        request.gk_showToastNoIcon('网络出错啦，请重试!')
        return 0;
      }

      if (res.data.data.length < 1){
        request.gk_showToastNoIcon('抱歉，没有找到茶叶!')
        return 0;
      } 
      that.setData({
        list: res.data.data
      })
    })
  },

  /**
   * gotoDetail
   */
  gotoDetail:function(e){
    let idx = e.currentTarget.dataset.idx
    let item = this.data.list[idx]
    let id = item.id
    let myurl = '../detail/detail?id=' + id
    wx.navigateTo({
      url: myurl,
    })
  },

  /**
   * 取消查询，返回上一页
   */
  cancle:function(){
    wx.navigateBack({})
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