const bodyParser = require('body-parser');

const mockPathList = {
  '/api/news': './mocks/news.json',
}

const mockFn = (req, res) => {
  const info = mockPathList[req.path];
  if (info) {
    switch (Object.prototype.toString.call(info).slice(8, -1)) {
      case 'String':
        res.json(require(info));
        break;
      case 'Function':
        info(req, res);
        break;
      case 'Object':
        res.json(info);
        break;
      default:
    }
  }
};

module.exports = (app) => {
  app.use(bodyParser.urlencoded({ extended: false }));
  app.get('/api/*', mockFn);
  app.post('/api/*', mockFn);
};
