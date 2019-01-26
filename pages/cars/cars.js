// pages/cars/cars.js
var config = require('../../utils/config.js')
let baseUrl = config.service.baseurl
let request = require("../../utils/utilv1.0.js")
Page({
  /**
   * 页面的初始数据
   */
  data: {
    isSelected:false,
    isedit:false,
    isall:false,
    allprice:0,
    products: [],
    editText:"编辑"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 计算商品总价格
   */
  hj:function(){
    let list = this.data.products
    let listlen = list.length
    let all = 0
    for(let i=0;i<listlen;i++){
      if (list[i].checkd === 1){
        all += parseInt(list[i].price)*parseInt(list[i].quantity)
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
    if (list[idx].checkd === 0)
    {
      list[idx].checkd = 1;
    }else{
      list[idx].checkd = 0;
    }
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
        list[i].checkd = 0
      }
    }else{
      for (let i = 0; i < listlen; i++) {
        list[i].checkd = 1
      }
    }
    this.setData({
      isall: isallval,
      products: list
    })
    this.hj()
  },

  /**
   * 删除商品
   */
  deleteCarProducts:function(){
    let list = this.data.products;
    let deleteArr = []
    let deleteIds = []
    for(let i = 0;i<list.length;i++){
      if(list[i].checkd === 1){
        deleteArr.push(i);
        deleteIds.push(list[i].id)
      }
    }
    if(deleteArr.length === 0){
      this.gk_showToast('请先选择要删除的宝贝');
      return 0;
    }

    let url = baseUrl + "cart/deleteCart"
    let userId = wx.getStorageSync('userId')
    let that = this
    let params = {
      userId: userId,
      idss: deleteIds
    }

    request.gk_post(url,params,function(response){
      if(response.data.status !== "0"){
        request.gk_showToast('删除失败，请重试!')
        return 0;
      }
      that.getCarData();
    })
  },

  /**
   * 商品 - 1
   */
  delProducts:function(event){
    let idx = event.currentTarget.dataset.idx;
    let list = this.data.products;
    if (list.length < idx + 1) {
      wx.showToast({
        title: '出错了，请重启小程序后再试!',
      })
      return 0;
    }
    if(list[idx].quantity > 1){
      list[idx].quantity -= 1;
      this.setData({
        products:list
      })
    }else{
      wx.showModal({
        title: '提示',
        content: '若想删除此项，请选中，点击下方删除按钮',
        showCancel:false
      })
    }
  },

  /**
   * 商品 + 1
   */
  addProducts: function (event){
    let idx = event.currentTarget.dataset.idx;
    let list = this.data.products;
    if(list.length < idx + 1){
      wx.showToast({
        title: '出错了，请重启小程序后再试!',
      })
      return 0;
    }

    list[idx].quantity += 1;
    this.setData({
      products:list
    })
  },

  /**
   * 提示信息
   */
  gk_showToast:function(message=""){
    wx.showToast({
      title: message,
      icon:'none',
      duration:1500
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
    this.getCarData()
  },

  /**
   * 获取购物车数据
   */
  getCarData:function(){
    let that = this
    let username = wx.getStorageSync("userId")
    let url = baseUrl + "cart/listCarts?userId=" + username
    request.gk_get(url,function(result){
      that.setData({
        products: result.data.data
      })
      setTimeout(function(){
        // 下面这句应在获取购物车数据之后进行执行
        that.hj()
      },200)
    })
  },

  /**
   * 编辑购物车
   */
  editCar:function(){
    if (this.data.isedit === false){
      this.setData({
        isedit:true,
        editText:"完成"
      })
    }else{
      let that = this
      let userId = wx.getStorageSync('userId')
      let url = baseUrl + "cart/updateCart"
      let carsProducts = []
      let list = this.data.products
      for(let i = 0;i<list.length;i++){
        let obj = {
          "cart_id":list[i].id,
          "checkd":list[i].checkd,
          "quantity":list[i].quantity
        }
        carsProducts.push(obj)
      }
      let params = {
        // "userId":userId,
        "params": carsProducts
      }
      request.gk_post(url,params,function(response){
        // response
        console.log(response)
        if(response.data.status !== "0"){
          request.gk_showToast("更新购物车失败，请重试!")
          return 0;
        }
        that.setData({
          isedit: false,
          editText: "编辑"
        })
      })
    }
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