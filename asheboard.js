const CONFIG = require('./config.json')
const { welcome, checkForNamingErrors, options} = require('./functions.js')
const messages = require('./messaging.json')
const { readdirSync } = require('fs')
const readline = require('readline');

function main() {
  console.log(messages.welcomeMessage)
  checkForNamingErrors();
  options();
}

main();
