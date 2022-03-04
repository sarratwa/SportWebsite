const m = require('mongoose');
const teamSchema = m.Schema({
    name : String,
    foundation:String,
    stadium:String,
    owner:String,
});

const team = m.model('Team', teamSchema);
module.exports = team;