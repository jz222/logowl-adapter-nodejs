const fs = require('fs');

/**
 * Loads a file and extracts the code at a given position.
 * @param path {string} file path
 * @param line {string} the line in which the error occurred
 * @returns {string[]} extracted code
 */
const getSnippet = (path, line) => {
    const file = fs.readFileSync(path);
    const formattedFile = file.toString().split('\n');
    
    return formattedFile.splice(line - 10, 20);
};

module.exports = { getSnippet };