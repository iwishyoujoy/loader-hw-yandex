module.exports = function(source) {
    let newSource = source;
    for (const [key, value] of Object.entries(this.query.translations)) {
        const regex = new RegExp(`i18n\\(['"]${key}['"]\\)`, 'g');
        newSource = newSource.replace(regex, `'${value}'`);
    }
    return newSource;
}