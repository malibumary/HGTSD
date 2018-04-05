module.exports = {
  webpack: (config, options, webpack) => {
    config.entry.main = './backend/index.js'
    return config
  }
}
