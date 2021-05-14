
 


/** 账户管理*/
const pre = '/sys'

export default ({ request, requestForMock, mock, tools, moduleName }) => ({


  
  
  
  

    /**
  * @description 启用/禁用/删除账户  delete /sys/user
  
  */
  _SYS_USER_DELETE({body=undefined,param=undefined,header=undefined,path=undefined,config=undefined}={}) {
    // 接口请求
    return request({
      url: `${moduleName + pre}/user`,
      method: 'delete',
      headers:{'Content-Type':'application/json',
       ...header
      },
      data:body,
      params:param,
      ...config
    })
  },
  
  
  
  

    /**
  * @description 新建账户  post /sys/user
  
  */
  _SYS_USER_POST({body=undefined,param=undefined,header=undefined,path=undefined,config=undefined}={}) {
    // 接口请求
    return request({
      url: `${moduleName + pre}/user`,
      method: 'post',
      headers:{'Content-Type':'application/json',
       ...header
      },
      data:body,
      params:param,
      ...config
    })
  },
  
  
  
  

    /**
  * @description 编辑账户  put /sys/user
  
  */
  _SYS_USER_PUT({body=undefined,param=undefined,header=undefined,path=undefined,config=undefined}={}) {
    // 接口请求
    return request({
      url: `${moduleName + pre}/user`,
      method: 'put',
      headers:{'Content-Type':'application/json',
       ...header
      },
      data:body,
      params:param,
      ...config
    })
  },
  
  
  
  

    /**
  * @description 账户列表  get /sys/user
  
  */
  _SYS_USER_GET({body=undefined,param=undefined,header=undefined,path=undefined,config=undefined}={}) {
    // 接口请求
    return request({
      url: `${moduleName + pre}/user`,
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
  * @description 导入账户  post /sys/account/import
  
  */
  _SYS_IMPORT_POST({body=undefined,param=undefined,header=undefined,path=undefined,config=undefined}={}) {
    // 接口请求
    return request({
      url: `${moduleName + pre}/import`,
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
  * @description 账户导出  get /sys/user/export
  
  */
  _SYS_EXPORT_GET({body=undefined,param=undefined,header=undefined,path=undefined,config=undefined}={}) {
    // 接口请求
    return request({
      url: `${moduleName + pre}/export`,
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
  * @description 账户详情信息  get /sys/user/detailed/{id}
  
  */
  _SYS_DETAILED_GET({body=undefined,param=undefined,header=undefined,path=undefined,config=undefined}={}) {
    // 接口请求
    return request({
      url: `${moduleName + pre}/detailed/${path}`,
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
