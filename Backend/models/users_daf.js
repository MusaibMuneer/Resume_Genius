const mongoose = require("mongoose");

const users_daf = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  profession: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  profile: {
    type: String,
    required: true,
  },
  careerObjective: {
    type: String,
    required: true,
  },
  education: {
    type: [
      {
        highestEducation: {
          type: String,
          required: true,
        },
        course: {
          type: String,
          required: true,
        },
        instituteName: {
          type: String,
          required: true,
        },
        cgpa: {
          type: Number,
          required: true,
        },
      },
    ],
    required: true,
  },
  skills: {
    type: [String],
    required: true,
  },
  workExperience: {
    type: [
      {
        companyName: {
          type: String,
          required: true,
        },
        jobProfile: {
          type: String,
          required: true,
        },
        tenure: {
          type: Number,
          required: true,
        },
      },
    ],
    required: true,
  },
  languages: {
    type: [String],
    required: true,
  },
  references: {
    type: String,
    required: true,
  },
  userEmail: {
    type: String,
    required: true,
  },
});

const UsersDaf = mongoose.model("users_daf", users_daf);

module.exports = UsersDaf;
