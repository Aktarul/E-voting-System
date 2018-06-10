var Voter = require('../model/voter');

var createVoter = (req, res, next) => {
    var firstName = req.body.firstName,
        middleName = req.body.middleName,
        lastName = req.body.lastName,
        position = req.body.position,
        dept = req.body.dept,
        email = req.body.email,
        username = req.body.username,
        password = req.body.password;

    var newCandidate = new Voter({
        firstName: firstName,
        middleName: middleName,
        lastName: lastName,
        position: position,
        dept: dept,
        email: email,
        username: username,
        password: password
    })

    Voter.addUser(newCandidate, (err, user) =>{
        if(err){
            res.status(404).json({
                success: false,
                message: err
            })
        }
        else{
            res.status(201).json({
                success: true,
                message: 'Voter created'
            })
        }
    })
}



module.exports = {
    createVoter
}