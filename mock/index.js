/**
 * Created by 邵敬超 on 2017/9/6.
 */

import {getUrlParam} from '../src/util/index'
// require('../src/util/index')
const Mock = require('mockjs')

Mock.setup({
  timeout: '10-1500'
})

// 加入收藏
let count = 0
Mock.mock(/api\/v1\/fav_college/, (req, res) => {
  let id = getUrlParam(req.url, 'id')
  let currState = (++count) % 2
  return Mock.mock({
    id: id,
    data: currState,
    msg: currState === 1 ? '已收藏' : '已移除'
  })
})

Mock.mock(/api\/data/, (req, res) => {
  let arr = []
  for (let i = 0; i < 4; i++) {
    let item = Mock.mock({
      'id|+1': 202,
      'title': Mock.Random.cword(20, 40),
      'context|7-10': Mock.Random.cparagraph(),
      time: Mock.Random.date(),
      author: '文/营销中心 倪秋利',
      cate: '集团新闻',
      pic: Mock.Random.image('180x120', Mock.Random.color(), '#ffffff', 'News Image')
    })
    arr.push(item)
  }
  return {
    data: arr
  }
})

Mock.mock(/api\/new$/, {
  'data|6': [
    {
      'id|+1': 200,
      title: Mock.Random.cword(20, 40),
      time: Mock.Random.date(),
      pic: '',
      cate: '集团新闻'
    }
  ]
})

Mock.mock(/api\/news\/\d+/, {
  'data': {
    title: Mock.Random.cword(20, 40),
    context: Mock.Random.cparagraph(80),
    time: Mock.Random.date(),
    author: '文/营销中心 倪秋利',
    cate: '集团新闻'
  }
})
