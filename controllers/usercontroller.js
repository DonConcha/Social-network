const {User, Thought} = require('../models');
const mongoose = require('mongoose');

const userController = {
    async getUsers(req, res) {
        try { 
            const userData = await User.find().select('__v');
            res.json(userData); 
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    }
}