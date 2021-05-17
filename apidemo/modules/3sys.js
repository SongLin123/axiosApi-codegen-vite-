
 


/** 授权账号管理*/
const pre = '/sys'

export default ({ request, requestForMock, mock, tools, moduleName }) => ({


  
  
  



/**
  * @description 再次授权
put
/sys/authorize

  */
  _SYS_AUTHORIZE_PUT({body=undefined,param=undefined,header=undefined,path=undefined,config=undefined}={}) {
    // 接口请求
    return request({
      url: `${moduleName + pre}/authorize`,
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
  * @description 删除授权
delete
/sys/authorize

  */
  _SYS_AUTHORIZE_DELETE({body=undefined,param=undefined,header=undefined,path=undefined,config=undefined}={}) {
    // 接口请求
    return request({
      url: `${moduleName + pre}/authorize`,
      method: 'delete',
      headers:{'Content-Type':'',
       ...header
      },
      data:body,
      params:param,
      ...config
    })
  },
  
  
  



/**
  * @description 新建授权
post
/sys/authorize

  */
  _SYS_AUTHORIZE_POST({body=undefined,param=undefined,header=undefined,path=undefined,config=undefined}={}) {
    // 接口请求
    return request({
      url: `${moduleName + pre}/authorize`,
      method: 'post',
      headers:{'Content-Type':'',
       ...header
      },
      data:body,
      params:param,
      ...config
    })
  },
  
  
  



/**
  * @description 获取授权列表
get
/sys/authorize

  */
  _SYS_AUTHORIZE_GET({body=undefined,param=undefined,header=undefined,path=undefined,config=undefined}={}) {
    // 接口请求
    return request({
      url: `${moduleName + pre}/authorize`,
      method: 'get',
      headers:{'Content-Type':'',
       ...header
      },
      data:body,
      params:param,
      ...config
    })
  },
  
 
})
