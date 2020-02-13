const express = require('express');
const { check, validationResult } = require('express-validator');
const router = express.Router();
const User = require('../../models/User');

router.get('/', async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { email } = req.body;
    try {
        let user = await User.findOne({ email }, { unqiue: true });
        if (user) {
            return res.status(400).json({ errors: [{ msg: 'Email already taken!' }] });
        }
        // create new instance, needs to be before bcrypt
        user = new User({
            email,
        });
        // save instance to mongo
        await user.save()

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error users');
    }

    const user = res.json('Users.js')
    await user.save()
});

module.exports = router