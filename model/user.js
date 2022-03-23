const { Schema, model } = require('mongoose')

// schema 
// how to trim extra space 
const userSchema = new Schema({
    username: {
        type: String,
        trim: true,
        minLength: 4,
        maxLength: 8,
    },
    role: {
        type: String,
        // an enum on a string type means that when we save this field to the 
        //database it can only be 1 of the specific values in the enum array
        enum: ['admin', 'employee', 'eric'],
    },
    powerLevel: {
        type: Number,
        min: 1,
        max: 10000,
    },
})

const User = model('Users', userSchema);

module.exports = User;