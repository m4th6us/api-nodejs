Este o é um projeto backend simples, ele foi desenvolvido em Node js e requer a configuração de um banco de dados para funcionar corretamente. 
Para rodar o projeto localmente, siga as instruções abaixo.

Pré-requisitos:

- Node.js instalado em seu sistema.
- Docker instalado para usar o Docker Compose (opcional, mas recomendado para ambientes de desenvolvimento isolados).

Configuração do Banco de Dados (Obrigatório para rodar localmente)

Instale as dependências do projeto:

    npm install

Instale o Knex globalmente:

    npm install knex -g

Crie o arquivo de configuração do Knex:

    knex init

Rode as migrações do banco de dados:

    knex migrate:latest

Rodando o Projeto
Usando Docker (recomendado)

Para rodar o projeto no Docker, execute o seguinte comando na raiz do projeto:

    docker-compose up --build

Este comando criará um ambiente isolado com o banco de dados e o aplicativo Node.js.
Rodando Localmente (sem Docker)

Se você deseja rodar o banco de dados localmente em vez de dentro do Docker, siga os passos acima para configurar o banco de dados. Após configurar o banco de dados local, você pode iniciar o projeto usando:

    node index.js

Certifique-se de ter o banco de dados configurado corretamente para que o aplicativo funcione como esperado.
