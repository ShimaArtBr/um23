// hiddenPassion.pt.js — Textos de Paixão Oculta (Português)
// Pasta de destino: /js/data/
//
// NOTA TÉCNICA:
// data.hiddenPassion.nums é um array.
// Quando vazio → exibir HIDDEN_PASSION_BALANCED.
// Quando contém dois números → usar HIDDEN_PASSION_DUAL["x+y"].
// Quando contém um número → usar HIDDEN_PASSION_TEXTS[n].

/* ════════════════════════════════════════════════
   PAIXÃO OCULTA — NÚMEROS SIMPLES (1–9)
   Padrão que escapa involuntariamente — não o desejo escolhido,
   mas a frequência dominante que "vaza" independentemente da vontade.
════════════════════════════════════════════════ */

const HIDDEN_PASSION_TEXTS = {

  1: `Há em você um impulso de protagonismo que aparece antes de qualquer decisão consciente de protagonizar. Nas conversas, você naturalmente toma a dianteira; nas equipes, encontra-se liderando mesmo quando tentou apenas colaborar; nos relacionamentos, é o que define o ritmo — quase sem perceber. Não é arrogância; é uma frequência que opera por baixo da intenção. O desafio está exatamente onde você tenta "ceder espaço": a contenção forçada gera uma irritabilidade que os outros sentem mas raramente conseguem nomear. A integração saudável é reconhecer que essa força não precisa ser domada — precisa de direção consciente para tornar-se liderança genuína em vez de competição automática.`,

  2: `Você se encontra mediando situações antes de decidir se a mediação era seu papel. Sentir o estado emocional do ambiente, ajustar seu tom ao humor dos outros, antecipar conflitos antes que se tornem declarados — tudo isso acontece de forma compulsiva, antes do pensamento. Nos relacionamentos, você frequentemente já cedeu antes de perceber que tinha uma posição. Esse padrão não é o seu desejo de conexão: é um reflexo automático de harmonização que funciona independentemente de você querer ou não querer agradar. A integração saudável nasce quando você aprende a perceber o momento exato em que deixou de escolher e passou a reagir — e decide, a partir daí, se a harmonia que está criando também te inclui.`,

  3: `Sua energia se torna expressão antes que qualquer intenção tome forma. Em reuniões, você já falou; em silêncios, já preencheu; em grupos, já animou — e só depois percebe que não planejou fazer nada disso. O 3 como paixão oculta não é o seu desejo de se expressar: é a expressão que acontece antes do desejo. Isso cria uma persona de leveza e carisma que às vezes você mesmo não reconhece como sua — porque não a escolheu, ela simplesmente apareceu. O desafio é que essa expressividade automática pode esvaziar o que você realmente queria dizer. A integração saudável é aprender a pausar o que sai sozinho para dar espaço ao que você genuinamente quer criar.`,

  4: `Você estrutura o que está ao redor de forma quase reflexa. Chega a um lugar e já reorganizou mentalmente o espaço; entra em um projeto e já identificou o que está mal planejado; ouve uma ideia e já está calculando a viabilidade antes de terminar de escutá-la. O 4 como paixão oculta não é seu desejo de construir algo sólido — é o instinto de ordenar que opera antes da vontade. Nos relacionamentos, isso pode aparecer como crítica não solicitada ou como a sensação nos outros de que nunca estão fazendo o suficiente. A integração saudável é distinguir entre o que precisa de estrutura e o que você estrutura apenas porque não tolera o caos — mesmo quando o caos é temporário e fértil.`,

  5: `Você busca variação antes de se perguntar se realmente quer mudar. Nos relacionamentos, é o primeiro a sentir que "precisamos de algo diferente"; no trabalho, começa a olhar para outras possibilidades assim que a rotina se instala; nas conversas, salta de tema em tema com uma energia que não escolheu ter. O 5 como paixão oculta não é a sua sede de liberdade — é o movimento que acontece involuntariamente, independentemente de você estar satisfeito ou não com onde está. Pessoas próximas sentem essa inquietação como distância ou falta de comprometimento. A integração saudável é aprender a distinguir o que é genuína necessidade de expansão do que é simplesmente o seu sistema nervoso fugindo do que ficou parado por tempo demais.`,

  6: `Você cuida antes de ser convidado a cuidar. Percebe o que falta nos outros, oferece o que não foi pedido, carrega responsabilidades que não foram formalmente suas — e só depois se pergunta como chegou até aqui. O 6 como paixão oculta não é seu amor profundo pela família ou sua sensibilidade estética: é o padrão de cuidado que se ativa automaticamente, sem filtro, sem triagem. O resultado é uma vida frequentemente sobrecarregada por necessidades alheias e uma sensação difusa de que ninguém cuida de você da mesma forma. A integração saudável começa quando você percebe que o cuidado automático não é o mesmo que o cuidado escolhido — e que o segundo tem muito mais de você dentro dele.`,

  7: `Você se retira antes de decidir que quer se retirar. Em grupos, sua atenção se volta para dentro; em conversas superficiais, uma parte de você já está analisando em outro nível; em situações de proximidade, há sempre uma reserva que os outros sentem mas você raramente percebe que está ativando. O 7 como paixão oculta não é sua busca deliberada pelo conhecimento profundo — é o afastamento que acontece automaticamente como modo de proteção e processamento. Nos relacionamentos, isso pode ser vivido como frieza ou ausência — quando é apenas a sua frequência dominante operando por baixo da intenção. A integração saudável é reconhecer quando a distância está servindo à reflexão genuína e quando está apenas evitando o que precisaria ser sentido.`,

  8: `Você avalia poder e recursos de forma automática, antes de qualquer análise consciente. Em ambientes novos, já mapeou quem decide; em projetos, já calculou o que está em jogo; em relacionamentos, há uma parte de você que instintivamente identifica a dinâmica de força antes de qualquer palavra ser trocada. O 8 como paixão oculta não é sua ambição de realizar algo significativo — é a leitura executiva que acontece sem que você a convoque. Isso pode gerar uma presença que os outros percebem como intimidadora ou calculista, mesmo quando você está apenas sendo você mesmo. A integração saudável é aprender a usar essa inteligência de poder a serviço de algo que genuinamente importa, em vez de deixá-la operar como reflexo permanente de posicionamento.`,

  9: `Você amplia o enquadramento de qualquer situação antes de agir dentro dela. Nos conflitos, já está pensando nas partes ausentes; nas decisões, já considera o impacto em quem não está na sala; nos relacionamentos, há uma tendência compulsiva de relativizar o próprio sofrimento diante do sofrimento do mundo. O 9 como paixão oculta não é seu desejo de contribuir para algo maior — é o padrão de dissolução do particular no universal que acontece antes da vontade. O resultado prático é dificuldade em defender os próprios interesses sem culpa, e uma sensação nos outros de que você nunca está presente para o que é imediato. A integração saudável é aprender que o universal também te inclui — e que cuidar de si é o começo, não o oposto, do cuidado com o todo.`

};

/* ════════════════════════════════════════════════
   PAIXÃO OCULTA — DUPLAS FREQUENTES
   Tensão criativa entre duas paixões simultâneas.
════════════════════════════════════════════════ */

const HIDDEN_PASSION_DUAL = {

  "1+3": `Duas forças de expressão operam simultaneamente em você — uma que precisa liderar, outra que precisa criar. O resultado é uma energia que domina ambientes tanto pela presença quanto pelo brilho, mas que internamente experimenta uma tensão constante: o 1 quer ser o único ponto de origem; o 3 quer dissolver essa singularidade em expressão compartilhada. Você alterna entre momentos de foco intenso e explosões criativas dispersas. A integração nasce quando liderança e expressão param de competir — e você descobre que a voz que inspira é exatamente a voz que comanda.`,

  "2+6": `Você foi construído para o cuidado relacional em sua forma mais intensa. O 2 cuida pela presença e pela escuta; o 6 cuida pela responsabilidade e pela proteção. Juntos, criam um padrão de doação que raramente descansa — e uma vida que tende a se organizar em torno das necessidades alheias. A tensão criativa entre essas duas paixões está no tempo: o 2 busca harmonia agora; o 6 quer garantir que tudo fique bem para sempre. A integração chega quando você percebe que cuidar de si não quebra a harmonia — é exatamente o que a torna sustentável.`,

  "4+8": `Você carrega uma dupla frequência de construção e poder. O 4 constrói com paciência e estrutura; o 8 exige escala e impacto. Juntos, criam uma capacidade executiva fora do comum — mas também uma rigidez que pode dificultar a colaboração. A tensão entre essas duas paixões está na velocidade: o 4 quer fazer certo; o 8 quer fazer grande — e às vezes essas direções puxam para lados opostos. Pessoas ao seu redor sentem o peso dessas exigências mesmo quando você não as verbaliza. A integração acontece quando estrutura e ambição deixam de competir e passam a servir a um propósito que justifica ambas.`,

  "5+9": `Você carrega ao mesmo tempo o impulso de se mover e o impulso de incluir tudo antes de se mover. O 5 quer liberdade irrestrita; o 9 quer que essa liberdade seja a serviço de algo maior. Juntos, criam uma energia de exploração humanitária — mas também uma dificuldade em comprometer-se com qualquer caminho concreto sem sentir que está deixando outro para trás. A tensão é produtiva quando você a reconhece: o 5 te dá o movimento; o 9 te dá a direção. A integração chega quando a aventura encontra um propósito — e a compaixão encontra um território específico onde se aplicar completamente.`,

  "1+9": `Essa é uma das tensões mais paradoxais entre paixões duplas. O 1 quer ser singular, inaugural, o ponto de origem. O 9 quer se dissolver no coletivo, servir à totalidade, transcender o ego. Dentro de você, esses dois impulsos brigam constantemente: momentos de afirmação intensa seguidos de impulsos de apagamento. As pessoas ao redor raramente veem os dois — experimentam ora um, ora outro, e confundem com inconsistência o que é, na verdade, uma riqueza complexa. A integração acontece quando liderança e serviço deixam de ser opostos — quando você descobre que seu caminho inaugural é exatamente o de abrir passagem para os outros.`,

  "2+4": `Você carrega ao mesmo tempo a frequência da harmonia relacional e a frequência da estrutura concreta. O 2 sente antes de planejar; o 4 planeja antes de sentir. Juntos, criam uma pessoa que cuida com metodologia — mas que pode ficar presa entre o impulso de agradar e a necessidade de fazer do jeito certo. A tensão está na decisão: o 2 quer o consenso; o 4 quer a solução eficaz — e quando divergem, o resultado é paralisia. A integração nasce quando a sensibilidade do 2 informa a estrutura do 4: o cuidado ganha forma, e a forma ganha calor.`

};

/* ════════════════════════════════════════════════
   FREQUÊNCIAS EQUILIBRADAS
   Exibir quando data.hiddenPassion.nums está vazio.
════════════════════════════════════════════════ */

const HIDDEN_PASSION_BALANCED = `Frequências equilibradas — sua energia não se concentra em uma única vibração. Isso indica versatilidade genuína: você não é conduzido compulsivamente por nenhuma força específica. Cada número do seu nome aparece com o mesmo peso, o que significa que você tem acesso a um espectro amplo de qualidades sem que nenhuma delas domine as outras involuntariamente. O desafio não é a compulsão — é a direção: com tantas frequências disponíveis em igual medida, a questão que sua vida coloca é qual delas você vai escolher conscientemente cultivar.`;

export { HIDDEN_PASSION_TEXTS, HIDDEN_PASSION_DUAL, HIDDEN_PASSION_BALANCED };
