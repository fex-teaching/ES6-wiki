const path = require('path');
const fs = require('fs');

// const Mocks = env.openMock === 'true' ? require('./mock.config') : () => {};
const Mocks = require('./mock.config');

module.exports = {
  devServer: {
    // 本地开发用mock
    before: (app) => {
      Mocks(app);
    },
  }
}
