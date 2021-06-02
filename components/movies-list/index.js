// components/movies-list/index.js
Component({
  /**
   * 组件的属性列表
   */
  externalClasses:['f-class'],
  properties: {
    title:String,
    movies:Array
  },
  observers:{
    "movies"(data){
      // console.log(data[0])
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

  }
})
