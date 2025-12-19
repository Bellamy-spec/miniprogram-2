// pages/more/more.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: 233,
    itemurl: "/pages/home/imgshow/imgshow",
    itemclass: "event-item",
    imagesrc: "cloud://cloud1-7glpq1pj616a8565.636c-cloud1-7glpq1pj616a8565-1312576773/微信图片_20251218214115.jpg",
    imagemode: "widthFix",
    imagewidth: "100%",
    love1: 520,
    love2: "520",
    forever1: 1314,
    forever2: "1314",
    newstitle: [
      "瑞幸咖啡：有望在三季度达到门店运营的盈亏平衡点",
      "腾讯：广告高库存量还是会持续到下一年",
      "上汽集团：云计算数据中心落户郑州，总投资20亿元",
      "京东：月收入超2万元快递小哥数量同比增长163%",
      "腾讯：《和平精英》日活跃用户已超五千万",
    ],
    movies: [
      {
        name: "肖申克的救赎",
        // englishname: "The Shawshank Redemption",
        // country: "美国",
        // year: 1994,
        img: "cloud://cloud1-7glpq1pj616a8565.636c-cloud1-7glpq1pj616a8565-1312576773/微信图片_20251218214124.jpg",
        desc: "有的人羽翼是如此光辉，即使世界上最黑暗的牢狱，也无法长久地将他围困！",
        // actor: [
        //   {
        //     name: "蒂姆·罗宾斯",
        //     role: "安迪·杜佛兰",
        //   },
        //   {
        //     name: "摩根·弗里曼",
        //     role: "艾莉丝·波伊德·瑞德",
        //   },
        // ],
      },
      {
        name: "霸王别姬",
        // englishname: "Farewell My Concubine",
        // country: "中国",
        // year: 1993,
        img: "cloud://cloud1-7glpq1pj616a8565.636c-cloud1-7glpq1pj616a8565-1312576773/微信图片_20251218214125.jpg",
        desc: "风华绝代",
        // actor:[
        //   {
        //     name: "张国荣",
        //     role: "程蝶衣",
        //   },
        //   {
        //     name: "张丰毅",
        //     role: "段小楼",
        //   },
        // ],
      },
      {
        name: "阿甘正传",
        img: "cloud://cloud1-7glpq1pj616a8565.636c-cloud1-7glpq1pj616a8565-1312576773/微信图片_20251218214122.jpg",
        desc: "一部美国近现代史",
      },
    ],
    grids: [
      {
        imgurl: "cloud://cloud1-7glpq1pj616a8565.636c-cloud1-7glpq1pj616a8565-1312576773/微信图片_20251218214117.jpg",
        title: "招聘",
      },
      {
        imgurl: "cloud://cloud1-7glpq1pj616a8565.636c-cloud1-7glpq1pj616a8565-1312576773/微信图片_20251218214122.jpg",
        title: "房产",
      },
      {
        imgurl: "cloud://cloud1-7glpq1pj616a8565.636c-cloud1-7glpq1pj616a8565-1312576773/微信图片_20251218214124.jpg",
        title: "二手车新车",
      },
      {
        imgurl: "cloud://cloud1-7glpq1pj616a8565.636c-cloud1-7glpq1pj616a8565-1312576773/微信图片_20251218214131.jpg",
        title: "二手",
      },
      {
        imgurl: "cloud://cloud1-7glpq1pj616a8565.636c-cloud1-7glpq1pj616a8565-1312576773/微信图片_20251218214133.jpg",
        title: "招商加盟",
      },
      {
        imgurl: "cloud://cloud1-7glpq1pj616a8565.636c-cloud1-7glpq1pj616a8565-1312576773/微信图片_20251218214136.jpg",
        title: "兼职",
      },
      {
        imgurl: "cloud://cloud1-7glpq1pj616a8565.636c-cloud1-7glpq1pj616a8565-1312576773/微信图片_20251218214139.jpg",
        title: "本地",
      },
      {
        imgurl: "cloud://cloud1-7glpq1pj616a8565.636c-cloud1-7glpq1pj616a8565-1312576773/微信图片_20251218214140.jpg",
        title: "家政",
      },
      {
        imgurl: "cloud://cloud1-7glpq1pj616a8565.636c-cloud1-7glpq1pj616a8565-1312576773/微信图片_20251218214148.jpg",
        title: "金币夺宝",
      },
      {
        imgurl: "cloud://cloud1-7glpq1pj616a8565.636c-cloud1-7glpq1pj616a8565-1312576773/微信图片_20251218214157.jpg",
        title: "送现金",
      },
    ],
    listicons: [
      {
        icon: "cloud://cloud1-7glpq1pj616a8565.636c-cloud1-7glpq1pj616a8565-1312576773/微信图片_20251218214124.jpg",
        title: "我的文件",
        desc: "",
      },
      {
        icon: "cloud://cloud1-7glpq1pj616a8565.636c-cloud1-7glpq1pj616a8565-1312576773/微信图片_20251218214128.jpg",
        title: "我的收藏",
        desc: "收藏列表",
      },
      {
        icon: "cloud://cloud1-7glpq1pj616a8565.636c-cloud1-7glpq1pj616a8565-1312576773/微信图片_20251218214146.jpg",
        title: "我的邮件",
        desc: "",
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

  }
})