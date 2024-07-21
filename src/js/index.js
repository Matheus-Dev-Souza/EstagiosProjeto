import { CadastroFactory } from './facory/cadastroFactory.js';
import { StorageService } from './service/storageService.js';

const form = document.getElementById('cadastro-form');
const nomeInput = document.getElementById('nome');
const dataNascimentoInput = document.getElementById('dataNascimento');
const telefoneInput = document.getElementById('telefone');
const emailInput = document.getElementById('email');
const criarBtn = document.getElementById('criar-btn');
const consultarBtn = document.getElementById('consultar-btn');
const deletarBtn = document.getElementById('deletar-btn');
const resultDiv = document.getElementById('result');

const cadastroFactory = CadastroFactory();

criarBtn.addEventListener('click', () => {
    const nome = nomeInput.value;
    const dataNascimento = dataNascimentoInput.value;
    const telefone = telefoneInput.value;
    const email = emailInput.value;

    if (nome && dataNascimento && telefone && email) {
        console.log('Dados do formulário:', nome, dataNascimento, telefone, email);
        const cadastro = cadastroFactory.criarCadastro(nome, dataNascimento, telefone, email);
        StorageService.salvarCadastro(cadastro);
    } else {
        console.log('Campos do formulário não preenchidos corretamente.');
        alert('Por favor, preencha todos os campos.');
    }
});

consultarBtn.addEventListener('click', () => {
    const email = emailInput.value;
    if (email) {
        console.log('Consultando cadastro para email:', email);
        const cadastro = StorageService.consultarCadastro(email);
        if (cadastro) {
            resultDiv.innerHTML = `
                <p>Nome: ${cadastro.nome}</p>
                <p>Data de Nascimento: ${cadastro.dataNascimento}</p>
                <p>Telefone: ${cadastro.telefone}</p>
                <p>Email: ${cadastro.email}</p>
            `;
        }
    } else {
        console.log('Email não preenchido para consulta.');
        alert('Por favor, insira o email para consulta.');
    }
});

deletarBtn.addEventListener('click', () => {
    const email = emailInput.value;
    if (email) {
        console.log('Deletando cadastro para email:', email);
        StorageService.deletarCadastro(email);
        resultDiv.innerHTML = '';
    } else {
        console.log('Email não preenchido para deleção.');
        alert('Por favor, insira o email para deletar.');
    }
});