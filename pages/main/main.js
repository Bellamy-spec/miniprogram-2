// pages/main/main.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

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

  }
})

let lesson = "云开发技术训练营";
let enname = "CloudBase Camp";
console.log(lesson.length);   // 返回字符串的长度
console.log(lesson[4]);   // 返回在指定位置的字符
console.log(lesson.charAt(4));    // 返回在指定位置的字符
console.log(lesson.substring(3, 6));    // 返回从索引3开始到6（不包括6）的字符
console.log(lesson.substring(4));   // 从索引4开始到结束的所有字符
console.log(enname.toLowerCase());    // 把一个字符串的英文字母全部变为小写
console.log(enname.toUpperCase());    // 把一个字符串的英文字母全部变为大写
console.log(enname.indexOf('oud'));   // 搜索指定字符串首次出现的位置
console.log(enname.concat(lesson));   // 连接两个字符串
console.log(lesson.slice(4));   // 提取字符串的部分内容，并以新的字符串返回被提取的内容

let x = 3, y = 4, z = 5.001, a = -3, b = -4, c = -5;
console.log(Math.abs(b));   // 返回b的绝对值
console.log(Math.round(z));   // 返回z四舍五入后的整数
console.log(Math.pow(x, y));    // 返回x的y次幂
console.log(Math.max(x, y, z, a, b, c));   // 返回x、y、z、a、b、c的最大值
console.log(Math.min(x, y, z, a, b, c));   // 返回x、y、z、a、b、c的最大值
console.log(Math.sign(a));    // 返回a是正数还是负数
console.log(Math.hypot(x, y));    // 返回所有x、y的平方和的平方根
console.log(Math.PI);   // 不解释
console.log(Math.sin(Math.PI));
console.log(Math.cos(Math.PI));
console.log(Math.log10(10));
console.log(Math.log(4) / Math.log(2));

let now = new Date();   // 返回当日的日期和时间
console.log(now);
console.log(now.getFullYear());   // 返回Date对象的年份
console.log(now.getMonth());    // 返回Date对象的月份（0~11）
console.log(now.getDate());   // 返回Date对象是一个月中的第几天（1~31）
console.log(now.getDay());    // 返回Date对象一周中的第几天（0~6）
console.log(now.getHours());    // 返回Date对象的小时数（0~23）
console.log(now.getMinutes());    // 返回Date对象的分钟数（0~59）
console.log(now.getSeconds());    // 返回Date对象的秒数（0~59）
console.log(now.getMilliseconds());   // 返回Date对象的毫秒数（0~999）
console.log(now.getTime());   // 返回1970年1月1日至今的毫秒数