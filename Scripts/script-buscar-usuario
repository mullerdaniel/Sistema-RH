const searchInput = document.getElementById('searchInput');
const usuarioItems = document.querySelectorAll('.usuario-item');
const noResults = document.getElementById('noResults');

searchInput.addEventListener('input', function () {
    const searchTerm = this.value.toLowerCase().trim();
    let hasResults = false;

    usuarioItems.forEach(item => {
        const userName = item.getAttribute('data-name').toLowerCase();

        if (userName.includes(searchTerm)) {
            item.classList.remove('hidden');
            hasResults = true;
        } else {
            item.classList.add('hidden');
        }
    });

    // Mostrar mensagem de "nenhum resultado" se necessário
    if (hasResults || searchTerm === '') {
        noResults.classList.remove('show');
    } else {
        noResults.classList.add('show');
    }
});

// Limpar busca ao pressionar ESC
searchInput.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        this.value = '';
        this.dispatchEvent(new Event('input'));
        this.blur();
    }
});