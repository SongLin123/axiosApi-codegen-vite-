
 


/** 分组管理*/
const pre = '/sys'

export default ({ request, requestForMock, mock, tools, moduleName }) => ({


  
  
  
  

    /**
  * @description 删除/启用/禁用分组  delete /sys/groups
  
  */
  _SYS_GROUPS_DELETE({body=undefined,param=undefined,header=undefined,path=undefined,config=undefined}={}) {
    // 接口请求
    return request({
      url: `${moduleName + pre}/groups`,
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
      url: `${moduleName + pre}/groups`,
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
      url: `${moduleName + pre}/groups`,
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
      url: `${moduleName + pre}/groups`,
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
