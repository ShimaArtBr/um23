// cycles.pt.js — Textos interpretativos dos Ciclos de Vida
// Pasta de destino: /js/data/
//
// USO:
//   import { CYCLE_TEXTS, CYCLE_TRANSITION } from './data/cycles.pt.js';
//
// CYCLE_TEXTS[posicao][numero]
//   posicao: 0 = Ciclo 1 (formativo), 1 = Ciclo 2 (consolidação), 2 = Ciclo 3 (conclusão)
//   numero:  1–9, 11, 22, 33
//
// CYCLE_TRANSITION
//   → parágrafo único sobre a natureza das transições entre ciclos

/* ════════════════════════════════════════════════════════
   CICLO 1 — Fase Formativa (infância → jovem adulto)
   Foco: educação sentimental, recursos e feridas formativas,
   o que a fase "ensinou" a fazer ou a evitar.
   90–110 palavras por entrada.
════════════════════════════════════════════════════════ */

const CYCLE1 = {

  1: `Crescer sob a vibração do 1 é aprender cedo que a identidade precisa ser conquistada. Há uma pressão implícita — familiar ou social — para ser o primeiro, o mais capaz, o que resolve antes que os outros percebam o problema. A fase forma pessoas de iniciativa forte, acostumadas a confiar na própria avaliação antes de consultar o grupo. O recurso é a coragem; a ferida, a dificuldade de pedir ajuda. O que este ciclo ensinou: agir antes de ter certeza. O que ele exigiu evitar: a dependência como sinal de fraqueza.`,

  2: `O ciclo formativo no 2 cria uma sensibilidade precoce ao ambiente emocional ao redor. A criança aprende antes de saber nomear: que conflito tem custo, que silêncio carrega mensagem, que cooperação protege. Há frequentemente uma adaptação ao humor dos adultos ao redor — um radar afetivo que se calibra cedo, às vezes em detrimento do próprio. Pode haver timidez, tendência a ceder o próprio espaço para manter a harmonia. O recurso é a escuta fina; a ferida, a dificuldade de afirmar necessidades próprias. O que este ciclo ensinou: ler o campo antes de agir. O que ele exigiu aprender: que discordar não destrói o vínculo.`,

  3: `Sob o 3, a fase formativa é marcada pela expressão — e pela reação que ela provoca. A criança que fala muito, que cria, que faz graça, que preenche o ambiente com presença: ora celebrada, ora mandada calar. O recurso é a fluência comunicativa e a alegria como modo de estar. A ferida mais comum é a dispersão — energia espalhada em tantas direções que nenhuma aprofunda o suficiente para revelar o que está por baixo da aparente facilidade. O que este ciclo ensinou: encantar, conectar, começar. O que ele exigiu aprender: terminar o que se começa.`,

  4: `Crescer no ciclo 4 é crescer com estrutura — imposta ou, quando ausente, profundamente sentida como falta. Há frequentemente responsabilidade prematura: tarefas concretas, disciplina, expectativa de seriedade antes da hora. A brincadeira pode ter cedido espaço ao dever, o improviso ao método. O recurso é a capacidade de trabalho e a confiabilidade que se desenvolve cedo, quase sem esforço consciente; a ferida, a rigidez diante do imprevisto e a dificuldade de tolerar o que não pode ser controlado. O que este ciclo ensinou: construir, sustentar, cumprir o que foi prometido. O que ele exigiu aprender: que nem toda regra herdada precisa ser mantida.`,

  5: `O ciclo formativo no 5 é inquieto por natureza. A criança que se move, experimenta, não aceita explicação sem testar — às vezes frustrante para quem precisava de previsibilidade ao redor. Mas essa fase forma pessoas com apetite genuíno pelo mundo: curiosidade que não envelhece, adaptabilidade que vira recurso na vida adulta. A ferida é a superficialidade possível quando se quer provar tudo sem demorar o tempo necessário em nada — o risco de acumular experiências sem transformá-las em sabedoria. O que este ciclo ensinou: que o mundo é maior do que o que foi ensinado em casa.`,

  6: `Sob o 6, a fase formativa carrega forte consciência do cuidado — e das expectativas que vêm com ele. Há frequentemente um papel precoce no campo familiar: o conciliador, o que acolhe, o que percebe quando algo não está bem. A criança do 6 raramente é invisível — ela é sentida, porque sente. O recurso é a capacidade afetiva profunda e a habilidade de criar coesão onde havia tensão; a ferida, a dificuldade de receber sem ter que retribuir imediatamente. O que este ciclo ensinou: que amor e responsabilidade andam juntos. O que ele exigiu aprender: que cuidar de si não é abandono dos outros.`,

  7: `Crescer no ciclo 7 é crescer com uma parte sempre voltada para dentro. Há uma introspecção precoce — não necessariamente solidão, mas uma vida interior que nem sempre encontra interlocutor. A criança observa mais do que participa, processa antes de responder, tem perguntas que os adultos ao redor não sabem ou não querem responder. Esse mundo interno pode parecer estranho ou excessivo para os que estão ao redor. O recurso é a profundidade analítica e a independência de pensamento desenvolvida cedo. A ferida é o isolamento possível quando a interioridade não encontra espelho. O que este ciclo ensinou: confiar na própria percepção mesmo sem validação externa.`,

  8: `O ciclo formativo no 8 apresenta cedo as leis do poder e da matéria. Pode haver contato com escassez e abundância alternados, com figuras de autoridade fortes, ou com situações que exigiram maturidade material antes da hora. O recurso que se forma é a ambição estruturada e o senso de que recursos são algo a conquistar, não a esperar. A ferida mais comum é confundir valor pessoal com valor material. O que este ciclo ensinou: que o mundo tem regras concretas. O que ele exigiu aprender: que obediência e poder são coisas distintas.`,

  9: `Crescer sob o 9 é crescer com um senso difuso, mas persistente, de que a vida é maior do que o próprio quintal. Há frequentemente contato precoce com perda, com diferença, com perspectivas que transcendem o ambiente familiar. O recurso é a compaixão desenvolvida cedo, a abertura ao outro, a capacidade de sentir pelo que não é diretamente seu. A ferida pode ser a dificuldade de pertencer completamente a qualquer lugar. O que este ciclo ensinou: que tudo passa. O que ele exigiu aprender: que isso não impede o investimento pleno.`,

  11: `O ciclo formativo no 11 traz uma sensibilidade que pode ser intensa demais para a criança entender. Há percepções que chegam antes da linguagem para nomeá-las: estados emocionais captados do ambiente, pressentimentos, uma antena fina que capta o que os adultos preferem não dizer. O recurso é uma intuição que, quando cultivada, se torna guia confiável. A ferida mais comum é a ansiedade — o excesso de recepção sem estrutura de filtragem, um estado que pode parecer normal porque sempre esteve lá, desde antes de haver palavras para nomeá-lo. O que este ciclo formou: uma consciência precoce de que o invisível existe e age.`,

  22: `Crescer no ciclo 22 é habitar cedo a tensão entre o que é e o que poderia ser. Há frequentemente uma consciência precoce de escala — projetos, ideias e percepções que parecem grandes demais para o ambiente ao redor, o que pode criar uma sensação persistente de não pertencimento ao presente. O recurso que se forma é a capacidade de pensar sistematicamente e de traduzir visão em estrutura. A ferida é o peso possível de uma responsabilidade sentida antes de existir nome para ela. O que este ciclo formou: a intuição de que construção e transcendência não são opostos.`,

  33: `O ciclo formativo no 33 carrega uma carga afetiva incomum para uma criança: compaixão que transborda, necessidade de curar o que está quebrado ao redor, sensibilidade ao sofrimento alheio antes de ter linguagem para o próprio. Há frequentemente um peso que não pertence à criança, mas que ela carrega com naturalidade desconcertante. O recurso que se forma é o amor como força ativa, não como sentimento passivo, capaz de transformar o ambiente pelo simples fato de estar presente. A ferida é o esgotamento pelo excesso de entrega antes que os próprios limites tenham sido estabelecidos. O que este ciclo formou: a compreensão visceral de que cuidar é um ato de criação.`

};

/* ════════════════════════════════════════════════════════
   CICLO 2 — Fase de Consolidação (vida adulta produtiva)
   Foco: carreira, relacionamentos, construção de identidade,
   oportunidades e temas centrais dos anos mais densos.
   90–110 palavras por entrada.
════════════════════════════════════════════════════════ */

const CYCLE2 = {

  1: `O ciclo 2 no 1 é o período da afirmação. A vida adulta aqui pede liderança — não necessariamente de pessoas, mas de si mesmo: iniciativa, capacidade de agir sem esperar permissão, disposição para arriscar a própria visão. Carreiras que pedem autonomia florescem; relacionamentos testam a capacidade de dividir espaço sem perder identidade. A oportunidade central é a construção de um caminho genuinamente próprio. O risco é o isolamento pelo excesso de individualismo. O tema desta escola: aprender que liderar não exige ter razão — exige ter coragem de posição.`,

  2: `No ciclo de consolidação, o 2 traz o mundo das parcerias ao centro. Carreira e vida pessoal são moldadas pela qualidade das alianças — e pela capacidade de construir, manter e renegociar vínculos. Este é um período que pede paciência com o processo relacional, habilidade de navegar a diplomacia sem perder autenticidade. A oportunidade está na profundidade possível das conexões humanas. O risco é a dependência excessiva de validação alheia para tomar decisões — um padrão que pode se consolidar ao longo de anos sem ser reconhecido como tal. O tema desta escola: aprender que ceder e comprometer-se é força, não concessão.`,

  3: `O ciclo 2 no 3 é o período da expressão em escala. A vida adulta aqui favorece carreiras criativas, comunicativas, pedagógicas — qualquer campo onde a voz, a presença e a capacidade de inspirar sejam centrais. Relacionamentos são enriquecidos pela leveza e pela capacidade de criar alegria. O risco é a dispersão: tantas possibilidades abertas que nenhuma é levada até sua profundidade real. A oportunidade está em encontrar a forma de expressão que pode ser sustentada ao longo do tempo. O tema desta escola: disciplinar o talento sem matar a espontaneidade.`,

  4: `No ciclo de consolidação, o 4 traz trabalho como escola central. A vida adulta aqui pede construção metódica — fundações sólidas na carreira, nas finanças, nos vínculos de longo prazo. É o ciclo do artesão: o que se faz bem, feito com consistência, cria uma base que nenhuma turbulência derruba facilmente. O risco está na rigidez — resistência à mudança quando o método já não serve. A oportunidade está na profundidade possível para quem sustenta o esforço. O tema desta escola: aprender que a rotina bem construída é a forma mais durável de liberdade.`,

  5: `O ciclo 2 no 5 é o período da diversidade como escola. A vida adulta aqui raramente segue um único trilho: carreiras com múltiplas fases, relacionamentos que ensinam pelo contraste, mudanças que chegam quando a estabilidade parece conquistada. O recurso é a adaptabilidade — a capacidade de reinventar sem perder o fio. O risco está em fugir do compromisso antes que ele possa revelar sua profundidade. A oportunidade é a vida vivida em largo espectro, com experiências que poucos acumulam. O tema desta escola: aprender que liberdade e enraizamento não são opostos irreconciliáveis.`,

  6: `No ciclo de consolidação, o 6 coloca responsabilidade afetiva no centro da vida adulta. Família, comunidade, cuidado — esses são os campos de maior aprendizado e de maior potencial de realização. Carreiras de serviço, saúde, educação ou criação florescem sob essa vibração. O risco está no sacrifício de si em nome do outro ao longo de décadas: o cuidador que nunca cuida de si. A oportunidade é a construção de vínculos profundos e duradouros. O tema desta escola: aprender onde termina a responsabilidade e começa o controle disfarçado de amor.`,

  7: `O ciclo 2 no 7 é o período da especialização e do aprofundamento. A vida adulta aqui favorece trabalho que exige pensamento independente, análise, pesquisa, maestria em campo específico. Relacionamentos tendem à intensidade sobre a quantidade — poucos vínculos, cada um com profundidade real. O risco está no isolamento escolhido como proteção, na desconfiança crônica. A oportunidade está em tornar-se referência genuína em algo que importa. O tema desta escola: aprender que solidão e solitude são coisas fundamentalmente diferentes — e que apenas uma delas alimenta o crescimento, enquanto a outra o congela.`,

  8: `No ciclo de consolidação, o 8 traz as questões do poder, da autoridade e da abundância material para o centro. É o período em que carreira e impacto financeiro são escolas ativas: como usar poder sem corrompê-lo, como construir prosperidade com integridade. Liderança de organizações, empreendimentos e recursos são terrenos férteis. O risco está em definir o próprio valor pelos resultados materiais — e perder o prumo quando eles oscilam. A oportunidade é a influência real. O tema desta escola: aprender que poder verdadeiro não intimida — inspira.`,

  9: `O ciclo 2 no 9 é o período do serviço em grande escala. A vida adulta aqui orienta naturalmente para o que transcende o interesse pessoal — causas, humanidades, formas de cuidado que alcançam além do círculo imediato. Relacionamentos têm profundidade filosófica; carreira tende ao campo onde o impacto é sentido por muitos. O risco é o martírio — o padrão de sacrifício que não se admite como escolha. A oportunidade é a vida com propósito claro. O tema desta escola: aprender que entregar-se plenamente é compatível com receber plenamente.`,

  11: `No ciclo de consolidação, o 11 traz a intuição ao primeiro plano da vida adulta. É um período que convida à liderança inspiracional — não pela força ou pela hierarquia, mas pela capacidade de ver o que outros ainda não enxergaram e de comunicar essa visão. Relacionamentos de alto nível emocional; carreira em campos onde sensibilidade é ativo. O risco está na idealização — de pessoas, de projetos, de si mesmo. A oportunidade é a capacidade de catalisar transformação genuína. O tema desta escola: aprender a viver em alta frequência sem se desligar do chão.`,

  22: `O ciclo 2 no 22 é o período da construção em escala. A vida adulta aqui carrega a possibilidade de criar algo que dura — instituições, sistemas, estruturas que existirão além da vida de quem as ergueu. Carreira tende ao campo onde visão e execução precisam coexistir. Relacionamentos são testados pelo peso dessa missão. O risco está no perfeccionismo que paralisa ou na grandiosidade que isola. A oportunidade é a obra de vida. O tema desta escola: aprender que o maior dos projetos começa pela próxima ação concreta, não pela visão completa.`,

  33: `No ciclo de consolidação, o 33 coloca o amor incondicional — não como sentimento, mas como prática — no centro da vida adulta. É o período de ensino, de cura, de presença criativa que transforma o que toca. Carreiras nas artes, na pedagogia, nas práticas de cuidado atingem sua maturidade plena. Relacionamentos são intensos e transformadores. O risco é o esgotamento sagrado — o padrão de dar tudo, sem reserva. A oportunidade é a profundidade de impacto possível para quem aprende a sustentar o amor sem se perder nele.`

};

/* ════════════════════════════════════════════════════════
   CICLO 3 — Fase de Conclusão (maturidade → legado)
   Foco: síntese, sabedoria, desapego, qualidade do envelhecimento,
   o que se entrega ao mundo e a si mesmo na fase final.
   90–110 palavras por entrada.
════════════════════════════════════════════════════════ */

const CYCLE3 = {

  1: `O ciclo de conclusão no 1 traz uma qualidade inesperada para a maturidade: a renovação. Em vez de recuar, este período convida a inaugurar — projetos que só fazem sentido agora, que dependem justamente do que foi acumulado ao longo de toda a jornada. O legado tem forma de presença ativa, não de memória passiva. O desapego que o ciclo pede não é do mundo, mas da necessidade de aprovação. A sabedoria que se destila: agir a partir de si mesmo, sem plateia, sem prova a dar — apenas o prazer limpo da iniciativa.`,

  2: `Na fase de conclusão, o 2 oferece ao envelhecimento uma qualidade de presença relacional rara. O legado não é construído em obras, mas em vínculos: o que se deixa nas pessoas que foram tocadas pela escuta, pela sensibilidade, pela capacidade de criar paz onde havia tensão. O desapego que este ciclo pede é o dos resultados relacionais — fazer bem sem exigir que o outro perceba. A sabedoria que se destila é a mais silenciosa: que a cura mais profunda raramente anuncia a si mesma, e que a presença atenta é, ela mesma, uma forma de amor.`,

  3: `O ciclo de conclusão no 3 dá à maturidade uma leveza que surpreende. A expressão continua — não como necessidade de atenção, mas como alegria pura de criar e de compartilhar. O legado tem a forma da arte, do ensino pela presença, do humor que revela verdades que a seriedade não alcança. O desapego que o ciclo pede é o do ego criativo — a obra que se solta do criador para ser do mundo. A sabedoria que se destila: que a beleza não é ornamento, é necessidade, e que mantê-la viva é serviço genuíno à vida.`,

  4: `Na fase de conclusão, o 4 oferece uma fundação para o envelhecimento: a paz de quem construiu com honestidade e pode repousar sobre o que fez. O legado tem a forma da estrutura — o que foi erguido com as próprias mãos e continua de pé. O desapego que este ciclo pede é o controle: deixar que o que foi construído agora pertença a quem vem depois. A sabedoria que se destila é a do artesão satisfeito — não porque foi perfeito, mas porque foi real. Há dignidade específica no trabalho terminado.`,

  5: `O ciclo de conclusão no 5 recusa o envelhecimento como contração. Este é um período de liberdade conquistada — sem a pressão de provar, sem a urgência de acumular, com apenas a clareza do que realmente importa. O legado é a coragem que inspira: ter vivido em largo espectro e ter regressado com sabedoria sobre o que dura. O desapego que o ciclo pede é o da identidade acumulada — quem você foi, não precisa ser quem você é. A sabedoria que se destila: que a leveza do ser é o único bem que não pode ser perdido.`,

  6: `Na fase de conclusão, o 6 aprofunda a qualidade do amor que foi praticado ao longo de toda a vida. É o período em que o cuidado se torna sabedoria — não mais compulsão de resolver, mas presença que sustenta sem controlar. O legado tem a forma do amor que amadureceu: menos intenso na superfície, mais profundo na raiz. O desapego que este ciclo pede é das expectativas relacionais — o que se deu por amor não exige retorno. A sabedoria que se destila: que o amor incondicional é o único que não envelhece, porque nunca foi sobre o objeto.`,

  7: `O ciclo de conclusão no 7 é o período em que a vida interior encontra sua expressão mais limpa. A profundidade acumulada ao longo das décadas anteriores não precisa mais provar sua utilidade — pode simplesmente ser. O legado tem a forma da sabedoria transmitida: não como doutrina, mas como presença que inspira perguntas. O desapego que o ciclo pede é o da necessidade de ser compreendido. A sabedoria que se destila é a mais difícil e a mais preciosa: que o silêncio não é vazio, e que a paz de quem conhece a si mesmo não precisa de plateia.`,

  8: `Na fase de conclusão, o 8 convida à transmissão do poder — não à abdicação, mas à passagem consciente. O legado é construído em como se usa a influência acumulada: o que se financia, o que se apoia, para onde se direciona o que foi conquistado. O desapego que este ciclo pede é do controle sobre os resultados — investir sem necessidade de dominar o desfecho. A sabedoria que se destila: que o poder usado para criar condições para os outros é a forma mais duradoura de autoridade, e que a generosidade estratégica é inteligência em sua mais alta expressão.`,

  9: `O ciclo de conclusão no 9 é o período em que a vida encontra sua síntese mais completa. O que foi aprendido ao longo de décadas se integra numa compreensão do humano que vai além do julgamento. O legado tem a forma da compaixão madura — não sentimental, mas lúcida. O desapego que este ciclo pede é profundo: a identidade, as conquistas, as feridas — tudo pode ser depositado. A sabedoria que se destila é a do ancião que não precisa mais provar nem proteger: o que é verdadeiro em si permanece, independentemente de qualquer narrativa.`,

  11: `Na fase de conclusão, o 11 destila uma sensibilidade que agora tem estrutura para sustentá-la. A intuição, antes às vezes avassaladora, torna-se guia confiável. O legado tem a forma da visão compartilhada — não imposta, mas oferecida para quem tem olhos para ver. O desapego que este ciclo pede é o do reconhecimento: a mensagem é mais importante do que o mensageiro. A sabedoria que se destila é a mais elevada desse número: que a luz não cria sombra quando não precisa ser a mais brilhante na sala — apenas a mais honesta.`,

  22: `O ciclo de conclusão no 22 é o período em que a obra de vida revela sua escala real. O que foi construído ao longo de décadas começa a mostrar seus contornos definitivos — e o desapego que este ciclo pede é o mais nobre: deixar que a construção pertença ao mundo, não ao construtor. O legado tem a forma das estruturas que continuam funcionando depois que quem as criou partiu. A sabedoria que se destila: que as maiores obras são aquelas que tornam seu criador desnecessário. Há grandeza específica em construir para além de si.`,

  33: `Na fase de conclusão, o 33 oferece ao envelhecimento uma qualidade de presença que poucas vidas alcançam: o amor que não tem mais nada a perder, e por isso pode ser oferecido sem reserva. O legado é a transformação silenciosa que ocorre em cada pessoa que se aproxima. O desapego que este ciclo pede é do eu que cuida — a dissolução da distinção entre quem ama e quem é amado. A sabedoria que se destila é a mais rara: que o amor em sua forma mais pura não é uma emoção, é um estado do ser, disponível independentemente das circunstâncias.`

};

/* ════════════════════════════════════════════════════════
   ESTRUTURA INDEXADA
   CYCLE_TEXTS[0] = Ciclo 1, [1] = Ciclo 2, [2] = Ciclo 3
════════════════════════════════════════════════════════ */

const CYCLE_TEXTS = [CYCLE1, CYCLE2, CYCLE3];

/* ════════════════════════════════════════════════════════
   CYCLE_TRANSITION
   Para usuários cujo ciclo muda nos próximos 3 anos.
   ~80 palavras.
════════════════════════════════════════════════════════ */

const CYCLE_TRANSITION = `As transições entre ciclos raramente têm uma data de corte limpa. Por dois ou três anos antes da virada, as duas energias coexistem: o ciclo que parte começa a soltar, o que chega começa a pulsar. Há frequentemente uma qualidade de luto pelo que termina — padrões familiares, identidades construídas, formas de operar que eram confortáveis. Esse período pede consciência, não pressa. O que está sendo encerrado merece despedida. O que está chegando ainda não precisa ser totalmente compreendido para ser recebido.`;

export { CYCLE_TEXTS, CYCLE_TRANSITION };
