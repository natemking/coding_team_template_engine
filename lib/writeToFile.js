const fs = require('fs');
const chalk = require('chalk');


const success = `
~~~~~~~~~~~~~~~~~~~~~~~~~~~
---------------------------
Your Team Page is complete!
---------------------------
~~~~~~~~~~~~~~~~~~~~~~~~~~~

`

//Write file function 
const writeToFile = (fileName, data) => {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log(chalk.greenBright(success))
    );
}

module.exports = writeToFile;