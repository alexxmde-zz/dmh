var chalk = require('chalk'),
    clear = require('clear'),
    clui = require('clui'),
    figlet = require('figlet'),
    inquirer = require('inquirer'),
    char_creation = require('./char_creation')


class MainMenu {
    constructor() {
        this.splashScreen = chalk.red(
            figlet.textSync('D.M.H     1.0!', {
                horizontalLayout: 'full'
            })
        )
        this.options = [{
            type: 'list',
            name: 'options',
            message: 'Choose your destiny!',
            choices: ['Start', 'Exit']
        }]
    }
    display() {
        clear()
        console.log(this.splashScreen)
        inquirer.prompt(this.options).then((a)=>{
          if (a.options === 'Start')
            char_creation.display()
        })
    }
}

module.exports = new MainMenu();
