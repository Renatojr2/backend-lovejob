const mongoose = require('mongoose');

const vagasSchema = mongoose.Schema({
  job_title: String,
  job_schooling: String,
  job_description: String,
  prerequisite_job: String,
  contact_job: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true
  }



});

module.exports = mongoose.model('Vagas', vagasSchema);