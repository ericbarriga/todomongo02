const { Todo } = require('../model')


module.exports = {
    createTodo: async (req, res) => {
        const { text } = req.body;
        try {
            const newTodo = await Todo.create({
                text,
            });
            res.json(newTodo);
        } catch (error) {
            res.json({ error })
        }
    },

    getAllTodo: async (req, res) => {
        try {
            const todo = await User.find();
            res.json(todo);
        } catch (error) {
            res.json(error)

        }
    },

    getTodoById: async (req, res) => {
        const { todoId } = req.params;
        try {
            const todo = await Todo.findById(todoId,)
            res.json(todo);
        } catch (error) {
            res.json(error);
        }
    },

    updateTodoById: async (req, res) => {
        const { todoId } = req.params;
        try {
            const updateUserById = await User.findByIdAndUpdate(
                todoId,
                { ...req.body },
                // you are adding this because in mongo db returns the old
                // id so you have to set it to return the one you updated 
                {
                    new: true,
                    // mongo doesnt add validators when you set to true 
                    // so you have to re enter them here 
                    runValidators: true,

                },
            );
            res.json(updateUserById);
        } catch (error) {
            res.json(error);
        }
    },

    deleteTodoById: async (req, res) => {
        const { todoId } = req.params;

        try {
            const deleteTodo = await User.findByIdAndDelete(todoId);
            res.json(deleteTodo)
        } catch (error) {
            res.json(error)
        }
    },
}