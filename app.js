const http = require('http'); // http 불러오기
const fs = require('fs'); // fs 불러오기

// 서버 구축
http.createServer((req, res) => {
  function serverErrorLog(){
    res.writeHead(500);
    return res.end('서버에 문제가 생겼습니다.')
  }
  console.log("어떤 요청이 들어오는지 확인", "url -> ", req.url, "method -> ", req.method)
}).listen(8080)