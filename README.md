# Teste Full Stack(Node/Angular) - Lista de Pessoas
**Qual objetivo do teste:** 

Avaliar o conhecimento técnico e a lógica de desenvolvimento.

**Quais tecnologias você pode utilizar:**

Backend: 
- Net Core, Python, NodeJS ou Next.js;

Frontend: 
- Angular, Vue ou react;

Banco de dados relacionais:
- MySQL, MariaDB, SQLServer, PostgreSQL ou Access;

Banco de dados não relacionais:
- ElasticSearch, MongoDB, CouchDB, Redis ou JSONBIN;

IDE:
- Visual Studio Code, Visual Studio Professional, Atom, Sublime ou Notepad++;

CSS:
- Bootstrap 5, Bulma, Materialize ou Tailwindcss;

**O que deve ser feito:**

Você deve criar duas aplicações:

- Backend: (API) no padrão REST;
- Frontend: para consumir a API do backend;

Você deve criar uma aplicação para gerenciar o cadastro de Pessoas, a aplicação dever ter as principais operações
de CRUD (Create, Read, Update, Delete) e um frontend capaz de consultar, listar, incluir, alterar e excluir.

Pontos de atenção:
- O backend deve ser no padrão de API REST/RESTFULL;
- É obrigatório, para banco de dados relacional utilizar um dos frameworks ORM listados abaixo:
NET → Entity Framework CORE, Dapper ORM, LINQ to DB; NodeJS → Sequelize, TypeORM ou RxDB; Python → SQLAlchemy ou Peewee;
- Você pode utilizar um banco de dados relacional ou não relacional fica ao seu critério decidir;
- A entidade Pessoa deve conter as seguintes informações (Nome, Sobrenome, Nacionalidade, CEP,
Estado, Cidade, Logradouro, E-mail, Telefone);
- Utilize um framework sugerido para o frontend;
- Para os estilos visuais na aplicação frontend utilize uns dos frameworks de CSS;
- Mantenha um padrão visual para aplicação;
- Todo os campos são obrigatórios e devem ter validação;
- Não permitir duplicação de CPF no cadastro;
- Consultar o CEP em um webservice externo (https://viacep.com.br/) para preencher os dados de
endereço;
- O sistema deve possuir telas para listar, consultar, incluir, alterar e excluir;


**Implementações extra:**
- Máscara de formatação padrão de CPF (999.999.999-99);
- Máscara de formatação padrão de CEP (99999-999);
- Validação de e-mail;
- Validação de CPF;
- Aplicação de frontend no estilo SPA (Single Page Application);
- Colocar as aplicações de backend e frontend para rodar em container (Docker).