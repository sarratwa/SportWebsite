const express= require('express');
const app=express();

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/MeanAoutDB');
//mongoose.connect('mongodb+srv://Sara:crococoder@cluster0.lyzrr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');

// Security configuration
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, Accept, Content-Type, X-Requested-with, Authorization"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, DELETE, OPTIONS, PATCH, PUT"
    );
    next();
});


// import body parser module
const bodyParser = require("body-parser");
const { match } = require('assert');
// Prepare Response to JSON Object to send to FE
app.use(bodyParser.json());
// Parse getted Body from FE to JSON Object
app.use(bodyParser.urlencoded({ extended: true }));

//----------------------------MATCHES----------------------------------------
const Match = require('./models/match.js');
//buisness logic to add match
//http://localhost:3000/  =>  /

//add a match
app.post('/matches', (req,res) => {
    console.log('Here into Add Match', req.body);
    //add object to DB
    const matchObj = new Match({
        scoreOne : req.body.scoreOne,
        scoreTwo : req.body.scoreTwo,
        teamOne :req.body.teamOne,
        teamTwo : req.body.teamTwo
    });

    matchObj.save();
});

//get all matches
app.get('/matches', (req,res) => {
    console.log('Here into get all matches');
    //acess to DB and find objects
    Match.find((err,docs)=>{
        if(err){
            console.log('Error into DB', err)
        }else {
            res.status(200).json({
                matches:docs
            });
        }
    });
})

//delete a match
app.delete('/matches/:id', (req,res)=> {
    console.log('Here into delete');
    console.log('Here ID',req.params.id );
    Match.deleteOne({_id:req.params.id}).then(
        (result) => {
            console.log('Result after delete', result);
            if(result){
                res.status(200).json({
                    message : 'Deleted with success'
                });
            }
        }
    );
});

//get match by id
app.get('/matches/:id', (req,res)=> {
    console.log('Hero into get match by Id ', req.params.id);
    Match.findOne({_id: req.params.id}).then(
        (result) => {
            console.log('Result of get by id', result);
            if (result) {
                res.status(200).json({
                    match : result
                });
            }
        }
    )
})

//edit match by id
app.put('/matches/:id', (req,res) => {
    const newMatch = new Match(req.body);
    console.log('Here into edit', req.params.id);
    console.log('edit body', req.body);
    Match.updateOne({_id: req.params.id}, newMatch).then(
        (result) => {
            console.log('Result after edit', result);
            if(result){
                res.status(200).json({
                    message : 'Edited with success'
                });
            }
        }
    );
    
})

//----------------------------TEAMS----------------------------------------
const Team = require('./models/team.js');

//add a team
app.post('/teams', (req,res) => {
    console.log('Here into Add Team', req.body);
    //add object to DB
    const teamObj = new Team({
        name : req.body.name,
        foundation:req.body.foundation,
        stadium:req.body.stadium,
        owner:req.body.owner
    });

    teamObj.save();
});

//get all teams
app.get('/teams', (req,res) => {
    console.log('Here into get all teams');
    //acess to DB and find objects
    Team.find((err,docs)=>{
        if(err){
            console.log('Error into DB', err)
        }else {
            res.status(200).json({
                teams:docs
            });
        }
    });
})

//delete a team
app.delete('/teams/:id', (req,res)=> {
    console.log('Here into delete');
    console.log('Here ID',req.params.id );
    Team.deleteOne({_id:req.params.id}).then(
        (result) => {
            console.log('Result after delete', result);
            if(result){
                res.status(200).json({
                    message : 'Deleted with success'
                });
            }
        }
    );
});


//----------------------------PLAYERS----------------------------------------
const Player = require('./models/player.js');

//add a player
app.post('/players', (req,res) => {
    console.log('Here into Add Player', req.body);
    //add object to DB
    const playerObj = new Player({
        name : req.body.name,
        nbr:req.body.nbr,
        post:req.body.post,
        age:req.body.age
    });

    playerObj.save();
});

//get all players
app.get('/players', (req,res) => {
    console.log('Here into get all players');
    //acess to DB and find objects
    Player.find((err,docs)=>{
        if(err){
            console.log('Error into DB', err)
        }else {
            res.status(200).json({
                players:docs
            });
        }
    });
})

//delete a player
app.delete('/players/:id', (req,res)=> {
    console.log('Here into delete');
    console.log('Here ID',req.params.id );
    Player.deleteOne({_id:req.params.id}).then(
        (result) => {
            console.log('Result after delete', result);
            if(result){
                res.status(200).json({
                    message : 'Deleted with success'
                });
            }
        }
    );
});

//------------------------------SIGNUP---------------------------------
const User = require('./models/user.js');
const bcrypt = require('bcrypt');

//add a user
app.post('/users/signup', (req,res) => {
    //add object to DB
    bcrypt.hash(req.body.pwd, 10).then(
        (result) => {
            const userObj = new User({
                firstname: req.body.firstName,
                lastname: req.body.lastName,
                email: req.body.email,
                pwd: result
            });
            userObj.save();
        }
    )
});

//----------------LOGIN------------------
// check if user exists
app.post('/users/login', (req,res)=> {
    console.log('here into login', req.body);
    User.findOne({email:req.body.email}).then(
        (emailResult) => {
            if(!emailResult){
                res.status(200).json({
                    message:'0'
                })
            }
            return bcrypt.compare(req.body.pwd, emailResult.pwd);
        }
    ).then(
        (pwdResult) => {
            if(!pwdResult){
                res.status(200).json({
                    message:'1'
                })
            }
            User.findOne({email:req.body.email}).then(
                (result)=> {
                    let userToSend = {
                        firstName: result.firstName,
                        lastName : result.lastName
                    }
                    res.status(200).json({
                        user: userToSend,
                        message:'2'
                    })
                }
            )
        }
    )
    
})

module.exports = app;