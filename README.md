# Doity – Desafio Frontend

Este repositório contém o projeto desenvolvido para o desafio técnico de Frontend Júnior da **Doity**.  
O objetivo foi construir uma aplicação simples utilizando **HTML, CSS e JavaScript puro**, fazendo uso de **Web Components** para componentização e estruturação das páginas.

---

## 🎥 Apresentação do Projeto

O vídeo abaixo demonstra a estrutura, organização e funcionalidades principais da aplicação — incluindo a abordagem com Web Components, o template base e o funcionamento das páginas:

▶️ **https://youtu.be/iZJm2yUdPMw**

---

## 🚀 Tecnologias utilizadas

- **HTML5**
- **CSS3 (reset + global styles)**
- **JavaScript Vanilla**
- **Web Components (Custom Elements + Shadow DOM)**  

Nenhum framework ou biblioteca externa foi utilizada — somente tecnologias nativas.

---

## 🧱 Estrutura do projeto

A estrutura foi organizada de forma modular, mantendo componentes isolados e reutilizáveis.

```
.
├── assets
│   ├── images
│   └── logo
├── components
│   ├── layout             # Componentes de layout utilizados no template
│   │   ├── footer
│   │   ├── header
│   │   └── navbar
│   ├── template          # Template utilizado na página (inclui header, footer e navbar)
│   └── ui                # Componentes reutilizáveis e customizáveis através de propriedades
│       ├── breadcrumb
│       ├── button
│       └── card
├── pages                  # Páginas no padrão web component (utiliza o template do projeto e componentes de ui)
│   ├── form
│   ├── preview
│   ├── results
│   └── survey
├── styles                  # Estilos globais (inclui variáveis CSS e reset)
│   ├── global.css
│   └── reset.css
├── create.html
├── edit.html
├── index.html              # Index criado para listar e acessar as páginas do projeto
├── preview.html
├── results.html
└── survey.html
```

---

## ▶️ Como executar o projeto
Este projeto **não requer etapa de build** e funciona inteiramente no lado do cliente, sem dependências de backend.  
A aplicação pode ser executada utilizando qualquer uma das opções abaixo:

---

## 🔗 1. Acesso Online

A versão da branch atual está disponível em:

➡️ **https://doity-challenge.yagolins.dev**

---

## 🖥️ 2. Execução Local via Navegador

Para executar o projeto localmente, basta abrir diretamente qualquer arquivo `.html` presente na raiz:

- `index.html`
- `create.html`
- `edit.html`
- `preview.html`
- `results.html`
- `survey.html`

Nenhuma configuração adicional é necessária.

---

## ⚙️ 3. Execução com Live Server (VSCode)

Para uma experiência mais fluida durante o desenvolvimento:

1. Instale a extensão **Live Server** no VSCode  
2. Clique com o botão direito sobre o arquivo `index.html`  
3. Selecione **“Open with Live Server”**  
4. O projeto abrirá automaticamente no navegador, com recarregamento automático

---

## 📌 Objetivo do projeto

- Demonstrar domínio de **HTML, CSS e JavaScript puro**
- Aplicar **componentização via Web Components**
- Criar páginas modulares e reutilizáveis
- Implementar estrutura clara e bem organizada
- Seguir boas práticas de semântica, responsividade e organização de arquivos

---

## 📄 Licença

Este projeto foi desenvolvido exclusivamente para fins de avaliação no processo seletivo.

---

