// components/guide/guide-search/guide-search.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

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
    gotoSearch(){
      wx.navigateTo({
        url: '/pages/newSearch/newsSearch',
      })
    }
  }
})
