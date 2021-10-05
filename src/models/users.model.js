const connection = require('../config/db')

const userModel = {
    getAll: () => {
        return new Promise((resolve, reject) => {
            connection.query(`SELECT * FROM tbl_users`, (error,result) => {
                if(error){
                    reject(error)
                }else{
                    resolve(result)
                }
            })
        })
    },
    insert: (body) => {
        return new Promise((resolve,reject) => {
            connection.query(`
            INSERT INTO tbl_users (name,email,address)
            VALUES ('${body.name}','${body.email}','${body.address}')
            `, (error,result) => {
                if(error){
                    reject(error)
                }else{
                    resolve(result)
                }
            })
        })
    },
    delete: (id) => {
        return new Promise ((resolve,reject) => {
           connection.query(`
           DELETE FROM tbl_users WHERE id='${id}'
           `, (err,result) => {
               if(err) {
                   reject(err)
               } else {
                   resolve(result)
               }
           })


        })
        
    
        },

        detail: (id) => {
            return new Promise ((resolve,reject) => {
               connection.query(`
               SELECT * FROM tbl_users WHERE id='${id}'
               `, (err,result) => {
                   if(err) {
                       reject(err)
                   } else {
                       resolve(result)
                   }
               })
    
    
            })
            
        
        },
        edit: (id,body) => { //id utk update user yang mana, body untuk data updatenya
            return new Promise((resolve,reject) => {
                connection.query(`
                UPDATE tbl_users 
                SET name ='${body.name}', email='${body.email}', address='${body.address}'
                WHERE id='${id}'
                `,(error,result) => {
                    if (error) {
                        reject(error)
                    } else {
                        resolve(result)
                    }
                })
            })
        }
    }


module.exports = userModel