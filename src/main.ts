// @ts-ignore
var Turn = require('node-turn')
var server = new Turn({
  // set options
  authMech: 'long-term',
  debugLevel: 'traces',//显示连接信息
  listeningPort: 3475,//监听端口
  //账号
  credentials: {
    test: '123456'
  }
})
server.start()
