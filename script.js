let limparPesquisa = (endereco) => {
  document.getElementById('endereco').value = " "
  document.getElementById('bairro').value = ""
  document.getElementById('localidade').value = ""
  document.getElementById('estado').value = ""
}

let preencherCadastro = (endereco) => {
  document.getElementById('endereco').value = endereco.logradouro
  document.getElementById('bairro').value = endereco.bairro
  document.getElementById('localidade').value = endereco.localidade
  document.getElementById('estado').value = endereco.uf
}

let cepValido = (cep) => cep.lenght = 8  

let pesquisarCep = async( )=> {
  limparPesquisa();

  let cep = document.querySelector('#cep').value;
  let url = `http://viacep.com.br/ws/${cep}/json/`;

  if (cepValido(cep)){
    let dados = await fetch (url);
    let endereco = await dados.json()
    if (endereco.hasOwnProperty('erro')){
      document.getElementById('endereco').value = "Dados não encontrados"
    }else{
      preencherCadastro (endereco)
    }

  }else {
    document.getElementById('endereco').value = "cep Incorreto"
  }
}

document.querySelector('#cep').addEventListener("focusout", pesquisarCep);