
import Body from 'body';

export class AppServer {
  constructor (req, res) {
    this.$req = req;
    this.$res = res;
  }

  getMethod () {
    if (!this.$req) return {};
    return this.$req.method;
  }

  getQuery () {
    if (!this.$req) return {};
    let url = Url.parse(this.$req.url, true);
    return url.query;
  }

  _readBody () {
    return new Promise((resolve, reject) => {
      Body(this.$req, (err, body) => {
        if (err) {
          reject(err);
        } else {
          resolve(body);
        }
      });
    })
    .catch((err) => {
      console.log('app_server._readBody()', err);
    });
  }

  async getBody () {
    if (!this.$req) return '';
    let body = await this._readBody();
    return body;
  }

  _initResponseOptions (options = {}) {
    options.status = options.status || 200;
    options.contentType = options.contentType || 'text/html';
    options.headers = options.headers || {};
    options.headers['Content-Type'] = options.contentType;
    return options
  }

  sendResponse (content, options = {}) {
    if (!this.$res) return false;
    options = this._initResponseOptions(options);
    this.$res.writeHead(options.status, options.headers);
    this.$res.end(content);
  }
}

export class AppServerKoa2 extends AppServer {
  constructor (ctx) {
    super(ctx.req, ctx.res);
    this.$ctx = ctx;
  }

  sendResponse (content, options = {}) {
    if (!this.$ctx) return false;
    options = this._initResponseOptions(options);
    this.$ctx.status = options.status;
    for (let k in options.headers) {
      this.$ctx.set(k, options.headers[k]);
    }
    this.$ctx.body = content;
  }
}
