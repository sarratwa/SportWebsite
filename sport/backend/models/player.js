const mo = require('mongoose');
const playerSchema = mo.Schema({
    name : String,
    nbr : Number,
    post : String,
    age : Number
});

const player = mo.model('Player', playerSchema);
module.exports = player;