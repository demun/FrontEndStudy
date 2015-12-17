var connect = require('connect'),
    serveStatic = require('serve-static'),
    workspaceDir = 'D:/study/angularjs',
    port = 7777;

var app = connect();

app.use(serveStatic(workspaceDir));
app.listen(port);

console.log('서버 실행중, http://localhost:' + port);