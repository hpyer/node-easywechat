

let arr = [{ a: 1, b: 2 }, { a: 2, b: 3 }];

let brr = arr.forEach((item, index) => {
  if (item.a == 1) {
    arr[index] = 'abc';
    return true;
  }
  return item;
});

console.log(arr, brr);

// const http = require("http");
// const Body = require("body");

// http.createServer(function (req, res) {

//   if (req.url === '/favicon.ico') {
//     res.end();
//     return;
//   }

//   // console.log('res', res);

//   // let res1 = new http.ServerResponse('abc');
//   // console.log(res1);

//   console.log(req.url);

//   Body(req, function (err, body) {
//     console.log('body', body);
//   });

//   res.end();
// })
// .listen("3000", /*"192.168.56.1",*/ function (err) {
//   if (err) {
//     console.log(err);
//     console.log("开启server失败");
//     return;
//   }
//   console.log("开启server成功，IP: 127.0.0.1,Post:3000");
// });
