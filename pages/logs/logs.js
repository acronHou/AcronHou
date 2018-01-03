//logs.js
const util = require('../../utils/util.js')
var dialog = require('../../utils/dialog/dialog.js');
Page({
  data: {
    logs: []
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    });
  },
  remove:function(e){
    var that = this;
    var index = e.currentTarget.dataset.index + 1 ;
    dialog.dialog({
      page: this,
      currentStatu: "open",
      message:"是否删除第"+index+"条浏览记录?",
      confirmText: '确认',
      confirmColor: "#00a7e5",
      confirm: function () {
        (that.data.logs).splice(index-1,1);
        that.setData({
          logs: that.data.logs
        });
      }
    })
  }
})




  
//参数
 // page:页面 (必需)
 // currentStatu:状态 'open' 'close' 'confirm'
 // message:提示文字
 // confirmText:确定键文字
 // confirmColor:确定键文字颜色 如"#ff00ff"  rgb(0,0,0)
 // confirm:确定键点击事件 
 // showCancel:是否显示取消键,默认 true
 // canceledOnTouchOutside:蒙层是否可以取消  默认 true,