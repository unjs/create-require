const t = require('tap')
const versions = [8, 9, 10, 11, 12, 13, 14]
const testFile = require.resolve('./test')
versions.map(v => t.test(`node@${v}`, t => t.spawn('npx', [`node@${v}`, testFile])))
