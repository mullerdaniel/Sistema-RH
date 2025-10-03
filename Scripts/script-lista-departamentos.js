// Dados dos DEPARTAMENTOS
const departamentosData = {
    "Administrativo": {
        descricao: "Departamento responsável pela organização e gestão de processos internos.",
        nomeResponsavel: "João Silva",
        status: "ativo"
    },
    "Atendimento": {
        descricao: "Responsável pelo suporte e atendimento aos clientes ou usuários.",
        nomeResponsavel: "Maria Souza",
        status: "ativo"
    },
    "Comercial": {
        descricao: "Departamento focado em vendas, marketing e gestão de clientes.",
        nomeResponsavel: "Carlos Pereira",
        status: "ativo"
    },
    "Financeiro": {
        descricao: "Responsável pelo controle financeiro e contábil da empresa.",
        nomeResponsavel: "Ana Costa",
        status: "ativo"
    },
    "Jurídico": {
        descricao: "Gestão de todas as questões legais e regulamentações da empresa.",
        nomeResponsavel: "Ricardo Almeida",
        status: "ativo"
    },
    "Marketing": {
        descricao: "Planejamento e execução de estratégias de marketing e comunicação.",
        nomeResponsavel: "Fernanda Oliveira",
        status: "ativo"
    },
    "RH": {
        descricao: "Gestão de pessoas, recrutamento, treinamento e desenvolvimento.",
        nomeResponsavel: "Patrícia Lima",
        status: "ativo"
    },
    "TI": {
        descricao: "Responsável pela infraestrutura tecnológica e sistemas da empresa.",
        nomeResponsavel: "Felipe Rocha",
        status: "ativo"
    },
    "Operações": {
        descricao: "Gerencia os processos operacionais e logísticos da empresa.",
        nomeResponsavel: "Lucas Silva",
        status: "ativo"
    },
    "Produção": {
        descricao: "Coordenação da linha de produção e garantia da qualidade.",
        nomeResponsavel: "Juliana Ferreira",
        status: "ativo"
    },
    "Logística": {
        descricao: "Responsável pela movimentação de materiais e distribuição.",
        nomeResponsavel: "Marcos Souza",
        status: "ativo"
    },
    "Presidência": {
        descricao: "Tomada de decisões estratégicas e visão global da empresa.",
        nomeResponsavel: "Carlos Alberto",
        status: "ativo"
    },
    "Pesquisa e Desenvolvimento": {
        descricao: "Responsável pela inovação e criação de novos produtos e tecnologias.",
        nomeResponsavel: "Joana Silva",
        status: "ativo"
    },
    "Vendas": {
        descricao: "Gestão de processos de venda e relacionamento com clientes.",
        nomeResponsavel: "Rodrigo Costa",
        status: "ativo"
    },
    "Tecnologia": {
        descricao: "Foco no desenvolvimento e implementação de soluções tecnológicas.",
        nomeResponsavel: "Sabrina Torres",
        status: "ativo"
    },
    "Suporte": {
        descricao: "Responsável por fornecer suporte técnico e assistencial.",
        nomeResponsavel: "Ricardo Gomes",
        status: "ativo"
    }
};

// Função para carregar os dados do DEPARTAMENTO no formulário
function carregarDadosDepartamento(nomeDepartamento) {
    const departamento = departamentosData[nomeDepartamento];

    if (departamento) {
        // Atualizando os campos do formulário
        document.getElementById('responsavel').value = departamento.descricao; // Descrição do departamento
        document.getElementById('nome').value = departamento.nomeResponsavel; // Nome do responsável

        // Configura o radio button de Status
        const status = departamento.status.toLowerCase();
        if (status === 'ativo') {
            document.getElementById('ativo').checked = true;
        } else if (status === 'inativo') {
            document.getElementById('inativo').checked = true;
        }

        // Efeito visual suave
        const formContainer = document.querySelector('.form-container');
        if (formContainer) {
            formContainer.style.opacity = '0.7';
            setTimeout(() => {
                formContainer.style.opacity = '1';
            }, 150);
        }
    } else {
        // Limpa os campos se o departamento não for encontrado
        document.getElementById('responsavel').value = '';
        document.getElementById('nome').value = '';
        document.getElementById('ativo').checked = false;
        document.getElementById('inativo').checked = false;
    }
}

// Adicionar evento de mudança para todos os radio buttons
document.addEventListener('DOMContentLoaded', function () {
    const radioButtons = document.querySelectorAll('input[name="usuario-selecionado"]');

    radioButtons.forEach(radio => {
        radio.addEventListener('change', function () {
            if (this.checked) {
                // Chama a função com o valor do radio (que agora é o nome do departamento)
                carregarDadosDepartamento(this.value);
            }
        });
    });

    // Alterar o texto do botão para "Salvar Alterações"
    const btnSubmit = document.querySelector('.btn-submit');
    if (btnSubmit) {
        btnSubmit.textContent = 'Salvar Alterações';
    }
});
