var moment = require("moment");

let dataInicial = moment("2020-05-15");
let dataFinal = moment("2021-05-15");

let dataMedia = dataFinal.diff(dataInicial, 'days');

console.log(dataMedia)

