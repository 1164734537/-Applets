// components/movie/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    movie:Object
  },
  observers:{
    "movie"(data){
      // console.log(data)
    }
  },
  /**
   * 组件的初始数据
   */
  data: {

  },
  
  /**
   * 组件的方法列表
   */
  methods: {
    onGoTodetail(event){
      // console.log(event)
      // console.log(this.properties.movie.id)
      const mid = this.properties.movie.id
      wx.navigateTo({
        url:'/pages/movie-detail/movie-detail?mid=' + mid
      })
    }
  }
})
