# turn-server
一个使用node-turn搭建turn服务的例子
## 安装包
```shell
yarn install
```
## 修改监听端口和设定默认链接账号
```typescript
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
```
## 开启服务
```shell
node main.js
```
