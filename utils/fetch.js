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
        console.debug('请求头 headers ==> ', headers)

        wx.request({
            header: headers,
            ...options,
            success: function (res) {
                console.log('请求成功 =======> ', res)
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