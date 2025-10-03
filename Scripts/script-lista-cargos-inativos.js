// Dados dos CARGOS (adaptado do original para refletir informações de cargo)
const cargosData = {
    // Nota: O valor do radio button (value) deve bater com a chave (key)
    "Administrador": {
        nomeCargo: "Administrador de Sistemas",
        departamento: "TI",
        salarioMedio: "R$ 7.500,00",
        descricao: "Responsável pela manutenção e segurança dos sistemas.",
        nivel: "Pleno",
        status: "Desativado"
    },
    "Analista": {
        nomeCargo: "Analista de Negócios",
        departamento: "Estratégico",
        salarioMedio: "R$ 6.200,00",
        descricao: "Intermediar as necessidades de negócio e as soluções técnicas.",
        nivel: "Júnior",
        status: "Desativado"
    },
    "Assistente": {
        nomeCargo: "Assistente Administrativo",
        departamento: "Administrativo",
        salarioMedio: "R$ 3.800,00",
        descricao: "Suporte geral às atividades de rotina do escritório.",
        nivel: "Operacional",
        status: "Desativado"
    },
    "Coordenador": {
        nomeCargo: "Coordenador de Equipe",
        departamento: "Operações",
        salarioMedio: "R$ 9.000,00",
        descricao: "Liderança de equipe, planejamento e acompanhamento de metas.",
        nivel: "Sênior",
        status: "Desativado"
    },
    "Desenvolvedor": {
        nomeCargo: "Desenvolvedor Back-end",
        departamento: "TI",
        salarioMedio: "R$ 7.000,00",
        descricao: "Criação e manutenção da lógica do lado do servidor.",
        nivel: "Pleno",
        status: "Desativado"
    },
    "Diretor": {
        nomeCargo: "Diretor Executivo",
        departamento: "Presidência",
        salarioMedio: "R$ 25.000,00", // Exemplo de valor alto
        descricao: "Definição de visão, estratégia e metas de longo prazo da empresa.",
        nivel: "Executivo",
        status: "Desativado"
    },
    "Especialista": {
        nomeCargo: "Especialista em Cibersegurança",
        departamento: "TI",
        salarioMedio: "R$ 10.500,00",
        descricao: "Implementação e monitoramento de políticas de segurança da informação.",
        nivel: "Sênior",
        status: "Desativado"
    },
    "Gerente": {
        nomeCargo: "Gerente de Marketing",
        departamento: "Marketing",
        salarioMedio: "R$ 12.000,00",
        descricao: "Liderança das campanhas e estratégias de mercado.",
        nivel: "Gestão",
        status: "Desativado"
    },
    "Líder Técnico": {
        nomeCargo: "Líder Técnico de Desenvolvimento",
        departamento: "TI",
        salarioMedio: "R$ 11.000,00",
        descricao: "Orientação técnica de equipes e revisão de código.",
        nivel: "Gestão",
        status: "Desativado"
    },
    "Operador": {
        nomeCargo: "Operador de Máquinas",
        departamento: "Produção",
        salarioMedio: "R$ 2.500,00",
        descricao: "Operação e monitoramento de equipamentos de produção.",
        nivel: "Operacional",
        status: "Desativado"
    },
    "Pesquisador": {
        nomeCargo: "Pesquisador de Mercado",
        departamento: "Marketing",
        salarioMedio: "R$ 5.800,00",
        descricao: "Condução de estudos e análise de tendências de mercado.",
        nivel: "Pleno",
        status: "Desativado"
    },
    "Programador": {
        nomeCargo: "Programador Júnior",
        departamento: "TI",
        salarioMedio: "R$ 4.500,00",
        descricao: "Desenvolvimento de funcionalidades sob supervisão.",
        nivel: "Júnior",
        status: "Desativado"
    },
    "Secretário(a)": {
        nomeCargo: "Secretário(a) Executivo(a)",
        departamento: "Administrativo",
        salarioMedio: "R$ 5.000,00",
        descricao: "Organização de agendas e comunicação de nível executivo.",
        nivel: "Sênior",
        status: "Desativado" // Exemplo de um cargo inativo
    },
    "Supervisor": {
        nomeCargo: "Supervisor de Logística",
        departamento: "Logística",
        salarioMedio: "R$ 8.000,00",
        descricao: "Fiscalização e coordenação das operações logísticas.",
        nivel: "Gestão",
        status: "Desativado"
    },
    "Técnico": {
        nomeCargo: "Técnico de Manutenção",
        departamento: "Manutenção",
        salarioMedio: "R$ 4.200,00",
        descricao: "Reparos, instalações e manutenção preventiva de equipamentos.",
        nivel: "Operacional",
        status: "Desativado"
    }
};

// Função para carregar os dados do CARGO no formulário
function carregarDadosCargo(nomeCargo) {
    const cargo = cargosData[nomeCargo];

    if (cargo) {
        // Atualizando os IDs do formulário
        document.getElementById('nome').value = cargo.nomeCargo; // Usando o 'nome' para o nome completo do cargo
        document.getElementById('departamento').value = cargo.departamento;

        // Como você removeu alguns campos no HTML, vou usar um campo auxiliar para um dado extra
        // Você precisará adicionar um input com o ID 'salarioMedio' no seu HTML para funcionar.
        // document.getElementById('salarioMedio').value = cargo.salarioMedio; 

        // Configura o radio button de Status
        const status = cargo.status.toLowerCase();
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
        // Limpa os campos se o cargo não for encontrado
        document.getElementById('nome').value = '';
        document.getElementById('departamento').value = '';
        // document.getElementById('salarioMedio').value = '';
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
                // Chama a função com o valor do radio (que agora é o nome do cargo)
                carregarDadosCargo(this.value);
            }
        });
    });

    // Alterar o texto do botão para "Salvar Alterações"
    const btnSubmit = document.querySelector('.btn-submit');
    if (btnSubmit) {
        btnSubmit.textContent = 'Salvar Alterações';
    }
});