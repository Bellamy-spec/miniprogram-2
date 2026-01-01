// app.js
App({
  tcbData: {
    title: "云开发训练营",
    year: 2025,
    company: "腾讯Tencent",
  },
  onLaunch(opts){
    console.log('onLaunch监听小程序初始化。', opts);
    console.log(this.globalData.userInfo.username);
    // wx.showLoading({
    //   title: '正在加载中',
    // })
  },
  onShow(opts){
    console.log('onShow监听小程序启动或切前台', opts);
    // wx.showToast({
    //   title: '场景' + opts.scene,
    //   icon: "success",
    //   duration: 2500,
    // })
  },
  onHide(){
    console.log('onHide监听小程序切后台');
  },
  globalData:{
    userInfo: {
      username: "郭雨健",
      title: "学习者",
    }
  },
})
