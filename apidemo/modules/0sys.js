/** 权限管理*/
const pre = '/sys'
export default ({ request, requestForMock, mock, tools, moduleName }) => ({


  
  
 
  


    /**
  * @description 删除权限  delete /sys/level/{id}
  
  */
  _SYS_LEVEL_DELETE({body=undefined,param=undefined,header=undefined,path=undefined,config=undefined}={}) {
    // 接口请求
    return request({
      url: `${moduleName + pre}/sys/level/${path}`,
      method: 'delete',
      headers:{'Content-Type':'multipart/form-data',
       ...header
      },
      data:body,
      params:param,
      ...config
    })
  },
  
  
 
  


    /**
  * @description 新建权限  post /sys/level
  
  */
  _SYS_LEVEL_POST({body=undefined,param=undefined,header=undefined,path=undefined,config=undefined}={}) {
    // 接口请求
    return request({
      url: `${moduleName + pre}/sys/level`,
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
  * @description 权限列表  get /sys/level
  
  */
  _SYS_LEVEL_GET({body=undefined,param=undefined,header=undefined,path=undefined,config=undefined}={}) {
    // 接口请求
    return request({
      url: `${moduleName + pre}/sys/level`,
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
  * @description 编辑权限  put /sys/level
  
  */
  _SYS_LEVEL_PUT({body=undefined,param=undefined,header=undefined,path=undefined,config=undefined}={}) {
    // 接口请求
    return request({
      url: `${moduleName + pre}/sys/level`,
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
  * @description 权限设置  put /sys/level/permissionSetted
  
  */
  _SYS_LEVEL_PERMISSIONSETTED_PUT({body=undefined,param=undefined,header=undefined,path=undefined,config=undefined}={}) {
    // 接口请求
    return request({
      url: `${moduleName + pre}/sys/level/permissionSetted`,
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
  * @description 权限详情信息  get /sys/level/detailed/{id}
  
  */
  _SYS_LEVEL_DETAILED_GET({body=undefined,param=undefined,header=undefined,path=undefined,config=undefined}={}) {
    // 接口请求
    return request({
      url: `${moduleName + pre}/sys/level/detailed/${path}`,
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
  * @description 获取资源树  get /sys/resource/tree
  
  */
  _SYS_RESOURCE_TREE_GET({body=undefined,param=undefined,header=undefined,path=undefined,config=undefined}={}) {
    // 接口请求
    return request({
      url: `${moduleName + pre}/sys/resource/tree`,
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
