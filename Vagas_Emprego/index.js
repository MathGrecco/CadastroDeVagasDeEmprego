const vagas = []

function listarVagas() {
  const vagasEmText = vagas.reduce(function (textoFinal, vaga, indice) {
    textoFinal += indice + '. '
    textoFinal += vaga.nome

    //feito um array para armazenar os candidatos
    textoFinal += ' (' + vaga.candidatos.length + ' candidatos)\n'
    return textoFinal
  }, '')

  alert(vagasEmText)
}

//Cadastro de nova vaga
// não precisa de parametros, será pedido tudo ao usuário
function novaVaga() {
  const nome = prompt('informe um nome para a vaga: ')
  const descricao = prompt('Informe uma descrição para a vaga: ')
  const dataLimite = prompt(
    'Informe uma data limite (DD/MM/AAAA) para a vaga: '
  )

  const confirmacao = confirm(
    `Deseja criar uma nova vaga com essas informações?\n
    Nome: ${nome}\n
    Descrição: ${descricao}\n
    Data Limite: ${dataLimite}`
  )
  if (confirmacao) {
    const novaVaga = { nome, descricao, dataLimite, candidatos: [] }
    vagas.push(novaVaga)
    alert('vaga criada com sucesso!!')
  }
}

//Exibição da vaga
function exibirVaga() {
  const indice = prompt('informe o indicie da vaga que deseja exibir: ')
  //tratamento caso usuário digite algum valor negativo ou inexistente
  if (indice >= vagas.length || indice < 0) {
    alert('indice invalido')
    return
  }
  const vaga = vagas[indice]

  const candidatosEmTexto = vaga.candidatos.reduce(function (
    textoFinal,
    candidato
  ) {
    return textoFinal + '\n - ' + candidato
  },
  '')

  alert(
    'Vaga n° ' +
      indice +
      '\nNome: ' +
      vaga.nome +
      '\nDescrição: ' +
      vaga.descricao +
      '\nData Limite: ' +
      vaga.dataLimite +
      '\nQuantidade de Candidatos: ' +
      vaga.candidatos.length +
      '\nCandidatos inscritos: ' +
      candidatosEmTexto
  )
}

//Trecho para a inscrição do funcionário
function inscreverCandidato() {
  const candidato = prompt('Informe nome do candidato(a): ')
  const indice = prompt(
    'Informe o indice da vaga para qual o(a) candidato(a) deseja se inscrever'
  )
  const vaga = vagas[indice]
  const confirmacao = confirm(
    'deseja inscrever o candidato ' +
      candidato +
      ' na vaga ' +
      indice +
      '?\n' +
      'Nome: ' +
      vaga.nome +
      '\nDescrição: ' +
      vaga.descricao +
      '\nData limite: ' +
      vaga.dataLimite
  )

  if (confirmacao) {
    vaga.candidatos.push(candidato)
    alert('inscrição realizada com sucesso')
  }
}

// Funcionalidade para a exclusao de alguma vaga
function excluirVaga() {
  const indice = prompt('Informe o indicie da vaga que deseja excluir: ')
  const vaga = vagas[indice]

  const confirmacao = confirm(
    'deseja excluir a vaga: ' +
      indice +
      '?\n' +
      'Nome: ' +
      vaga.nome +
      '\nDescrição: ' +
      vaga.descricao +
      '\nData limite: ' +
      vaga.dataLimite
  )

  if (confirmacao) {
    vagas.splice(indice, 1)
    alert('vaga excluida com sucesso!!')
  }
}

//Trecho para exebição do menu para o usuário
function exibirMenu() {
  const opcao = prompt(
    'Cadastro de vagas de emprego' +
      '\n\nEscolha uma das opções: ' +
      '\n1. Listar vagas disponíveis' +
      '\n2. Criar uma vaga' +
      '\n3. Visualizar uma vaga' +
      '\n4. Inscrever um(a) Candidato(a)' +
      '\n5. Excluir uma vaga' +
      '\n6. Sair'
  )
  return opcao
}

function executar() {
  let opcao = ''

  do {
    opcao = exibirMenu()
    switch (opcao) {
      case '1':
        listarVagas()
        break
      case '2':
        novaVaga()
        break
      case '3':
        exibirVaga()
        break
      case '4':
        inscreverCandidato()
        break
      case '5':
        excluirVaga()
        break
      case '6':
        alert('Saindo....')
        break
      default:
        alert('opção invalida.')
    }
  } while (opcao != '6')
}

executar()
