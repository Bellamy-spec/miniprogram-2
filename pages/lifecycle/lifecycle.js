// pages/lifecycle/lifecycle.js
const user = {name: "郭雨健", address: "郑州市中原区"};
console.log(user.address);    // 这里可以访问user对象

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
    title: "无",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // console.log(this.data.title);
    // console.log(user.name);   // 在生命周期函数里访问user对象
    // const movielist = ["肖申克的救赎", "霸王别姬", "这个杀手不太冷"];
    // this.setData({
    //   title: movielist[1]
    // });
    // console.log(this.data.title);
    console.log("onLoad监听页面加载", options);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    console.log("onReady监听页面初次渲染完成");
    wx.hideLoading({
      success:(res) => {
        console.log("加载完成，所以隐藏掉了")
      },
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    console.log("onShow监听页面显示");
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {
    console.log("onHide监听页面隐藏");
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {
    console.log("onUnload监听页面卸载");
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {
    console.log("onPullDownRefresh监听用户下拉动作");
    wx.stopPullDownRefresh();
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {
    // 页面太短不会触发
    console.log("onReachBottom监听页面上拉触底事件");
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

  showScene(){
    var scene_ob = wx.getLaunchOptionsSync();
    console.log(scene_ob);
    wx.showToast({
      title: '场景' + scene_ob.scene,
      icon: "success",
      duration: 2500,
    })
  }
})