const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

// 请求数据,需传入完整的url
function gk_get(url, dosomething) {
  wx.showLoading({
    title: '加载中...',
  })
  wx.request({
    url: url,
    data: [],
    success: function (res) {

      if(res.statusCode != 200){
        gk_requestStatus(res.statusCode)
      }else{
        dosomething(res)
      }
    },
    fail: function (err) {
      gk_requestError() // 错误处理
    },
    complete: function () {
      wx.hideLoading()
    }
  })
}

// 检测当前是否是2g网络
function gk_is2g() {
  wx.getNetworkType({
    success: function (res) {
      var networkType = res.networkType
      if (networkType == '2g') {
        return true
      } else {
        return false
      }
    },
    fail: function () {
      return false
    }
  })
}

/**
 * POST请求，用于获取数据或提交数据
 */
// application/json默认值
function gk_post(posturl, params, dosomething) {
  wx.showLoading({
    title: '加载中...',
  })
  wx.request({
    url: posturl,
    data: params,
    header: {
      'content-type': 'application/json'
    },
    method: 'POST',
    success: function (res) {
      if (res.statusCode != 200) {
        gk_requestStatus(res.statusCode)
      }else{
        dosomething(res)
      }
    },
    fail: function (err) {
      gk_requestError()
    },
    complete: function () {
      wx.hideLoading()
    }
  })
}

/**
 * downloadFile
 */
function gk_downLoadFile(myurl,dosomething){
  wx.showLoading({
    title: '加载中...',
  })

  wx.downloadFile({
    url: myurl,
    success:function(res){
      if(res.statusCode != 200){
        gk_requestStatus(res.statusCode)
      }else{
        dosomething(res)
      }
    },
    fail:function(error){
      gk_requestError()
    },
    complete:function(){
      wx.hideLoading()
    }
  })

}

function gk_requestError(){
  console.log('errorRequestType=post')
  console.log(err)

  if (gk_is2g()) {
    gk_showToastNoIcon('当前网络差，请换个网络重试')
  } else {
    gk_showToastNoIcon('发生未知错误，请稍后重试！')
  }
}

function gk_showToastNoIcon(str) {
  wx.showToast({
    title: str,
    icon: 'none',
    duration: 1500
  })
}

// 加载成功提示
function gk_success(str) {
  wx.showToast({
    title: str,
    icon: 'success',
    duration: 1500
  })
}

// 加载提示
function gk_loading() {
  wx.showNavigationBarLoading()
  wx.showLoading({
    title: '玩命加载中...',
  })
}

// 隐藏加载提示
function gk_hideLoading() {
  wx.hideNavigationBarLoading()
  wx.hideLoading()
}

// 提示框
function gk_showModal(title, content, showCancle) {
  wx.showModal({
    title: title,
    content: content,
    showCancel: showCancle,
  })
}

// 判断字符串是否为空，用于在POST请求前对输入框输入的内容就行检查
function gk_isempty(str) {
  var newstr = str.replace("/(^\s*)|(\s*$)/g", "")
  return newstr.length
}


/**
 * 统一处理一些请求错误（根据statusCode 来判断，而非后台返回的自定义code）
 * 目前的statusCode 有以下的状态码
 */
function gk_requestStatus(statusCode) {

  let duration = 2000
  let title = ''
  switch (statusCode) {
    case 400:
      title = '400 bad request，服务器无法识别当前请求！'
      break;

    case 401:
      title = '401 unauthorized，当前身份未验证！'
      break;

    case 403:
      title = '403 forbidden，没有权限查看！'
      break;

    case 404:
      title = '404 not found，该资源已被移除！'
      break;

    case 408:
      title = '408 request timeout，请求超时！'
      break;

    case 500:
      title = '500 internal server error 服务器内部错误！'
      break;

    case 503:
      title = '503 service unavailable 当前请求人数过多！'
      break;

    case 504:
      title = '504 gateway timeout 网关超时！'
      break;

    default:
      // 当做未知错误处理
      title = '未知错误,请稍后重试！'
      break;
  }

  gk_showToastNoIcon(title)

  return 0
}

/**
 * 统一处理，非自定义code=200之外的情况
 */
function gk_requestError(message) {

  wx.showToast({
    title: message,
    icon: 'none',
    duration: 1500
  })

  return 0
}

module.exports = {
  formatTime: formatTime,
  gk_get: gk_get,
  gk_post: gk_post,
  gk_success: gk_success,
  gk_loading: gk_loading,
  gk_hideLoading: gk_hideLoading,
  gk_showModal: gk_showModal,
  gk_isempty: gk_isempty,
  gk_requestStatus: gk_requestStatus,
  gk_requestError: gk_requestError,
  gk_showToastNoIcon: gk_showToastNoIcon,
  gk_is2g: gk_is2g,
  gk_downLoadFile: gk_downLoadFile,
  gk_requestError: gk_requestError
}
