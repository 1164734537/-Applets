// pages/posts/posts.js

import {postList} from '../../data/data.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
  },

  /**
   * 生命周期函数--监听页面加载
   * 钩子函数 hook function
   * 顺序
   * 条件渲染 列表渲染
   */
  onLoad(options) {
    // setdata
    // 更新
    // 创建+更新
    // JSON
    this.setData({
      postList
    })
  },
  onGoToDetail(event) {
    console.log(event);
    const pid =  event.detail.pid || event.currentTarget.dataset.postId
    wx.navigateTo({
      url: '/pages/post-detail/post-detail?pid='+pid,
    })
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