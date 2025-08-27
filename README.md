# Amigo Secreto

Um aplicativo web para organizar sorteios de amigo secreto de forma simples, segura e divertida, garantindo que todos recebam um amigo secreto único.

---

## Funcionalidades

- Sorteio de amigo secreto com mínimo de 4 participantes;
- Opção de **exclusão**: impede que uma pessoa pegue alguém que já pegou em sorteios anteriores;
- Amigo secreto circular perfeito: evita subcírculos ou que duas pessoas se escolham mutuamente;
- Resultado enviado diretamente por **email** para cada participante;
- Suporte a **tema claro e escuro**.

---

## Requisitos Funcionais

1. Mínimo de 4 participantes para o sorteio funcionar;
2. Opção de exclusão de participantes já sorteados no passado;
3. Geração de sorteio circular perfeito, sem conflitos;
4. Envio automático do resultado do sorteio por email.

---

## Requisitos Não Funcionais

1. Suporte a tema claro e escuro para melhor experiência do usuário;
2. Interface responsiva e intuitiva;
3. Performance rápida e confiável com carregamento instantâneo.

---

## Ferramentas Utilizadas

- **HTML, CSS, TypeScript**;
- **Vite** (para bundling e desenvolvimento rápido);
- **EmailJS** (para envio de emails diretamente do frontend).

---

## Como Rodar

**Pré-requisito:** ter o Node.js e npm instalados.  

1. Criar um arquivo `.env` na raiz do projeto com as variáveis:  
```env
    VITE_EMAILJS_SERVICE_ID=
    VITE_EMAILJS_TEMPLATE_ID=
    VITE_EMAILJS_PUBLIC_KEY=
```

> [!NOTE]
> Caso tenha dificuldade, ler seção sobre "Como Conseguir Chaves no EmailJS".

2. Clonar o repositório ou baixar o ZIP:  
```bash
    git clone https://github.com/sioterino/amigo-secreto.git
    cd amigo-secreto
    npm install
    npm run dev
```

Ou, se baixou o ZIP:  
- Descompactar;
- Abrir a pasta;
- Rodar `npm install` no terminal;
- Rodar `npm run dev` no terminal.

---

## Como Conseguir as Chaves no EmailJS

1. Faça login ou registre-se no [EmailJS](https://www.emailjs.com/);
2. Crie um **Email Service** e copie o **Service ID**;
3. Crie um **Email Template** com as variáveis:
    - `{{name}}` : nome do destinatário do email;  
    - `{{secret}}` : nome do amigo secreto;
    - `{{email}}` : email do destinatário.
4. Copie o **Template ID**;
5. Copie a **Chave Pública** do seu perfil;
6. Adicione todas essas informações no `.env`.

---

## Colaboração

Contribuições são bem-vindas!  
Se quiser colaborar:  
- Abra um **issue** para sugerir melhorias ou reportar bugs.
- Faça um **fork** do projeto, crie sua feature branch e envie um **pull request**.

---

## Licença

Este projeto está sob a **Licença MIT**.  
Você pode usar, modificar e distribuir livremente, desde que mantenha os créditos originais.  
