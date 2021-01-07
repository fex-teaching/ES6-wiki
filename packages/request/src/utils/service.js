

import axios from 'axios'
import { Message } from 'element-ui'

// 创建一个独立的axios实例
const service = axios.create({
  baseURL: 'http://www.imooc.com',  // 设置baseUr地址,如果通过proxy跨域可直接填写base地址
  headers: {  // 定义统一的请求头部
    post: {
      "Content-Type": "application/json;charset=UTF-8"
    }
  },
  timeout: 5000, // 配置请求超时时间
});

// 请求拦截
service.interceptors.request.use(config => {
  // 自定义header，在用户登陆后我们可以得到用户的token，这样每次接口请求时带上token用于用户的身份验证
  config.headers.token = 'token';
  return config;
});

// 返回拦截
service.interceptors.response.use((response) => {
  // 获取接口返回结果
  const res = response.data;
  // code为0，直接把结果返回回去，这样前端代码就不用在获取一次data.
  if (res.code === 0) {
    return res;
  } else if (res.code === 403) {
    // 假设403是未登录状态码
    Message.warning(res.message);
    window.location.href = '/#/login';
    return res;
  } else {
    // 使用Message组件弹出错误信息
    Message.error(res.message);
    return res;
  }
}, (err) => {
  throw new Error(err); // 控制台中抛出异常
  Message.error('服务器异常，请稍后重试!');
});
export default service;