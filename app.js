App({
  onLaunch(){
    console.log('小程序启动')
  },
  global:{
    isPlayingMusic:false,
    isPlayingPostId:-1,
    BaseUrl:"http://t.talelin.com/v2/movie/"
  }
})