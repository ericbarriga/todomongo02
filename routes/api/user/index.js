const router = require('express').Router();

const { createUser,
    getAllUsers,
    updateUserById,
    deleteUserById,
    getUserById,
    addHobbyToUserById,
} = require('../../../controllers/userController')

// router.post('/', createUser);
// router.get('/',getAllUsers);


router.route('/')
    .get(getAllUsers)
    .post(createUser);

/// this router has to be put here because the code is read from the top down 
// so we want it to check this route before it goes on to the next because check user by id has the 
// same stuff we are checking for ??/
router.put('/addHobby/:userId', addHobbyToUserById)

router.route('/:userID')
    .get(getUserById)
    .put(updateUserById)
    .delete(deleteUserById)

module.exports = router