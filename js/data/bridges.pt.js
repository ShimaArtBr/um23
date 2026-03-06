// bridges.pt.js — Textos interpretativos das Pontes (Bridges)
// Pasta de destino: /js/data/
//
// USO:
//   import { BRIDGE_SCALE, BRIDGE_CONTEXT } from './data/bridges.pt.js';
//
// BRIDGE_SCALE[delta]  → texto de escala (delta 0–8)
// BRIDGE_CONTEXT[par]  → texto contextual do par específico
//   pares: "motExpr" | "motLP" | "exprLP" | "impExpr"

/* ════════════════════════════════════════════════
   BRIDGE_SCALE — Textos por magnitude de delta (0–8)
   O que aquela diferença significa experiencialmente.
   50–70 palavras por entrada. Linguagem de intensidade,
   não de julgamento — delta alto não é "pior".
════════════════════════════════════════════════ */

const BRIDGE_SCALE = {

  0: `As duas forças apontam na mesma direção e se reforçam mutuamente. Isso não significa ausência de tensão interior — significa que a tensão, quando surge, encontra um canal natural de expressão. A energia que poderia se perder em atrito interno fica disponível. O desafio do delta zero é diferente: sem fricção entre as forças, o crescimento exige que a pessoa se proponha ativamente a novos territórios.`,

  1: `Uma diferença mínima — quase um eco entre as duas forças. Na prática cotidiana, você raramente percebe a distância entre elas. O ajuste necessário é sutil e acontece de forma quase automática. Essa proximidade cria fluência: o que uma força propõe, a outra acolhe com pouco esforço. A integração aqui é menos um trabalho e mais uma afinação — pequenos ajustes que mantêm o instrumento em tom.`,

  2: `Uma diferença leve, mas perceptível em momentos de escolha. Você consegue manter as duas forças funcionando de forma coesa na maior parte do tempo, e as ocasiões em que elas divergem tendem a ser breves. O esforço de integração é real — mas está dentro de uma escala que a maioria das pessoas navega sem necessidade de atenção explícita. Quando surge o atrito, ele é produtivo: gera reflexão sem paralisia.`,

  3: `Aqui a tensão começa a ter peso experiencial. As duas forças têm agendas que nem sempre coincidem, e você provavelmente já as sentiu puxando em direções diferentes em momentos importantes. Essa magnitude de delta é uma das mais formativas: exige atenção ativa, mas é criativa — produz profundidade onde a harmonia automática produziria superficialidade. O trabalho de integração nesse nível gera habilidades que o delta zero nunca precisou desenvolver.`,

  4: `A tensão entre as duas forças é consistente e visível para quem convive com você. Momentos de decisão, relacionamentos próximos e escolhas de carreira são os campos onde essa distância mais se manifesta. O delta 4 convida a um trabalho deliberado — não porque algo esteja errado, mas porque a integração dessas duas forças, quando acontece, produz algo raro: a combinação de qualidades que raramente coexistem naturalmente.`,

  5: `As duas forças operam em frequências suficientemente distintas para criar uma polaridade que estrutura sua vida. Você provavelmente já reconheceu essa tensão em episódios marcantes — momentos em que o que você sente por dentro e o que o mundo vê por fora pareciam pertencer a pessoas diferentes. Essa distância não é um obstáculo; é a matéria-prima de uma transformação que exige trabalho consciente e sustentado. O que ela produz é raro.`,

  6: `Uma polaridade significativa — duas forças que se conhecem mas raramente falam a mesma língua espontaneamente. Essa magnitude de delta organiza padrões de vida inteiros: escolhas que parecem contraditórias para outros, relacionamentos que trazem os mesmos temas recorrentemente, períodos de intensa clareza seguidos de confusão. O convite aqui é de integração profunda — não fusão das forças, mas o desenvolvimento de uma linguagem interior que consegue honrar ambas.`,

  7: `As duas forças estão em extremos quase opostos do espectro. Essa tensão não é situacional — ela é estrutural, e provavelmente você a reconhece como um tema central da sua vida, não como um episódio. O trabalho de integração nessa escala é longo e transformador. Pessoas com delta 7 frequentemente constroem pontes internas que ninguém mais precisou construir — e por isso tornam-se capazes de compreensões que outros não alcançam.`,

  8: `A maior polaridade possível entre dois números do mapa. Essas duas forças não chegam ao mesmo ponto por nenhum caminho curto — a distância entre elas é máxima dentro do sistema. Isso não é uma condenação: é uma tensão geradora de transformação em escala profunda. Pessoas com delta 8 costumam passar por ciclos de ruptura e reconstrução que, vistos de dentro, pareciam impossíveis — e que, vistos de fora, revelam uma capacidade extraordinária de reinvenção.`

};

/* ════════════════════════════════════════════════
   BRIDGE_CONTEXT — Textos por par de ponte (4 pares)
   A natureza específica da tensão para cada par.
   60–80 palavras por entrada.
════════════════════════════════════════════════ */

const BRIDGE_CONTEXT = {

  // Motivação ↔ Expressão
  // O que a alma quer vs. o que o nome manifesta externamente
  motExpr: `A tensão aqui é entre o mundo interior e o mundo projetado: o que você deseja no fundo e o que o seu nome naturalmente manifesta para fora. Quando pequena, o que você quer e o que você projeta andam juntos. Quando grande, há algo essencial em você que o nome ainda não consegue expressar completamente — e as pessoas ao redor frequentemente encontram uma versão sua diferente do que você experimenta por dentro.`,

  // Motivação ↔ Caminho de Vida
  // O desejo interior vs. o chamado de vida — a mais profunda
  motLP: `Esta é a ponte mais profunda do mapa: a distância entre o que sua alma deseja e o que a vida veio exigir de você. Quando próximos, desejo e missão se alimentam mutuamente. Quando distantes, você pode passar anos construindo o que quer antes de descobrir que o que a vida pede é diferente — e essa descoberta, embora difícil, costuma ser o ponto onde a jornada ganha sentido real.`,

  // Expressão ↔ Caminho de Vida
  // O talento natural vs. a missão — a mais prática
  exprLP: `Esta ponte mede a distância entre o que seu nome te equipa para fazer e o que seu caminho de vida veio ensinar. Quando alinhados, seu talento natural serve diretamente à missão. Quando distantes, o que você faz bem pode não ser o que sua vida mais cobra — e o que sua vida mais cobra pode exigir que você desenvolva habilidades que não chegaram naturalmente. É a ponte mais visível no dia a dia profissional.`,

  // Impressão ↔ Expressão
  // A persona externa vs. o potencial real — a mais visível para o outro
  impExpr: `Esta ponte é a mais visível para as pessoas ao seu redor: ela mede a distância entre a persona que você projeta e o potencial real que seu nome carrega. Quando próximos, como você parece e o que você é capaz de fazer coincidem. Quando distantes, outros frequentemente subestimam ou superestimam o que você tem a oferecer — uma defasagem que pode abrir ou fechar portas antes mesmo de qualquer palavra ser dita.`

};

export { BRIDGE_SCALE, BRIDGE_CONTEXT };
