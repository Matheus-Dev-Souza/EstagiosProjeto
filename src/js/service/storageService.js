export const StorageService = {
    salvarCadastro: function(cadastro) {
        console.log('Salvando cadastro no localStorage:', cadastro);
        localStorage.setItem(cadastro.email, JSON.stringify(cadastro));
        alert('Cadastro criado com sucesso!');
    },

    consultarCadastro: function(email) {
        console.log('Consultando cadastro com email:', email);
        const cadastro = localStorage.getItem(email);
        if (cadastro) {
            console.log('Cadastro encontrado:', JSON.parse(cadastro));
            return JSON.parse(cadastro);
        } else {
            console.log('Cadastro não encontrado.');
            alert('Cadastro não encontrado.');
            return null;
        }
    },

    deletarCadastro: function(email) {
        console.log('Deletando cadastro com email:', email);
        if (localStorage.getItem(email)) {
            localStorage.removeItem(email);
            console.log('Cadastro deletado com sucesso.');
            alert('Cadastro deletado com sucesso!');
        } else {
            console.log('Cadastro não encontrado.');
            alert('Cadastro não encontrado.');
        }
    }
};