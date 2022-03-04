const mongoose = require('mongoose');
const matchSchema = mongoose.Schema({
    scoreOne : String,
    scoreTwo : String,
    teamOne : String,
    teamTwo : String
});

const match = mongoose.model('Match', matchSchema);
module.exports = match;