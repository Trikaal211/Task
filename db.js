const db  = require("mysql2/promise")

const db  = createpool({
    host:"local",
    user:"root",
    password:"s@@mpK0dhood"

})
module.exports = db