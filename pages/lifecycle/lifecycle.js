// pages/lifecycle/lifecycle.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movies: [
      {
        name: "肖申克的救赎",
        img: "cloud://cloud1-7glpq1pj616a8565.636c-cloud1-7glpq1pj616a8565-1312576773/微信图片_20251218214124.jpg",
        desc: "有的人羽翼是如此光辉，即使世界上最黑暗的牢狱，也无法长久地将他围困！",
      },
      {
        name: "霸王别姬",
        img: "cloud://cloud1-7glpq1pj616a8565.636c-cloud1-7glpq1pj616a8565-1312576773/微信图片_20251218214125.jpg",
        desc: "风华绝代",
      },
      {
        name: "阿甘正传",
        img: "cloud://cloud1-7glpq1pj616a8565.636c-cloud1-7glpq1pj616a8565-1312576773/微信图片_20251218214122.jpg",
        desc: "一部美国近现代史",
      },
    ],
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
  onShareAppMessage() {

  },

  clickImage:function(event){
    console.log('我是button', event);
    wx.navigateTo({
      url: "/pages/home/detail/detail?id=imageclick&uid=tcb&key=tap&ENV=weapp&frompage=lifecycle"
    })
  },

  clickView:function(event){
    console.log('我是view', event);
    wx.navigateTo({
      url: "/pages/home/detail/detail?id=imageclick&uid=tcb&key=tap&ENV=weapp&frompage=lifecycle"
    });
    let jdpid = event.currentTarget.dataset.pid;
    let pidurl = "https://item.jd.com/" + jdpid + ".html";
    console.log(pidurl);
  },
})