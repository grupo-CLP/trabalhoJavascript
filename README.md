# Trabalho em JavaScript – Produtos e Vendas

Aplicação de **terminal** em JavaScript (Node.js, módulos ES) para cadastrar produtos e registrar vendas, com menus interativos. O foco do trabalho é a organização orientada a objetos do código: entidades, objetos de acesso a dados (DAO) e interface em camadas. Trabalho da disciplina de **Conceitos de Linguagens de Programação** (UFSJ), feito pelo **Grupo 6**.

## Grupo

- Felipe Girardi
- Gabriel Vaz Bernardini
- Miguel de Assis
- Nicolas Teles
- Ramon Caíque

## O que a aplicação faz

- **Produtos:** listar, adicionar (nome e valor) e remover.
- **Vendas:** listar, adicionar e remover. Ao adicionar uma venda, informa-se o produto por nome ou ID e a quantidade, podendo incluir vários itens. Ao final, o programa mostra uma **nota fiscal** com os itens, o valor de cada um, o total e a data e hora da venda.
- Os dados ficam **apenas na memória**: ao fechar o programa, produtos e vendas são perdidos.

## Como executar

Requisitos: Node.js (testado com a versão 22).

```
npm init -y
npm install readline-sync
node index.mjs
```

O projeto não traz um `package.json`, por isso os dois primeiros comandos o criam e instalam a única dependência, a biblioteca `readline-sync`, que lê as respostas do teclado.

Menu principal: `1` abre os produtos, `2` abre as vendas e `0` fecha o programa. Em cada submenu, `1` lista, `2` adiciona, `3` remove e `0` volta.

## Estrutura

| Pasta/arquivo | Conteúdo |
|---|---|
| `index.mjs` | Ponto de entrada: abre o menu principal |
| `entidades/` | `Entidade` (classe base com ID), `Produto`, `Venda` (com seus itens e o total) e `Totalizavel` |
| `Data/` | `DAO` genérico e `DAOProduto` e `DAOVenda`, que guardam as entidades em memória |
| `ui/` | Menus em terminal: `MenuAbstrato`, `MenuEntidade`, `MenuPrincipal`, `MenuProduto` e `MenuVenda` |

## Conceitos praticados

Classes e herança, classes abstratas simuladas em JavaScript, módulos ES (`.mjs`), padrão DAO, padrão Singleton (nos DAOs) e documentação com JSDoc.
