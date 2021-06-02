// pages/post-detail/post-detail.js
import { postList } from '../../data/data.js'

const app = getApp()

//console.log(app)
Page({

  /**
   * 页面的初始数据
   */
  data: {
    postData:{},
    collected:false,
    isPlaying:false,
    _pid:null,
    _postsCollected:{},
    _mgr:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const postData = postList.filter(item => item.postId == options.pid )[0]
    this.data._pid = options.pid
    // 初始化问题，读取缓存判断文章是否收藏
    const postsCollected = wx.getStorageSync('posts_collected')
    console.log(postsCollected)

    if(postsCollected){
      this.data._postsCollected = postsCollected
    }


     let collected = postsCollected[this.data._pid] || false
    // console.log(collected)
    // console.log(postData)
    this.setData({
      postData,
      collected,
      isPlaying:this.currentMusicIsPlaying()
    })

    // 音乐模块
    const mgr = wx.getBackgroundAudioManager()
    this.data._mgr = mgr
    // 监听音乐播放和暂停，控制图标切换
    mgr.onPlay(this.onMusicStart)
    mgr.onPause(this.onMusicStop)
    // console.log(options.pid)
    // const id = options.pid;
    // // this.postData = postList[id]
    // // console.log(postList[id])
    // this.setData(
    //   this.postData = postList[id]
    // )
    // console.log(this.postData)
  },
  onMusicStart(event){
    const mgr = this.data._mgr
    const music = this.data.postData.music
    // console.log(event,this.data.postData)
    // console.log(this.data.postData.music)
    mgr.src = music.url
    mgr.title = music.title
    mgr.coverImgUrl = music.coverImg
    // 可以不显示调用play
    // mgr.play()
    app.global.isPlayingMusic = true
    app.global.isPlayingPostId = this.data._pid
    this.setData({
      isPlaying: true
    })
  },
  currentMusicIsPlaying(){
    if(app.global.isPlayingMusic && app.global.isPlayingPostId==this.data._pid){
      return true
    }
    return false
  },
  onMusicPause(event){
    const mgr = wx.getBackgroundAudioManager()
    mgr.pause()
    app.global.isPlayingMusic = false
    app.global.isPlayingPostId = -1
    this.setData({
      isPlaying:false
    })
  },
  async onShare(event){
    const result = await wx.showActionSheet({
      itemList: ['分享到QQ','分享到微信','分享到朋友圈','分享到'],
    })

    console.log(result)
  },
  async onCollect(event){
    // 假设为收藏 -> 收藏
    // 哪篇文章被收藏
    // 数据结构 多篇文章是否被收藏
      const postsCollected = this.data._postsCollected
      postsCollected[this.data._pid] = !this.data.collected
      // console.log(this.data._postsCollected)
      this.setData({
        collected : !this.data.collected
      })
     wx.setStorageSync('posts_collected', postsCollected)

    //  轻提示
     wx.showToast({
       title: this.data.collected?'收藏成功':'收藏取消',
       duration:3000
     })

    // 对话状态框
    // const result = await wx.showModal({
    //   title: this.data.collected ?'是否取消收藏文章':'是否收藏文章',
    // })
    // console.log(result)
    // if(result.confirm){
    //     const postsCollected = this.data._postsCollected
    //     postsCollected[this.data._pid] = !this.data.collected
    //     // console.log(this.data._postsCollected)
    //     this.setData({
    //       collected : !this.data.collected
    //     })
    //   wx.setStorageSync('posts_collected', postsCollected)
    // }
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