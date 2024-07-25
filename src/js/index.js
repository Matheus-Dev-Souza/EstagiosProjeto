import { CadastroFactory } from './factory/cadastroFactory.js';
import { StorageService } from './services/storageService.js';

// Selecionar os elementos do DOM
const form = document.getElementById('cadastro-form');
const nomeInput = document.getElementById('nome');
const dataNascimentoInput = document.getElementById('dataNascimento');
const telefoneInput = document.getElementById('telefone');
const emailInput = document.getElementById('email');
const criarBtn = document.getElementById('criar-btn');
const consultarBtn = document.getElementById('consultar-btn');
const deletarBtn = document.getElementById('deletar-btn');
const resultDiv = document.getElementById('result');

// Instanciar a factory de cadastro
const cadastroFactory = CadastroFactory();

function validarEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

function validarTelefone(telefone) {
    const re = /^\d{10,11}$/;
    return re.test(String(telefone));
}

criarBtn.addEventListener('click', () => {
    const nome = nomeInput.value.trim();
    const dataNascimento = dataNascimentoInput.value;
    const telefone = telefoneInput.value.trim();
    const email = emailInput.value.trim();

    if (!nome) {
        alert('Por favor, preencha o nome.');
        return;
    }

    if (!dataNascimento) {
        alert('Por favor, preencha a data de nascimento.');
        return;
    }

    if (!validarTelefone(telefone)) {
        alert('Por favor, insira um número de telefone válido.');
        return;
    }

    if (!validarEmail(email)) {
        alert('Por favor, insira um email válido.');
        return;
    }

    console.log('Dados do formulário:', nome, dataNascimento, telefone, email);
    const cadastro = cadastroFactory.criarCadastro(nome, dataNascimento, telefone, email);
    StorageService.salvarCadastro(cadastro);
});

consultarBtn.addEventListener('click', () => {
    const email = emailInput.value.trim();
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
        } else {
            resultDiv.innerHTML = '<p>Cadastro não encontrado.</p>';
        }
    } else {
        alert('Por favor, insira o email para consulta.');
    }
});

deletarBtn.addEventListener('click', () => {
    const email = emailInput.value.trim();
    if (email) {
        console.log('Deletando cadastro para email:', email);
        StorageService.deletarCadastro(email);
        resultDiv.innerHTML = '';
    } else {
        alert('Por favor, insira o email para deletar.');
    }
});
