# crud-com-node.js + BD-MSQL

 CRUD com Node.js

# Descrição do Projeto

Este é um projeto de CRUD (Create, Read, Update, Delete) desenvolvido com Node.js.
Ele permite criar, listar, atualizar e deletar registros, servindo como base para aplicações que necessitam de manipulação de dados.

# Tecnologias Utilizadas

Node.js

Express.js

SQLite/MySQL/PostgreSQL (Defina o banco de dados utilizado)

Sequelize (Se aplicável)

Postman/Insomnia (Para testar a API)

# Instalação 

Clone este repositório:

git clone https://github.com/cleudioFaria/crud-com-node.js.git

Acesse o diretório do projeto:

cd crud-com-node.js

 # Instale as dependências:

npm install

Configure o banco de dados no arquivo .env (se aplicável).

Execute as migrações do banco de dados:

npx sequelize db:migrate

Inicie o servidor:

npm start
                           
Criar um novo registro

Listar todos os registros

Buscar um registro por ID

Atualizar um registro existente

Deletar um registro

# Estrutura do Projeto

crud-com-node.js/
│── src/

│   ├── controllers/

│   ├── models/

│   ├── routes/

│   ├── config/

│   ├── database/

│── package.json

│── server.js

│── .env

│── README.md

# Como Testar a API

## Você pode testar os endpoints usando o Postman ou Insomnia:

GET /registros → Lista todos os registros

GET /registros/:id → Busca um registro por ID

POST /registros → Cria um novo registro

PUT /registros/:id → Atualiza um registro

DELETE /registros/:id → Deleta um registro

# Melhorias Futuras

Implementação de autenticação (JWT)

Validação de entrada de dados

Front-end integrado

Testes automatizados

Autor

Feito com ❤️ por Cléudio Faria

![ClipWindowsGIF](https://github.com/user-attachments/assets/8323dcbf-8ae2-4e6c-80aa-766806812669)

 
