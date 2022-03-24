const router = require('express').Router();

const { createUser,
    getAllUsers,
    updateUserById,
    deleteUserById,
    getUserById,
} = require('../../../controllers/userController')

// router.post('/', createUser);
// router.get('/',getAllUsers);


router.route('/')
    .get(getAllUsers)
    .post(createUser);

router.route('/:userID')
    .get(getUserById)
    .put(updateUserById)
    .delete(deleteUserById)

module.exports = router