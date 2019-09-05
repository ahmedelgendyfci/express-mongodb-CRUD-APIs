const express = require('express');
const router = express.Router();
const User = require('../models/user')

router.get("/", (req, res) => {
    res.render("user/addOrEdite", {
        viewTitle: "Insert new user"
    })
})


router.post('/', async (req, res) => {
    try {
        if (req.body._id == "") {
            await User.countDocuments({}, (err, count) => { // to count the number of records to insert new record number
                InsertUser(req, res, count + 1);
            })
        }
        else {
            //console.log("update")
            updateUser(req, res);
        }
    } catch (error) {
        console.log(error)
    }

})
const updateUser = (req, res) => {
    //console.log(req.body._id)
    User.findByIdAndUpdate(req.body._id , req.body, { new: true }, (err, doc) => {
        if(err)
        {
            return console.log(err)
        }
        res.redirect("user/list")
    });

}


const InsertUser = (req, res, count) => {
    const user = new User();
    user.recordNumber = count;
    user.firstName = req.body.firstName;
    user.lastName = req.body.lastName;
    user.email = req.body.email;
    user.save((err, doc) => {
        if (err) {
            return console.log('Error during record insertion: ' + err)
        }

        res.redirect('user/list')
    })
}


router.get("/list", async (req, res) => {
    try {
        const users = await User.find()
        res.render("user/list", {
            user: users,
            viewTitle: "Users Data"
        })
    } catch (error) {
        console.log("Error in retrieve users", error)
    }
})

router.get('/:id', async (req, res) => {

    try {
        const user = await User.findById(req.params.id, (err, doc) => {
            res.render("user/addOrEdite", {
                user: doc,
                viewTitle: "Update User"
            })
        })

    } catch (er) {
        console.log(er)
    }
})

router.get("/delete/:id", (req, res) => {
    //console.log(req.params.id)
    User.findByIdAndRemove(req.params.id,(err,doc)=>{
        if(!err)
        {
            res.redirect("../list")
        }
        else
        {
            console.log(err);
        }
    })
})


module.exports = router
