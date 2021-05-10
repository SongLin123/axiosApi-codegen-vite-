/*
 * @Date: 2020-05-13 14:30:24
 * @LastEditors  : BillySong
 * @LastEditTime : 2021-05-10 14:47:07
 * @FilePath: \d2-admin\src\api\index.js
 */
import { assign, map, concat } from 'lodash'
import { request, mock, requestForMock } from './service'
import * as tools from './tools'

const files = require.context('./modules', true, /index\.js$/)
const generators = files.keys().map(key => files[key].default)

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
