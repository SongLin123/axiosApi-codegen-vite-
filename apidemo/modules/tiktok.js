
 


/** 数据监测（抖音）*/
const pre = '/tiktok'

export default ({ request, requestForMock, mock, tools, moduleName }) => ({


  
  
  
  

    /**
  * @description 数据统计-数据概览-评论趋势  get /tiktok/dataMonitor/commentTrend
  
  */
  _TIKTOKDATAMONITOR_COMMENTTREND_GET({body=undefined,param=undefined,header=undefined,path=undefined,config=undefined}={}) {
    // 接口请求
    return request({
      url: `${moduleName + pre}/commentTrend`,
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
  * @description 工作台-作品趋势  get /tiktok/dataMonitor/trend
  
  */
  _TIKTOKDATAMONITOR_TREND_GET({body=undefined,param=undefined,header=undefined,path=undefined,config=undefined}={}) {
    // 接口请求
    return request({
      url: `${moduleName + pre}/trend`,
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
  * @description 工作台-视频排行  get /tiktok/dataMonitor/videoTop
  
  */
  _TIKTOKDATAMONITOR_VIDEOTOP_GET({body=undefined,param=undefined,header=undefined,path=undefined,config=undefined}={}) {
    // 接口请求
    return request({
      url: `${moduleName + pre}/videoTop`,
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
  * @description 数据统计-授权账号列表  get /tiktok/dataMonitor/accountList
  
  */
  _TIKTOKDATAMONITOR_ACCOUNTLIST_GET({body=undefined,param=undefined,header=undefined,path=undefined,config=undefined}={}) {
    // 接口请求
    return request({
      url: `${moduleName + pre}/accountList`,
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
  * @description 数据统计-授权账号详情  get /tiktok/dataMonitor/accountDetailed
  
  */
  _TIKTOKDATAMONITOR_ACCOUNTDETAILED_GET({body=undefined,param=undefined,header=undefined,path=undefined,config=undefined}={}) {
    // 接口请求
    return request({
      url: `${moduleName + pre}/accountDetailed`,
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
  * @description 数据统计-授权账号详情导出  get /tiktok/dataMonitor/export
  
  */
  _TIKTOKDATAMONITOR_EXPORT_GET({body=undefined,param=undefined,header=undefined,path=undefined,config=undefined}={}) {
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
  * @description 数据统计-数据概览-分享趋势  get /tiktok/dataMonitor/shareTrend
  
  */
  _TIKTOKDATAMONITOR_SHARETREND_GET({body=undefined,param=undefined,header=undefined,path=undefined,config=undefined}={}) {
    // 接口请求
    return request({
      url: `${moduleName + pre}/shareTrend`,
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
  * @description 数据统计-数据概览-点赞趋势  get /tiktok/dataMonitor/praiseTrend
  
  */
  _TIKTOKDATAMONITOR_PRAISETREND_GET({body=undefined,param=undefined,header=undefined,path=undefined,config=undefined}={}) {
    // 接口请求
    return request({
      url: `${moduleName + pre}/praiseTrend`,
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
  * @description 数据统计-数据概览-粉丝趋势  get /tiktok/dataMonitor/fansTrend
  
  */
  _TIKTOKDATAMONITOR_FANSTREND_GET({body=undefined,param=undefined,header=undefined,path=undefined,config=undefined}={}) {
    // 接口请求
    return request({
      url: `${moduleName + pre}/fansTrend`,
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
  * @description 工作台-授权卡片列表  get /tiktok/dataMonitor/authCards
  
  */
  _TIKTOKDATAMONITOR_AUTHCARDS_GET({body=undefined,param=undefined,header=undefined,path=undefined,config=undefined}={}) {
    // 接口请求
    return request({
      url: `${moduleName + pre}/authCards`,
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
  * @description 数据统计-直播记录-直播列表  get /tiktok/dataMonitor/liveList
  
  */
  _TIKTOKDATAMONITOR_LIVELIST_GET({body=undefined,param=undefined,header=undefined,path=undefined,config=undefined}={}) {
    // 接口请求
    return request({
      url: `${moduleName + pre}/liveList`,
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
  * @description 数据统计-直播记录-直播数据  get /tiktok/dataMonitor/liveData
  
  */
  _TIKTOKDATAMONITOR_LIVEDATA_GET({body=undefined,param=undefined,header=undefined,path=undefined,config=undefined}={}) {
    // 接口请求
    return request({
      url: `${moduleName + pre}/liveData`,
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
  * @description 数据统计-粉丝画像-地域分布  get /tiktok/dataMonitor/regionDistribution
  
  */
  _TIKTOKDATAMONITOR_REGIONDISTRIBUTION_GET({body=undefined,param=undefined,header=undefined,path=undefined,config=undefined}={}) {
    // 接口请求
    return request({
      url: `${moduleName + pre}/regionDistribution`,
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
  * @description 数据统计-粉丝画像-年龄分布  get /tiktok/dataMonitor/ageDistribution
  
  */
  _TIKTOKDATAMONITOR_AGEDISTRIBUTION_GET({body=undefined,param=undefined,header=undefined,path=undefined,config=undefined}={}) {
    // 接口请求
    return request({
      url: `${moduleName + pre}/ageDistribution`,
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
  * @description 数据统计-粉丝画像-性别分布  get /tiktok/dataMonitor/sexDistribution
  
  */
  _TIKTOKDATAMONITOR_SEXDISTRIBUTION_GET({body=undefined,param=undefined,header=undefined,path=undefined,config=undefined}={}) {
    // 接口请求
    return request({
      url: `${moduleName + pre}/sexDistribution`,
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
  * @description 数据统计-粉丝画像-粉丝重合度卡片  get /tiktok/dataMonitor/contactRatioCards
  
  */
  _TIKTOKDATAMONITOR_CONTACTRATIOCARDS_GET({body=undefined,param=undefined,header=undefined,path=undefined,config=undefined}={}) {
    // 接口请求
    return request({
      url: `${moduleName + pre}/contactRatioCards`,
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
  * @description 数据统计-视频作品-视频列表  get /tiktok/dataMonitor/videoList
  
  */
  _TIKTOKDATAMONITOR_VIDEOLIST_GET({body=undefined,param=undefined,header=undefined,path=undefined,config=undefined}={}) {
    // 接口请求
    return request({
      url: `${moduleName + pre}/videoList`,
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
  * @description 数据统计-视频作品-视频数据  get /tiktok/dataMonitor/videoData
  
  */
  _TIKTOKDATAMONITOR_VIDEODATA_GET({body=undefined,param=undefined,header=undefined,path=undefined,config=undefined}={}) {
    // 接口请求
    return request({
      url: `${moduleName + pre}/videoData`,
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
