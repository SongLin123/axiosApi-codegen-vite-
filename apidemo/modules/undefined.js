/** 基础功能*/
const pre = '/'
export default ({ request, requestForMock, mock, tools, moduleName }) => ({


  
  
 
  


    /**
  * @description 登陆（邮箱/手机号+密码）  post /user/loginByPwd
  
  */
  _USER_LOGINBYPWD_POST({body=undefined,param=undefined,header=undefined,path=undefined,config=undefined}={}) {
    // 接口请求
    return request({
      url: `${moduleName + pre}/user/loginByPwd`,
      method: 'post',
      headers:{'Content-Type':'multipart/form-data',
       ...header
      },
      data:body,
      params:param,
      ...config
    })
  },
  
  
 
  


    /**
  * @description 搜索  get /common/search
  
  */
  _COMMON_SEARCH_GET({body=undefined,param=undefined,header=undefined,path=undefined,config=undefined}={}) {
    // 接口请求
    return request({
      url: `${moduleName + pre}/common/search`,
      method: 'get',
      headers:{'Content-Type':'',
       ...header
      },
      data:body,
      params:param,
      ...config
    })
  },
  
  
 
  


    /**
  * @description 文件下载  get /common/download
  
  */
  _COMMON_DOWNLOAD_GET({body=undefined,param=undefined,header=undefined,path=undefined,config=undefined}={}) {
    // 接口请求
    return request({
      url: `${moduleName + pre}/common/download`,
      method: 'get',
      headers:{'Content-Type':'',
       ...header
      },
      data:body,
      params:param,
      ...config
    })
  },
  
  
 
  


    /**
  * @description 更换手机号/邮箱  put /user/update
  
  */
  _USER_UPDATE_PUT({body=undefined,param=undefined,header=undefined,path=undefined,config=undefined}={}) {
    // 接口请求
    return request({
      url: `${moduleName + pre}/user/update`,
      method: 'put',
      headers:{'Content-Type':'',
       ...header
      },
      data:body,
      params:param,
      ...config
    })
  },
  
  
 
  


    /**
  * @description 发送验证码（邮箱）  get /user/verifyCodeByEmail
  
  */
  _USER_VERIFYCODEBYEMAIL_GET({body=undefined,param=undefined,header=undefined,path=undefined,config=undefined}={}) {
    // 接口请求
    return request({
      url: `${moduleName + pre}/user/verifyCodeByEmail`,
      method: 'get',
      headers:{'Content-Type':'',
       ...header
      },
      data:body,
      params:param,
      ...config
    })
  },
  
  
 
  


    /**
  * @description 获取个人信息  get /user/info
  
  */
  _USER_INFO_GET({body=undefined,param=undefined,header=undefined,path=undefined,config=undefined}={}) {
    // 接口请求
    return request({
      url: `${moduleName + pre}/user/info`,
      method: 'get',
      headers:{'Content-Type':'',
       ...header
      },
      data:body,
      params:param,
      ...config
    })
  },
  
  
 
  


    /**
  * @description 退出登陆  get /user/logout
  
  */
  _USER_LOGOUT_GET({body=undefined,param=undefined,header=undefined,path=undefined,config=undefined}={}) {
    // 接口请求
    return request({
      url: `${moduleName + pre}/user/logout`,
      method: 'get',
      headers:{'Content-Type':'',
       ...header
      },
      data:body,
      params:param,
      ...config
    })
  },
  
  
 
  


    /**
  * @description 登陆（手机号+验证码）  post /user/loginByVerifyCode
  
  */
  _USER_LOGINBYVERIFYCODE_POST({body=undefined,param=undefined,header=undefined,path=undefined,config=undefined}={}) {
    // 接口请求
    return request({
      url: `${moduleName + pre}/user/loginByVerifyCode`,
      method: 'post',
      headers:{'Content-Type':'multipart/form-data',
       ...header
      },
      data:body,
      params:param,
      ...config
    })
  },
  
  
 
  


    /**
  * @description 重置密码  put /user/resetPwd
  
  */
  _USER_RESETPWD_PUT({body=undefined,param=undefined,header=undefined,path=undefined,config=undefined}={}) {
    // 接口请求
    return request({
      url: `${moduleName + pre}/user/resetPwd`,
      method: 'put',
      headers:{'Content-Type':'multipart/form-data',
       ...header
      },
      data:body,
      params:param,
      ...config
    })
  },
  
  
 
  


    /**
  * @description 绑定手机号  put /user/bindPhone
  
  */
  _USER_BINDPHONE_PUT({body=undefined,param=undefined,header=undefined,path=undefined,config=undefined}={}) {
    // 接口请求
    return request({
      url: `${moduleName + pre}/user/bindPhone`,
      method: 'put',
      headers:{'Content-Type':'multipart/form-data',
       ...header
      },
      data:body,
      params:param,
      ...config
    })
  },
  
  
 
  


    /**
  * @description 发送验证码（手机）  get /user/verifyCodeByPhone
  
  */
  _USER_VERIFYCODEBYPHONE_GET({body=undefined,param=undefined,header=undefined,path=undefined,config=undefined}={}) {
    // 接口请求
    return request({
      url: `${moduleName + pre}/user/verifyCodeByPhone`,
      method: 'get',
      headers:{'Content-Type':'',
       ...header
      },
      data:body,
      params:param,
      ...config
    })
  },
  
  
 
  


    /**
  * @description 问题反馈  post /common/question
  
  */
  _COMMON_QUESTION_POST({body=undefined,param=undefined,header=undefined,path=undefined,config=undefined}={}) {
    // 接口请求
    return request({
      url: `${moduleName + pre}/common/question`,
      method: 'post',
      headers:{'Content-Type':'',
       ...header
      },
      data:body,
      params:param,
      ...config
    })
  },
  
 
})
