const path = require('path')

const createRequire = require('..')

test('create-require', () => {
  const _require = createRequire(path.join(__dirname, 'fixture/index.js'))
  const e = _require('./file')
  expect(e).toBe('someFile')
})
