const fs = require('fs');

const generateMailBody = (file) => {
    const filePath = './services/mailer/body/' + file + '.html';
    return new Promise((res, rej) => {
        fs.readFile(filePath, (err, data) => {
            if (err) {
                rej(err);
            } else {
                res(data.toString());
            }
        });
    });
}

module.exports = {
    generateMailBody
}
