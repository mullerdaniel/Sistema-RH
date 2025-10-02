document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const usuario = document.getElementById('usuario').value.trim();
    const senha = document.getElementById('senha').value.trim();
    const erroMensagem = document.getElementById('erroMensagem');

    // Verificar credenciais
    if (usuario === 'adm' && senha === 'adm') {
        window.location.href = '/buscar-usuario.html';
    } else if (usuario === 'usu' && senha === 'usu') {
        window.location.href = '/home.html';
    } else {
        // Mostrar mensagem de erro
        erroMensagem.style.display = 'block';

        // Limpar campos
        document.getElementById('usuario').value = '';
        document.getElementById('senha').value = '';

        // Esconder mensagem após 3 segundos
        setTimeout(function () {
            erroMensagem.style.display = 'none';
        }, 3000);
    }
});

// Esconder mensagem de erro ao começar a digitar
document.getElementById('usuario').addEventListener('input', function () {
    document.getElementById('erroMensagem').style.display = 'none';
});

document.getElementById('senha').addEventListener('input', function () {
    document.getElementById('erroMensagem').style.display = 'none';
});