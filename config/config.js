const current = 'local'

const baseUrlLocal = ''
const baseUrlPro = 'https://sp.msjk95596.com'
const baseUrlTest = 'https://test.msjk95596.com'

const profile = {
    // 本地mock数据
    'local': {
        'evn': 'local',
        'baseUrl': `${baseUrlLocal}`,
        'bookWebUrl': `${baseUrlLocal}/book_web/api`,
        // 本来应该是全局域名配置 现在是日志记录接口专用
        'infoLogBaseUrl': `${baseUrlLocal}/api/ms/trtc_web`,
        // 日志记录接口
        'buryingPoint': {
            // 用户类型 小二-agent 客户-customer
            'userType': 'customer',
            // 调用地方类型 成功时记录-success
            'infoSuccessType': 'success',
            // 调用地方类型 失败时记录-error
            'infoErrorType': 'error',
            // 调用地方类型 普通时记录-error
            'infoNormalType': 'normal'
        },
        // 测试订阅消息id
        'templateIds': ['y1bDPR6lQpfM7r_DgOASaUypZ1VmNrLeAL4wYhTVx28'],
        // fetch 请求地址
        'fetchPath': '../mock/fetch'
    },
    // 开发者工具
    'dev': {
        'evn': 'dev',
        'baseUrl': `${baseUrlTest}`,
        'bookWebUrl': `${baseUrlTest}/book_web/api`,
        // 本来应该是全局域名配置 现在是日志记录接口专用
        'infoLogBaseUrl': `${baseUrlTest}/api/ms/trtc_web`,
        // 日志记录接口
        'buryingPoint': {
            // 用户类型 小二-agent 客户-customer
            'userType': 'customer',
            // 调用地方类型 成功时记录-success
            'infoSuccessType': 'success',
            // 调用地方类型 失败时记录-error
            'infoErrorType': 'error',
            // 调用地方类型 普通时记录-error
            'infoNormalType': 'normal'
        },
        // 测试订阅消息id
        'templateIds': ['y1bDPR6lQpfM7r_DgOASaUypZ1VmNrLeAL4wYhTVx28'],
        // fetch 请求地址
        'fetchPath': '../utils/fetch'
    },
    // 测试环境
    'test': {
        'evn': 'test',
        'baseUrl': `${baseUrlTest}`,
        'bookWebUrl': `${baseUrlTest}/book_web/api`,
        'infoLogBaseUrl': `${baseUrlTest}/api/ms/trtc_web`,
        'buryingPoint': {
            'userType': 'customer',
            'infoSuccessType': 'success',
            'infoErrorType': 'error',
            'infoNormalType': 'normal'
        },
        'templateIds': ['y1bDPR6lQpfM7r_DgOASaUypZ1VmNrLeAL4wYhTVx28'],
        // fetch 请求地址
        'fetchPath': '../utils/fetch'
    },
    // 生产环境
    'pro': {
        'evn': 'pro',
        'baseUrl': `${baseUrlPro}`,
        'bookWebUrl': `${baseUrlPro}/book_web/api`,
        'infoLogBaseUrl': `${baseUrlPro}/api/ms/trtc_web`,
        'buryingPoint': {
            'userType': 'customer',
            'infoSuccessType': 'success',
            'infoErrorType': 'error',
            'infoNormalType': 'normal'
        },
        'templateIds': ['5YiReDX5R4V-luYLSQ6Oh-_6AcQ1YeelDQ2pSpSojG0'],
        // fetch 请求地址
        'fetchPath': '../utils/fetch'
    }
}

const evnConfig = profile[current]

export default evnConfig

