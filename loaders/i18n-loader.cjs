module.exports = function(source) {
  let newSource = source;
  
  for (const key of Object.keys(this.query.translations)) {
    const value = JSON.stringify(this.query.translations[key]);
    const regex = new RegExp(`i18n\\(['\`"]${key}['\`"]\\)`, "g");
    newSource = newSource.replaceAll(regex, value);
  }
  return newSource;
};