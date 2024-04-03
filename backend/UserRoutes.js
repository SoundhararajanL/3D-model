const express = require('express');
const router = express.Router();
const Users = require('./UserSchema');
const cors = require('cors');

router.use(cors());

// Parse request body as JSON
router.use(express.json());

// POST route for user login
router.post('/login', async (req, res) => {
  try {
    const postPerson = new Users({
      username: req.body.username,
      password: req.body.password,
    });

    const saveUsers = await postPerson.save();

    res.status(200).json(saveUsers);
  } catch (err) {
    console.error('Error occurred while registering user:', err);
    res.status(500).json({ error: 'Error occurred while registering user!' });
  }
});

module.exports = router;
