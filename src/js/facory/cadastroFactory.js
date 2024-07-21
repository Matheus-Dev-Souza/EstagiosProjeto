export function CadastroFactory() {
    return {
        criarCadastro: function(nome, dataNascimento, telefone, email) {
            console.log('Criando cadastro com:', nome, dataNascimento, telefone, email);
            return {
                nome: nome,
                dataNascimento: dataNascimento,
                telefone: telefone,
                email: email
            };
        }
    };
}