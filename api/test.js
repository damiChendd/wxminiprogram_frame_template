// import fetch from "../utils/fetch";
import fetch from "../mock/fetch"
import evnConfig from '../config/config'
const baseUrl = evnConfig.baseUrl

/**
 * test
 *
 * @returns {Promise | Promise<unknown>}
 */
export function test() {
    console.log('进入请求');
    return fetch({
        'url': `${baseUrl}/test`,
        'method': 'GET'
    })
}