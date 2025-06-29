# 📖 DevBurguer - API

Esta é a **API Backend** do projeto **DevBurguer**, originalmente desenvolvido por Rodolfo Mori. Ela é o coração da aplicação e fornece os endpoints para o sistema de delivery de hambúrgueres.

---

## 🛠️ Tecnologias usadas

* **Node.js** — Ambiente JavaScript para execução do backend.
* **Express** — Framework minimalista para criação das rotas e servidor HTTP.
* **Sequelize** — ORM para interagir com o banco de dados SQL.
* **MySQL** — Banco de dados relacional para armazenar usuários, pedidos e produtos.
* **JWT (JSON Web Token)** — Para autenticação e autorização.
* **Bcrypt** — Para hash e segurança das senhas.
* **Multer** — Para upload de imagens.
* **Cors** — Para permitir requisições entre origens diferentes.
* **Stripe** - Para receber pagamentos.

---

## 📂 Estrutura de pastas

```
project-root/
├─ src/
│  ├─ config/         # Configurações (ex.: conexão com DB)
│  ├─ controllers/    # Lógica das rotas
│  ├─ middlewares/    # Middlewares (ex.: autenticação)
│  ├─ models/         # Models do Sequelize
│  ├─ routes/         # Rotas da API
│  ├─ uploads/        # Imagens dos produtos
│  └─ app.js          # Ponto de entrada da aplicação
├─ .env               # Variáveis de ambiente
├─ package.json
└─ README.md
```

---

## ⚙️ Como rodar o projeto

### Pré-requisitos

* **Node.js** instalado
* **MySQL** instalado e configurado
* **Yarn** para gerenciar dependências

### Passo a passo

1. Clone o repositório:

   ```bash
   git clone https://github.com/GabrielDevelop777/devburguer-api.git
   cd devburguer-api
   ```
2. Instale as dependências:

   ```bash
   yarn install
   ```
3. Configure as variáveis de ambiente no arquivo `.env`:

   ```env
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=suasenha
   DB_DATABASE=devburguer
   JWT_SECRET=sua_chave_secreta
   PORT=3333
   ```
4. Rode as migrations e seeders:

   ```bash
   npx sequelize db:migrate
   npx sequelize db:seed:all
   ```
5. Inicie o servidor:

   ```bash
   yarn dev
   ```
6. Acesse a API em: [http://localhost:3000](http://localhost:3000)

> A interface frontend pode ser acessada em: [http://localhost:5173/](http://localhost:5173/)

---

## 📜 Endpoints da API

| Método | Rota         | Descrição                | Autenticação |
| ------ | ------------ | ------------------------ | ------------ |
| POST   | /users/login | Login de usuário         | ❌            |
| POST   | /users       | Cadastra um novo usuário | ❌            |
| GET    | /products    | Lista os produtos        | ❌            |
| POST   | /products    | Cria um produto          | ✅            |
| GET    | /orders      | Lista os pedidos         | ✅            |
| POST   | /orders      | Cria um pedido           | ✅            |

> Algumas rotas requerem autenticação com token JWT válido.

---

## 🤝 Contribuição

Sinta-se à vontade para abrir issues ou enviar pull requests com melhorias, correções e novos recursos!

---

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

---

💻 Feito com ❤️ por \[Gabriel]
