// pages/tapevent/tapevent.js
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

  },

  scrollToTop(){
    wx.pageScrollTo({
      duration: 3000,
      scrollTop: 0,
    })
  },

  scrollToPosition(){
    wx.pageScrollTo({
      duration: 3000,
      selector: "#bottom_ele",
    })
  },

  toastTap(){
    const deviceInfo = wx.getDeviceInfo();
    wx.showToast({
      title: deviceInfo.brand,
      icon: 'success',
      duration: 2500,
    })
  },

  modalTap(){
    wx.showModal({
      title: '学习声明',
      content: '学习小程序的开发是一件有意思的事情，我决定每天打卡学习',
      showCancel: true,
      // confirmText: '确定',
      success(res){
        if(res.confirm){
          console.log('用户单击了确定');
          console.log(res);
          console.log("单击确认之后的res.confirm是：" + res.confirm);
          console.log("单击确认之后的res.cancel是：" + res.cancel);
          wx.showToast({
            title: '用户单击了确定',
            icon: 'success',
            duration: 2500,
          })
        }else if(res.cancel){
          console.log('用户单击了取消');
          console.log(res);
          console.log("单击取消之后的res.confirm是：" + res.confirm);
          console.log("单击取消之后的res.cancel是：" + res.cancel);
          wx.showToast({
            title: '用户单击了取消',
            icon: 'error',
            duration: 2500,
          })
        }
      }
    })
  },

  vibrateLong(){
    wx.vibrateLong({
      success(res){
        console.log(res);
      },
      fail(err){
        console.log(err);
      },
      complete(){
        console.log('振动完成');
      },
    })
  },

  vibrateShort(){
    wx.vibrateShort({
      success(res){
        console.log(res);
      },
      fail(err){
        console.log(err);
      },
      complete(){
        console.log('振动完成');
      },
    })
  },

  actionSheetTap(){
    wx.showActionSheet({
      itemList: ['添加照片', '删除照片', '更新照片', '查询更多'],
      success(e){
        console.log(e.tapIndex);
        console.log(e);
        console.log(e.errMsg);
      },
    })
  },

  navigateBack(){
    wx.navigateBack({
      delta: 1
    })
  },
})