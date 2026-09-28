/*
 O que são Call e Apply?
Imagine que você tem um método atacar() dentro do objeto Guerreiro, mas quer que o objeto Mago use esse mesmo método, sem precisar copiar o código.
call e apply servem para emprestar uma função de um objeto para outro, forçando o this a ser quem você quiser.
call: Você passa os argumentos um por um, separados por vírgula. (C de Comma/Vírgula).
apply: Você passa os argumentos dentro de um Array []. (A de Array).

exemplo:
*/
const personagem = {
    nome: "Aragorn",
    apresentar: function(clima, local) {
        console.log(`Sou ${this.nome}, está ${clima} aqui em ${local}.`);
    }
};

const outroPersonagem = { nome: "Legolas" };

// 1. Usando o CALL (Argumentos separados por vírgula)
personagem.apresentar.call(outroPersonagem, "Ensolarado", "Valfenda");
// Saída: Sou Legolas, está Ensolarado aqui em Valfenda.

// 2. Usando o APPLY (Argumentos dentro de um [Array])
const infos = ["Chuvoso", "Abismo de Helm"];
personagem.apresentar.apply(outroPersonagem, infos);
// Saída: Sou Legolas, está Chuvoso aqui em Abismo de Helm.


// 30 Exercícios: Call e Apply
// Foco: Reutilizar lógica de um objeto em outro.

// 01 - Troca de Saldo: Use o método verSaldo da Conta Corrente na Conta Poupança.
// 02 - Acelerar Diferente: Use a função acelerar de um Carro em uma Moto.
// 03 - Apresentação: Use um método falarNome em diferentes objetos de usuários.
// 04 - Soma de Array: Use Math.max.apply para achar o maior número de uma lista.
// 05 - Conversor Universal: Use um método de converterMoeda em valores avulsos.
// 06 - Saudação Customizada: Uma função ola(saudacao) usada com call em objetos Pessoa.
// 07 - Cálculo de Imposto: Aplique uma função de taxa em diferentes produtos.
// 08 - Bio de Perfil: Use exibirBio de um Admin em um Usuário comum.
// 09 - Herança de Atributos: Use Pessoa.call(this, nome) dentro de uma construtora Aluno.
// 10 - Print de Log: Use um formatador de data em diferentes objetos de erro.
// 11 - Média de Notas: Empreste a lógica de cálculo de um aluno para uma lista de jurados.
// 12 - Validar Cadastro: Use a validação de um formulário de Login no formulário de Busca.
// 13 - Movimentação: Use mover(x, y) de um Robô em um Drone.
// 14 - Preço com Desconto: Use aplicarCupom.call passando o valor do desconto.
// 15 - Status de Bateria: Use o verificador de um celular em um notebook.
// 16 - Atacar Alvo: Use atacar.apply passando [dano, precisao] em um inimigo.
// 17 - Tradutor: Use uma função de tradução em objetos de diferentes idiomas.
// 18 - Configurar Estilo: Use setCSS.apply para passar várias regras de uma vez.
// 19 - Calcular Frete: Use a lógica de uma Transportadora A para uma encomenda da B.
// 20 - Troca de Contexto: Tente usar um console.log customizado com apply.
// 21 - Unir Listas: Use Array.prototype.push.apply para juntar dois arrays.
// 22 - Verificar Idade: Use a lógica de "Maior de Idade" em objetos de Clientes.
// 23 - Gerar Relatório: Use um gerador de PDF de vendas para gerar um de estoque.
// 24 - Reset de Senha: Use o método de um Usuário Ativo em um Usuário Bloqueado.
// 25 - Atualizar GPS: Use o método setLocalizacao.call com novas coordenadas.
// 26 - Filtro de Busca: Use um filtro de "Preço Baixo" em uma lista de Hotéis.
// 27 - Contagem de Cliques: Use um contador global em elementos HTML diferentes.
// 28 - Formatar Nome: Use toUpperCase.call em uma propriedade de um objeto.
// 29 - Calculadora de IMC: Use a função de um Médico em dados de um Atleta.
// 30 - Timer: Use um método finalizar.call quando um tempo acabar em objetos diferentes.


