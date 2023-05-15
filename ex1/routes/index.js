var express = require('express');
var router = express.Router();
var Contract = require('../controllers/contract')

/* GET Lista de Contracts. */
router.get('/contracts', function(req, res) {
  Contract.list()
    .then(dados => res.status(200).json(dados))
    .catch(erro => res.status(520).json({erro: erro, mensagem: "Erro na listagem dos contracts."}))
});


/* GET Lista Cursos. */
router.get('/contracts/courses', function(req, res) {
  Contract.getContractCourses()
    .then(dados => res.status(200).json(dados))
    .catch(erro => res.status(521).json({erro: erro, mensagem: "Erro na recuperação dum contract."}))
});

/* GET Lista institutions:. */
router.get('/contracts/institutions', function(req, res) {
  Contract.getContractInstituctions()
    .then(dados => res.status(200).json(dados))
    .catch(erro => res.status(521).json({erro: erro, mensagem: "Erro na recuperação dum contract."}))
});


/* GET /contracts?year=YYYY: devolve a lista dos contratos realizados durante o ano YYYY; */
router.get('/contracts/:year', function(req, res) {
  Contract.consultYear(req.params.year)
    .then(dados => res.status(200).json(dados))
    .catch(erro => res.status(521).json({erro: erro, mensagem: "Erro na recuperação dum contract."}))
});

/* GET /contracts/institutions: devolve a lista das instituições contratantes (sem repetições); */
router.get('/contracts/:institutions', function(req, res) {
  Contract.consultInstitution(req.params.institutions)
    .then(dados => res.status(200).json(dados))
    .catch(erro => res.status(521).json({erro: erro, mensagem: "Erro na recuperação dum contract."}))
});

/* GET Info Contracto. */
router.get('/contracts/:id', function(req, res) {
  Contract.getContract(req.params.id)
    .then(dados => res.status(200).json(dados))
    .catch(erro => res.status(521).json({erro: erro, mensagem: "Erro na recuperação dum contract."}))
});

/* POST Contract. */
router.post('/contracts', function(req, res) {
  Exame.addContract(req.body)
    .then(dados => res.status(201).json(dados))
    .catch(erro => res.status(522).json({erro: erro, mensagem: "Erro na inserção dum CONTRACT."}))
});

/* DELETE CONTRACT. */
router.delete('/contracts/:id', function(req, res) {
  Exame.deleteContract(req.params.id)
    .then(dados => res.status(201).json(dados))
    .catch(erro => res.status(523).json({erro: erro, mensagem: "Erro no delete dum CONTRACT."}))
});


module.exports = router;