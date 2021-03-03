const UserModel = require("../model/index.js") // try and take away index.js because its the only file and the index file for the folder

module.exports = {
    list: (req, res) => {
        UserModel.find(function (err, users) {
            if (err) {
                return res.status(500).json({
                    message: 'Error while fetching users',
                    error: err
                });
            }
            return res.json(users);
        })
    },
    show: function (req, res) {
        let userName = req.params.username;

        UserModel.findOne({
            username: userName
        }, function (err, user) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting user.',
                    error: err
                });
            }

            if (!user) {
                return res.status(404).json({
                    message: 'No such user'
                });
            }

            return res.json(user);
        });
    },
    create: function (req, res) {
        let user = new UserModel({
            username: req.body.username,
            password: req.body.password,
            email: req.body.email,
            age: req.body.age
        });

        user.save(function (err, person) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating user',
                    error: err
                });
            }

            return res.status(201).json(person);
        });
    }

};