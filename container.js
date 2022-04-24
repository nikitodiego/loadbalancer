
exports.random = function () {
    const fs = require('fs')
    let array = JSON.parse(fs.readFileSync("./productos/productos.json", "utf-8"))
    const randomIndex = Math.floor(Math.random() * array.length);
    return JSON.stringify(array[randomIndex]);
}
