import { assign, map, concat } from 'lodash'
import { request, mock, requestForMock } from './service'
import * as tools from './tools'

const files = import.meta.globEager('./modules/**/index.js')
const generators =  Object.keys(files).map(key => files[key].default)

export default assign(
  {},
  ...concat(
    ...map(generators, funs =>
      funs({
        request,
        mock,
        requestForMock,
        tools
      })
    )
  )
)
