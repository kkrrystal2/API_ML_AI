var QQMapWX = require('../../utils/qqmap-wx-jssdk.js');
var qqmapsdk;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    longitude: 113.27,
    latitude: 23.11,
    aroundPlaces: [],
    curr_inx: 0,
    markers: [{
      longitude: 113.27,
      latitude: 23.11,
    }],
    confirmAddress: "",
  },
  confirm: function () {
    //现获取到所有页面，然后拿到当前页面的上一个页面[注意length-2的含义]
    let vm = this, pages = getCurrentPages(), prePage = pages[pages.length - 2];
    //这里的prepage就是上一个页面的this，returnAddress属性一定要在上一个页面的data里事先定义。
    prePage.setData({ returnAddress: vm.data.confirmAddress })
    wx.navigateBack();
  },
  // 搜索入口  
  wxSearchTab: function (e) {
    let vm = this;
    qqmapsdk.getSuggestion({
      keyword: e.detail.value || '',
      success: function (res) {
        vm.setData({
          aroundPlaces: res.data,
          confirmAddress: res.data[0].address
        });
      },
      fail: function (res) {
        console.log(res)
      }
    });
  },
  selectAddress: function (e) {
    let vm = this, lat = e.currentTarget.dataset.location.lat, lng = e.currentTarget.dataset.location.lng;
    vm.setData({
      latitude: lat,
      longitude: lng,
      markers: [{ longitude: lng, latitude: lat }],
      curr_inx: e.target.dataset.num,
      confirmAddress: e.target.dataset.address
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //实例化腾通地图sdk
    qqmapsdk = new QQMapWX({
      key: 'REJBZ-TCFCV-CREP3-UMF67-IUGZ2-5ZBS5' //这里自己的key秘钥进行填充
    });
    let pageParam = options, vm = this;
    //获取上个页面定位，以便在地图上mark
    if (pageParam.latitude && pageParam.longitude) {
      vm.setData({
        latitude: pageParam.latitude,
        longitude: pageParam.longitude
      });
    }

    //页面加载是获取当前地点，并调用获取周边地点的api，显示位置列表
    qqmapsdk.getSuggestion({
      keyword: pageParam.returnAddress || '',
      success: function (res) {
        vm.setData({
          aroundPlaces: res.data,
          confirmAddress: res.data[0].address
        });
      },
      fail: function (res) {
        console.log(res)
      }
    });
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