/*
  todo.js -- Router for the ToDoList
*/
const express = require('express');
const router1 = express.Router();
const Item = require('../models/transitem')


/*
this is a very simple server which maintains a key/value
store using an object where the keys and values are lists of strings

*/

isLoggedIn = (req,res,next) => {
  if (res.locals.loggedIn) {
    next()
  } else {
    res.redirect('/login')
  }
}

// get the value associated to the key
router1.get('/transaction/',
  isLoggedIn,
  async (req, res, next) => {
      res.locals.items = await Item.find({userId:req.user._id})
      res.render('transaction');
});


/* add the value in the body to the list associated to the key */
router1.post('/transaction',
  isLoggedIn,
  async (req, res, next) => {
      console.dir(req.body)
      const transaction = new Item(
        {description:req.body.item,
         amount: parseInt(req.body.amount),
         category: req.body.category,
         date:req.body.date,
         userId: req.user._id
        })
      await transaction.save();
      res.redirect('/transaction')
});

router1.get('/transaction/remove/:description',
  isLoggedIn,
  async (req, res, next) => {
      console.log("inside /todo/remove/:description")
      await Item.deleteOne({_id:req.params.description});
      res.redirect('/transaction')
});

module.exports = router1;
