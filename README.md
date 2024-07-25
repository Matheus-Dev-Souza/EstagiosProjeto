# Cadastro de Usuários

Este projeto é um sistema simples de cadastro de usuários desenvolvido em JavaScript, utilizando LocalStorage para persistência de dados. O sistema permite criar, consultar, atualizar e deletar cadastros de usuários.

## Funcionalidades

- **Criar Cadastro**: Adicione novos usuários ao sistema.
- **Consultar Cadastro**: Visualize os detalhes de um usuário existente através do e-mail.
- **Atualizar Cadastro**: Modifique as informações de um usuário existente.
- **Deletar Cadastro**: Remova um usuário do sistema.
- **Listar Todos os Cadastros**: Exiba todos os cadastros registrados.

### Arquitetura

1. **CadastroFactory**: Implementa o padrão de projeto Factory para criar novos objetos de cadastro com base nas informações fornecidas pelo usuário.
   
2. **StorageService**: Encapsula as operações de manipulação de dados no LocalStorage, incluindo salvar, consultar, atualizar e deletar cadastros.

3. **index.js**: Manipula os eventos do DOM e coordena a interação entre a interface do usuário e os serviços de armazenamento.

### Lógica de Negócio

- **Criação de Cadastro**: Quando um usuário preenche o formulário e clica em "Criar", o sistema verifica se já existe um cadastro com o mesmo e-mail ou telefone. Se não houver conflitos, o novo cadastro é salvo no LocalStorage.

- **Consulta de Cadastro**: O sistema permite consultar um cadastro existente pelo e-mail. Se o e-mail for encontrado, os detalhes do usuário são exibidos.

- **Atualização de Cadastro**: Ao atualizar um cadastro, o sistema remove o cadastro antigo e salva o novo com as informações atualizadas.

- **Deleção de Cadastro**: O sistema permite a remoção de um cadastro pelo e-mail. Após a confirmação, o cadastro é excluído do LocalStorage.

- **Listagem de Cadastros**: Todos os cadastros são recuperados do LocalStorage e exibidos na interface do usuário.

## Como Executar

1. Clone o repositório:
   ```bash
   git clone <URL_DO_REPOSITORIO>
   ```
2. Navegue até o diretório do projeto:
   ```bash
   cd <DIRETORIO_DO_PROJETO>
   ```
3. Abra o arquivo `index.html` em um navegador:
   ```bash
   open index.html
   ```

## Capturas de Tela

Adicione aqui as capturas de tela da aplicação para ilustrar a interface e as funcionalidades. Por exemplo:

- Tela Inicial:
  ![Tela Inicial](https://github.com/Matheus-Dev-Souza/EstagiosProjeto/blob/main/assets/imagens/1.png)
  
- Formulário de Cadastro:
  ![Sweet Alert de validação já existe  ](https://github.com/Matheus-Dev-Souza/EstagiosProjeto/blob/main/assets/imagens/2.png)

- Formulário de Cadastro:
  ![Sweet Alert de validação corfirmando ](https://github.com/Matheus-Dev-Souza/EstagiosProjeto/blob/main/assets/imagens/3.png)

- Listagem:
  ![Listagem](https://github.com/Matheus-Dev-Souza/EstagiosProjeto/blob/main/assets/imagens/4.png)
  
- Listagem Editar e Deletar:
  ![Listagem Editar e Deleta]( https://github.com/Matheus-Dev-Souza/EstagiosProjeto/blob/main/assets/imagens/5.png)
  
  - Atualizar Cadastro:
  ![Atualizar Cadastro](https://github.com/Matheus-Dev-Souza/EstagiosProjeto/blob/main/assets/imagens/6.png)
  

## Desafios Enfrentados

- **Manipulação do LocalStorage**: Garantir que os dados fossem corretamente salvos, exibidos e deletados.
- **Commits Semânticos**: Aprender a usar commits semânticos para uma melhor organização e clareza no histórico de commits.
- **Uso de Branches no Git**: Criar, mudar e gerenciar branches, e garantir que as mudanças fossem realizadas na branch correta.
- **Estrutura de Pastas e Padrão Factory**: Implementar uma estrutura de pastas organizada e o padrão de projeto Factory para criar objetos.

## Assinado por

**Matheus Gonçalves de Souza**  
[![LinkedIn](https://img.shields.io/badge/LinkedIn-%230077B5.svg?&style=flat&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/matheus-gonçalves-578b4714b/) 
[![GitHub](https://img.shields.io/badge/GitHub-%23121011.svg?&style=flat&logo=github&logoColor=white)](https://github.com/Matheus-Dev-Souza)  
 

