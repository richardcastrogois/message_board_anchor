# Message Board Anchor Program

Projeto desenvolvido para o bounty **"Solana na Prática"** do workshop **Web3Experts**.

## Descrição

Este projeto implementa um programa simples utilizando o framework Anchor na blockchain Solana.

O programa cria um mural de mensagens (Message Board) onde um usuário pode inicializar uma conta contendo uma mensagem e, posteriormente, atualizar essa mensagem sempre que desejar. Cada atualização incrementa automaticamente um contador (`update_count`), demonstrando persistência de estado on-chain e mutação de dados em contas da Solana.

O projeto foi desenvolvido como demonstração dos conceitos fundamentais do desenvolvimento de programas Anchor, incluindo:

- criação de contas on-chain;
- armazenamento de estado;
- mutação de dados;
- testes automatizados;
- deploy na Devnet;
- interação com o programa após o deploy.

---

# Funcionalidades

## initialize

Cria uma nova conta `MessageBoard` contendo:

- autor da mensagem;
- mensagem inicial;
- contador de atualizações iniciado em `0`.

---

## update_message

Atualiza a mensagem armazenada na conta e incrementa o campo `update_count`, registrando quantas vezes a mensagem foi modificada.

---

# Program ID

```text
91CoCZdxsxuJL1VQvDz6N6LLyQYPv49tNKt7xLBQcDtK
```

---

# Solana Explorer

## Programa

https://explorer.solana.com/address/91CoCZdxsxuJL1VQvDz6N6LLyQYPv49tNKt7xLBQcDtK?cluster=devnet

---

## Transação de interação

https://explorer.solana.com/tx/2vR7vMG3a2EovLxWw5TMjiyYqGDJt9uUTyLJzKNKQmA4gprhBhVvnjatRLdaqK81nYU9ZssUFx7nDu3AS752kW3x?cluster=devnet

---

# Tecnologias utilizadas

- Rust
- Solana
- Anchor Framework
- TypeScript
- Mocha
- Chai
- Solana CLI
- Anchor CLI

---

# Estrutura do projeto

```
programs/
    message_board/
        src/
            lib.rs

tests/
    message_board.ts

migrations/
Anchor.toml
Cargo.toml
package.json
```

---

# Compilação

```bash
anchor build --arch sbf
```

---

# Deploy

```bash
anchor deploy
```

---

# Executando os testes

```bash
ANCHOR_PROVIDER_URL=https://api.devnet.solana.com \
ANCHOR_WALLET=~/.config/solana/id.json \
yarn run ts-mocha -p ./tsconfig.json -t 1000000 "tests/**/*.ts"
```

---

# Resultado

O programa foi:

- compilado com sucesso;
- implantado na Solana Devnet;
- testado utilizando Anchor;
- validado através da execução das instruções `initialize` e `update_message`;
- publicado neste repositório GitHub para fins de avaliação do bounty.

---

# Repositório

https://github.com/richardcastrogois/message_board_anchor