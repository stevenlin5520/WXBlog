// pages/region/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    citySelecter: ['黑龙江省','哈尔滨市','南岗区'],
    province: ['美国', '中国', '巴西', '日本'],
    city: ['石家庄市', '唐山市', '秦皇岛市', '邯郸市', '邢台市', '保定市'],
    unit: ['西安市', '铜川市', '宝鸡市', '咸阳市', '渭南市', '延安市'],
    customItem: "全部"
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

  // 地区修改
  bindRegionChange(res){
    console.log(res)
    let value = [res.detail.value[0],res.detail.value[1],res.detail.value[2]]
    this.setData({
      province: value
    })
  },
  // 取消地区修改
  cancelReginChange(res){
    console.log(res)
  }
})