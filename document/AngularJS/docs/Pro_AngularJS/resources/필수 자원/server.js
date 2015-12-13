/*
var connect = require('connect');
connect.createServer(
  connect.static('./../../Desktop/Rex/Programming/_Rex_Github_Repositories/Pro_AngularJS')
).listen(7777);
*/





//localhost:7777 를 로컬서버로 사용한다.
//버전이 변경되면서 뭔가 바뀐것같다.

var connect = require('connect'),
    serveStatic = require('serve-static'),
    workspaceDir = './../../Desktop/Rex/Programming/_Rex_Github_Repositories/SelfStudy/Pro_AngularJS',
    port = 7777;

var app = connect();

app.use(serveStatic(workspaceDir));
app.listen(port);

console.log('서버 실행중, http://localhost:' + port);










/*
var connect = require('connect')  //NPM으로 설치한 connect를 불러온다.
var http = require('http')  //HTTP 도 불러온다
 
var app = connect()  //app에다가 connect() 로 추가한다.

var createStatic = require('connect-static');
 
//이것들은 모두 기본설정이다. 만약 옵션을 생략한다면, 이것은 그들이 될 것이다.
var options = {
  dir: "./../../Desktop/Rex/Programming/_Rex_Github_Repositories/Pro_AngularJS",
  aliases: [
    ['/', '/index.html'],
  ],
  ignoreFile: function(fullPath) {
    var basename = path.basename(fullPath);
    return /^\./.test(basename) || /~$/.test(basename);
  },
  followSymlinks: true,
  cacheControlHeader: "max-age=0, must-revalidate",
};

createStatic(options, function(err, middleware) {
  if (err) throw err;
  console.log('hello');
  app.use('/', middleware);
});
*/

/*
// gzip/deflate outgoing responses 
var compression = require('compression')
app.use(compression())
 
// store session state in browser cookie 
var cookieSession = require('cookie-session')
app.use(cookieSession({
    keys: ['secret1', 'secret2']
}))
 
// parse urlencoded request bodies into req.body 
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded())
 
// respond to all requests 
app.use(function(req, res){
  res.end('Hello from Connect!\n');
})  */
/*
//create node.js http server and listen on port 
http.createServer(app).listen(7777)
*/

























