const { Thought, User } = require('../models');

const thoughtsController = {
    async getAllThoughts(req, res) {
        try {
            const thoughts = await Thought.findAll({
                include: [{ model: User, as: 'author' }]
            });

            res.status(200).json({
                success: true,
                message: 'Successfully retrieved all thoughts',
                thoughts: thoughts
            });
        } catch (error) {
            console.error('Error fetching thoughts:', error);
            res.status(500).json({
                success: false,
                message: 'Failed to retrieve thoughts. Please try again later.'
            });
        }
    }
};

module.exports = thoughtsController;