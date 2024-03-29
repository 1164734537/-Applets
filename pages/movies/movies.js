// pages/movies/movies.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inTheaters:[],
    comingSoon:[],
    top250:[],
    searchResult:false,
    searchData:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options){
    wx.request({
     url: app.global.BaseUrl+'in_theaters',
     method:'GET',
     data:{
      start:0,
      count:3
     },
     success:(res)=>{
      // console.log(res)
      // console.log(res.data.subjects)
      // console.log(that.data)
      this.setData({
        inTheaters:res.data.subjects
      })
     }
    })
    wx.request({
      url: app.global.BaseUrl+'coming_soon',
      method:'GET',
      data:{
       start:0,
       count:3
      },
      success:(res)=>{
       // console.log(res)
       // console.log(res.data.subjects)
       // console.log(that.data)
       this.setData({
        comingSoon:res.data.subjects
       })
      }
     })
     wx.request({
      url: app.global.BaseUrl+'top250',
      method:'GET',
      data:{
       start:0,
       count:3
      },
      success:(res)=>{
       // console.log(res)
       // console.log(res.data.subjects)
       // console.log(that.data)
       this.setData({
        top250:res.data.subjects
       })
      }
     })

    // console.log(res)
  },
  onGotoMore(event){
    // console.log(event.currentTarget.dataset.type)
    const type = event.currentTarget.dataset.type
    wx.navigateTo({
      url: '/pages/more-movie/more-movie?type='+type,
    })
  },
  onConfirm(event){
    console.log(event.detail.value);
    this.setData({
      searchResult:true
    })
    wx.request({
      url: app.global.BaseUrl+'search',
      data:{
        q:event.detail.value
      },
      success:(res)=>{
          console.log(res.data.subjects)
          this.setData({
            searchData:res.data.subjects
          })
      }
    })
  },
  onClear(event){
    console.log(event)
  },
  onSearchCancel(){
    this.setData({
      searchResult:false
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