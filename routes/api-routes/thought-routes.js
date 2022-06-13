const router = require("express").Router();
const {
  getThoughtById,
  getThoughts,
  createThought,
  updateThought,
  deleteThought,
} = require("../../controllers/thought-controller");

// /api/thoughts
router.route("/")
  .get(getThoughts)
  .post(createThought);

//     GET to get all thoughts
//     GET to get a single thought by its _id
//     POST to create a new thought (don't forget to push the created thought's _id to the associated user's thoughts array field)
// // example data
// {
//   "thoughtText": "Here's a cool thought...",
//   "username": "lernantino",
//   "userId": "5edff358a0fcb779aa7b118b"
// }
//     PUT to update a thought by its _id
//     DELETE to remove a thought by its _id

// /api/thoughts/:id
router
  .route("/:id")
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought);

// /api/thoughts/:thoughtId/reactions
router.route("/:id/reactions").post().delete();

//     POST to create a reaction stored in a single thought's reactions array field
//     DELETE to pull and remove a reaction by the reaction's reactionId value

module.exports = router;
