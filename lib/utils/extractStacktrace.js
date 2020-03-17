/**
 * Extracts the file path and line number from the stack trace.
 * @param stack {string} error stack trace
 * @returns {{path: string, line: string}} file path and line number
 */
const extractStacktrace = (stack) => {
    const trace = /\((.*?)\)/g.exec(stack.split('\n')[1])[1].split(/:([\d].*?):/g);
    
    return { path: trace[0], line: trace[1] };
};

module.exports = extractStacktrace;