// pages/welcome/welcome.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  onTap:function (params) {
    // 跳转页面
    // console.log('1');
    // 跳转到子页面
    // 子子页面
    // 10个最多 
    // wx.navigateTo({
    //   url: '/pages/posts/posts',
    // })
    // wx.redirectTo({
    //   url: '/pages/posts/posts',
    // })
    // 设置了tabBar 要用这个跳转
    wx.switchTab({
      url: '/pages/posts/posts',
    })
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
    console.log('wecome被卸载')
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

  }
})