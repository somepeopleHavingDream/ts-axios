import { AxiosInstance } from './types'
import Axios from './core/Axios'
import { extend } from './helpers/util'

function createInstance(): AxiosInstance {
  const context = new Axios()

  // `instance` 不仅是一个绑定了上下文的 `request` 方法，还包含 `Axios` 实例的所有其他方法和属性
  const instance = Axios.prototype.request.bind(context)
  extend(instance, context)

  return instance as AxiosInstance
}

const axios = createInstance()

export default axios
