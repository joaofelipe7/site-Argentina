document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('meuFormulario');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita o envio padrão do formulário

        // Validar os campos
        const nome = document.getElementById('nome').value.trim();
        const email = document.getElementById('email').value.trim();
        const mensagem = document.getElementById('mensagem').value.trim();

        if (nome === '') {
            alert('Por favor, preencha o campo Nome Completo.');
            return;
        }

        if (email === '') {
            alert('Por favor, preencha o campo Email.');
            return;
        }

        // Validar formato do email usando uma expressão regular simples
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Por favor, insira um endereço de email válido.');
            return;
        }

        if (mensagem === '') {
            alert('Por favor, escreva sua mensagem.');
            return;
        }

        // Se todos os campos forem válidos, você pode permitir o envio do formulário
        // Neste exemplo, vou redirecionar para confirmado.html
        window.location.href = 'confirmado.html';
    });
});
