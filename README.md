# Personal Finances API

# Sobre o projeto

O projeto wise spent é um gestor de gastos mensais pessoal. Esta é uma API feita utilizando node.js e é o back-end do projeto.

# 👨‍💻 Tecnologias utilizadas no projeto
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white)

# 🔨 Funcionalidades do projeto
O projeto conta com dois Models: `User` e `Spent`, referentes ao usuário e gasto, respectivamente.
<br><br>
Funcionalidades de `User`:
- `Funcionalidade 1`: Cadastrar um usuário
- `Funcionalidade 2`: Editar as informações do usuário (nome e e-mail)
- `Funcionalidade 3`: Editar a senha do usuário
- `Funcionalidade 4`: Autenticação do usuário
- `Funcionalidade 5`: Autorização do usuário (Os dados do usuário são retornados quando há sucesso na autorização)
- `Funcionalidade 6`: Excluir um usuário
<br><br>
Funcionalidades de `Spent`:
- `Funcionalidade 1`: Cadastrar um gasto
- `Funcionalidade 2`: Recuperar um gasto específico
- `Funcionalidade 3`: Recuperar um gasto específico pelo id
- `Funcionalidade 4`: Recuperar os gastos de um usuário
- `Funcionalidade 5`: Editar um gasto
- `Funcionalidade 6`: Editar o status de um gasto
- `Funcionalidade 7`: Excluir um gasto
- `Funcionalidade 8`: Excluir todos os gastos de um usuário quando o usuário for excluído
