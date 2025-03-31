import { isPlainObject } from './util'

/**
 * 如果是对象，则转换为 json 字符串；如果不是，则返回原值
 *
 * @param data 请求体
 */
export function transformRequest(data: any): any {
  if (isPlainObject(data)) {
    return JSON.stringify(data)
  }
  return data
}

export function transformResponse(data: any): any {
  if (typeof data === 'string') {
    try {
      data = JSON.parse(data)
    } catch (e) {
      // do nothing
    }
  }

  return data
}
