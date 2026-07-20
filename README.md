
# Automação de Testes E2E - Frigelar

## 📋 Sobre o projeto

Este projeto tem como objetivo automatizar os principais fluxos do e-commerce da Frigelar utilizando **Cypress**, garantindo que funcionalidades críticas do site continuem funcionando corretamente a cada nova atualização.

A automação foi desenvolvida seguindo boas práticas de testes End-to-End (E2E), simulando o comportamento real do usuário durante a navegação.

---

## 🎯 Objetivo

Automatizar o fluxo completo de compra no site da Frigelar, validando desde o acesso ao sistema até a finalização do pedido.

Os cenários serão evoluídos continuamente conforme novas funcionalidades forem sendo implementadas.

---

## 🛠 Tecnologias utilizadas

* Cypress 15
* JavaScript
* Node.js
* Git
* GitHub

---

## 📂 Estrutura do projeto

```text
cypress/
├── e2e/
│   └── acessoSite.cy.js
├── fixtures/
├── support/
│   ├── commands.js
│   └── e2e.js
```

---

## ✅ Cenários automatizados

Atualmente o projeto contempla os seguintes testes:

### Login

* Acessar o site
* Abrir modal de login
* Informar usuário e senha
* Validar login realizado com sucesso

---

### Busca de produtos

* Pesquisar um produto
* Validar carregamento da listagem de resultados

---

### Página do produto

* Acessar diretamente a página do produto
* Validar nome do produto
* Validar preços
* Adicionar produto ao carrinho
* Validar abertura do modal de garantia

---

## 🚀 Próximas implementações

* Seleção de garantia
* Cálculo de frete
* Inclusão no carrinho
* Alteração de quantidade
* Aplicação de cupom
* Login durante o checkout
* Cadastro de endereço
* Seleção de transportadora
* Seleção da forma de pagamento
* Revisão do pedido
* Finalização da compra
* Validações de mensagens de erro
* Testes negativos
* Testes de regressão
* Geração de evidências (screenshots e vídeos)
* Integração com CI/CD (GitHub Actions)

---

## ▶️ Como executar o projeto

### Clonar o repositório

```bash
git clone https://github.com/ViniciusRdeOliveira/curso_cypress.git
```

### Instalar as dependências

```bash
npm install
```

### Executar o Cypress

Modo interativo:

```bash
npx cypress open
```

Modo headless:

```bash
npx cypress run
```

---

## 📈 Objetivos de aprendizado

Este projeto faz parte da minha evolução em automação de testes, com foco em:

* Testes End-to-End (E2E)
* Boas práticas com Cypress
* Organização de projetos de automação
* Interceptação de requisições
* Validação de APIs
* Page Objects
* Custom Commands
* Integração contínua (CI/CD)

---

## 👨‍💻 Autor

**Vinicius Ribeiro de Oliveira**

Analista de Sistemas com experiência em QA, testes funcionais, automação de testes e integração de sistemas.

* GitHub: https://github.com/ViniciusRdeOliveira
* LinkedIn: [www.linkedin.com/in/viniciusribeirodeoliveira](http://www.linkedin.com/in/viniciusribeirodeoliveira)
