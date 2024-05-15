const router = require("express").Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addThoughtReaction,
} = require("../../controllers/thoughtController");

// /thoughts
router.route("/").get(getThoughts).post(createThought);

// /api/thoughts/:thoughtId
router.get("/:thoughtId", getSingleThought);
router.put("/:thoughtId", updateThought);
router.delete("/:thoughtId", deleteThought);

// /:thoughtId/reactions
router.post("/:thoughtId/reactions", addThoughtReaction);

module.exports = router;