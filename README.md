# DIO Project

## Descrição
Este projeto é uma aplicação web desenvolvida com React, Vite e outras bibliotecas criada com base plataforma de aprendizado online Digital Innovation One. A aplicação permite que os usuários se registrem, façam login e naveguem por diferentes páginas, como feed de atividades, home, e páginas de registro e login.

[Projeto no Figma](https://www.figma.com/design/fvjQQNtqaUdpuNixvCZVav/DIO-CLONE?node-id=0-1&t=6IssPIClfooxHR8t-0)

## Estrutura do Projeto
A estrutura do projeto é organizada da seguinte forma:

```
src/
├── assets/
├── components/
│   ├── Button/
│   ├── ButtonMenu/
│   ├── Card/
│   ├── Header/
│   ├── Input/
│   └── UserInfo/
├── pages/
│   ├── feed/
│   ├── home/
│   ├── login/
│   └── register/
├── service/
│   └── api.js
├── styles/
├── App.jsx
├── main.jsx
├── .eslintrc.cjs
├── .gitignore
├── db.json
└── index.html
└── ...
```

## Dependências
As principais dependências do projeto são:

- `react`: ^18.2.0
- `react-dom`: ^18.2.0
- `react-hook-form`: ^7.51.5
- `react-icons`: ^5.2.1
- `react-router-dom`: ^6.23.1
- `styled-components`: ^6.1.11
- `yup`: ^1.4.0
- `axios`: ^1.7.2

## Scripts
Os scripts disponíveis no `package.json` são:

- `dev`: Inicia o servidor de desenvolvimento com Vite.
- `build`: Constrói a aplicação para produção.
- `lint`: Executa o ESLint para verificar o código.
- `preview`: Previsualiza a aplicação construída.
- `api`: Inicia o servidor JSON com o arquivo `db.json` na porta 8001.

## Configuração e Execução

### Pré-requisitos
- Node.js instalado
- npm ou yarn instalado

### Instalação
1. Clone este repositório:
   ```sh
   git clone https://github.com/yuridiasp/dio.git
   ```
2. Navegue até o diretório do projeto:
   ```sh
   cd dio
   ```
3. Instale as dependências:
   ```sh
   npm install
   ```

### Desenvolvimento
Para iniciar o servidor de desenvolvimento, execute:
```sh
npm run dev
```

### Build
Para construir a aplicação para produção, execute:
```sh
npm run build
```

### API
Para iniciar o servidor JSON, execute:
```sh
npm run api
```

## Arquivos Principais

### App
O componente principal que define as rotas da aplicação usando `react-router-dom`.

### Home
A página inicial que apresenta uma introdução e um botão para iniciar sessão.

### Login
A página de login que permite aos usuários entrarem na plataforma.

### Register
A página de registro para novos usuários.

### api.js
Contém as funções para interagir com a API, como login e criação de novos usuários.

## Componentes
Os componentes reutilizáveis estão localizados na pasta `components` e incluem:

- `Button`
- `ButtonMenu`
- `Card`
- `Header`
- `Input`
- `UserInfo`

## Banco de Dados
O arquivo `db.json` simula uma API RESTful para desenvolvimento.

## Licença
Este projeto está licenciado sob a MIT License - veja o arquivo [LICENSE](LICENSE) para detalhes.

<h2 id="author">Desenvolvedor</h2>

<p>
    <a href="https://github.com/yuridiasp">
        <img
          align=left
          margin=10
          width=80
          src="https://avatars.githubusercontent.com/u/81938754?v=4"
        />
    </a>
      <p>
        <p>&nbsp&nbspYuri Dias<br>
        &nbsp&nbsp&nbsp
    </p>
</p>

<br>

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/yuridiasp/) [![Discord](https://img.shields.io/badge/Discord-7289DA?style=for-the-badge&logo=discord&logoColor=white)](https://discord.com/channels/@yuridiasp/) [![Facebook](https://img.shields.io/badge/Facebook-1877F2?style=for-the-badge&logo=facebook&logoColor=white)](https://www.facebook.com/yuri.dias.7739/) [![X](https://img.shields.io/badge/X-000?style=for-the-badge&logo=x)](https://x.com/YuriDias_P) [![Instagram](https://img.shields.io/badge/-Instagram-%23E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/yuridiasp/) [![E-mail](https://img.shields.io/badge/-Email-000?style=for-the-badge&logo=microsoft-outlook&logoColor=007BFF)](mailto:yuristardias@hotmail.com)