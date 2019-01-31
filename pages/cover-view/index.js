// pages/dialog/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    latitude: 23.099994,
    longitude: 113.324520,
    dialogStatus: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  // 切换模态框显示
  switchDialog() {
    this.setData({
      dialogStatus: !this.data.dialogStatus
    })
  }
})