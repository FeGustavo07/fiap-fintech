function abrirModal(div) {
  let cor = window.getComputedStyle(div, null).getPropertyValue('border-color');
  let categoria = div.getAttribute('categoria');
  document.getElementById('categoria').value = categoria;
  document.getElementById('modal-cabecalho').style.backgroundColor = cor;
}

function cadastrarDespesa() {
  let categoria = document.getElementById('categoria').value
  let nomeDespesa = document.getElementById('nomeDespesa').value;
  let valorDespesa = document.getElementById('valorDespesa').value;


  // Validar se os campos foram preenchidos
  if (nomeDespesa === '' || valorDespesa === '') {
    alert('Por favor, preencha todos os campos.');
    return;
  }

  
  let novoCard = document.createElement('div');
  novoCard.classList.add('card');

  switch(categoria) {
    case 'Mêcanico':
      novoCard.style.border = 'solid 5px darkblue'
      break
    case 'Mercado':
      novoCard.style.border = 'solid 5px orange'
      break
    case 'Pessoal':
      novoCard.style.border = 'solid 5px green'
      break
    case 'Lazer':
      novoCard.style.border = 'solid 5px purple'
      break
    case 'Saúde':
      novoCard.style.border = 'solid 5px red'
      break
  }

  console.log(categoria)
  novoCard.innerHTML = '<strong>Categoria:</strong>' + categoria +
                       '<strong>Nome:</strong> ' + nomeDespesa +
                       '<strong>Valor:</strong> R$ ' + parseFloat(valorDespesa).toFixed(2);

  document.getElementById('historico-despesas').appendChild(novoCard);
  document.getElementById('nomeDespesa').value = '';
  document.getElementById('valorDespesa').value = '';
}