const router = require('express').Router();
let User = require('../model/user.model');

// Get all Users
router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Add user
router.route('/add').post((req, res) => {
    const userName = req.body.userName;
    const password = req.body.password;
    const type = req.body.type;

    const newUser = new User({
        userName,
        password,
        type
    });

    newUser.save()
        .then(() => res.status = 200)
       .catch((error)=> res.json(error));
});

//get password by sending the userName - users
router.get('/:userName', async(req, res) => {
    try {
       console.log(req.params.userName + 'kalin'); 
        const generatedResult = await getPasswordbyuserName(req.params.userName);
        
        if (generatedResult) {
            res.json(generatedResult)
            // res.body = generatedResult;
            console.log(generatedResult); 
        } else {
            res.status = 404; //bad request
        }
    } catch (error) {
        res.status = 500; // internal server error.
        console.error(error);
    }
}
);

//get password by passing the userName -  users
const getPasswordbyuserName = async (userName) => {
    const users = await User.find();
    if (users.length > 0) {
        users.map((user) => {
            if (user.userName == userName) {
                userObj = {
                    password: user.password,
                    type: user.type
                }
            }
        });
    }
    return userObj;
};
module.exports = router;
