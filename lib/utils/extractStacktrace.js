/**
 * Extracts the file path and line number from the stack trace.
 * @param stack {string} error stack trace
 * @returns {{path: string, line: string}} file path and line number
 */
const extractStacktrace = (stack) => {
    const [, path, line] = stack.match(/\/([\/\w-_\.@]+\.ts|.js):(\d*):(\d*)/);

    return { path: '/' + path, line };
};

module.exports = extractStacktrace;
