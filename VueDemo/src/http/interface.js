// 请求接口文件
import axios from './api' // 倒入 api

/* 将所有接口统一起来便于维护
 * 如果项目很大可以将 url 独立成文件，接口分成不同的模块
 * 此处的数据依然来自 Easy Mock
 */

// 单独倒出
export function query(params){
    return axios({
        url: '/query',
        method: 'get',
        params
    })
}
  
export function getImages(params){
    return axios({
        url: '/java/materialLibrary',
        method: 'get',
        params
    })
}

export default {
    getImages,
}
 