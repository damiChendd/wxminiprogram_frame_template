// mock 数据的请求


/**
 * 使用方法：
 * 1.mockList.js 加入数据 key:value (注：key = apiList key，value = 要返回的值)
 * 2.apiList 加入数据 key:value (注： key = mockList key，value = 请求的)
 */

import mockList from './mockList'

const apiList = {
    'test': '/test'
}

const fetch = options => {
    return new Promise((resolve, reject) => {
        console.log('进入mock-fetch==>', options)
        // 判断请求的url是否和mock数据里的key相匹配，如果匹配，返回对应的数据，返回错误码
        for(let key in apiList) {
            if(apiList[key] == options.url) {
                let response = mockList[key] 
                resolve(response)
                break;
            }
        }
    })
};

export default fetch