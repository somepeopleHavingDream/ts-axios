import { AxiosRequestConfig, AxiosStatic } from './types'
import Axios from './core/Axios'
import { extend } from './helpers/util'
import defaults from './defaults'
import mergeConfig from './core/mergeConfig'

function createInstance(config: AxiosRequestConfig): AxiosStatic {
  const context = new Axios(config)

  // `instance` 不仅是一个绑定了上下文的 `request` 方法，还包含 `Axios` 实例的所有其他方法和属性
  // instance 是一个函数， request 函数
  const instance = Axios.prototype.request.bind(context)
  extend(instance, context)

  return instance as AxiosStatic
}

const axios = createInstance(defaults)
axios.create = function create(config) {
  return createInstance(mergeConfig(defaults, config))
}

export default axios
