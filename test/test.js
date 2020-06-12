const path = require('path')
const t = require('tap')
const createRequire = require('../create-require')

const _require = createRequire(path.join(__dirname, 'some'))
const e = _require('./file')
t.equal(e, 'someFile')
t.end()
