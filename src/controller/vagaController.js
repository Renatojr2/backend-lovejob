const Vagas = require('../models/vagas');

module.exports = {

  //listar vagas
  async index(req, res) {
    //buscando no banco de dados as vagas cadastradas metodo find() busca todas as vagas no meu bd
    const vagas = await Vagas.find();
    console.log(vagas)
    return res.json(vagas);
  },


  //criar novas vagas
  async store(req, res) {
    const { job_title, job_schooling, job_description, prerequisite_job, contact_job } = req.body;

    let vaga = await Vagas.create({
      job_title,
      job_schooling,
      job_description,
      prerequisite_job,
      contact_job
    });
    res.json(vaga);
  }
}