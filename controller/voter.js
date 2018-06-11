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

var updateVoter = (req, res, next)=>{
    var firstName = req.body.firstName,
        middleName = req.body.middleName,
        lastName = req.body.lastName,
        position = req.body.position,
        dept = req.body.dept,
        email = req.body.email,
        status = req.body.status,
        username = req.body.username,
        password = req.body.password;

    Voter.findById(req.params.id, (err, voter) =>{
        if(err){
            return res.status(404).json({
                success: false,
                message: err
            })
        }
        else
        {
            voter.firstName = firstName || voter.firstName;
            voter.middleName = firstName || voter.middleName;
            voter.lastName = firstName || voter.lastName;
            voter.dept = firstName || voter.dept;
            voter.status = status || voter.status;
            voter.email = email || voter.email;
            voter.username = username || voter.username;
            voter.password = password || voter.password;

            voter.save((err, voter) => {
                if(err){
                    return res.status(404).json({
                        success:false,
                        message:err
                    })
                }
                else{
                    return res.status(200).json({
                        success: true,
                        data: voter
                    })
                }
            })
        }
    })
}

var getAllVoter = (req, res, next)=>{
    Voter.find((err, voter)=>{
        if(err)
        {
            return res.status(404).json({
                success: false,
                messagege: err
            })
        }
        else{
            return res.status(201).json({
                success: true,
                data: voter
            })
        }
    })
}

var deleteVoter = (req, res, next) =>{
    Voter.findByIdAndRemove( req.params.id, (err, voter) =>{
        if(err){
            return res.status(401).json({
                success: false,
                message: err
            })
        }else{
            return res.status(201).json({
                success: true,
                data: voter
            })
        }
    })
}

var getSingleVoter = (req, res, next) =>{
    Voter.findById(req.params.id, (err, voter)=>{
        if(err){
            return res.status(404).json({
                success: false,
                message: err
            })
        }else {
            return res.status(200).json({
                success: true,
                data: voter
            })
        }
    })
}


module.exports = {
    createVoter,
    getAllVoter,
    updateVoter,
    deleteVoter,
    getSingleVoter
}