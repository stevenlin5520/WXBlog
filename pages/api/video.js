Page({
	/**
	 * 页面的初始数据
	 */
	 data:{
	 	inputValue:'',
	 	danmulist:[{
	 		text: '第 1s 出现的弹幕',
	 		color: '#ff0000',
	 		time: 1
	 	}, {
	 		text: '第 3s 出现的弹幕',
	 		color: '#ff00ff',
	 		time: 3
	 	}]
	 },

	/**
	 * 生命周期函数--监听页面加载
	 */
	 onLoad: function (options) {
	 	this.videoContext = wx.createVideoContext("video")
	 },
	 videoErrorCallback:function(e){
	 	console.log("视频播放出错！")
	 	console.log(e)
	 },
	 bindInputBlur:function(e){
	 	this.inputValue = e.detail.value
	 },
	 sendMsg:function(e){
	 	this.videoContext.sendDanmu({
	 		text: this.inputValue,
	 		color: this.getRandomColor()
	 	})
	 },
	 // 随机生成颜色
	 getRandomColor:function(){
	 	const rgb = []
	 	for (let i = 0; i < 3; ++i) {
	 		let color = Math.floor(Math.random() * 256).toString(16)
	 		color = color.length === 1 ? '0' + color : color
	 		rgb.push(color)
	 	}
	 	return '#' + rgb.join('')
	 }
	})