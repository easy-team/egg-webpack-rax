'use strict';
const fs = require('fs');
module.exports = agent => {
  agent.ready(() => {
    const manifest = agent.config.raxssr.manifest;
    try {
      if (fs.existsSync(manifest)) {
        fs.unlinkSync(manifest);
      }
    } catch (e) {
      agent.logger.info(e);
    }
  });
};
