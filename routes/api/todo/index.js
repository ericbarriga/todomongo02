const router = require('express').Router();

const {
    createTodo,
    getAllTodo,
    getTodoById,
    updateTodoById,
    deleteTodoById
} = require('../../../controllers/todoController')

router.route('/')
    .get(getAllTodo)
    .post(createTodo);

router.route('/todoID')
    .get(getTodoById)
    .put(updateTodoById)
    .delete(deleteTodoById)

module.exports = router