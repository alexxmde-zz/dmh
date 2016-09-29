var main_menu = require('../src/menu/main-menu')
var funcs = []

funcs.push(
  function display_splash_screen() {
    try {
        main_menu.display();
        return true;
    } catch (ex) {
        console.log(ex);
        return false;
    }
})

module.exports = funcs
