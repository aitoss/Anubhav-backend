const handlebars = require('handlebars');

const compileTemplate = (source, data) => {
    const template = handlebars.compile(source);
    return template(data);
}


module.exports = {
    compileTemplate
}
