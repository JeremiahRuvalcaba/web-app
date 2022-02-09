const colors = require('color');

colors.setTheme({
    error: ['black', 'bgred'],
    success: ['black', 'bgreen'],
    request: ['black', 'bgwhite']
})

const printer = {
    errorPrint: (message) => {
        console.log(colors.error(message));
    },

    successPrint: (message) => {
        console.log(colors.success(message));
    },

    requestPrint: (message) => {
        console.log(colors.request(message));
    }

}

module.exports = printers;