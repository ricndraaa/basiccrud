const express = require("express")
const {getAll, pageInsert, insert, destroy, pageDetail, pageEdit, edit, home} = require("../controllers/users.controller")
const userRouter = express.Router()

userRouter
    .get('/users', getAll)
    .get('/insert-user', pageInsert)
    .post('/insert-user', insert) //ngirim body memakai post, kalau url param bisa hanya memakai get
    .get('/delete-user/:id', destroy) //hanya bisa menerima get dan post, untuk delete tidak menggunakan .delete
    .get('/detail-user/:id', pageDetail)
    .get('/edit-user/:id', pageEdit)
    .post('/edit-user/:id', edit)//jika beda menthod di controller, endpoint boleh sama
    .get('/home', home)
module.exports = userRouter