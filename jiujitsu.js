function cadastrarAluno(event) {
    event.preventDefault();
  
    const nome = document.getElementById('nome').value.trim();
    const idade = parseInt(document.getElementById('idade').value.trim(), 10);
    const faixa = document.getElementById('faixa').value.trim();
    const modalidade = document.getElementById('modalidade').value.trim();
  
    if (!nome || isNaN(idade) || idade < 4 || !faixa || !modalidade) {
      alert('Preencha todos os campos corretamente. Idade mínima: 4 anos.');
      return;
    }
  
    const tempoParaProximaFaixa = calcularProgresso(faixa);
  
    const lista = document.getElementById('listaAlunos');
    const div = document.createElement('div');
    div.className = 'aluno';
    div.innerHTML = `
      <strong>Nome:</strong> ${nome} <br>
      <strong>Idade:</strong> ${idade} <br>
      <strong>Faixa:</strong> ${faixa} <br>
      <strong>Modalidade:</strong> ${modalidade} <br>
      <strong>Tempo estimado para próxima faixa:</strong> ${tempoParaProximaFaixa}
    `;
    lista.appendChild(div);
  
    document.getElementById('formAluno').reset();
  }
  
  function calcularProgresso(faixa) {
    const tempos = {
      'Branca': '6 a 12 meses',
      'Cinza': '1 ano',
      'Cinza e Preto': '1 ano',
      'Amarela': '1 ano',
      'Amarela e Preto': '1 ano',
      'Laranja': '1 ano',
      'Laranja e Preto': '1 ano',
      'Verde': '1 ano',
      'Verde e Preto': '1 ano',
      'Azul': '2 anos',
      'Roxa': '2 anos',
      'Marrom': '1.5 a 2 anos',
      'Preta': 'Nível mais alto (sem próxima faixa)'
    };
  
    return tempos[faixa] || 'Tempo indefinido';
  }

