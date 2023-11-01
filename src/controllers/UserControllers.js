const database = require('../databases/connection')

class UserControllers {
    newUser(req, res) {
        const {name, cpf, level} = req.body
        
        database.insert({name, cpf, level}).table('users').then(info => {
            res.status(201).json({status: 'ok', data: "add user " + name +  " in the database!"})
        }).catch(error => {
            res.status(501).json({status: 'error', data: error})
        })
    }

    getUsers(_, res) {
        database.select('*').table('users').then(info => {
            res.status(201).json({status: 'ok', data: info})
        }).catch(error => {
            res.status(501).json({status: 'error', data: error})
        });
    }

    getUserByName(req, res) {

        const {name} = req.body

        database.select('*').table('users').where('name', `${name}`).then(info => {

            if (info.length === 0) {
                res.status(404).json({status: 'warning', data: 'There are no users with that name: ' + name})
            } else {
                res.status(201).json({status: 'ok', data: info})
            }

        }).catch(error => {
            res.status(501).json({status: 'error', data: error})
        });

    }

}

module.exports = new UserControllers()