// pinnacles_pt.js — Textos interpretativos dos Pináculos e Desafios
// Pasta de destino: /js/data/
//
// USO:
//   import { PINNACLE_TEXTS, CHALLENGE_TEXTS } from './data/pinnacles_pt.js';
//
// PINNACLE_TEXTS[posicao][numero]
//   posicao: 'p1' | 'p2' | 'p3' | 'p4'
//   numero:  1–9, 11, 22
//
// CHALLENGE_TEXTS[numero]
//   numero: 0–8
//   Desafio 0 tem tratamento especial (texto mais extenso e natureza diferente)

/* ════════════════════════════════════════════════════════
   PINÁCULO 1 — Estabelecimento, primeiras provas, identidade emergente
   O que o ambiente oferece na primeira grande fase adulta.
   Foco: oportunidades externas, não traços de personalidade.
   80–100 palavras por entrada.
════════════════════════════════════════════════════════ */

const PINNACLE_P1 = {

  1: `O primeiro grande campo de oportunidade que a vida oferece é o da afirmação pessoal. Esse pináculo convida ao desenvolvimento de voz própria — a capacidade de iniciar, de não esperar autorização, de aprender pela ação independente. O ambiente tende a apresentar situações que exigem que você tome posição antes de ter certeza. A oportunidade não está na ausência de dúvida, mas na disposição de agir com ela. Quem atravessa esse pináculo construindo identidade sólida — não perfeita — entra nas próximas fases com uma fundação que os outros apenas encontram mais tarde.`,

  2: `O primeiro grande campo de oportunidade que a vida oferece é o da colaboração profunda. Esse pináculo abre portas através de parcerias — vínculos que exigem presença, escuta e disposição de compartilhar o protagonismo. O ambiente tende a oferecer relações que se tornam definidoras: alianças que formam caráter, mentorias que revelam direção, encontros que moldam a pergunta central da sua jornada. A oportunidade não está em ganhar terreno sozinho, mas em descobrir o que você se torna quando se permite ser genuinamente afetado pelo outro.`,

  3: `O primeiro grande campo de oportunidade que a vida oferece é o da expressão criativa. Esse pináculo abre espaço para que talentos comunicativos — a fala, a escrita, a presença, a arte — encontrem sua primeira grande plataforma. O ambiente tende a oferecer audiências e conexões que ampliam o alcance natural das suas ideias. A oportunidade está em aprender que expressão não precisa ser perfeita para ser poderosa: o que você tem a dizer nessa fase importa precisamente por ser inaugural — antes que a autoconsciência limite o impulso criativo.`,

  4: `O primeiro grande campo de oportunidade que a vida oferece é o da construção fundamentada. Esse pináculo abre espaço para o desenvolvimento de disciplina, competência técnica e capacidade de estruturar algo duradouro. O ambiente tende a oferecer trabalho concreto — contextos que recompensam quem é confiável, metódico e capaz de sustentar esforço no tempo. A oportunidade está em aprender que a paciência com o processo não é limitação: é a habilidade que distingue projetos que sobrevivem à realidade dos que existem apenas como intenção.`,

  5: `O primeiro grande campo de oportunidade que a vida oferece é o da exploração. Esse pináculo abre múltiplas frentes: experiências diversas, ambientes variados, contatos com perspectivas que expandem o quadro de referência. O ambiente tende a oferecer mudanças — algumas escolhidas, outras não — que revelam quem você é quando o solo não é estável. A oportunidade está em aprender a se mover sem se perder: a liberdade que esse pináculo oferece não é ausência de direção, mas descoberta de que você pode navegar o imprevisível sem precisar fixar tudo antes de começar.`,

  6: `O primeiro grande campo de oportunidade que a vida oferece é o do comprometimento e do serviço. Esse pináculo abre espaço para relações que exigem responsabilidade genuína — família, comunidade, trabalho com propósito de cuidado. O ambiente tende a colocar nas suas mãos responsabilidades que formam caráter: situações em que você aprende o que significa sustentar algo além de si mesmo. A oportunidade não está em cuidar de tudo perfeitamente, mas em descobrir que o compromisso sincero com o bem de outros é uma das fontes mais sólidas de identidade.`,

  7: `O primeiro grande campo de oportunidade que a vida oferece é o do aprofundamento interior. Esse pináculo abre acesso a um tipo de desenvolvimento que acontece abaixo da superfície: estudo, especialização, o cultivo de uma perspectiva particular sobre como o mundo funciona. O ambiente tende a oferecer solidão produtiva — espaços de reflexão ou aprendizado que outros podem ver como isolamento, mas que constroem uma profundidade genuína. A oportunidade está em aprender que o saber que você acumula aqui se tornará, mais tarde, uma voz singular que nenhum volume de sociabilidade poderia ter produzido.`,

  8: `O primeiro grande campo de oportunidade que a vida oferece é o do poder e da manifestação material. Esse pináculo abre portas para situações que exigem execução, liderança e capacidade de navegar estruturas de poder com maturidade precoce. O ambiente tende a oferecer desafios de escala: situações que testam se você consegue construir sem esmagar, ambicionar sem perder o senso de propósito. A oportunidade está em aprender que autoridade genuína não vem de dominação, mas da confiança que se constrói quando competência e integridade operam juntas desde o início.`,

  9: `O primeiro grande campo de oportunidade que a vida oferece é o da ampliação do horizonte pessoal. Esse pináculo abre espaço para contato com mundos mais amplos — causas, culturas e perspectivas que transcendem o ambiente de origem. O ambiente tende a oferecer situações que exigem generosidade antes que você tenha clareza total do seu caminho. A oportunidade está em aprender que o serviço ao todo não exige que você primeiro resolva tudo sobre si mesmo: muitas vezes, é a entrega ao que é maior que clarifica quem você é — e não o contrário.`,

  11: `O primeiro grande campo de oportunidade que a vida oferece é o da visão e da inspiração. Esse pináculo de número mestre abre espaço para uma percepção do que é possível antes de qualquer prova concreta. O ambiente tende a oferecer situações que pedem fé — a capacidade de agir antes da evidência estar completa. A oportunidade está em aprender a traduzir o que você intuitivamente percebe em formas que outros possam seguir: a tensão entre a visão que chega e a realidade presente é a matéria-prima fundamental desse pináculo inaugural.`,

  22: `O primeiro grande campo de oportunidade que a vida oferece é o da construção em escala. Esse pináculo de número mestre abre espaço para iniciativas que visam impacto real sobre estruturas coletivas. O ambiente tende a oferecer responsabilidades que pareceriam grandes demais para quem está apenas começando — e que revelam, precisamente por isso, uma capacidade construtiva fora do comum. A oportunidade está em aprender que obras de escala se constroem com paciência e pragmatismo: nesse pináculo inicial, a disciplina da execução é o que transforma a grandeza potencial em fundação real.`

};

/* ════════════════════════════════════════════════════════
   PINÁCULO 2 — Consolidação, aprofundamento, construção de sistemas
   O ambiente convida a parcerias maduras, sistemas e profundidade.
   80–100 palavras por entrada.
════════════════════════════════════════════════════════ */

const PINNACLE_P2 = {

  1: `O segundo pináculo oferece oportunidade de consolidar o que foi iniciado — com mais clareza de direção. O ambiente convida ao aprimoramento da autonomia sem o risco da novidade total: você já sabe o que é capaz, e esse pináculo oferece campo para afinar a liderança e construir algo que reflita mais completamente quem você se tornou. A oportunidade não está em recomeçar, mas em aprofundar: a clareza conquistada na primeira fase é a matéria-prima que esse pináculo convida a transformar em competência sustentada e influência genuína.`,

  2: `O segundo pináculo oferece oportunidade de aprofundar vínculos e sistemas relacionais. O ambiente convida a parcerias mais maduras — relações que passam de encontros a comprometimentos de longo prazo. A oportunidade está na capacidade de construir cooperação sustentada: entender o que cada pessoa traz, o que você traz, e o que só existe no espaço entre os dois. Quem atravessa esse pináculo com presença genuína descobre que a inteligência relacional — a habilidade de fazer pessoas e projetos funcionarem juntos — é uma das formas mais concretas de poder construtivo.`,

  3: `O segundo pináculo oferece oportunidade de ampliar o alcance da expressão criativa. O ambiente convida a plataformas maiores e conexões que transformam talentos em projetos com vida própria. A oportunidade está em aprender que criatividade sustentada não é apenas inspiração: é a combinação de consistência, desenvolvimento de voz e disposição de mostrar trabalho imperfeito. Quem atravessa esse pináculo com disciplina criativa não apenas produz mais — descobre que a profundidade que busca aparece exatamente quando a superfície do que é feito se torna habitual e o trabalho real pode começar.`,

  4: `O segundo pináculo oferece oportunidade de consolidar sistemas, estruturas e fundações duráveis. O ambiente convida ao trabalho que persiste além do entusiasmo inicial: metodologias, bases técnicas e processos que sustentam projetos ao longo do tempo. A oportunidade está em aprender que construir em profundidade é um ato diferente de construir rápido — e que a confiabilidade que você desenvolve nesse pináculo se torna, para outros, uma das formas mais raras de recurso real. O que é construído com paciência aqui tende a sustentar os picos e expansões das fases seguintes.`,

  5: `O segundo pináculo oferece oportunidade de consolidar a relação com a mudança. O ambiente convida ao movimento com mais consciência: transições que agora têm o peso da escolha, não apenas da novidade. A oportunidade está em aprender a diferença entre movimento que expande e movimento que evita: a liberdade que esse pináculo oferece é mais completa quando inclui a capacidade de permanecer onde o crescimento exige presença. Quem descobre nessa fase que adaptabilidade e comprometimento não são opostos desenvolve uma fluência raramente encontrada — e que abre portas que nenhuma mobilidade impulsiva poderia.`,

  6: `O segundo pináculo oferece oportunidade de aprofundar comprometimentos e sistemas de cuidado. O ambiente convida a responsabilidades que pedem consistência — família, carreira com vocação de serviço, liderança comunitária. A oportunidade está em aprender que o cuidado sustentado produz algo que nenhuma intensidade de curto prazo consegue: confiança construída por presença repetida. Quem atravessa esse pináculo com atenção ao equilíbrio entre o que dá e o que recebe desenvolve formas de comprometimento que enriquecem a si mesmo ao mesmo tempo em que sustentam aqueles ao seu redor.`,

  7: `O segundo pináculo oferece oportunidade de aprofundar especialização e perspectiva interior. O ambiente convida ao desenvolvimento de domínio — áreas de conhecimento que ganham nuance e coerência ao longo de anos. A oportunidade está em aprender a habitar o próprio saber com mais generosidade: o que foi desenvolvido em silêncio durante o primeiro pináculo pode, agora, começar a se traduzir em contribuição para outros. A profundidade não precisa permanecer interior para manter sua integridade; compartilhá-la com discernimento é a próxima dimensão que esse pináculo oferece.`,

  8: `O segundo pináculo oferece oportunidade de consolidar posição, influência e capacidade de impacto. O ambiente convida a papéis de maior responsabilidade — situações em que poder executivo e inteligência estratégica encontram campo real de aplicação. A oportunidade está em aprender a diferença entre construir para acumular e construir para criar valor duradouro. Quem atravessa esse pináculo com integridade desenvolve uma autoridade que as pessoas seguem não por obrigação, mas por confiança — e essa qualidade de influência é muito mais rara e sólida do que qualquer poder formal.`,

  9: `O segundo pináculo oferece oportunidade de aprofundar o senso de propósito e de contribuição universal. O ambiente convida a causas e comprometimentos que transcendem o interesse pessoal imediato. A oportunidade está em aprender que o serviço ao todo não exige apagamento de si: quem descobre nessa fase que pode ser generoso e ainda assim preservar o que é essencial desenvolve uma forma de doação que não esgota — e que atrai colaborações que a ambição pessoal nunca atrairia. A generosidade como estratégia de vida, e não como sacrifício, começa a se revelar aqui.`,

  11: `O segundo pináculo de número mestre oferece oportunidade de aprofundar o papel de inspiração e mediação. O ambiente convida a posições de visão — situações em que perceber o que ainda não está visível e comunicar esse potencial se torna uma função real e necessária. A oportunidade está em aprender a sustentar a tensão entre o ideal e o praticável: o 11 nessa posição oferece acesso a insights capazes de mudar contextos inteiros, mas exige ancoragem suficiente para que essa visão não se dissolva antes de produzir impacto concreto e mensurável.`,

  22: `O segundo pináculo de número mestre oferece oportunidade de construção em escala real. O ambiente convida a projetos de impacto coletivo — iniciativas que exigem combinação de visão ampla e execução pragmática. A oportunidade está em aprender que obras verdadeiramente grandes raramente são atos solo: a habilidade de mobilizar pessoas, estruturas e recursos em direção a algo maior do que qualquer indivíduo é o convite central desse pináculo. Quem aprende aqui a construir com e através dos outros desenvolve uma capacidade produtiva que nenhuma competência individual poderia sozinha gerar.`

};

/* ════════════════════════════════════════════════════════
   PINÁCULO 3 — Expressão máxima, contribuição, visibilidade
   O pico da jornada — o que décadas de desenvolvimento tornaram possível.
   80–100 palavras por entrada.
════════════════════════════════════════════════════════ */

const PINNACLE_P3 = {

  1: `O terceiro pináculo oferece a oportunidade da expressão máxima da liderança. Esse é o período em que a voz, a direção e a presença estão em seu ponto mais nítido — resultado de décadas de desenvolvimento, não de impulso. O ambiente convida ao protagonismo pleno: exercer liderança que vem da autoridade construída, não da posição ocupada. Quem atravessa esse pináculo com clareza de propósito descobre que influenciar o ambiente ao seu redor deixa de ser esforço e passa a ser consequência natural de quem se tornou ao longo de toda a jornada anterior.`,

  2: `O terceiro pináculo oferece a oportunidade da contribuição através das relações em sua forma mais madura. O ambiente convida à construção de pontes — situações em que a capacidade de mediar, unir e criar campo de colaboração encontra seu alcance máximo. Esse é o período em que a inteligência relacional se torna recurso para o coletivo, não apenas para o círculo próximo. A oportunidade está em descobrir que conexão em escala não é superficialidade: é a habilidade rara de fazer com que pessoas e projetos muito diferentes encontrem linguagem comum.`,

  3: `O terceiro pináculo oferece a oportunidade da expressão em sua plenitude. O ambiente convida à visibilidade — plataformas e audiências que amplificam o que foi desenvolvido ao longo de décadas. Esse é o período em que criatividade, comunicação e presença convergem para a contribuição mais completa. A oportunidade está em aprender que visibilidade é responsabilidade, não apenas recompensa: o que você tem a dizer nessa fase já passou pela formação e pelo aprofundamento — e tem substância suficiente para realmente fazer diferença duradoura na vida de quem alcança.`,

  4: `O terceiro pináculo oferece a oportunidade da contribuição através da construção durável. O ambiente convida a obras que vão além do pessoal: sistemas, organizações e infraestruturas que continuam funcionando quando você não está presente. Esse é o período em que disciplina e competência encontram escala. A oportunidade está em aprender que a maior obra é aquela que permite que outros construam a partir dela: o que você edifica nessa fase pode se tornar fundação para outros se você resistir à tentação de controlar tudo e aprender a construir com outros.`,

  5: `O terceiro pináculo oferece a oportunidade da contribuição através da mudança e da versatilidade. O ambiente convida a papéis de mediação entre mundos diferentes: o explorador que se torna guia, o adaptável que ensina outros a navegarem o imprevisível. Esse é o período em que a fluência com a mudança se torna recurso coletivo. A oportunidade está em aprender que a liberdade cultivada ao longo da vida não precisa ser solitária: compartilhá-la — através de histórias, projetos e presença — é a forma mais completa de expressão que esse pináculo tem a oferecer.`,

  6: `O terceiro pináculo oferece a oportunidade da contribuição através do cuidado em escala. O ambiente convida a papéis de liderança comunitária, criação cultural ou serviço que vai além do círculo próximo. Esse é o período em que o cuidado desenvolvido ao longo da vida encontra sua expressão mais madura. A oportunidade está em aprender a cuidar sem controlar — a criar condições para que o bem-estar seja possível em escala mais ampla, confiando que o que você planta pode florescer de maneiras que não estavam no plano original, mas que honram completamente a intenção.`,

  7: `O terceiro pináculo oferece a oportunidade da contribuição através do conhecimento profundo. O ambiente convida à transmissão — ensinar, escrever, orientar ou criar obras que destilam décadas de aprofundamento em formas que outros possam acessar. Esse é o período em que o saber acumulado encontra seu canal de maior impacto. A oportunidade está em aprender que profundidade compartilhada tem mais valor do que profundidade guardada: o que você sabe nessa fase é suficientemente sólido para suportar o escrutínio — e suficientemente raro para realmente fazer diferença.`,

  8: `O terceiro pináculo oferece a oportunidade da contribuição através do poder construtivo em seu alcance máximo. O ambiente convida a papéis de liderança e influência sobre estruturas que impactam muitas vidas. Esse é o período em que inteligência executiva encontra propósito maduro. A oportunidade está em aprender que o poder mais duradouro não é o que se acumula, mas o que se investe em algo maior: quem exerce influência nessa fase com integridade e visão constrói legados que sobrevivem muito além do período em que o poder estava em suas mãos.`,

  9: `O terceiro pináculo oferece a oportunidade da contribuição em escala universal. O ambiente convida a obras, causas e presença que tocam vidas além de qualquer círculo restrito. Esse é o período em que compaixão e propósito encontram sua expressão mais ampla. A oportunidade está em aprender que generosidade em escala não exige sacrifício total de si: quem descobre nessa fase que pode dar muito sem perder o que é essencial desenvolve uma forma de presença que não apenas serve — inspira outros a encontrarem o mesmo caminho por conta própria.`,

  11: `O terceiro pináculo de número mestre oferece a oportunidade da visão em seu alcance máximo. O ambiente convida a papéis de inspiração coletiva — situações em que a percepção intuitiva do que é possível pode moldar campos inteiros. Esse é o período em que o 11 se expressa com menor tensão entre idealismo e realidade: a maturidade das fases anteriores oferece a ancoragem que permite que a visão se torne contribuição real. A oportunidade está em aprender a ser farol sem precisar ser caminho — iluminar sem controlar o destino de quem segue.`,

  22: `O terceiro pináculo de número mestre oferece a oportunidade da construção de legado em escala real. O ambiente convida a projetos que redefinem o que é possível no campo em que você opera — obras que combinam visão longa e execução consistente. Esse é o período em que o 22 se expressa em sua forma mais completa: pragmatismo e grandeza operando juntos, sem que um destrua o outro. A oportunidade está em aprender que obras verdadeiramente transformadoras são construídas com e para outros — e têm potencial de impactar muito além do seu próprio tempo de vida.`

};

/* ════════════════════════════════════════════════════════
   PINÁCULO 4 — Síntese, legado, integração
   A fase final — sabedoria encarnada, contribuição que transcende.
   Claramente diferente do P1: não é estabelecimento, é síntese.
   80–100 palavras por entrada.
════════════════════════════════════════════════════════ */

const PINNACLE_P4 = {

  1: `O quarto pináculo oferece a oportunidade da síntese através da liderança madura — aquela que não precisa mais provar nada. O ambiente convida a exercer autonomia e influência com a sabedoria de décadas: não como conquista, mas como presença. A oportunidade está em liderar pelo exemplo de integração: mostrar, através da própria vida, que força e serenidade podem coexistir. O protagonismo dessa fase é mais rico do que o de qualquer pináculo anterior — precisamente porque não precisa vencer nada para se afirmar, apenas ser plenamente o que se tornou.`,

  2: `O quarto pináculo oferece a oportunidade da síntese através das relações e da presença. O ambiente convida a uma forma de conexão que só é possível depois de décadas de desenvolvimento: a escuta profunda, a mediação sábia, a presença que oferece o que cada pessoa precisa sem precisar ser tudo para todos. Essa é a fase em que a inteligência do coração encontra sua expressão mais madura. A oportunidade está em ser a pessoa a quem outros recorrem — não por dependência, mas por confiança em uma presença que sabe o que é essencial.`,

  3: `O quarto pináculo oferece a oportunidade da síntese através da expressão como legado. O ambiente convida a obras que destilam uma vida inteira de criatividade em formas duráveis. Essa é a fase em que a voz encontra sua versão mais autêntica: sem necessidade de agradar ou ser validada, mas carregada de tudo o que foi vivido. A oportunidade está em criar não para audiências imediatas, mas para o que persiste: descobrir que a expressão mais livre é precisamente aquela que não precisa mais de aprovação para existir — e que, por isso, finalmente diz o que sempre quis dizer.`,

  4: `O quarto pináculo oferece a oportunidade da síntese através da obra duradoura. O ambiente convida à consolidação final — estruturas que resistem ao tempo e que outros poderão usar como fundação. Essa é a fase em que a paciência e a disciplina de uma vida encontram sua recompensa mais tangível: sistemas que funcionam sem sua presença constante, uma reputação construída tijolo a tijolo. A oportunidade está em aprender que o maior legado não é o que você construiu — é o que você ensinou outros a construir, e que continuará crescendo depois que você não estiver mais dirigindo.`,

  5: `O quarto pináculo oferece a oportunidade da síntese através da liberdade conquistada — não a que foge, mas a que descobriu. O ambiente convida a uma forma de movimento que só é possível depois que os comprometimentos essenciais foram honrados: exploração serena de quem não está fugindo de nada. Essa é a fase em que a adaptabilidade de uma vida se torna sabedoria de navegação. A oportunidade está em compartilhar o que aprendeu sobre como mover-se pelo mundo — e em descobrir que a liberdade mais completa não é a ausência de vínculos, mas a presença neles sem perda de si mesmo.`,

  6: `O quarto pináculo oferece a oportunidade da síntese através do cuidado como sabedoria. O ambiente convida a uma forma de responsabilidade que transcende o cuidado operacional: a presença que nutre sem criar dependência, o amor que conhece a diferença entre ajudar e infantilizar. Essa é a fase em que décadas de comprometimento encontram sua recompensa mais sutil: ser a pessoa em cuja presença outros se tornam mais eles mesmos. A maior oportunidade aqui é aprender a confiar que o que você plantou pode crescer em direções que você não planejou — e que isso é exatamente o que um bom cuidado produz.`,

  7: `O quarto pináculo oferece a oportunidade da síntese através da sabedoria interiorizada. O ambiente convida a uma função que poucos desenvolvem: a presença do sábio — não o especialista que dá respostas, mas a pessoa cuja profundidade silenciosa orienta outros simplesmente por ser o que é. Essa é a fase em que o conhecimento acumulado ao longo de décadas se torna parte da própria estrutura de existir. A oportunidade está em aprender a compartilhar sem expor, a orientar sem controlar — e em descobrir que a profundidade mais rara não precisa de muitas palavras para fazer diferença real.`,

  8: `O quarto pináculo oferece a oportunidade da síntese através do poder como legado. O ambiente convida a exercer influência de uma forma que só a maturidade permite: autoridade que não precisa ser afirmada, presença executiva que transforma contextos pelo simples fato de estar ali. Essa é a fase em que a inteligência de poder encontra seu uso mais completo: não para construir mais, mas para garantir que o que foi construído serve ao que deve servir. A maior oportunidade aqui é aprender a transferir o que você sabe — e descobrir que tornar outros capazes é o maior ato de poder.`,

  9: `O quarto pináculo oferece a oportunidade da síntese através da completude. O ambiente convida a uma forma de presença que abrange tudo o que foi — incluindo o que não deu certo, o que ficou incompleto, o que ainda dói. Essa é a fase em que compaixão se torna também autocompaixão, e em que o senso de propósito finalmente inclui o próprio percurso como parte do que foi dado ao mundo. A oportunidade está em aprender que a jornada mais completa não é a que não teve perdas — é a que transformou cada uma delas em parte de algo genuinamente maior.`,

  11: `O quarto pináculo de número mestre oferece a oportunidade da síntese como inspiração duradoura. O ambiente convida a uma forma de presença que ilumina outros sem esforço de convencer — sem necessidade de audiência, sem busca de validação. Essa é a fase em que a visão de toda uma vida se torna sabedoria encarnada: não ideias abstratas, mas uma forma de existir que outros percebem como farol. A oportunidade está em aprender a confiar que a maior inspiração que você pode oferecer é a de ter vivido a tensão entre o ideal e o real — e não ter abandonado nenhum dos dois.`,

  22: `O quarto pináculo de número mestre oferece a oportunidade da síntese como legado construtivo de escala histórica. O ambiente convida a consolidar o que foi construído em algo que transcende a vida individual — instituições, obras e culturas que continuam impactando depois que você não estiver mais presente para dirigi-las. Essa é a fase em que o construtor máximo encontra sua contribuição mais madura: não mais construir em escala, mas garantir que o que foi criado tem condições de continuar se desenvolvendo. A maior oportunidade aqui é aprender a passar o que sabe — e confiar profundamente no que outros farão com isso.`

};

/* ════════════════════════════════════════════════════════
   DESAFIOS — Textos por número (0–8)
   Resistências internas que se manifestam em paralelo aos Pináculos.
   Desafio 0: texto especial de 120 palavras (o mais raro e exigente).
   Desafios 1–8: 80–100 palavras cada.
   Tom: resistência específica e convite à superação — não deficiência.
════════════════════════════════════════════════════════ */

const CHALLENGE_TEXTS = {

  0: `O Desafio Zero é o mais raro e o mais exigente do sistema pitagórico. Quando a diferença entre dois números da data de nascimento é zero, a numerologia não indica ausência de desafio — indica a presença simultânea de todos os desafios. Você não herda um padrão de resistência delimitado: você tem acesso ao espectro completo das resistências humanas, o que significa que pode encontrar qualquer uma delas em qualquer momento, sem a orientação de um tema fixo que sinalize o que está por vir. A dificuldade não está em um obstáculo específico, mas na ausência de sinalização prévia sobre qual padrão precisará ser enfrentado e trabalhado. O que esse desafio pede é uma forma particular de maturidade interior: a disposição de trabalhar com o que aparecer, sem a proteção de um tema central que direcione a atenção. Quem desenvolve essa flexibilidade raramente encontra um território que não consegue navegar — porque aprendeu a se orientar no desconhecido, não apenas no familiar.`,

  1: `O padrão de resistência do Desafio 1 é a dependência da validação externa para agir. Esse desafio aparece como hesitação em situações que pedem iniciativa própria, dificuldade em sustentar uma posição quando outros discordam, ou como o padrão oposto: afirmação agressiva que defende a autonomia antes que ela seja ameaçada. A resistência não é falta de capacidade — é a dúvida sobre o direito de existir como ponto de origem da própria ação. O convite é o desenvolvimento da autoridade interior: aprender que agir a partir de si mesmo não requer aprovação prévia — e que a voz que você hesita em usar é frequentemente a que a situação mais precisava ouvir.`,

  2: `O padrão de resistência do Desafio 2 é a dificuldade em afirmar limites e necessidades próprias em contextos relacionais. Esse desafio aparece como tendência a ceder antes do necessário, a harmonizar quando a situação precisaria de confronto direto, ou como sensibilidade excessiva às reações dos outros. A resistência não é falta de discernimento — é o medo de que afirmar o que você precisa destrua o vínculo que você quer preservar. O convite é aprender que presença autêntica — com suas particularidades e divergências — fortalece relações genuínas: vínculos que sobrevivem apenas à condição da sua concordância permanente não merecem o custo do seu silêncio.`,

  3: `O padrão de resistência do Desafio 3 é a autocensura criativa — a dificuldade em expressar o que é genuinamente seu sem passar pelo filtro do que parece aceitável. Esse desafio aparece como inibição em contextos públicos, crítica interna desproporcional ao próprio trabalho, ou como o padrão oposto: expressividade superficial que evita o que realmente quer ser dito. A resistência não é ausência de criatividade — é o medo de que o que é autenticamente seu não seja suficientemente bom ou apropriado. O convite é aprender que a expressão mais poderosa raramente é a mais calculada: o que sai sem permissão frequentemente é o que mais precisa existir.`,

  4: `O padrão de resistência do Desafio 4 é a relação difícil com estrutura, disciplina e a aceitação do tempo que processos concretos exigem. Esse desafio aparece como resistência a rotinas, impaciência com a lentidão do que é sólido, ou como o padrão oposto: rigidez que usa a estrutura como controle em vez de como fundação. A resistência não é falta de competência — é a dificuldade em aceitar que o que dura foi construído com paciência que o entusiasmo não consegue substituir. O convite é aprender que a disciplina não é o oposto da liberdade: é a condição que torna possível construir algo que continua existindo quando a inspiração passa.`,

  5: `O padrão de resistência do Desafio 5 é a dificuldade em equilibrar liberdade e comprometimento de longo prazo. Esse desafio aparece como inquietação crônica mesmo em situações favoráveis, dificuldade em sustentar projetos ou relações quando deixam de ser novos, ou como o padrão oposto: rigidez defensiva que evita a mudança mesmo quando ela se tornou necessária. A resistência não é falta de comprometimento — é a dificuldade em distinguir o que precisa mudar do que precisa ser sustentado. O convite é aprender que a maior liberdade não é a ausência de vínculos, mas a capacidade de se engajar plenamente sem perder o senso de quem você é fora deles.`,

  6: `O padrão de resistência do Desafio 6 é a dificuldade em exercer responsabilidade sem controle, ou em receber cuidado sem desconforto. Esse desafio aparece como perfeccionismo relacional — a sensação de que nada ao seu redor está suficientemente bem —, como superproteção ou como dificuldade genuína em delegar. A resistência não é falta de amor — é o medo de que as coisas importantes não sobrevivam sem sua supervisão constante. O convite é aprender que a forma mais madura de cuidado confia no crescimento de outros: às vezes, a melhor coisa que você pode fazer por quem ama é deixá-los aprender com o que você hesitaria em permitir.`,

  7: `O padrão de resistência do Desafio 7 é a dificuldade em confiar — no processo, nos outros e nas próprias percepções intuitivas. Esse desafio aparece como ceticismo defensivo, como isolamento que se apresenta como autossuficiência, ou como uma fome de certeza que impede agir com o que se sabe antes da evidência completa. A resistência não é falta de inteligência — é o medo de que o que você percebe por dentro não seja confiável o suficiente para guiar ações reais. O convite é aprender que o conhecimento mais profundo raramente chega na forma da prova que o intelecto pediria: às vezes, o que você sabe antes de saber é exatamente o que a situação precisava.`,

  8: `O padrão de resistência do Desafio 8 é a relação difícil com poder, recursos e reconhecimento. Esse desafio aparece como sabotagem de situações que chegam perto do sucesso material, como submissão a estruturas de poder que deveriam ser questionadas, ou como o padrão oposto: uso do poder sem senso de propósito ou de consequência. A resistência não é incapacidade executiva — é a dificuldade em acreditar que você merece o que conquistou, ou em aceitar que poder pode ser exercido com integridade. O convite é aprender que autoridade real não é arrogância: é a disposição de assumir o impacto que suas escolhas têm — e de direcionar esse impacto para algo que justifique o custo.`

};

/* ════════════════════════════════════════════════════════
   ÍNDICE COMBINADO — para acesso via posição de pináculo
════════════════════════════════════════════════════════ */

const PINNACLE_TEXTS = {
  p1: PINNACLE_P1,
  p2: PINNACLE_P2,
  p3: PINNACLE_P3,
  p4: PINNACLE_P4
};

export { PINNACLE_TEXTS, CHALLENGE_TEXTS };
