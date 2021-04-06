var express = require("express")
const router = express.Router()
const Person = require('../model/personDetails')
const Content = require('../model/content')

//for get the person details
router.get('/personDetails', (req, res, next) => {
    Person.find(function (err, persons) {
        if (err) console.log("routes.js: err to 'find()' products : ", err);
        res.json(persons);
    });
});


router.post("/personDetail", (req, res, next) => {
  // logic to add personDetails

    let newPerson = new Person({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email : req.body.email,
        contact_no : req.body.contact_no,
        password : req.body.password
 })
    
    newPerson.save((err, person) => {
      if (err) {
     res.json({ msg: "Failed to add Product" });
   } else {
     res.json({ msg: "people details added successfully...!", newPerson: person });
   }
 })
});

// update profile

router.put("/updateProfile", (req, res, next) => {
    console.log("update data");
    Person.findByIdAndUpdate(req.params.per_id, {
        $set: {
            first_name: req.body.first_name, last_name: req.body.last_name,
            email: req.body.email, contact_no: req.body.contact_no
        }
    }, {
            new :  true
    },
        function (err, update){
            if (err) {
                res.send("err updating profile")
            }
            else {
                res.send("profile update successfully")
            }
        }
    )
   
})

//get contain 

router.get('/contents', (req, res, next) => {
    Content.find(function (err, contents) {
        if (err) console.log("routes.js: err to 'find()' products : ", err);
        res.json(contents);
    });
});

//add content data
router.post("/content", (req, res, next) => {


    let newContent = new Content({
        per_id  :  req.body.per_id,
        content_name: req.body.content_name,
        discription: req.body.discription
    })
    
    newContent.save((err, content) => {
      if (err) {
     res.json({ msg: "Failed to add Product" });
   } else {
     res.json({ msg: "content added successfully...!", newContent: content });
   }
 })
});

//update the content data 

router.put("/updateContent", (req, res, next) => {
    console.log("update data");
    Content.findByIdAndUpdate(req.params._id, {
        $set: {
            content_name: req.body.content_name, description: req.body.description
        }
    }, {
            new :  true
    },
        function (err, update){
            if (err) {
                res.send("err updating content")
            }
            else {
                res.send("content update successfully")
            }
        }
    )
   
})
//for remove the command
router.delete("/content/:_id", (req, res, next) => {
    Person.findByIdAndRemove( req.params._id , (err,result) => {
        if (err) {
            res.send(err)
        }
        else {
            res.send(result)
        }
    })
})


module.exports = router;
