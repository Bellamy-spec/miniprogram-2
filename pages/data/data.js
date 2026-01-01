// pages/data/data.js
let lesson = "云开发技术训练营";
let enname = "CloudBase Camp";
let x = 3, y = 4, z = 5.001, a = -3, b = -4, c = -5;
let now = new Date();
let initData = '只有一行原始数据';
let extraLine = [];

function greet(){
  console.log("你好，欢迎来到云开发训练营");
};
greet();    // 调用greet()函数

function square(number){
  return number * number;
};
console.log(square(5));

function rectangle(length, width){
  return (length + width) * 2;
};
console.log(rectangle(5, 7));

let sqr = function(number){
  return number * number;
};
console.log(sqr(4));    // 使用console.log()输出变量square

const multiply = (x, y) => {
  return x * y;
};
const sum = (x, y) => x + y;    // 连{}和return语句都可以省掉
console.log(multiply(20, 4));
console.log(sum(20, 4));

const app = getApp();

// 在Page外调用
console.log(app.globalData.userInfo.username);
console.log(app.tcbData.title);
console.log(app);

Page({

  /**
   * 页面的初始数据
   */
  data: {
    charat: lesson.charAt(4),
    concat: enname.concat(lesson),
    uppercase: enname.toLocaleUpperCase(),
    abs: Math.abs(b),
    pow: Math.pow(x, y),
    sign: Math.sign(a),
    now: now.toString(),
    fullyear: now.getFullYear(),
    date: now.getDate(),
    day: now.getDay(),
    hours: now.getHours(),
    minutes: now.getMinutes(),
    seconds: now.getSeconds(),
    time: now.getTime(),
    bgcolor: "#000000",
    muted: true,
    text: initData,
    tabs: ["北京", "上海", "广州", "深圳"],
    activeIndex: 0,

    // 在data对象里调用
    userInfo: app.globalData.userInfo,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // 在生命周期函数里调用
    // console.log(app.globalData.userInfo.username);
    // console.log(app.tcbData.title);
    // console.log(app);
    // console.log(this.data.userInfo);
    const message = "发布失败";
    this.publishSuc(message);    // this调用的是封装好的函数publishSuc()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    wx.getNetworkType()   // 需要传入参数的API，可以写成wx.getNetworkType({name: "呵呵"})
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    wx.getNetworkType({
      success: res => {
        console.log("res是", res);
      },
      fail: err => {
        console.log("err是", err);
      },
      complete: msg => {
        console.log("msg是", msg);
      },
    })
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

  redTap:function(){
    this.setData({
      bgcolor: "#cd584a"
    })
  },

  yellowTap:function(){
    this.setData({
      bgcolor: "#f8ce5a"
    })
  },

  changeMuted:function(e){
    this.setData({
      muted: !this.data.muted
    })
  },

  addLine:function(e){
    extraLine.push('新增的内容' + Math.random())
    this.setData({
      text: initData + '\n' + extraLine.join('\n')
    })
  },

  removeLine:function(e){
    if(extraLine.length > 0){
      extraLine.pop()
      this.setData({
        text: initData + '\n' + extraLine.join('\n')
      })
    }
  },

  tabClick:function(e){
    console.log(e);
    this.setData({
      activeIndex: e.currentTarget.id
    })
  },

  publishSuc(title){
    wx.showToast({
      title: title,
      icon: 'error',
      duration: 2500,
    },
    setTimeout(function(){
      wx.navigateBack({
        delta: 1
      })
    }, 3000))
  },
})