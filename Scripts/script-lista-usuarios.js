// Dados dos usuários (você pode substituir isso por uma API ou banco de dados)
const usuariosData = {
    "Ana": {
        nome: "Ana Silva Santos",
        cargo: "Gerente de Projetos",
        cpf: "123.456.789-00",
        departamento: "TI",
        email: "ana.silva@rhsolutions.com",
        salario: "R$ 8.500,00",
        dataNascimento: "1990-05-15",
        senha: "********"
    },
    "Armando": {
        nome: "Armando Costa Pereira",
        cargo: "Analista Financeiro",
        cpf: "234.567.890-11",
        departamento: "Financeiro",
        email: "armando.costa@rhsolutions.com",
        salario: "R$ 6.200,00",
        dataNascimento: "1988-03-22",
        senha: "********"
    },
    "Bruna": {
        nome: "Bruna Oliveira Lima",
        cargo: "Designer",
        cpf: "345.678.901-22",
        departamento: "Marketing",
        email: "bruna.oliveira@rhsolutions.com",
        salario: "R$ 5.500,00",
        dataNascimento: "1995-08-10",
        senha: "********"
    },
    "Carlos": {
        nome: "Carlos Alberto Souza",
        cargo: "Desenvolvedor",
        cpf: "456.789.012-33",
        departamento: "TI",
        email: "carlos.souza@rhsolutions.com",
        salario: "R$ 7.000,00",
        dataNascimento: "1992-11-30",
        senha: "********"
    },
    "Denis": {
        nome: "Denis Ferreira Santos",
        cargo: "Coordenador RH",
        cpf: "567.890.123-44",
        departamento: "Recursos Humanos",
        email: "denis.ferreira@rhsolutions.com",
        salario: "R$ 6.800,00",
        dataNascimento: "1987-07-18",
        senha: "********"
    },
    "Eduardo": {
        nome: "Eduardo Martins Alves",
        cargo: "Analista de Sistemas",
        cpf: "678.901.234-55",
        departamento: "TI",
        email: "eduardo.martins@rhsolutions.com",
        salario: "R$ 6.500,00",
        dataNascimento: "1991-02-25",
        senha: "********"
    },
    "Fernanda": {
        nome: "Fernanda Rodrigues Lima",
        cargo: "Assistente Administrativo",
        cpf: "789.012.345-66",
        departamento: "Administrativo",
        email: "fernanda.rodrigues@rhsolutions.com",
        salario: "R$ 3.800,00",
        dataNascimento: "1996-09-05",
        senha: "********"
    },
    "Gustavo": {
        nome: "Gustavo Henrique Silva",
        cargo: "Gerente Comercial",
        cpf: "890.123.456-77",
        departamento: "Comercial",
        email: "gustavo.silva@rhsolutions.com",
        salario: "R$ 9.200,00",
        dataNascimento: "1985-12-12",
        senha: "********"
    },
    "Joana": {
        nome: "Joana Paula Costa",
        cargo: "Analista de Marketing",
        cpf: "901.234.567-88",
        departamento: "Marketing",
        email: "joana.costa@rhsolutions.com",
        salario: "R$ 5.800,00",
        dataNascimento: "1993-04-20",
        senha: "********"
    },
    "João": {
        nome: "João Carlos Mendes",
        cargo: "Supervisor de Vendas",
        cpf: "012.345.678-99",
        departamento: "Comercial",
        email: "joao.mendes@rhsolutions.com",
        salario: "R$ 7.500,00",
        dataNascimento: "1989-06-08",
        senha: "********"
    },
    "Lucas": {
        nome: "Lucas Andrade Souza",
        cargo: "Desenvolvedor Front-end",
        cpf: "123.456.789-10",
        departamento: "TI",
        email: "lucas.andrade@rhsolutions.com",
        salario: "R$ 6.800,00",
        dataNascimento: "1994-01-14",
        senha: "********"
    },
    "Maria": {
        nome: "Maria Eduarda Santos",
        cargo: "Analista de RH",
        cpf: "234.567.890-21",
        departamento: "Recursos Humanos",
        email: "maria.santos@rhsolutions.com",
        salario: "R$ 5.200,00",
        dataNascimento: "1992-10-03",
        senha: "********"
    },
    "Ricardo": {
        nome: "Ricardo Almeida Nunes",
        cargo: "Contador",
        cpf: "345.678.901-32",
        departamento: "Financeiro",
        email: "ricardo.almeida@rhsolutions.com",
        salario: "R$ 7.800,00",
        dataNascimento: "1986-05-27",
        senha: "********"
    },
    "Vitor": {
        nome: "Vitor Hugo Pereira",
        cargo: "Analista de Suporte",
        cpf: "456.789.012-43",
        departamento: "TI",
        email: "vitor.pereira@rhsolutions.com",
        salario: "R$ 4.500,00",
        dataNascimento: "1997-03-19",
        senha: "********"
    }
};

// Função para carregar os dados do usuário no formulário
function carregarDadosUsuario(nomeUsuario) {
    const usuario = usuariosData[nomeUsuario];
    
    if (usuario) {
        document.getElementById('nome').value = usuario.nome;
        document.getElementById('cargo').value = usuario.cargo;
        document.getElementById('cpf').value = usuario.cpf;
        document.getElementById('departamento').value = usuario.departamento;
        document.getElementById('email').value = usuario.email;
        document.getElementById('salario').value = usuario.salario;
        document.getElementById('dataNascimento').value = usuario.dataNascimento;
        document.getElementById('senha').value = usuario.senha;
        
        // Efeito visual suave
        document.querySelector('.form-container').style.opacity = '0.7';
        setTimeout(() => {
            document.querySelector('.form-container').style.opacity = '1';
        }, 150);
    }
}

// Adicionar evento de mudança para todos os radio buttons
document.addEventListener('DOMContentLoaded', function() {
    const radioButtons = document.querySelectorAll('input[name="usuario-selecionado"]');
    
    radioButtons.forEach(radio => {
        radio.addEventListener('change', function() {
            if (this.checked) {
                carregarDadosUsuario(this.value);
            }
        });
    });
    
    // Alterar o texto do botão para "Salvar Alterações"
    const btnSubmit = document.querySelector('.btn-submit');
    if (btnSubmit) {
        btnSubmit.textContent = 'Salvar Alterações';
    }
});