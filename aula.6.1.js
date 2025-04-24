document.getElementById('botao').addEventListener('click', function() {
    const caracteres = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let senha = '';
  
    for (let i = 0; i < 8; i++) {
      let posicao = Math.floor(Math.random() * caracteres.length);
      senha += caracteres.charAt(posicao);
    }
  
    document.getElementById('senha').textContent = senha;
  });