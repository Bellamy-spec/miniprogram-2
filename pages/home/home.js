// pages/home/home.js
const base = require('../../utils/base.js')
console.log("base里的user对象", base.user)
console.log("调用base里的函数", base.sayHello("郭雨健"))

Page({

  /**
   * 页面的初始数据
   */
  data: {
    username: "郭雨健",
    imgUrls: [
      'cloud://cloud1-7glpq1pj616a8565.636c-cloud1-7glpq1pj616a8565-1312576773/微信图片_20251218214128.jpg',
      'cloud://cloud1-7glpq1pj616a8565.636c-cloud1-7glpq1pj616a8565-1312576773/微信图片_20251218214140.jpg',
      'cloud://cloud1-7glpq1pj616a8565.636c-cloud1-7glpq1pj616a8565-1312576773/微信图片_20251218214141.jpg',
      'cloud://cloud1-7glpq1pj616a8565.636c-cloud1-7glpq1pj616a8565-1312576773/微信图片_20251218214157.jpg',
    ],
    interval: 5000,
    duration: 500,
    indicatorDots: true,
    indicatorColor: "#ffffff",
    activecolor: "#2971f6",
    autoplay: true,
    musicinfo: {
      poster: "cloud://cloud1-7glpq1pj616a8565.636c-cloud1-7glpq1pj616a8565-1312576773/微信图片_20251218214124.jpg",
      name: "此时此刻",
      author: "许巍",
      src: "cloud://cloud1-7glpq1pj616a8565.636c-cloud1-7glpq1pj616a8565-1312576773/02-（美音）新听力进阶B1U1听力训练一.mp3"
    },
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function(res){
    if(res.from == 'button'){
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return{
      title: '云开发技术训练营',
      path: "pages/home/home",
      imageUrl: "cloud://cloud1-7glpq1pj616a8565.636c-cloud1-7glpq1pj616a8565-1312576773/微信图片_20251218214139.jpg",
      success: function(res){
        // 转发成功
      },
      fail: function(res){
        // 转发失败
      },
    }
  },

  navigateTo(){
    wx.navigateTo({
      url: '/pages/tapevent/tapevent',
    })
  },

  switchTab(){
    wx.switchTab({
      url: '/pages/list/list',
    })
  },

  redirectTo(){
    wx.redirectTo({
      url: '/pages/tapevent/tapevent',
    })
  },
})