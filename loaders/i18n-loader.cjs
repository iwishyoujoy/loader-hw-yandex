module.exports = function (source) {
    let newSource = source;
  
    for (const [key, value] of Object.entries(this.query.translations)) {
      const regex = new RegExp(`i18n\\s*\\(['"]${key}['"]\\)`, "g");
      newSource = newSource.replace(regex, JSON.stringify(value));
    }
    
    return newSource;
  };