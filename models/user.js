const {Schema, model} = require('mongoose');

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    }, 
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Thought'
        }
    ],
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ]
},
{
    toJSON: {
        virtuals: true,
        getters: true
    },
    id: false
});

userSchema.virtual('friendCount')
.get(function() {
    return this.friends.length;
});

const User = model('User', userSchema);

module.exports = User;