const files = import.meta.globEager('./**')
const apis = Object.keys(files).filter((key) => !key.includes('index.js')).map(key => files[key].default)


const moduleName = '/'


export default ({
  request,
  tools
}) => apis.map(api => api({
  request,
  tools,
  moduleName
}))
