const { readdirSync } = require('fs')
const readline = require('readline');
const EXEC = require('child_process').execSync

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function main() {
  welcome();
  options();
}

function welcome() {
  console.log('Welcome to Asheboard');
}

function options() {
  console.log('Please choose from the following options by entering the associated number');
  let itemMap = displayDirectoriesInList('./workflows')
  rl.prompt();
  rl.on('line', (line) => {
    let selection = itemMap.filter((obj) => {
      return obj.id === parseInt(line)
    })
    selection = selection[0];
    rl.close()

  })
}

function getDirectoriesNames(path) {
  return readdirSync(path, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => `${dirent.name}`)
} 

function displayDirectoriesInList(path) {
  let directoryNameArray = getDirectoriesNames(path)
  return directoryNameArray.map((name, i) => {
    console.log(`${i}: ${name}`)
    return {
      'name': name,
      'id': i
    }
  })
}

main();