// pages/steven/order.js
let onfire = require("../../utils/onfire1.0.6.js")
let self = this
let eventOn = onfire.on('onfire-on', function (data,data2) {
  console.log('onfire页面的回调函数on', data, data2)
})
let eventOne = onfire.one('onfire-one', function (data) {
  console.log('onfire页面的回调函数one', data)
})
let eventSync = onfire.one('onfire-sync', function (data) {
  console.log('onfire页面的同步订阅时间', data)
  // 清空所有事件
  // onfire.clear()
})

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let a = "2018-12-16 15:38:56"
    console.log("整理数据:",a)
    a = a.replace(/-/g,'/')
    console.log("整理后数据:",a)
    a = new Date(a).getTime()
    console.log("整理后数据:", a)
    a = a + 48 * 60 * 60 * 1000
    console.log("整理后数据:", a)
    a = new Date(a)
    console.log("整理后数据:", a)

    let dateUtil = require("../../utils/date_util.js")
    console.log(dateUtil.plusTwoDay("2018-12-16 15:38:56"))

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
    execute()

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
    // 取消订阅事件的绑定
    onfire.un(eventOn)
    onfire.un('event-one')
    onfire.un(eventSync)
    
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

  workerFun(){
    con = sb
    console.log("主动出错，走全局的出错路径")
  }
})

function execute(){
  setTimeout(function () {
    let randomLong = Math.floor(Math.random()*3000)
    let randomWidth = Math.floor(Math.random()*2000)
    console.log("生成随机数:" + randomLong + "," + randomWidth);
    execute()
  }, 1000)
  
}