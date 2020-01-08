
const EasyWechat = require('../dist/');

console.log(EasyWechat);

let app = EasyWechat.Factory.getInstance('OfficialAccount', {
  app_id: 'abc123',
  secret: 'test123',
  oauth: {
    scope: 'snsapi_userinfo',
    callback: 'http://www.example.com/callback',
  },
});

let url = app.oauth.redirect();

console.log('app', app);
