// Função de busca
document.getElementById('searchInput').addEventListener('input', function () {
    let query = this.value.toLowerCase();  // Obtém o valor do campo de busca
    let usuarios = document.querySelectorAll('.usuario-item');  // Seleciona todos os itens de departamento
    let noResults = document.getElementById('noResults');  // Elemento de "Nenhum resultado encontrado"

    let found = false;  // Variável para verificar se encontrou algum departamento

    // Itera sobre todos os itens de departamento
    usuarios.forEach(function (usuario) {
        let nome = usuario.querySelector('span').textContent.toLowerCase();  // Nome do departamento (em texto)

        // Se o nome do departamento inclui a busca, mostra o item
        if (nome.includes(query)) {
            usuario.style.display = '';  // Exibe o item
            found = true;
        } else {
            usuario.style.display = 'none';  // Oculta o item
        }
    });

    // Se nenhum departamento for encontrado, mostra a mensagem "Nenhum resultado encontrado"
    noResults.style.display = found ? 'none' : 'block';
});
