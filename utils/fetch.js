// 参考地址 https://juejin.im/post/6844903878584958984

const fetch = options => {
    return new Promise((resolve, reject) => {
        const {data, method} = options;
        if (data && method.toUpperCase() !== 'GET') {
            options.data = JSON.stringify(data)
        }
        console.debug('请求参数 options ==> ', options)

        let headers = {
            'Content-Type': 'application/json'
        }
        const sessionId = wx.getStorageSync("sessionId")
        const bookToken = wx.getStorageSync("bookToken")
        if (sessionId) {
            headers.Cookie = sessionId;
        }
        if (bookToken) {
            headers.bookToken = bookToken;
        }
        console.debug('请求头 headers ==> ', headers)

        wx.request({
            header: headers,
            ...options,
            success: function (res) {
                console.log('请求成功 =======> ', res)
                if (res.data.code === '-101') {
                    console.log('未授权跳转到首页去授权')
                    wx.showToast({
                        title: '未授权',
                        icon: "none"
                    })
                    setTimeout(() => {
                        wx.redirectTo({
                            url: `/pages/index/index`,
                        })
                    }, 1500)
                    return
                }
                resolve(res.data)
            },
            fail: function (res) {
                console.error('请求失败 =======> ', res)
                reject(res.data)
            }
        })
    })
};

export default fetch