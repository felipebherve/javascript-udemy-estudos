// 30 Exercícios: Função Factory (return { ... })
// Foco: Retorno de objetos, privacidade e composição.

/*
Função Factory (Fábrica):
É uma função comum que retorna (return) um objeto novo.
Não precisa de new.
É mais flexível e fácil de ler. Ótima para manter dados "privados" que ninguém de fora consegue mexer.
Exemplo: const conta = criarConta();
*/

// 01 - Criador de Botão: Fábrica de botões HTML com cor e texto.
// 02 - Formatador de Moeda: Função que recebe local (ex: 'pt-BR') e formata valores.
// 03 - Gerador de Mensagens: Prefixo fixo (ex: "[LOG]") + mensagem.
// 04 - Configuração de App: Objeto com tema, idioma e volume.
// 05 - Inimigo de Jogo: Nome, vida e dano aleatório.
// 06 - Validador de Campo: Fábrica que verifica se um texto é e-mail ou CPF.
// 07 - Calculadora de Desconto: Fábrica que guarda uma porcentagem fixa.
// 08 - Notificação: Tipo (sucesso/erro) e mensagem.
// 09 - Heroi: Nome, classe e métodos de ataque.
// 10 - Armazenamento (Storage): Métodos salvar e buscar no LocalStorage.
// 11 - Filtro de Array: Fábrica que guarda um critério de busca.
// 12 - Temporizador: Fábrica que executa uma função após X segundos.
// 13 - Estilo de Texto: Objeto com cor, tamanho e fonte.
// 14 - Coordenada GPS: Latitude e longitude formatadas.
// 15 - Gerador de Cupom: Nome do cupom e validade.
// 16 - Item de Inventário: Nome, peso e raridade.
// 17 - Conversor de Unidade: Fábrica KM -> Milhas.
// 18 - Logger de Erros: Guarda a data e o erro ocorrido.
// 19 - Membro de Equipe: Nome, cargo e nível de acesso.
// 20 - Página de Site: URL e título, método abrir.
// 21 - Pedido de API: Rota e método (GET/POST).
// 22 - Gerador de Cores: Fábrica que gera cores RGB aleatórias.
// 23 - Analisador de Texto: Conta palavras e letras de um parágrafo.
// 24 - Cartão de Crédito: Número mascarado e bandeira.
// 25 - Reserva de Hotel: Data de entrada e saída.
// 26 - Player de Música: Música atual e métodos play/pause.
// 27 - Tradução: Chave e valor de tradução.
// 28 - Redimensionador: Largura/Altura e método proporcao.
// 29 - Sessão de Usuário: Token e data de expiração.
// 30 - Moeda de Jogo: Quantidade e método gastar.