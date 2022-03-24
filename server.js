const express = require('express')
const mongoose = require('mongoose');
// const User = require('./model/user')
// const Todo = require('./model/todos')
const routes = require('./routes')

const PORT = process.env.PORT || 3001;

const app = express();

/// this is how you connect to a mongoose db ;
mongoose.connect('mongodb://localhost:27017/todoMongo2')
    .then(async () => {
        console.log('connect to mongoDb');
    })
    .catch(error => { console.log(err); })


// mongoose.connect('mongodb://localhost:27017/todoMongo2')

//     .then(async () => {
//         console.log('got on mongodb ');
//         // const newUser = await User.create({
//         //     username: 'sadboi',
//         //     role: 'eric',
//         //     powerLevel: 9001,
//         // });

//         // const newTodo = await Todo.create({
//         //     text: 'why such a sad boi'
//         // });



//         // console.log(newTodo);
//     })
//     .catch(err => console.log('error'))

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

app.listen(PORT, () => console.log('this server is running '));