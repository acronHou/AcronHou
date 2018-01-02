const app = getApp()
var toast = require('../../utils/toast/toast.js');
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 2000,
    duration: 1000,
    circular:true,
    current:2,
    index:'',
    hiddenToast: true
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    };
  //toast.showToastDefault(this, '有文案，无遮罩层')//有文案，无遮罩层
  //toast.showToastWithMask(this, '有文案，有遮罩层')//有文案，有遮罩层
  //toast.showToast(this, '有文案，有遮罩层，2秒后关闭', 5000, true)//有文案，有遮罩层，延迟多少毫秒关闭
  },
  showindex: function(e) {
    var index = e.currentTarget.dataset.index + 1 ;
    this.setData({
      index : index ,
    })
    toast.showToastDefault(this, '你点击了第'+index+'张图片')//有文案，无遮罩层
  }
})
