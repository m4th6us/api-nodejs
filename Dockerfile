# Use a imagem oficial do Node.js como base
FROM node:16.20.2

# Crie e defina o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copie o arquivo package.json e package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instale as dependências do aplicativo
RUN npm install

# Copie os arquivos de migração para o diretório de trabalho
COPY migrations/ ./migrations/

# Execute as migrações para criar a tabela no banco de dados SQLite
RUN npm install knex -g && \
    npm install sqlite3 --save && \
    knex init && \
    knex migrate:latest

# Copie o código-fonte do aplicativo para o diretório de trabalho
COPY . .

# Exponha a porta 4000, que é a porta em que o aplicativo Node.js será executado
EXPOSE 4000

# Comando para iniciar o aplicativo
CMD ["node", "index.js"]
