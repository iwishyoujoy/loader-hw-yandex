const loaderUtils = require("loader-utils");

module.exports = function(source) {
  const options = loaderUtils.getOptions(this);

  Object.keys(options.translations).forEach(key => {
    source = source.replace(new RegExp(`i18n\\('${key}'\\)`, "g"), `"${options.translations[key]}"`);
  });

  return source;
};