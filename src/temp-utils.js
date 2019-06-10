const os = require('os');
const path = require('path');
const fs = require('fs');

module.exports = {
  createTempDir: (name) => new Promise((resolve, reject) => {
    const dir = path.resolve(os.tmpdir(), name);
    fs.mkdir(dir, parseInt('0700', 8), (err) => {
      if (err) return reject(err);
      return resolve(dir);
    });
  })
};
