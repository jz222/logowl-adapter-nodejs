const fs = require('fs');

/**
 * Caches snippets to prevent redundant file parsing.
 * @type {Map<string, array>}
 */
const cache = new Map();

/**
 * Loads a file and extracts the code at a given position.
 * @param path {string} file path
 * @param line {string} the line in which the error occurred
 * @returns {string[]} extracted code
 */
const getSnippet = (path, line) => {
    const cachedSnippet = cache.get(path + line);
    
    if (cachedSnippet) {
        return cachedSnippet;
    }
    
    const file = fs.readFileSync(path);
    const formattedFile = file.toString().split('\n');
    
    const snippet = {};
    
    for (let i = line - 6; i < (parseInt(line) + 5); i++) {
        if (formattedFile[i] !== undefined) {
            snippet[i + 1] = ((formattedFile[i] || '').length > 795) ? formattedFile[i].slice(0, 795) + '...' : '';
        }
    }
    
    cache.set(path + line, snippet);
    
    return snippet;
};

module.exports = { getSnippet };