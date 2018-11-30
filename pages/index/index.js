Page({
    data: {
        tempPath: "",
        result: {},
        loadingHidden: !0,
        is_donate: !1,
        canUseShare: wx.canIUse("button.open-type.share"),
        isGetData: !1
    },

    makeRequest: function () {
        var self = this
        wx.request({
          url: 'https://aip.baidubce.com/rest/2.0/image-classify/v2/dish?access_token=24.fb52e9dfec9280b1266e7060f01bbc83.2592000.1546049798.282335-14963168',
      data: {
        noncestr: Date.now()

      },
      success: function (result) {
        console.log('request success', result)
      }
    })
},
   
    redirect_help: function(e) {
        wx.switchTab({
            url: "/pages/tip/tip"
        });
    },
    redirect_about: function(e) {
        wx.navigateTo({
            url: "/pages/about/about"
        });
    },
    redirect_tip: function(e) {
        wx.navigateTo({
            url: "/pages/about/about?from=self"
        });
    },
    onShareAppMessage: function(e) {
        return "button" === e.from && console.log(e.target), {
            title: "拍图识菜,来试试吧",
            path: "/pages/index/index",
            imageUrl: "/share.png",
            success: function(e) {
                wx.showToast({
                    title: "分享成功",
                    icon: "success",
                    duration: 1500
                });
            },
            fail: function(e) {}
        };
    },
    selectImage: function(e) {
        var t = this;
        wx.chooseImage({
            count: 1,
            sizeType: [ "original", "compressed" ],
            sourceType: [ "album", "camera" ],
            success: function(e) {
                var a = e.tempFilePaths;
                t.setData({
                    tempPath: a,
                    isGetData: !1,
                    result: {}
                });
            }
        });
    },
    uploadImage: function(e) {
        var t = this;
        console.log(t.data.tempPath), "" == t.data.tempPath ? wx.showToast({
            title: "请选择菜品照片",
            icon: "info",
            duration: 2e3
        }) : (t.setData({
            loadingHidden: !1
        }), wx.uploadFile({
            url: "https://lookallfashion.com/upload_fr",
            filePath: t.data.tempPath[0],
            name: "file",
            formData: {
                user: "test"
            },
            success: function(e) {
                var a = e.data, s = JSON.parse(a);
                t.setData({
                    result: s,
                    loadingHidden: !0,
                    isGetData: !0
                });
            }
        }));
    },
    ad: function(e) {
        wx.navigateToMiniProgram({
            appId: "wx00c3c48a29098bbb",
            path: "/pages/index/index",
            extraData: {
                foo: "plant"
            },
            success: function(e) {
                console.log("redirect success");
            }
        });
    }
});