'use strict';
const path = require('path');
const co = require('co');
const vm = require('vm');
const NativeModule = require('module');
module.exports = app => {

  if (app.view) {
    app.view.resolve = function(name) {
      return Promise.resolve(name);
    };
  }

  if (app.rax) {
    app.rax.render = (name, locals, options) => {
      const filePath = path.isAbsolute(name) ? name : path.join(app.config.view.root[0], name);
      return co(function* () {
        const code = yield app.webpack.fileSystem.readWebpackMemoryFile(filePath, name);
        if (!code) {
          throw new Error(`read webpack memory file[${filePath}] content is empty, please check if the file exists`);
        }
        const wrapper = NativeModule.wrap(code);
        // can‘t find async chunk file fix: https://github.com/easy-team/egg-react-webpack-boilerplate/issues/23
        module.id = filePath;
        module.filename = filePath;
        vm.runInThisContext(wrapper)(exports, require, module, filePath, path.dirname(filePath));
        const reactClass = module.exports && module.exports.default ? module.exports : exports.default ? exports : module.exports;
        return app.rax.renderElement(reactClass, locals);
      });
    };
  }
};
