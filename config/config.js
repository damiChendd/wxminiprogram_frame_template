const current = 'local'

const baseUrlLocal = ''
const baseUrlTest = 'https://www.baidu.com'
const baseUrlPro = 'https://www.baidu.com'

const profile = {
    // 本地mock数据
    'local': {
        'evn': 'local',
        'baseUrl': `${baseUrlLocal}`,
        // fetch 请求地址
        'fetchPath': '../mock/fetch'
    },
    // 开发者工具
    'dev': {
        'evn': 'dev',
        'baseUrl': `${baseUrlTest}`,
        // fetch 请求地址
        'fetchPath': '../utils/fetch'
    },
    // 测试环境
    'test': {
        'evn': 'test',
        'baseUrl': `${baseUrlTest}`,
        // fetch 请求地址
        'fetchPath': '../utils/fetch'
    },
    // 生产环境
    'pro': {
        'evn': 'pro',
        'baseUrl': `${baseUrlPro}`,
        // fetch 请求地址
        'fetchPath': '../utils/fetch'
    }
}

const evnConfig = profile[current]

export default evnConfig

