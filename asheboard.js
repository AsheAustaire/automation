const { readdirSync } = require('fs')
const readline = require('readline');
const EXEC = require('child_process').execSync

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function main() {
  welcome();
  checkForNamingErrors();
  // options();
}























function welcome() {
  console.log('Welcome to Asheboard');
}

function checkForNamingErrors(){
  const directoryName = getDirectoriesNames('./workflows')
  const workflowName = getWorkflowNames('./workflows', directoryName) 
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
    // executeTerminalCommand(`/usr/bin/automator ~/.../asheboard/workflows/${selection.directoryName}/${selection.workflow}`)
    rl.close()
  })
}



















function getDirectoriesNames(path) {
  return readdirSync(path, { withFileTypes: true })
  .filter(dirent => dirent.isDirectory())
  .map(dirent => `${dirent.name}`)
} 


function getWorkflowNames(path, directoryName) {
  directoryName.forEach((directoryName) => {
    readdirSync(`${path}/${directoryName}`) 
    //filter based off directory name
    console.log(readdirSync(`${path}/${directoryName}`))
  })
} 

function displayDirectoriesInList(path) {
  let directoryNameArray = getDirectoriesNames(path);
  console.log(workflowNameArray)
  return directoryNameArray.map((name, i) => {
    console.log(`${i}: ${directoryName}`)
    return {
      'directoryName': directoryName,
      'id': i,
      'workflowName': ``
    }
  })
}

function executeTerminalCommand(command) {
  EXEC(command)
}

main();