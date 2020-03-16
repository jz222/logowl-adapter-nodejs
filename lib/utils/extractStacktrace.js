/**
 * Extracts the file path and line number from the stack trace.
 * @param stack {string} error stack trace
 * @returns {{path: string, line: string}} file path and line number
 */
const extractStacktrace = (stack) => {
    const location = stack.split('\n')[1];
    const trace = /\((.*?)\)/g.exec(location)[1].split(/:[\d]{0}(.*?):/g);
    
    return { path: trace[0], line: trace[1] };
};

module.exports = extractStacktrace;