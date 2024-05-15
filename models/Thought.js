const { Schema, model } = require("mongoose");
const reactionSchema = require('./Reaction')

// Schema to create Thought model
const thoughtSchema = new Schema({
  thoughtText: {
    type: String,
    required: true,
    minlength: 1,
    maxLength: 280,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  username: {
    type: String,
    required: true,
  },
  reaction: [
    {
      type: Schema.Types.ObjectId,
      ref: "Reaction",
    },
  ],
});

// Virtual to retrieve the amount of reactions
// userSchema.virtual("reactionCount").get(function () {
//   return this.reactions.length;
// });
// userSchema.set("toJSON", { virtuals: true });

const Thought = model("thought", thoughtSchema);
module.exports = Thought;