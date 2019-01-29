// pages/onfire/index.js
let onfire = require("../../utils/onfire1.0.6.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    topData: null
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

  },

  // 返回上一级数据
  returnData(){
    console.log("返回上一级数据,测试on")
    onfire.fire('onfire-on','你好，小苹果!','好好吃')
    onfire.fire('onfire-on', '你好，小白痴!', '好好吃2')

    console.log("返回上一级数据,测试one")
    onfire.fire('onfire-one', '大白兔！')
    onfire.fire('onfire-one', '大白痴！')

    console.log("返回上一级数据,测试one,使用同步订阅fireSync")
    onfire.fireSync('onfire-sync', '同步订阅数据发往回调函数')

  }
})