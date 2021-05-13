/** 账户管理*/
const pre = '/sys'
export default ({ request, requestForMock, mock, tools, moduleName }) => ({


  
  
 
  


    /**
  * @description 启用/禁用/删除账户  delete /sys/account
  
  */
  _SYS_ACCOUNT_DELETE({body=undefined,param=undefined,header=undefined,path=undefined,config=undefined}={}) {
    // 接口请求
    return request({
      url: `${moduleName + pre}/sys/account`,
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
  * @description 新建账户  post /sys/account
  
  */
  _SYS_ACCOUNT_POST({body=undefined,param=undefined,header=undefined,path=undefined,config=undefined}={}) {
    // 接口请求
    return request({
      url: `${moduleName + pre}/sys/account`,
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
  * @description 编辑账户  put /sys/account
  
  */
  _SYS_ACCOUNT_PUT({body=undefined,param=undefined,header=undefined,path=undefined,config=undefined}={}) {
    // 接口请求
    return request({
      url: `${moduleName + pre}/sys/account`,
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
  * @description 账户列表  get /sys/account
  
  */
  _SYS_ACCOUNT_GET({body=undefined,param=undefined,header=undefined,path=undefined,config=undefined}={}) {
    // 接口请求
    return request({
      url: `${moduleName + pre}/sys/account`,
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
  _SYS_ACCOUNT_IMPORT_POST({body=undefined,param=undefined,header=undefined,path=undefined,config=undefined}={}) {
    // 接口请求
    return request({
      url: `${moduleName + pre}/sys/account/import`,
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
  * @description 账户导出  get /sys/account/export
  
  */
  _SYS_ACCOUNT_EXPORT_GET({body=undefined,param=undefined,header=undefined,path=undefined,config=undefined}={}) {
    // 接口请求
    return request({
      url: `${moduleName + pre}/sys/account/export`,
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
  * @description 账户详情信息  get /sys/account/detailed
  
  */
  _SYS_ACCOUNT_DETAILED_GET({body=undefined,param=undefined,header=undefined,path=undefined,config=undefined}={}) {
    // 接口请求
    return request({
      url: `${moduleName + pre}/sys/account/detailed`,
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
