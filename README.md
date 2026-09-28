# JavaScript Course (Udemy) — notes, exercises and a payroll calculator

🇺🇸 English · 🇧🇷 [Português](README.pt-BR.md)

## Where I was when I made this

Between **February and March 2026** I went through an online JavaScript course on Udemy. I had already touched HTML and CSS on my own (see [html-css-js-estudos](https://github.com/felipebherve/html-css-js-estudos)); this course was where I learned JavaScript properly, section by section.

The folder only has **my own work**: the code I wrote along with each lesson, my exercise solutions and my own study cards. The instructor's material is not included.

## What's inside

| Folder | What it is |
|--------|-----------|
| `01_SECOES/` | The code I wrote in class, one file per lesson, numbered like the course |
| `02_MEMOGRAMAS/` | "Memograms": visual memory cards (JPG/PDF) with a summary, an acronym, an example and "when to use" for each topic, for sections 4–7 |
| `03_EXERCICIOS/01_JAVASCRIPT/` | Exercises and challenges, several with a second attempt kept next to the first |
| [`calculadora-salario-liquido`](https://github.com/felipebherve/calculadora-salario-liquido) | (separate repository) A payroll (net salary) calculator, my first "real" mini project |

## What I learned, by section

- **Section 3 — Getting started:** running JavaScript, first scripts, blocks and data.
- **Section 4 — Fundamentals:** variables, constants, `var` vs `let` (scope and hoisting), weak typing, numbers, `Math`, strings and template strings, booleans, arrays, objects, `null` and `undefined`, destructuring, and all the operator families (arithmetic, relational, logical, unary, ternary). Also browser vs Node.
- **Section 5 — Control flow:** `if / else`, `switch`, `while`, `do…while`, `for`, `for…in`, `break` and `continue`.
- **Section 6 — Functions:** parameters and return values, default parameters, first-class functions, `this` and `bind`, arrow functions, anonymous functions, callbacks, constructor functions, lexical scope, closures, factory functions (and factory vs class), IIFE, `call` and `apply`.
- **Section 7 — Objects:** introduction to object orientation in JavaScript and a review of objects and inheritance.

## The mini project: net salary calculator

The [payroll calculator repository](https://github.com/felipebherve/calculadora-salario-liquido) takes a gross monthly salary and calculates the net salary the way a Brazilian payroll does. I built it because I worked with payroll before and wanted to see that logic in code:

- **INSS** (social security) with the progressive brackets.
- **IRRF** (income tax), including the 2026 rules the code comments describe (exemption up to R$ 5,000 through the extra reducer, dependants deduction).
- **Transport voucher (vale-transporte):** deducts the lower of 6% of the salary or the real cost of the fares.

It's a learning exercise: the tables change every year, so check the official values before using it for anything real.

You can run it with Node.js; the instructions are in [that repository](https://github.com/felipebherve/calculadora-salario-liquido).

## Status

Sections 3 to 7 are done. Next steps for this material: use what I learned here to build real pages that run JavaScript in the browser (DOM), and turn the calculator into a small web page (see [calculadora-salario-liquido](https://github.com/felipebherve/calculadora-salario-liquido)).
