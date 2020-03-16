/**
 * Formats the badges provided by the user to and array
 * with objects with keys and values.
 * @param badges {object} the badges provided by the user
 * @returns {{value: string, key: string}[]|*[]}
 */
const formatBadges = (badges) => {
    if (!(badges instanceof Object && badges.constructor === Object)) {
        return [];
    }
    
    return Object.keys(badges).map(key => {
        const value = (typeof badges[key] === 'string') ? badges[key].substr(0, 100) : '';
        
        return { key, value };
    });
};

module.exports = formatBadges;