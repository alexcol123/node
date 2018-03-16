if (process.env.NODE_ENV === 'production') {
  module.exports = { monogoURI: 'mongodb://Alexcol123:Alex#1960@ds129776.mlab.com:29776/vidjot-alex' }
} else {
  module.exports = { mongoURI: 'mongodb://localhost/vidjot-dev' }
}
