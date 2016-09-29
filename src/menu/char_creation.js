var chalk = require('chalk'),
    clear = require('clear'),
    clui = require('clui'),
    figlet = require('figlet'),
    inquirer = require('inquirer'),
    classes = require('../engine/heroes/classes')

class CharCreation {
  constructor() {
    debugger;
      this.classes = classes.classList
      this.questions = [
        {
          type: 'list',
          name: 'sex',
          message: 'Are you male or female?',
          choices: ['Male', 'Female', 'Other'],
        },
        {
          type: 'input',
          name: 'name',
          message: 'What is your name?'
        },
        {
          type: 'list',
          name: 'the_class',
          message: 'Select your style!',
          choices: this.classes

        }
      ]
  }

  display() {
    inquirer.prompt(this.questions).then( (a)=> {

    })
  }


}

module.exports = new CharCreation()
