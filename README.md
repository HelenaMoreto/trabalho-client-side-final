# 🛠️ Portal de Ferramentas Utilitárias

Aplicação web desenvolvida com **React + TypeScript**, contendo três módulos funcionais com validação robusta e persistência de dados utilizando `localStorage`.

---

## 📌 Visão do Produto

O Portal de Ferramentas Utilitárias foi desenvolvido para oferecer ao utilizador um ambiente simples, organizado e funcional para:

- ✅ Gestão de tarefas
- ✅ Cadastro de contactos
- ✅ Controle financeiro básico

A aplicação garante:
- Tipagem forte com TypeScript
- Validação segura com Zod
- Navegação fluida com React Router
- Persistência de dados mesmo após refresh

---

## 🚀 Stack Tecnológica

```bash
React (Vite)
TypeScript
TailwindCSS
React Hook Form
Zod + @hookform/resolvers
React Router Dom
LocalStorage API
```

---

## 📦 Instalação e Execução

```bash
# Clonar o repositório
git clone <URL_DO_REPOSITORIO>

# Entrar na pasta do projeto
cd nome-do-projeto

# Instalar dependências
npm install

# Executar projeto
npm run dev
```

---

## 🗂️ Estrutura de Pastas

```bash
src/
├── components/   # Componentes reutilizáveis (Navbar, Button, etc)
├── pages/        # Home, TaskMaster, ConnectHub, MoneyFlow
├── schemas/      # Schemas do Zod
└── App.tsx
```

---

# 📌 Milestones

---

## 🟢 Milestone 1 – Estrutura, Arquitetura e Navegação Base

### 🎯 Objetivo

Estabelecer a base estrutural da aplicação, configurando as ferramentas obrigatórias, organizando a arquitetura do projeto e implementando navegação funcional entre as páginas.

### Issues

1. Configuração inicial do projeto com React + TypeScript  
2. Estruturação de pastas e componentização  
3. Implementação do sistema de rotas  
4. Desenvolvimento da página Home  
5. Implementação da Navbar persistente  

---

## 🔵 Milestone 2 – Implementação Funcional e Persistência

### 🎯 Objetivo

Desenvolver os módulos funcionais com validação de dados, manipulação de formulários e persistência utilizando localStorage.

### Issues

1. Adição e remoção de tarefas (TaskMaster)  
2. Validação e persistência do TaskMaster  
3. Cadastro de contatos (ConnectHub)  
4. Persistência do ConnectHub  
5. Registro financeiro e cálculo de saldo (MoneyFlow)  

---

# 📝 User Stories – TaskMaster

---

## 1️⃣ Criar Tarefa

> Como utilizador, eu quero adicionar uma nova tarefa com título e categoria para organizar minhas atividades.

### ✔ Critérios de Aceitação

- O título deve ter no mínimo 5 caracteres.
- A categoria deve permitir apenas:
  - Trabalho
  - Pessoal
  - Urgente
- A tarefa deve ser salva no `localStorage`.
- A nova tarefa deve aparecer imediatamente na lista.

---

## 2️⃣ Visualizar Tarefas

> Como utilizador, eu quero visualizar todas as tarefas cadastradas para acompanhar minhas atividades.

### ✔ Critérios de Aceitação

- As tarefas devem ser exibidas em lista.
- Os dados devem ser carregados automaticamente do `localStorage`.
- Cada item deve exibir título e categoria.

---

## 3️⃣ Remover Tarefa

> Como utilizador, eu quero remover uma tarefa da lista para manter apenas atividades relevantes.

### ✔ Critérios de Aceitação

- Cada tarefa deve possuir botão de exclusão.
- Ao clicar, a tarefa deve ser removida da interface.
- O `localStorage` deve ser atualizado após exclusão.

---

## 4️⃣ Validação de Dados

> Como utilizador, eu quero receber mensagens de erro ao inserir dados inválidos para corrigir antes de salvar.

### ✔ Critérios de Aceitação

- O campo título não pode estar vazio.
- Deve exibir erro se tiver menos de 5 caracteres.
- O formulário não deve enviar dados inválidos.

---

## 5️⃣ Persistência de Dados

> Como utilizador, eu quero que minhas tarefas permaneçam salvas após atualizar a página para não perder informações.

### ✔ Critérios de Aceitação

- As tarefas devem ser armazenadas no `localStorage`.
- Devem ser restauradas automaticamente ao recarregar.
- Não deve haver duplicação de dados.

---

# 🎨 Funcionalidades Implementadas

- ✔ Navegação entre páginas sem reload
- ✔ Validação robusta com Zod
- ✔ Gerenciamento de formulários com React Hook Form
- ✔ Persistência com localStorage
- ✔ Tipagem forte com TypeScript
- ✔ Layout responsivo com TailwindCSS

---

# 📊 Critérios Técnicos Atendidos

- Uso correto de `interfaces` e `types`
- Ausência de `any`
- Componentização adequada
- Separação de responsabilidades
- Organização modular