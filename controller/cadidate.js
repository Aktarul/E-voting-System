var Cadidate = require('../model/candidate'),
    multer = require('multer');

let store = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, './public');
    },
    filename: function(req, file, cb){
        cb(null, Date.now() + '.' + file.originalname);
    }
});

let upload = multer({storage:store}).single('file');

var createCadidate = (req, res, next) => {
    var firstName = req.body.firstName,
        middleName = req.body.middleName,
        lastName = req.body.lastName,
        position = req.body.position,
        dept = req.body.dept,
        email = req.body.email,
        username = req.body.username,
        password = req.body.password;

    var newCandidate = new Cadidate({
        firstName: firstName,
        middleName: middleName,
        lastName: lastName,
        position: position,
        dept: dept,
        email: email,
        username: username,
        password: password
    })




    Cadidate.addUser(newCandidate, (err, candidate) =>{
        if(err){
            res.status(404).json({
                success: false,
                message: err
            })
        }
        else{
            res.status(201).json({
                success: true,
                data: candidate
            })
        }
    })
}

var updateCandidate = (req, res, next) =>{

    var firstName = req.body.firstName,
        middleName = req.body.middleName,
        lastName = req.body.lastName,
        position = req.body.position,
        dept = req.body.dept,
        email = req.body.email,
        username = req.body.username,
        password = req.body.password;




    Cadidate.findById(req.params.id, (err, candidate) => {
        if(err){
            return res.status(404).json({
                message: err,
                success: false
            });
        }
        else {


            candidate.firstName = firstName || candidate.firstName;
            candidate.middleName = middleName || candidate.middleName;
            candidate.lastName = middleName || candidate.lastName;
            candidate.dept = middleName || candidate.dept;
            candidate.position = position || candidate.position;
            candidate.email = position || candidate.email;
            candidate.username = position || candidate.username;


            candidate.save((err, product) => {
                if(err){
                    return res.status(404).json({
                        message: err,
                        success: false
                    });
                }
                else {



                    return res.status(200).json({
                        success: true,
                        data: candidate
                    });
                }
            });
        }
    });

}

var getAllCandidate = (req, res, next) =>{
    Cadidate.find( (err, candidate)=>{
        if(err){
            return res.status(404).json({
                success: false,
                message: err
            })

        }
        else{
            return res.status(200).json({
                success: true,
                data: candidate
            })
        }
    })
}

var deleteCandidate = (req, res, next) =>{
    
}



module.exports = {
    createCadidate,
    updateCandidate,
    getAllCandidate
}