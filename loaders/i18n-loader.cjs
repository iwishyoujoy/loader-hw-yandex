const loaderUtils = require("loader-utils");

module.exports = function(source) {
  const options = loaderUtils.getOptions(this); // getting options from webpack.config 

  Object.keys(options.translations).forEach(key => {
    source = source.replace(new RegExp(`i18n\\('${key}'\\)`, "g"), `"${options.translations[key]}"`);
  });

  return source;
};