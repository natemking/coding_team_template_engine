const fs = require('fs');

//Write file function 
const writeToFile = (fileName, data) => {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('Your Team Page is complete!')
    );
}

module.exports = writeToFile;