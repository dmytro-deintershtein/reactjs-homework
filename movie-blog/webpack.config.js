"use strict";

const path = require('path');

const BUILD_DIR = path.resolve(__dirname, './dist');
const APP_DIR = path.resolve(__dirname, './src');

const configDirs = {
  BUILD_DIR: BUILD_DIR,
  APP_DIR: APP_DIR
}

function buildConfig(env) {
  console.log(env);
  if (env.APP_ENV === 'prod' || env.APP_ENV === 'dev') {
    return require('./config/' + env.APP_ENV + '.js')(configDirs);
  } else {
    console.log("Wrong webpack build parameter. Possible choices: 'dev' or 'prod'.")
  }
}

module.exports = buildConfig;
