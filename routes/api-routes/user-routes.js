const router = require('express').Router();
const {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
} = require('../../controllers/user-controller');

// /api/users

// GET all users
// POST a new user:
// example data
// {
//     "username": "lernantino",
//     "email": "lernantino@gmail.com"
//   }
router.route('/')
    .get(getUsers)
    .post(createUser)
    
    // GET a single user by its _id and populated thought and friend data
    // PUT to update a user by its _id
    // DELETE to remove user by its _id

router.route('/:id')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser)


// /api/users/:userId/friends/:friendId

// router
//     .route("")
//     .post()
//     .delete()

// POST to add a new friend to a user's friend list
// DELETE to remove a friend from a user's friend list

module.exports = router;