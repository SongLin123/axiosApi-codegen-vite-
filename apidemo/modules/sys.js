/** 租户管理*/
const pre = '/sys'
export default ({ request, requestForMock, mock, tools, moduleName }) => ({


  
  
 
  


    /**
  * @description 启用/禁用/删除租户  delete /sys/tenant
  
  */
  _SYS_TENANT_DELETE({body=undefined,param=undefined,header=undefined,path=undefined,config=undefined}={}) {
    // 接口请求
    return request({
      url: `${moduleName + pre}/sys/tenant`,
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
      url: `${moduleName + pre}/sys/tenant`,
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
      url: `${moduleName + pre}/sys/tenant`,
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
      url: `${moduleName + pre}/sys/tenant`,
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
  _SYS_TENANT_EXPORT_GET({body=undefined,param=undefined,header=undefined,path=undefined,config=undefined}={}) {
    // 接口请求
    return request({
      url: `${moduleName + pre}/sys/tenant/export`,
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
  _SYS_TENANT_DETAILED_GET({body=undefined,param=undefined,header=undefined,path=undefined,config=undefined}={}) {
    // 接口请求
    return request({
      url: `${moduleName + pre}/sys/tenant/detailed/${path}`,
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
/** 分组管理*/
const pre = '/sys'
export default ({ request, requestForMock, mock, tools, moduleName }) => ({


  
  
 
  


    /**
  * @description 删除/启用/禁用分组  delete /sys/groups
  
  */
  _SYS_GROUPS_DELETE({body=undefined,param=undefined,header=undefined,path=undefined,config=undefined}={}) {
    // 接口请求
    return request({
      url: `${moduleName + pre}/sys/groups`,
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
  * @description 新建分组  post /sys/groups
  
  */
  _SYS_GROUPS_POST({body=undefined,param=undefined,header=undefined,path=undefined,config=undefined}={}) {
    // 接口请求
    return request({
      url: `${moduleName + pre}/sys/groups`,
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
  * @description 编辑分组  put /sys/groups
  
  */
  _SYS_GROUPS_PUT({body=undefined,param=undefined,header=undefined,path=undefined,config=undefined}={}) {
    // 接口请求
    return request({
      url: `${moduleName + pre}/sys/groups`,
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
  * @description 获取分组列表  get /sys/groups
  
  */
  _SYS_GROUPS_GET({body=undefined,param=undefined,header=undefined,path=undefined,config=undefined}={}) {
    // 接口请求
    return request({
      url: `${moduleName + pre}/sys/groups`,
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
  * @description 获取分组详情  get /sys/groups/detailed/{id}
  
  */
  _SYS_GROUPS_DETAILED_GET({body=undefined,param=undefined,header=undefined,path=undefined,config=undefined}={}) {
    // 接口请求
    return request({
      url: `${moduleName + pre}/sys/groups/detailed/${path}`,
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
/** 授权账号管理*/
const pre = '/sys'
export default ({ request, requestForMock, mock, tools, moduleName }) => ({


  
  
 
  


    /**
  * @description 再次授权  put /sys/authorize
  
  */
  _SYS_AUTHORIZE_PUT({body=undefined,param=undefined,header=undefined,path=undefined,config=undefined}={}) {
    // 接口请求
    return request({
      url: `${moduleName + pre}/sys/authorize`,
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
  * @description 删除授权  delete /sys/authorize
  
  */
  _SYS_AUTHORIZE_DELETE({body=undefined,param=undefined,header=undefined,path=undefined,config=undefined}={}) {
    // 接口请求
    return request({
      url: `${moduleName + pre}/sys/authorize`,
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
  * @description 新建授权  post /sys/authorize
  
  */
  _SYS_AUTHORIZE_POST({body=undefined,param=undefined,header=undefined,path=undefined,config=undefined}={}) {
    // 接口请求
    return request({
      url: `${moduleName + pre}/sys/authorize`,
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
  * @description 获取授权列表  get /sys/authorize
  
  */
  _SYS_AUTHORIZE_GET({body=undefined,param=undefined,header=undefined,path=undefined,config=undefined}={}) {
    // 接口请求
    return request({
      url: `${moduleName + pre}/sys/authorize`,
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
