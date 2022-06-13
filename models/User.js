const { Schema, model, Types } = require("mongoose");

var validateEmail = function (email) {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email);
};

const UserSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    validate: [validateEmail, "Please fill a valid email address"],
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please fill a valid email address",
    ],
  },
  thoughts: [
    /*Array of _id values referencing the Thought model */
    { type: Schema.Types.ObjectId, ref: "Thought" },
  ],
  friends: [
    /*Array of _id values referencing the User model (self-reference) */
    { type: Schema.Types.ObjectId, ref: "User" },
  ],
});

UserSchema.virtual("friendCount").get(function () {
  return this.friends.length;
});

const User = model("User", UserSchema);

module.exports = User;

// ?? Questions ??
// subdocuments
// getters
// virtuals
