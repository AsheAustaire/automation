const { readdirSync } = require('fs')
const readline = require('readline');
const EXEC = require('child_process').execSync

const SCRIPTPATH = './workflows'

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function main() {
  welcome();
  checkForNamingErrors();
  options();
}























function welcome() {
  console.log('Welcome to Asheboard');
}

function checkForNamingErrors(){
  const directoryNames = getDirectoryNames(SCRIPTPATH)
  const workflowNames = getWorkflowNames(SCRIPTPATH, directoryNames) 
  directoryNames.forEach((directoryName) => {
    if(!workflowNames.includes(directoryName)) {
      console.log(directoryName, workflowNames.includes(directoryName))
      throw `${directoryName} workflow and folder need to be the same name`
    }
  })
}

function options() {
  console.log('Please choose from the following options by entering the associated number');
  let itemMap = displayDirectoriesInList(SCRIPTPATH)
  rl.prompt();
  rl.on('line', (line) => {
    let selection = itemMap.filter((obj) => {
      return obj.id === parseInt(line)
    })
    selection = selection[0];
    executeTerminalCommand(`/usr/bin/automator ~/.../asheboard/workflows/${selection.directoryName}/${selection.workflowName}`)
    console.log(`You've just launched ${selection.directoryName}`)
    rl.close()
  })
}



















function getDirectoryNames(path) {
  return readdirSync(path, { withFileTypes: true })
  .filter(dirent => dirent.isDirectory())
  .map(dirent => `${dirent.name}`)
} 

//This function, sucks.
function getWorkflowNames(path, directoryNames) {
  let workFlowNames = directoryNames.map((directoryName) => {
    return readdirSync(`${path}/${directoryName}`) 
  }).map((fileArray) => {
    return fileArray.filter((fileName, i) => {
      if (fileName.includes('workflow')){
        return fileArray[i]
      } 
    })
  }).map((workflowArray) => {
    return workflowArray[0]
  })
  if(workFlowNames.includes(undefined)) {
    throw 'One of your workflows is missing a workflow file'
  }
  workFlowNames = workFlowNames.map((string) => {
    return string.replace('.workflow', '')
  })
  return workFlowNames
} 

// TECH DEBT - WEIRD THING WITH THE INDEX
// Should have SOT for directory names
function displayDirectoriesInList(path) {
  let directoryNameArray = getDirectoryNames(path);
  return directoryNameArray.map((directoryName, i) => {
    console.log(`${i + 1}: ${directoryName}`)
    return {
      'directoryName': directoryName,
      'id': i + 1,
      'workflowName': `${directoryName}.workflow`
    }
  })
}

function executeTerminalCommand(command) {
  EXEC(command)
}

main();