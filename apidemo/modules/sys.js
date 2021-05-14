
 


/** 租户管理*/
const pre = '/sys'

export default ({ request, requestForMock, mock, tools, moduleName }) => ({


  
  
  
  

    /**
  * @description 启用/禁用/删除租户  delete /sys/tenant
  
  */
  _SYS_TENANT_DELETE({body=undefined,param=undefined,header=undefined,path=undefined,config=undefined}={}) {
    // 接口请求
    return request({
      url: `${moduleName + pre}/tenant`,
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
  * @description 新建租户  post /sys/tenant
  
  */
  _SYS_TENANT_POST({body=undefined,param=undefined,header=undefined,path=undefined,config=undefined}={}) {
    // 接口请求
    return request({
      url: `${moduleName + pre}/tenant`,
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
  * @description 租户列表  get /sys/tenant
  
  */
  _SYS_TENANT_GET({body=undefined,param=undefined,header=undefined,path=undefined,config=undefined}={}) {
    // 接口请求
    return request({
      url: `${moduleName + pre}/tenant`,
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
  * @description 编辑租户  put /sys/tenant
  
  */
  _SYS_TENANT_PUT({body=undefined,param=undefined,header=undefined,path=undefined,config=undefined}={}) {
    // 接口请求
    return request({
      url: `${moduleName + pre}/tenant`,
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
  * @description 租户导出  get /sys/tenant/export
  
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
  * @description 租户详情信息  get /sys/tenant/detailed/{id}
  
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
