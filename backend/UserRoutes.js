const express = require('express');
const router = express.Router();
const Persons = require('./UserSchema');

router.post('/login', async (req, res) => {
  try {
    const postPerson = new Persons({
      username: req.body.username,
      
      password: req.body.password,
    });

    const savePersons = await postPerson.save();

    res.status(200).json(savePersons);
  } catch (err) {
    res.status(500).json({ error: 'Error occurred while registering user!' });
  }
});


module.exports = router;