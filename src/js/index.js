import { CadastroFactory } from './factory/cadastroFactory.js';
import { StorageService } from './services/storageService.js';

// Selecionar os elementos do DOM
const form = document.getElementById('cadastro-form');
const nomeInput = document.getElementById('nome');
const dataNascimentoInput = document.getElementById('dataNascimento');
const telefoneInput = document.getElementById('telefone');
const emailInput = document.getElementById('email');
const criarBtn = document.getElementById('criar-btn');
const atualizarBtn = document.getElementById('atualizar-btn');
const consultarBtn = document.getElementById('consultar-btn');
const deletarBtn = document.getElementById('deletar-btn');
const listarBtn = document.getElementById('listar-btn');
const resultDiv = document.getElementById('result');

// Instanciar a factory de cadastro
const cadastroFactory = CadastroFactory();

criarBtn.addEventListener('click', () => {
    const nome = nomeInput.value;
    const dataNascimento = dataNascimentoInput.value;
    const telefone = telefoneInput.value;
    const email = emailInput.value;

    if (nome && dataNascimento && telefone && email) {
        if (StorageService.consultarCadastro(email)) {
            Swal.fire('Erro', 'Já existe um cadastro com esse email.', 'error');
        } else if (StorageService.consultarCadastroPorTelefone(telefone)) {
            Swal.fire('Erro', 'Já existe um cadastro com esse telefone.', 'error');
        } else {
            console.log('Dados do formulário:', nome, dataNascimento, telefone, email);
            const cadastro = cadastroFactory.criarCadastro(nome, dataNascimento, telefone, email);
            StorageService.salvarCadastro(cadastro);
            Swal.fire('Sucesso', 'Cadastro criado com sucesso!', 'success');
            form.reset();
        }
    } else {
        console.log('Campos do formulário não preenchidos corretamente.');
        Swal.fire('Erro', 'Por favor, preencha todos os campos.', 'error');
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
        } else {
            Swal.fire('Erro', 'Cadastro não encontrado.', 'error');
        }
    } else {
        console.log('Email não preenchido para consulta.');
        Swal.fire('Erro', 'Por favor, insira o email para consulta.', 'error');
    }
});

deletarBtn.addEventListener('click', () => {
    const email = emailInput.value;
    if (email) {
        console.log('Deletando cadastro para email:', email);
        StorageService.deletarCadastro(email);
        resultDiv.innerHTML = '';
        Swal.fire('Sucesso', 'Cadastro deletado com sucesso!', 'success');
    } else {
        console.log('Email não preenchido para deleção.');
        Swal.fire('Erro', 'Por favor, insira o email para deletar.', 'error');
    }
});

listarBtn.addEventListener('click', () => {
    const cadastros = StorageService.listarCadastros();
    resultDiv.innerHTML = '';
    cadastros.forEach(cadastro => {
        resultDiv.innerHTML += `
            <div>
                <p>Nome: ${cadastro.nome}</p>
                <p>Data de Nascimento: ${cadastro.dataNascimento}</p>
                <p>Telefone: ${cadastro.telefone}</p>
                <p>Email: ${cadastro.email}</p>
                <button class="listar-editarCadastro-btn"onclick="editarCadastro('${cadastro.email}')">Editar</button>
               <button class="listar-deletar-btn" onclick="deletarCadastro('${cadastro.email}')"><i class="fas fa-trash-alt"></i> <!-- Ícone de lixeira --></button>
            </div>
        `;
    });
});

window.deletarCadastro = function(email) {
    Swal.fire({
        title: 'Tem certeza?',
        text: 'Você não poderá reverter isso!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sim, deletar!',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        if (result.isConfirmed) {
            StorageService.deletarCadastro(email);
            Swal.fire('Deletado!', 'Cadastro deletado com sucesso.', 'success');
            resultDiv.innerHTML = '';
            form.reset();
            listarBtn.click(); // Atualiza a listagem após exclusão
        }
    });
};
window.editarCadastro = function(email) {
    const cadastro = StorageService.consultarCadastro(email);
    if (cadastro) {
        nomeInput.value = cadastro.nome;
        dataNascimentoInput.value = cadastro.dataNascimento;
        telefoneInput.value = cadastro.telefone;
        emailInput.value = cadastro.email;
        document.getElementById('email-original').value = cadastro.email;
        criarBtn.style.display = 'none';
        atualizarBtn.style.display = 'inline-block';
    }
};

atualizarBtn.addEventListener('click', () => {
    const nome = nomeInput.value;
    const dataNascimento = dataNascimentoInput.value;
    const telefone = telefoneInput.value;
    const email = emailInput.value;
    const emailOriginal = document.getElementById('email-original').value;

    if (nome && dataNascimento && telefone && email) {
        console.log('Atualizando cadastro:', nome, dataNascimento, telefone, email);
        if (emailOriginal !== email && StorageService.consultarCadastro(email)) {
            Swal.fire('Erro', 'Já existe um cadastro com esse email.', 'error');
        } else if (telefone !== StorageService.consultarCadastro(emailOriginal)?.telefone && StorageService.consultarCadastroPorTelefone(telefone)) {
            Swal.fire('Erro', 'Já existe um cadastro com esse telefone.', 'error');
        } else {
            StorageService.atualizarCadastro(emailOriginal, { nome, dataNascimento, telefone, email });
            Swal.fire('Sucesso', 'Cadastro atualizado com sucesso!', 'success');
            criarBtn.style.display = 'inline-block';
            atualizarBtn.style.display = 'none';
            form.reset();
            document.getElementById('email-original').value = '';
        }
    } else {
        console.log('Campos do formulário não preenchidos corretamente.');
        Swal.fire('Erro', 'Por favor, preencha todos os campos.', 'error');
    }
});