// complementar.js — Textos interpretativos: Equilíbrio, Pensamento Racional, Subconsciente
// Sistema: Numerologia Pitagórica (Campbell/Balliett/Kozminsky)
// Segunda pessoa, tom literário, sem jargão.
//
// Equilíbrio  = modo de emergência em crise (não o comportamento cotidiano)
// Pensamento Racional = estrutura lógica interna (não inteligência geral)
// Subconsciente = escala de enraizamento emocional 1→9 (1 = reativo, 9 = robusto)

/* ════════════════════════════════════════════════
   TEXTOS DE CONTEXTO — exibidos acima de cada tile
════════════════════════════════════════════════ */

const BALANCE_CONTEXT = 'O Equilíbrio não descreve seu comportamento cotidiano — descreve o que emerge quando o verniz cede. É o padrão de resposta que se ativa automaticamente diante de conflitos, crises ou situações em que você se sente encurralado. Campbell o entendia como a personalidade que aparece quando não há tempo para escolher como agir.';

const RATIONAL_CONTEXT = 'O Pensamento Racional revela como sua mente estrutura internamente o processo de chegar a conclusões — não o quanto você é inteligente, mas o estilo pelo qual sua lógica opera. Kozminsky associa esse número à linguagem silenciosa da mente: o modo como você processa informações antes de qualquer palavra ser dita.';

const SUBCONSCIOUS_CONTEXT = 'O Subconsciente revela o grau de enraizamento da sua resposta emocional sob pressão. É calculado pelo número de vibrações presentes no seu nome: quanto mais completo o espectro, mais estável a base. O valor 1 indica muitas ausências — alta reatividade; o 9 indica nome pleno — resposta sólida e integrada mesmo diante do inesperado.';

/* ════════════════════════════════════════════════
   BALANCE_TEXTS — Equilíbrio em crise
   Foco: o que emerge quando o autocontrole cede
   80–100 palavras por entrada
════════════════════════════════════════════════ */
const BALANCE_TEXTS = {
  1: 'Quando a pressão chega, você recua para a autonomia absoluta. O Equilíbrio 1 em crise dispensa colaboração: sua resposta instintiva é tomar o controle, agir sozinho e resolver sem esperar que outros se alinhem. Isso pode ser extremamente eficaz em emergências reais — e pode ser destrutivo em conflitos relacionais, onde agir sem consultar os outros aprofunda o problema em vez de resolvê-lo. Sua zona de risco em crise não é a paralisia, mas a unilateralidade: você age depressa, e frequentemente age sozinho quando o momento pedia algo diferente.',

  2: 'Em situações de conflito, sua primeira reação é buscar acordo a qualquer custo. O Equilíbrio 2 em crise cede, suaviza, adapta a própria posição para manter a paz — frequentemente antes de avaliar se essa paz serve a algo real. Esse reflexo de apaziguamento pode preservar relações que mereciam ser preservadas, mas também pode silenciar verdades que precisavam ser ditas. Seu maior risco em crise não é o confronto, mas a rendição prematura: você pode concordar antes de ter processado se concordar é o que a situação realmente pede.',

  3: 'Diante de crise, você tende a falar — a verbalizar, a explicar, a reencadear o que aconteceu através da palavra. O Equilíbrio 3 em pressão extrema usa a comunicação como mecanismo de processamento: articular o problema já é para você uma forma de começar a resolvê-lo. Quando esse reflexo é calibrado, produz mediação genuína. Quando não, produz dispersão: você pode falar muito antes de agir o suficiente, ou usar o humor e a leveza para desviar do que o conflito realmente exige que você enfrente.',

  4: 'Quando as coisas desmoronam, você busca a estrutura. O Equilíbrio 4 em crise estabiliza, organiza, encontra o procedimento correto e se apega a ele. Esse modo de emergência é extraordinariamente confiável em crises logísticas e operacionais — e pode ser uma armadilha em crises emocionais, onde o que o momento pede não é um plano, mas presença. Seu padrão de risco em conflito é a rigidez: você pode insistir no processo quando a situação evoluiu além dele, e interpretar a flexibilidade alheia como falta de seriedade.',

  5: 'Em crise, sua resposta é o movimento. O Equilíbrio 5 sob pressão extrema busca saída, mudança de ângulo, uma rota que ainda não foi tentada. Esse reflexo pode ser libertador quando a situação de fato pede adaptação criativa — e pode ser fuga disfarçada de estratégia quando o que o conflito exige é que você permaneça e enfrente. Seu padrão de risco é a dispersão sob pressão: você multiplica opções quando talvez precisasse aprofundar uma, e pode abandonar ciclos importantes antes de eles entregarem o que tinham para entregar.',

  6: 'Quando a tensão sobe, você tende a cuidar. O Equilíbrio 6 em crise quer restaurar a harmonia, proteger os que estão ao redor, resolver o conflito de modo que todos saiam sentindo que foram considerados. Isso é um recurso valioso — e pode ser sua armadilha: você pode se colocar no papel de responsável pelo estado emocional de todos os envolvidos, assumindo um peso que não é seu e postergando o confronto direto que a situação às vezes pede. Em crise, seu risco é confundir cuidado com responsabilidade total pelo desfecho.',

  7: 'Diante de pressão, você recua para a análise. O Equilíbrio 7 em conflito precisa entender antes de agir — o que cria uma pausa reflexiva que pode ser um recurso ou um obstáculo, dependendo do que a crise exige. Em situações que permitem tempo para pensar, esse modo produz decisões excepcionalmente bem fundamentadas. Em situações que exigem resposta imediata, a necessidade de compreender antes de mover pode parecer ausência ou frieza. Seu padrão de risco em crise é a análise como substituto da ação quando ambas são necessárias.',

  8: 'Sob pressão extrema, você assume. O Equilíbrio 8 em crise ativa um modo de comando que pode ser exatamente o que uma situação de emergência precisa — e pode ser atropelador em conflitos que pediam colaboração. Você tende a avaliar o campo rapidamente, identificar o que é necessário e agir com autoridade antes que o consenso seja formado. O risco está em que esse modo pode alienar os outros envolvidos, que se sentem gerenciados em vez de ouvidos. Em crise, sua força e seu ponto cego são frequentemente a mesma coisa.',

  9: 'Em situações de conflito, você amplia. O Equilíbrio 9 em crise instintivamente considera o impacto mais vasto — quem mais é afetado, o que esse conflito significa além das partes imediatas. Essa perspectiva pode ser extraordinariamente valiosa quando o problema de fato tem dimensões coletivas. E pode ser uma forma de evitar o conflito específico que está à sua frente: ao ampliar o ângulo, você às vezes perde de vista o que precisava ser resolvido aqui, agora, com essa pessoa. Em crise, seu risco é a visão panorâmica que não aterrissa.',

  11: 'O Equilíbrio 11 em crise tende à intensidade. Sob pressão, você não tem respostas moderadas — você sente o conflito com uma acuidade que outros raramente alcançam, e isso pode torná-lo extraordinariamente perceptivo ou extraordinariamente sobrecarregado, dependendo do grau de enraizamento do momento. Seu modo de emergência tende à intuição rápida e à resposta emocional elevada. O risco está em que em momentos de tensão alta, a hipersensibilidade pode amplificar o conflito antes de ajudar a resolvê-lo. O que você precisa em crise é de âncora antes da clareza.',

  22: 'O Equilíbrio 22 em crise mobiliza. Sob pressão, você tende a operar em escala — a pensar não apenas na situação imediata, mas no sistema mais amplo do qual ela faz parte. Esse modo pode ser extraordinariamente eficaz quando o conflito de fato tem dimensões estruturais. E pode ser desproporcional quando o que está em jogo é pessoal e específico. Seu padrão de risco em crise é responder ao pequeno com o peso do grande: você traz para conflitos cotidianos a mesma intensidade de propósito que reserva para projetos de transformação real.'
};

/* ════════════════════════════════════════════════
   RATIONAL_TEXTS — Pensamento Racional
   Foco: estrutura interna da lógica, não inteligência
   80–100 palavras por entrada
════════════════════════════════════════════════ */
const RATIONAL_TEXTS = {
  1: 'Sua mente chega a conclusões por via direta. O Pensamento Racional 1 processa pela afirmação singular: você tende a identificar uma hipótese principal e testá-la com comprometimento, em vez de manter várias aberturas em paralelo. Esse padrão lógico é eficiente e decisivo — e tem um ponto cego: a hipótese com a qual você se comprometeu primeiro pode ser mais difícil de abandonar do que seria para outras estruturas de pensamento. Sua inteligência é do tipo que avança rápido em uma direção. O desafio é o retorno à bifurcação quando o caminho escolhido não se confirma.',

  2: 'Sua mente processa por comparação e relação. O Pensamento Racional 2 chega a conclusões pela análise do que está em jogo para cada parte — você naturalmente considera múltiplas perspectivas antes de decidir, o que torna seu raciocínio matizado e sensível ao contexto. Esse padrão tem uma limitação: a consideração de muitos ângulos pode tornar a conclusão mais demorada do que a situação permite. Você pensa bem quando tem tempo para pesar; sob pressão por resposta rápida, o excesso de perspectivas pode parecer hesitação onde existe, na verdade, cuidado intelectual real.',

  3: 'Sua mente pensa em imagens e associações. O Pensamento Racional 3 chega a conclusões por conexões inesperadas — você frequentemente sabe antes de poder explicar como sabe, porque seu processamento lógico opera por analogia, metáfora e intuição de padrão. Esse modo de raciocínio é criativo e frequentemente surpreendente para os que ao redor esperam linearidade. O ponto cego está na sistematização: você pode chegar a conclusões corretas por um caminho que não consegue documentar, o que torna difícil convencer outros ou replicar o raciocínio em contextos que exigem transparência metodológica.',

  4: 'Sua mente pensa em sequências. O Pensamento Racional 4 processa passo a passo, verificando a solidez de cada premissa antes de avançar para a seguinte. Esse padrão produz raciocínios excepcionalmente sólidos e difíceis de refutar — porque você raramente conclui algo sem ter construído os degraus que levam até lá. O custo é a velocidade: seu modo de pensar é meticuloso e pode ser lento para os padrões de ambientes que valorizam agilidade sobre rigor. Quando você apresenta uma conclusão, ela é robusta. Quando o momento exige resposta rápida, o rigor pode parecer rigidez.',

  5: 'Sua mente pensa em múltiplos registros simultaneamente. O Pensamento Racional 5 não segue uma única linha de raciocínio — ele explora várias em paralelo, comparando onde cada uma leva antes de escolher. Esse padrão torna seu pensamento extraordinariamente adaptável e capaz de integrar informações de campos aparentemente não relacionados. A limitação emerge quando o momento exige comprometimento: sua mente ainda está mapeando possibilidades quando a situação precisa de uma conclusão. O desafio não é pensar melhor, mas aprender a fechar o campo de exploração quando o momento de concluir chegou.',

  6: 'Sua mente pensa a partir das pessoas. O Pensamento Racional 6 estrutura raciocínios com alta sensibilidade ao impacto humano — você tende a incorporar considerações relacionais e éticas no processo lógico desde o início, não como apêndice moral, mas como variável estrutural. Isso torna seu pensamento humanamente calibrado e frequentemente percebido como sábio. O ponto cego está na objetividade de custo: em situações onde a lógica mais eficiente é desconfortável para alguém, você pode relutantemente resistir à conclusão que o raciocínio estava apontando, priorizando o conforto sobre a precisão.',

  7: 'Sua mente pensa em profundidade, não em largura. O Pensamento Racional 7 processa por análise progressiva — você vai abaixo da superfície de um problema até encontrar o princípio subjacente que o explica. Esse padrão produz compreensões incomuns de questões complexas, e frequentemente descobre o que os outros, tendo passado pela mesma informação, não viram. A limitação está na aplicação prática: sua mente está mais à vontade nos fundamentos do que nas implicações operacionais das conclusões que alcança. Você pensa bem o porquê; o como pode exigir parceria com outros modos de inteligência.',

  8: 'Sua mente pensa em termos de consequência. O Pensamento Racional 8 estrutura raciocínios a partir da pergunta "o que isso produz?" — você avalia ideias e decisões pela força de seus resultados, e seu processo lógico tende a ser pragmático, orientado ao impacto real. Esse padrão torna seu pensamento eficiente em contextos de decisão e estratégia, onde o que importa são os efeitos. O ponto cego está em que nem todas as questões são resolvidas pelo critério do resultado: situações que exigem considerações de valor, nuança ética ou longo prazo podem receber uma lógica excessivamente instrumental.',

  9: 'Sua mente pensa em arcos. O Pensamento Racional 9 processa considerando não apenas o problema imediato, mas o padrão mais amplo do qual ele faz parte — você tende a ver a lógica de um ciclo completo em vez de apenas a lógica da etapa atual. Esse padrão produz raciocínios de alta contextura e frequentemente antecipa consequências que outros ainda não percebem. A limitação está no imediato: quando a situação requer resposta ao que está na frente agora, sua mente pode estar três movimentos à frente, o que pode parecer distância quando o momento pede presença.',

  11: 'Sua mente pensa por intuição de padrão. O Pensamento Racional 11 frequentemente chega a conclusões antes de poder articular o caminho que o levou lá — há uma qualidade de recepção no seu processo lógico que outros podem descrever como insight ou mesmo como adivinhação, mas que é na verdade uma forma de processamento que integra informações sutis antes que a mente consciente as organize em argumentos. Seu desafio não é chegar à conclusão certa, mas tornar o percurso suficientemente legível para que outros possam seguir o raciocínio em vez de apenas receber o resultado.',

  22: 'Sua mente pensa em sistemas. O Pensamento Racional 22 processa naturalmente em escala: você tende a contextualizar qualquer problema particular dentro da estrutura maior da qual ele faz parte, o que torna seu raciocínio extraordinariamente capaz de identificar onde as peças se encaixam e onde o sistema como um todo está frágil. O desafio está no particular: nem todo problema é um problema de sistema, e em situações interpessoais ou imediatas, a tendência de escalar o raciocínio pode produzir análises corretas mas desproporcionais ao tamanho do que precisa ser resolvido agora.'
};

/* ════════════════════════════════════════════════
   SUBCONSCIOUS_TEXTS — Subconsciente
   Escala 1 (reativo/frágil) → 9 (robusto/enraizado)
   Foco: qualidade da resposta emocional sob pressão
   70–90 palavras por entrada
════════════════════════════════════════════════ */
const SUBCONSCIOUS_TEXTS = {
  1: 'Com apenas uma vibração presente no nome, a base emocional é estreita. Diante de pressão ou do inesperado, a resposta tende a ser intensa e desproporcionalmente centrada nessa única frequência disponível — como um instrumento com uma nota só. Situações que pedem flexibilidade de resposta encontram pouca variação de recurso. Isso não é fraqueza de caráter: é uma estrutura com menos material de amortecimento. O trabalho desta vida inclui desenvolver conscientemente a gama de respostas que o subconsciente ainda não tem disponível.',

  2: 'Com duas vibrações presentes no nome, a base emocional é escassa mas não singular. Sob pressão, você oscila entre essas duas frequências disponíveis — o que oferece alguma variação de resposta, mas ainda um espectro estreito diante da complexidade das situações humanas. A reatividade emocional tende a ser alta, porque o subconsciente tem poucos recursos para amortecer o impacto do inesperado. O autoconhecimento dessas duas vibrações disponíveis é especialmente valioso: trabalhar conscientemente com elas é o modo de ampliar o que o subconsciente pode oferecer.',

  3: 'Três vibrações presentes no nome criam uma base emocional que já começa a ter alguma diversidade de resposta. Sob pressão, você tem acesso a mais de um padrão de reação — embora o espectro ainda seja limitado em relação ao que seria possível. Situações complexas ou inéditas podem encontrar você reagindo por um dos três registros disponíveis de forma repetida, mesmo quando nenhum deles é o mais adequado. A consciência dos padrões de reação disponíveis é o recurso principal nesta configuração.',

  4: 'Quatro vibrações ativas no nome significam uma base emocional que já sustenta alguma estabilidade. Sob pressão, você tem acesso a uma gama razoável de respostas — embora ainda com um número significativo de frequências ausentes que podem deixar certas situações sem o recurso interno mais adequado para enfrentá-las. Você consegue se estabilizar diante de perturbações comuns, mas situações de estresse prolongado ou inesperado podem revelar áreas de reatividade onde a base emocional ainda tem espaço para crescer.',

  5: 'Cinco vibrações presentes representam o ponto de equilíbrio da escala. Com metade do espectro completo, a base emocional é moderadamente enraizada: você tem recursos suficientes para absorver o impacto de situações difíceis sem reagir da forma mais extrema, mas ainda há frequências ausentes que podem criar pontos de instabilidade inesperada. Situações que ativam exatamente as vibrações ausentes no seu nome podem encontrar você menos preparado do que o normal — uma vulnerabilidade seletiva, não estrutural.',

  6: 'Com seis vibrações presentes, a base emocional já é bem desenvolvida. Sob pressão, você tem acesso a uma gama ampla de respostas internas — o subconsciente tem material suficiente para amortecer a maioria das perturbações sem colapsar na reatividade. Situações emocionalmente complexas encontram em você uma capacidade de permanecer relativamente funcional mesmo quando desafiado. O que ainda falta é minoritário: três vibrações ausentes representam pontos de atenção, mas não fragilidade estrutural.',

  7: 'Sete vibrações ativas no nome indicam uma base emocional sólida e bem estabelecida. Diante do inesperado, você tende a encontrar internamente o recurso adequado para a maioria das situações — há riqueza de padrões disponíveis no subconsciente. A estabilidade emocional sob pressão é uma das suas forças naturais: você raramente colapsa no primeiro impacto. As duas vibrações ainda ausentes representam áreas de aprendizagem específicas, não vulnerabilidades amplas. Sua base sustenta bem mesmo as circunstâncias que mais testam.',

  8: 'Oito vibrações presentes no nome criam uma base emocional excepcionalmente enraizada. Você tem acesso a quase todo o espectro de respostas internas — o subconsciente é rico e diversificado, capaz de encontrar recursos para quase qualquer tipo de situação. Sob pressão extrema, você tende a manter funcionalidade emocional onde outros colapsariam. A única vibração ausente representa uma área de atenção específica e pontual, não uma fragilidade de base. Essa configuração é rara e comunica uma estrutura emocional de alto grau de integração.',

  9: 'Todas as nove vibrações estão presentes no nome — o espectro emocional está completo. Seu subconsciente tem acesso à totalidade dos recursos internos disponíveis, o que significa que em praticamente qualquer tipo de situação de pressão, há um padrão de resposta disponível que não exige improvisação a partir do nada. Essa completude não elimina o sofrimento nem as crises — mas significa que sua base emocional raramente fica sem material. Você tende a permanecer funcional mesmo em circunstâncias que desestabilizariam estruturas mais parciais.'
};

export { BALANCE_TEXTS, RATIONAL_TEXTS, SUBCONSCIOUS_TEXTS, BALANCE_CONTEXT, RATIONAL_CONTEXT, SUBCONSCIOUS_CONTEXT };
