// karmicLessons_pt.js — Textos das Lições Kármicas (Português)
// Pasta de destino: /js/data/
//
// USO:
//   import { KARMIC_LESSON_TEXTS, KARMIC_MULTIPLE_NOTE } from './data/karmicLessons_pt.js';
//
// KARMIC_LESSON_TEXTS[n]  → texto da lição para o número ausente n (1–9)
// KARMIC_MULTIPLE_NOTE    → nota exibida quando count >= 3
//
// Cada entrada: 80–100 palavras. Tom de convite — nunca de deficiência.

/* ════════════════════════════════════════════════
   TEXTOS POR NÚMERO AUSENTE (1–9)
════════════════════════════════════════════════ */

const KARMIC_LESSON_TEXTS = {

  1: `O aprendizado desta vida inclui o desenvolvimento da iniciativa e da voz própria. Sem o 1 no nome, a vibração da autonomia aguarda ser cultivada — e isso tende a aparecer como uma recorrência de situações em que você se descobre aguardando uma sinalização externa antes de agir: alguém que dê permissão, valide a ideia ou tome a dianteira. Campbell observa que a alma que elegeu aprender o 1 frequentemente tem mais capacidade de liderança do que acredita ter. O convite é concreto: tome uma decisão pequena por dia sem consultar ninguém. A cada ato de iniciativa genuína, a vibração se instala mais profundamente — e o que parecia timidez revela-se como atenção esperando uma direção própria.`,

  2: `O aprendizado desta vida inclui o desenvolvimento da escuta profunda e da colaboração genuína. Sem o 2 no nome, a vibração da receptividade aguarda ser cultivada — e seu sinal mais comum é a tendência de responder antes de absorver completamente o que o outro disse, ou de encontrar a parceria mais desgastante do que enriquecedora. Balliett descreve a lição do 2 como "aprender o que existe no espaço entre duas pessoas". O convite é concreto: em conversas importantes, espere dois segundos completos após a outra pessoa terminar antes de responder. Nos relacionamentos, pergunte antes de propor. Quando o 2 é integrado, desenvolve-se uma qualidade de presença que transforma qualquer colaboração — e que abre portas que o talento individual nunca abriria.`,

  3: `O aprendizado desta vida inclui o desenvolvimento da expressão criativa e da leveza comunicativa. Sem o 3 no nome, a vibração da expressão aguarda ser cultivada — e isso tende a aparecer como uma distância entre o que você sente por dentro e o que consegue articular para fora: ideias que ficam sem forma, humor que não chega, criatividade bloqueada pela autocrítica antes de qualquer produção. Campbell descreve a lição do 3 como "aprender que a expressão imperfeita tem mais valor do que o silêncio perfeito". O convite é concreto: crie algo — escreva, desenhe, cante, cozinhe — sem a intenção de mostrar a ninguém. Retire o público interno antes de cultivar o externo. Quando o 3 é integrado, emerge uma voz autêntica que não precisou de ensaio para ser reconhecida como genuína.`,

  4: `O aprendizado desta vida inclui o desenvolvimento da disciplina sustentada e da capacidade de transformar intenção em forma concreta. Sem o 4 no nome, a vibração da estrutura aguarda ser cultivada — e seu padrão mais visível é a distância entre o início e a conclusão: projetos que ganham forma mas não terminam, rotinas que se instalam por semanas e depois se desmancham, ideias cujo brilho se dissipa antes de se tornarem realidade tangível. Kozminsky chama a lição do 4 de "a escola do acabamento". O convite é concreto: comprometa-se com uma única prática diária por trinta dias — simples, sem crescer. A repetição é o exercício, não o resultado. Quando o 4 é integrado, a pessoa descobre que a paciência com o processo não a limita: liberta-a para construir o que antes só imaginava.`,

  5: `O aprendizado desta vida inclui o desenvolvimento da adaptabilidade e da abertura à experiência não planejada. Sem o 5 no nome, a vibração da liberdade aguarda ser cultivada — e isso frequentemente se manifesta como um apego a rotinas que já não servem, dificuldade em mudar de curso mesmo quando o caminho original perdeu sentido, ou uma estreiteza de perspectiva que se instala sem ser percebida. Campbell observa que a alma que elegeu aprender o 5 tende a "descobrir o mundo mais tarde — e com mais profundidade do que quem o explorou cedo". O convite é concreto: uma vez por semana, faça algo de um jeito diferente do habitual — uma rota, uma escolha alimentar, uma conversa com alguém de um campo completamente distinto. Quando o 5 é integrado, a flexibilidade desenvolvida intencionalmente torna-se o recurso mais valioso que o nome não trouxe naturalmente.`,

  6: `O aprendizado desta vida inclui o desenvolvimento do comprometimento afetivo e da responsabilidade que transcende o interesse imediato. Sem o 6 no nome, a vibração do cuidado aguarda ser cultivada — e isso tende a aparecer como dificuldade em sustentar vínculos de longa duração, uma relação difícil com a beleza do cotidiano, ou uma resistência a assumir responsabilidades que envolvam o bem-estar de outros. Balliett descreve a lição do 6 como "aprender que pertencer cria, não aprisiona". O convite é concreto: eleja um vínculo — uma relação, uma comunidade, um projeto de cuidado — e apareça de forma consistente por seis meses, mesmo quando a novidade passar. Quando o 6 é integrado, quem aprendeu a vibração desenvolve uma confiabilidade afetiva que se torna âncora para todos ao redor.`,

  7: `O aprendizado desta vida inclui o desenvolvimento da introspecção e da disposição de habitar a profundidade — das ideias, das experiências e de si mesmo. Sem o 7 no nome, a vibração da reflexão aguarda ser cultivada — e seu sinal mais comum é a tendência de permanecer na superfície do que é mais importante: análises que param antes da pergunta mais difícil, tempo a sós percebido como perda em vez de reabastecimento, conhecimentos amplos mas raramente aprofundados. Campbell chama a lição do 7 de "aprender a desacelerar diante do que importa". O convite é concreto: escolha um único tema e o estude com profundidade real por três meses — não em largura, em profundidade. Quando o 7 é integrado, desenvolve-se uma qualidade de insight que não pode ser imitada, porque vem de um percurso de aprofundamento que foi deliberadamente escolhido.`,

  8: `O aprendizado desta vida inclui o desenvolvimento de uma relação madura com poder, recursos materiais e autoridade executiva. Sem o 8 no nome, a vibração da manifestação material aguarda ser cultivada — e isso tende a aparecer como um padrão recorrente com finanças e posições de influência: ora evitando ambos, ora entrando em relações de poder sem estrutura suficiente para sustentá-las. Kozminsky observa que a alma que elegeu aprender o 8 frequentemente tem capacidade executiva não desenvolvida — e que a recusa do poder não a protege de suas consequências. O convite é concreto: assuma uma área de responsabilidade financeira ou organizacional que você habitualmente delega. Aprenda as regras do campo material como se fossem uma língua que vale a pena dominar. Quando o 8 é integrado, a pessoa descobre que administrar recursos com integridade é tão criativo quanto qualquer outra forma de expressão.`,

  9: `O aprendizado desta vida inclui o desenvolvimento da compaixão em escala e da capacidade de encerrar ciclos com graça — sem precisar guardar o que já cumpriu seu papel. Sem o 9 no nome, a vibração da completude aguarda ser cultivada — e seu padrão mais reconhecível é a dificuldade com finais: relacionamentos que se prolongam após o fim natural, ressentimentos guardados por anos, uma visão de mundo que permanece estreita demais para incluir quem é muito diferente. Campbell descreve a lição do 9 como "aprender que soltar é o ato mais criativo disponível ao ser humano". O convite é concreto: identifique algo que você sabe que já terminou — e pratique a despedida deliberada, em privado, com intenção. Quando o 9 é integrado, desenvolve-se uma sabedoria sobre o ciclo humano que transforma cada encerramento não em perda, mas em fertilidade para o que vem a seguir.`

};

/* ════════════════════════════════════════════════
   NOTA DE MÚLTIPLAS LIÇÕES (count >= 3)
   Exibir acima da lista de badges quando o nome tem 3 ou mais ausências.
════════════════════════════════════════════════ */

const KARMIC_MULTIPLE_NOTE = `Três ou mais lições kármicas indicam um nome especializado: poucas vibrações muito presentes, muitas aguardando desenvolvimento. Isso não torna o percurso mais difícil — torna-o mais amplo. Os talentos concentrados nas vibrações presentes são genuinamente fortes. O currículo desta vida simplesmente abrange mais territórios distintos da experiência humana, e o aprendizado tende a acontecer em etapas — cada fase da vida abrindo um novo conjunto de lições para trabalhar.`;

export { KARMIC_LESSON_TEXTS, KARMIC_MULTIPLE_NOTE };
