require('babel-register')({
  presets: ['env'],
  plugins: [
    ["transform-object-rest-spread", { useBuiltIns: true }] // 解析对象的展开运算符
  ]
})

module.exports = require('./server.js')
