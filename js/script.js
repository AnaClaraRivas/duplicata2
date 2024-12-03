document.getElementById('liveAlertBtn').addEventListener('click', function () {
    // Lista de pensamentos típicos de uma pessoa com dependência emocional
    const pensamentos = [
      "Eu não sou suficiente, preciso da validação dessa pessoa para me sentir bem.",
      "Tenho medo de perder o afeto de quem amo, o que farei se isso acontecer?",
      "Será que estou pedindo demais? Não quero incomodar, mas preciso de atenção.",
      "Sinto que não posso ser feliz sem a aprovação dos outros.",
      "E se ninguém mais me amar? Isso significa que eu não sou digno de amor.",
      "O que será que pensam de mim? Será que estou agradando o suficiente?",
      "Eu não posso viver sem a pessoa que está ao meu lado, tenho medo de ficar sozinho(a)."
    ];

    // Seleciona um pensamento aleatório
    const pensamentoAleatorio = pensamentos[Math.floor(Math.random() * pensamentos.length)];

    // Cria o alerta
    const alertPlaceholder = document.getElementById('liveAlertPlaceholder');
    const alert = document.createElement('div');
    alert.classList.add('alert', 'alert-warning', 'alert-dismissible', 'fade', 'show');
    alert.setAttribute('role', 'alert');
    alert.innerHTML = `
      <strong>Pensamento:</strong> ${pensamentoAleatorio}
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    `;
    
    // Adiciona o alerta à página
    alertPlaceholder.appendChild(alert);
  });