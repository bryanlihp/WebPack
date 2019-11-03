var config = require('./GreeterConfig.json'); //webpack3.* plus has internal JSON loader, no json-loader is required.

module.exports = function() {
    var greet = document.createElement('div');
    greet.textContent=config.greetText;
    return greet;
}
