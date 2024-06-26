const { Schema, model } = require('mongoose');
const dateFormat = require('../utilis/date');

const thoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 280
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: createdAtVal => dateFormat(createdAtVal)
    },
    username: {
        type: String,
        required: true,
    },
    reactions: [{ type: Schema.Types.ObjectId, ref: 'Reaction' }]
}, {
    toJSON: {
        virtuals: true,
        getters: true
    },
    id: false
});

module.exports = model('Thought', thoughtSchema);