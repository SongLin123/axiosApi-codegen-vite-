/*
 * @Date: 2020-06-12 10:20:55
 * @LastEditors  : BillySong
 * @LastEditTime : 2021-05-10 14:48:33
 * @FilePath: \codegen\src\render.js
 */
import { createNjk, fuckinTar } from './njk'

const render = fuckinTar(createNjk('../template', {}))
export function renderEntry (target) {
  render(
    'entry/index',
    {
      dirName: [],
      fileName: 'index'
    },
    target
  )
  render(
    'entry/tools',
    {
      dirName: [],
      fileName: 'tools'
    },
    target
  )

  render(
    'entry/service',
    {
      dirName: [],
      fileName: 'service'
    },
    target
  )
}

export function renderIndex (dirName = [], model, target) {
  Object.assign(model, {
    dirName,
    fileName: 'index'
  })

  render('index', model, target)
}
export function renderModule (dirName = [], fileName, model, target) {
  Object.assign(model, {
    dirName,
    fileName
  })
  render('module', model, target)
}
