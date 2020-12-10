// @ts-ignore
var Turn = require('node-turn');
var server = new Turn({
    // set options
    authMech: 'long-term',
    debugLevel: 'traces',
    listeningPort: 3475,
    //账号
    credentials: {
        test: '123456'
    }
});
server.start();
