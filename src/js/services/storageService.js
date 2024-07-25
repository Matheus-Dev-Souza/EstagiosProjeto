export const StorageService = {
    salvarCadastro: function(cadastro) {
        console.log('Salvando cadastro no localStorage:', cadastro);
        localStorage.setItem(cadastro.email, JSON.stringify(cadastro));
    },

    consultarCadastro: function(email) {
        console.log('Consultando cadastro com email:', email);
        const cadastro = localStorage.getItem(email);
        if (cadastro) {
            console.log('Cadastro encontrado:', JSON.parse(cadastro));
            return JSON.parse(cadastro);
        } else {
            console.log('Cadastro não encontrado.');
            return null;
        }
    },

    consultarCadastroPorTelefone: function(telefone) {
        const cadastros = Object.values(localStorage).map(cadastro => JSON.parse(cadastro));
        return cadastros.find(cadastro => cadastro.telefone === telefone);
    },

    deletarCadastro: function(email) {
        console.log('Deletando cadastro com email:', email);
        if (localStorage.getItem(email)) {
            localStorage.removeItem(email);
            console.log('Cadastro deletado com sucesso.');
        } else {
            console.log('Cadastro não encontrado.');
        }
    },

    listarCadastros: function() {
        return Object.values(localStorage).map(cadastro => JSON.parse(cadastro));
    },

    atualizarCadastro: function(emailOriginal, novosDados) {
        this.deletarCadastro(emailOriginal);
        this.salvarCadastro(novosDados);
    }
};
