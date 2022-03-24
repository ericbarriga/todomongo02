const { Schema, model } = require('mongoose')
const { isEmail } = require('validator')

// schema 
// how to trim extra space 
const userSchema = new Schema({
    username: {
        type: String,
        trim: true,
        minLength: 4,
        maxLength: 8,
        required: [true, `username is required and must be at least 4 min and max length of 8 `]
        // sets require to true and sets our own custome error message when no passed in 
        // 1st element is whether its required or not 
        // 2nd element is the custom error message 
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,

        validate: {
            //actual value for the email that the user is providing 
            validator: function (value) {
                return isEmail(value)
            },
            // user Object is the whole object that the user is tryign to save 
            // {username : 'eric', email : 'mm@.com, role: 'admin ', powerLevel: 9001}
            message: function (userObject) {
                return `${userObject.email} is not a valid email address`;
            },
        }
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
    //hobbies 
    // this is just a array of data that is being saved 
    hobbies: [String],
    favoriteCryptos: {
        type: String,
        uppercase: true,
        trim: true,
    },
    secondCryptos: {
        type: String,
        uppercase: true,
        trim: true,
    }

})

const User = model('Users', userSchema);

module.exports = User;