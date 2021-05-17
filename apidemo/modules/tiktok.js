
 


/** 数据监测（抖音）*/
const pre = '/tiktok'

export default ({ request, requestForMock, mock, tools, moduleName }) => ({


  
  
  



/**
  * @description 数据统计-数据概览-评论趋势
get
/tiktok/dataMonitor/commentTrend

  */
  _TIKTOK_DATAMONITOR_COMMENTTREND_GET({body=undefined,param=undefined,header=undefined,path=undefined,config=undefined}={}) {
    // 接口请求
    return request({
      url: `${moduleName + pre}/dataMonitor/commentTrend`,
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
  * @description 工作台-作品趋势
get
/tiktok/dataMonitor/trend

  */
  _TIKTOK_DATAMONITOR_TREND_GET({body=undefined,param=undefined,header=undefined,path=undefined,config=undefined}={}) {
    // 接口请求
    return request({
      url: `${moduleName + pre}/dataMonitor/trend`,
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
  * @description 工作台-视频排行
get
/tiktok/dataMonitor/videoTop

  */
  _TIKTOK_DATAMONITOR_VIDEOTOP_GET({body=undefined,param=undefined,header=undefined,path=undefined,config=undefined}={}) {
    // 接口请求
    return request({
      url: `${moduleName + pre}/dataMonitor/videoTop`,
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
  * @description 数据统计-授权账号列表
get
/tiktok/dataMonitor/accountList

  */
  _TIKTOK_DATAMONITOR_ACCOUNTLIST_GET({body=undefined,param=undefined,header=undefined,path=undefined,config=undefined}={}) {
    // 接口请求
    return request({
      url: `${moduleName + pre}/dataMonitor/accountList`,
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
  * @description 数据统计-授权账号详情
get
/tiktok/dataMonitor/accountDetailed

  */
  _TIKTOK_DATAMONITOR_ACCOUNTDETAILED_GET({body=undefined,param=undefined,header=undefined,path=undefined,config=undefined}={}) {
    // 接口请求
    return request({
      url: `${moduleName + pre}/dataMonitor/accountDetailed`,
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
  * @description 数据统计-授权账号详情导出
get
/tiktok/dataMonitor/export

  */
  _TIKTOK_DATAMONITOR_EXPORT_GET({body=undefined,param=undefined,header=undefined,path=undefined,config=undefined}={}) {
    // 接口请求
    return request({
      url: `${moduleName + pre}/dataMonitor/export`,
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
  * @description 数据统计-数据概览-分享趋势
get
/tiktok/dataMonitor/shareTrend

  */
  _TIKTOK_DATAMONITOR_SHARETREND_GET({body=undefined,param=undefined,header=undefined,path=undefined,config=undefined}={}) {
    // 接口请求
    return request({
      url: `${moduleName + pre}/dataMonitor/shareTrend`,
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
  * @description 数据统计-数据概览-点赞趋势
get
/tiktok/dataMonitor/praiseTrend

  */
  _TIKTOK_DATAMONITOR_PRAISETREND_GET({body=undefined,param=undefined,header=undefined,path=undefined,config=undefined}={}) {
    // 接口请求
    return request({
      url: `${moduleName + pre}/dataMonitor/praiseTrend`,
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
  * @description 数据统计-数据概览-粉丝趋势
get
/tiktok/dataMonitor/fansTrend

  */
  _TIKTOK_DATAMONITOR_FANSTREND_GET({body=undefined,param=undefined,header=undefined,path=undefined,config=undefined}={}) {
    // 接口请求
    return request({
      url: `${moduleName + pre}/dataMonitor/fansTrend`,
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
  * @description 工作台-授权卡片列表
get
/tiktok/dataMonitor/authCards

  */
  _TIKTOK_DATAMONITOR_AUTHCARDS_GET({body=undefined,param=undefined,header=undefined,path=undefined,config=undefined}={}) {
    // 接口请求
    return request({
      url: `${moduleName + pre}/dataMonitor/authCards`,
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
  * @description 数据统计-直播记录-直播列表
get
/tiktok/dataMonitor/liveList

  */
  _TIKTOK_DATAMONITOR_LIVELIST_GET({body=undefined,param=undefined,header=undefined,path=undefined,config=undefined}={}) {
    // 接口请求
    return request({
      url: `${moduleName + pre}/dataMonitor/liveList`,
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
  * @description 数据统计-直播记录-直播数据
get
/tiktok/dataMonitor/liveData

  */
  _TIKTOK_DATAMONITOR_LIVEDATA_GET({body=undefined,param=undefined,header=undefined,path=undefined,config=undefined}={}) {
    // 接口请求
    return request({
      url: `${moduleName + pre}/dataMonitor/liveData`,
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
  * @description 数据统计-粉丝画像-地域分布
get
/tiktok/dataMonitor/regionDistribution

  */
  _TIKTOK_DATAMONITOR_REGIONDISTRIBUTION_GET({body=undefined,param=undefined,header=undefined,path=undefined,config=undefined}={}) {
    // 接口请求
    return request({
      url: `${moduleName + pre}/dataMonitor/regionDistribution`,
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
  * @description 数据统计-粉丝画像-年龄分布
get
/tiktok/dataMonitor/ageDistribution

  */
  _TIKTOK_DATAMONITOR_AGEDISTRIBUTION_GET({body=undefined,param=undefined,header=undefined,path=undefined,config=undefined}={}) {
    // 接口请求
    return request({
      url: `${moduleName + pre}/dataMonitor/ageDistribution`,
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
  * @description 数据统计-粉丝画像-性别分布
get
/tiktok/dataMonitor/sexDistribution

  */
  _TIKTOK_DATAMONITOR_SEXDISTRIBUTION_GET({body=undefined,param=undefined,header=undefined,path=undefined,config=undefined}={}) {
    // 接口请求
    return request({
      url: `${moduleName + pre}/dataMonitor/sexDistribution`,
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
  * @description 数据统计-粉丝画像-粉丝重合度卡片
get
/tiktok/dataMonitor/contactRatioCards

  */
  _TIKTOK_DATAMONITOR_CONTACTRATIOCARDS_GET({body=undefined,param=undefined,header=undefined,path=undefined,config=undefined}={}) {
    // 接口请求
    return request({
      url: `${moduleName + pre}/dataMonitor/contactRatioCards`,
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
  * @description 数据统计-视频作品-视频列表
get
/tiktok/dataMonitor/videoList

  */
  _TIKTOK_DATAMONITOR_VIDEOLIST_GET({body=undefined,param=undefined,header=undefined,path=undefined,config=undefined}={}) {
    // 接口请求
    return request({
      url: `${moduleName + pre}/dataMonitor/videoList`,
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
  * @description 数据统计-视频作品-视频数据
get
/tiktok/dataMonitor/videoData

  */
  _TIKTOK_DATAMONITOR_VIDEODATA_GET({body=undefined,param=undefined,header=undefined,path=undefined,config=undefined}={}) {
    // 接口请求
    return request({
      url: `${moduleName + pre}/dataMonitor/videoData`,
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
