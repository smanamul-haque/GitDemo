exports.config = {
    // launch locally when fields directConnect and seleniumAddress are not provided
    chromeDriver: '/usr/local/bin/chromedriver',
    seleniumServerJar: 'D:/Eclipse progs/jars/selenium-server-standalone-3.11.0.jar',
    specs: ['D:\\Protratest.js'],
    capabilities: {
      browserName: 'chrome'
    }
  }