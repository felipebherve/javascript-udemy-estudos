# Curso de JavaScript (Udemy) — anotações, exercícios e calculadora de folha

🇧🇷 Português · 🇺🇸 [English](README.md)

## Em que momento eu fiz isto

Entre **fevereiro e março de 2026** fiz um curso online de JavaScript na Udemy. Eu já tinha mexido em HTML e CSS por conta própria (veja [html-css-js-estudos](https://github.com/felipebherve/html-css-js-estudos)); este curso foi onde aprendi JavaScript de verdade, seção por seção.

A pasta tem só o **meu trabalho**: o código que escrevi acompanhando cada aula, minhas soluções dos exercícios e meus próprios cartões de estudo. O material do instrutor não está incluído.

## O que tem aqui

| Pasta | O que é |
|-------|---------|
| `01_SECOES/` | O código que escrevi em aula, um arquivo por aula, numerado como no curso |
| `02_MEMOGRAMAS/` | "Memogramas": cartões visuais de memória (JPG/PDF) com resumo, acrônimo, exemplo e "quando usar" de cada assunto, das seções 4 a 7 |
| `03_EXERCICIOS/01_JAVASCRIPT/` | Exercícios e desafios, vários com uma segunda tentativa guardada ao lado da primeira |
| [`calculadora-salario-liquido`](https://github.com/felipebherve/calculadora-salario-liquido) | (repositório separado) Uma calculadora de salário líquido, meu primeiro miniprojeto "de verdade" |

## O que aprendi, por seção

- **Seção 3 — Iniciando:** como rodar JavaScript, primeiros scripts, blocos e dados.
- **Seção 4 — Fundamentos:** variáveis, constantes, `var` vs `let` (escopo e hoisting), tipagem fraca, números, `Math`, strings e template strings, booleanos, arrays, objetos, `null` e `undefined`, desestruturação e todas as famílias de operadores (aritméticos, relacionais, lógicos, unários, ternário). Também navegador vs Node.
- **Seção 5 — Controle de fluxo:** `if / else`, `switch`, `while`, `do…while`, `for`, `for…in`, `break` e `continue`.
- **Seção 6 — Funções:** parâmetros e retorno, parâmetros padrão, funções como objetos de primeira classe, `this` e `bind`, arrow functions, funções anônimas, callbacks, funções construtoras, contexto léxico, closures, funções factory (e factory vs classe), IIFE, `call` e `apply`.
- **Seção 7 — Objetos:** introdução à orientação a objetos em JavaScript e revisão de objetos e herança.

## O miniprojeto: calculadora de salário líquido

O [repositório da calculadora](https://github.com/felipebherve/calculadora-salario-liquido) recebe um salário bruto mensal e calcula o líquido como uma folha de pagamento brasileira. Fiz porque já trabalhei com folha e queria ver essa lógica em código:

- **INSS** com as faixas progressivas.
- **IRRF** (imposto de renda), incluindo as regras de 2026 descritas nos comentários do código (isenção até R$ 5.000 pelo redutor extra, dedução por dependentes).
- **Vale-transporte:** desconta o menor valor entre 6% do salário e o custo real das passagens.

É um exercício de aprendizado: as tabelas mudam todo ano, então confira os valores oficiais antes de usar para algo real.

Dá para rodar com Node.js; as instruções estão [nesse repositório](https://github.com/felipebherve/calculadora-salario-liquido).

## Situação

As seções 3 a 7 estão concluídas. Próximos passos deste material: usar o que aprendi para criar páginas reais que executam JavaScript no navegador (DOM) e transformar a calculadora em uma pequena página web (veja [calculadora-salario-liquido](https://github.com/felipebherve/calculadora-salario-liquido)).
