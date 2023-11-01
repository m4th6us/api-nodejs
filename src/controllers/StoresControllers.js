var databases = require('../databases/connection');

class StoresControllers {
    postNewStore(req, res) {

        const {name, cnpj, description, status, vitrine, id_user} = req.body;

        databases.insert({name, cnpj, description, status, vitrine, id_user}).table('stores').then(_ => {
            res.status(201).json({
                status: 'ok',
                message: 'new store added in table stores sucessufully'
            })
        }).catch(error => {
            res.status(501).json({
                status: 'error',
                message: error
            })
        })

    }

    getStores(_, res) {

        databases.select('*').table('stores').then(info => {
            res.status(201).json({
                status: 'ok',
                message: info
            })
        }).catch(error => {
            res.status(501).json({
                status: 'error',
                message: error
            })
        })

    }

    getStoreByCnpj(req, res) {

        const {cnpj} = req.body;

        console.log(cnpj)

        if (cnpj === undefined) {
            res.status(501).json({
                status: 'error',
                message: "the 'cnpj' field cannot be empty"
            })
        } else {
            databases.select('*').table('stores').where('cnpj', cnpj).then(info => {

                if (info.length > 0) {
                    res.status(201).json({
                        status: 'success',
                        message: info
                    })
                } else {
                    res.status(404).json({
                        status: 'warning', 
                        data: 'There are no stores with that cnpj: ' + cnpj
                    })
                }
            })
        }

    }

    putNameStores(req, res) {

        const {name, cnpj} = req.body;

        if (cnpj === undefined) {
            res.status(501).json({
                status: 'error',
                message: "the 'cnpj' field cannot be empty"
            })

            return

        } else if (name === undefined) {
            res.status(501).json({
                status: 'error',
                message: "the 'name' field be empty"
            })

            return

        } else {
            databases.table('stores').where('cnpj', cnpj).update({
                name: name
            }).then(_ => {
                res.status(201).json({
                    status: 'ok',
                    message: `CNPJ store ${cnpj} had its name field updated`
                })
            })
        }


    }

} 

module.exports = new StoresControllers()