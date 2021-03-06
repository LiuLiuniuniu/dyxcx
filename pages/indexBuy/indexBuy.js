// pages/indexBuy/indexBuy.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: [
      { name: 'top', value: '置顶', checked: true, price: "230.00" },
      { name: 'big', value: '大喇叭', checked: false, price: "180.00" },
      { name: 'small', value: '小喇叭', checked: false, price: "120.00" }
    ]
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
  
  },
  back(e) {
    wx.navigateBack({
      delta: 1
    })
  },
  radioSelect(e){
    var idx = e.currentTarget.dataset.id;
    var that = this;
    for (var i in that.data.items){
      that.data.items[i].checked = false;
    }
    that.data.items[idx].checked = true;
    that.setData({
      items: that.data.items
    })
  }
})