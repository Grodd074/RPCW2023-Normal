var Contract = require('../models/contract')

// Contract list
module.exports.list = () => {
    return Contract
        .find({})
        .then(contracts => {
            return contracts
        })
        .catch(erro => {
            return erro
        })
}

module.exports.getContract = id => {
    return Contract
        .findOne({_id: id})
        .then(dados => {
            return dados
        })
        .catch(erro => {
            return erro
        })
}

module.exports.getContractCourses = () => {
    return Contract
        .find( {},{Curso:1} )
        .distinct('Curso')
        .then(dados => {
            return dados
        })
        .catch(erro => {
            return erro
        })
}

module.exports.getContractInstituctions = () => {
    return Contract
        .find( {},{NomeInstituicao:1} )
        .distinct('NomeInstituicao')
        .then(dados => {
            return dados
        })
        .catch(erro => {
            return erro
        })
}

/* POST contract */
module.exports.addContract = contract => {
    return Contract
    .create(contract)
    .then(dados=>{
        return dados;
    })
    .catch(erro=>{
        return erro;
    });
}

/* DELETE contract */
module.exports.deleteContract = id => {
    return Contract
        .deleteOne({_id:id})
        .then(dados => {
            return dados
        })
        .catch(erro => {
            return erro
        })
}


module.exports.consultYear = (year) => {
    return Contract
        .find( {DataInicioContrato:year},{} )
        .then(dados => {
            return dados
        })
        .catch(erro => {
            return erro
        })
}


module.exports.consultInstitution = (institution) => {
    return Contract
        .find( {NomeInstituicao:institution},{} )
        .then(dados => {
            return dados
        })
        .catch(erro => {
            return erro
        })
}