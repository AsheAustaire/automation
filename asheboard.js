// Internal module for creating terminal sub-processes 
const EXEC = require('child_process').execSync
// Internal module for reading from input
const RL = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

const MENULIST = [
  'daemon',
  'general',
  'meetings',
  'graphicRequests',
  'evencom',
  'fionacom',
  'gaTag',
  'specSheet'
]

const MENU = {
  'stopall': {
    'clicks': 0,
    'alias': 'killall -u ashe'
  },
  'daemon': {
    'clicks': 0,
    'alias': '/usr/bin/automator ~/.../automation/daemon.workflow'
  },
  'general': {
    'clicks': 0,
    'alias': '/usr/bin/automator ~/.../automation/general.workflow'
  },
  'meetings': {
    'clicks': 0,
    'alias': '/usr/bin/automator ~/.../automation/workRevive.workflow'
  },
  'graphicRequests': {
    'clicks': 0,
    'alias': '/usr/bin/automator ~/.../automation/workRevive.workflow'
  },
  'evencom': {
    'click': 0,
    'alias': '/usr/bin/automator ~/.../automation/evencom.workflow'
  },
  'gaTag': {
    'click': 0,
    'alias': '/usr/bin/automator ~/.../automation/gaTags.workflow'
  },
  'fionacom': {
    'click': 0,
    'alias': '/usr/bin/automator ~/.../automation/fionacom.workflow'
  },
  'specSheet': {
    'click': 0,
    'alias': '/usr/bin/automator ~/.../automation/specSheet.workflow'
  }
}

main()

function main() {
  menu();
  userInput()
}

// FUNCTIONS

function userInput() {
    RL.question('Choose A Menu Option.', (answer) => {
      let chosenCommandName; 
      let chosenCommand;

      chosenCommandName = answer === '0' ? 'stopall' : MENULIST[answer - 1]
      chosenCommand = MENU[chosenCommandName].alias

      executeShellCommand(chosenCommand)
      
      function executeShellCommand(commandName) {
        EXEC(commandName)
      }

      
      RL.close()
    });
}

function menu() {

  console.log('~ASHEBOARD~ Premade Workspace Configurations')
  console.log('configuration menu')
  console.log('0) Stop All')
  printMenu(MENULIST)


  //FUNCTIONS

  function printMenu(menuList) {

    let cloneMenuList;
    cloneMenuList = [...menuList];

    for(let i = 1; i <= cloneMenuList.length; i++) {
      console.log(getFormattedMenuItem(i, cloneMenuList[i - 1]))      
    }
  }

  function getFormattedMenuItem(number, menuItem) {
    return `${number}) ${menuItem}`
  }

}

