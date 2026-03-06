// forecasts_pt.js — Textos de Previsão: Ano Pessoal, Mês Pessoal e Dia Pessoal
// Pasta de destino: /js/data/
//
// USO:
//   import { PERSONAL_YEAR_TEXTS, PERSONAL_MONTH_TEXTS, PERSONAL_DAY_NOTE } from './data/forecasts_pt.js';
//
// PERSONAL_YEAR_TEXTS[n]   → texto do Ano Pessoal n (1–9), três parágrafos
// PERSONAL_MONTH_TEXTS[n]  → texto do Mês Pessoal n (1–9), orientado à ação
// PERSONAL_DAY_NOTE        → nota contextual única sobre o Dia Pessoal

/* ════════════════════════════════════════════════════════
   ANO PESSOAL — Textos por número (1–9)
   Estrutura por texto: 3 parágrafos separados por \n\n
     P1 (60–70 palavras): tema central, escola em curso
     P2 (50–60 palavras): manifestação nas áreas de vida
     P3 (40–50 palavras): orientação prática — o que fazer e o que evitar
   Campbell: "o ritmo fundamental da vida humana"
════════════════════════════════════════════════════════ */

const PERSONAL_YEAR_TEXTS = {

  1: `O Ano Pessoal 1 inaugura um novo ciclo de nove anos. A energia que domina é a do começo genuíno — não o planejamento do começo, mas o ato de começar. Campbell descreve o AP 1 como "o ano do plantio": o solo está revolvido, a semente está na mão, e adiar mais uma temporada significa perder a janela. Há uma leveza de possibilidade que não voltará com a mesma intensidade nos próximos oito anos.

Profissionalmente, este é o momento de lançar o que ficou esperando permissão. Em relacionamentos, novas conexões formadas agora tendem a ter durabilidade fora do comum. Fisicamente, a energia é alta — mas irregular, disparada por impulso. Criativamente, tudo o que você iniciar terá uma frescura que os anos de consolidação não conseguem simular.

Faça: tome uma decisão que você vinha postergando e aja antes de ter o plano completo. Evite: gastar toda a energia do início em múltiplos projetos simultâneos — escolha uma direção principal e deixe as demais esperarem o momento certo dentro deste ciclo.`,

  2: `O Ano Pessoal 2 é o ano da paciência como prática ativa. Após a energia de plantio do AP 1, este é o período em que as sementes germinam abaixo da terra — o progresso acontece, mas raramente em forma visível e imediata. A escola deste ano é a do detalhe e da colaboração: o que você constrói sozinho tem menos alcance do que o que você constrói com outros. Balliett observa que o AP 2 "recompensa quem aprende a escutar antes de responder".

No trabalho, parcerias e acordos negociados com cuidado têm retorno muito além do imediato. Relacionamentos se aprofundam quando você desacelera o suficiente para estar realmente presente. A saúde pede atenção ao sistema nervoso — a tensão de aguardar tem custo físico real. Criativamente, este é um ano de gestar, não de apresentar.

Faça: invista em relacionamentos existentes, finalize detalhes que ficaram abertos no AP 1 e cultive a habilidade de aguardar sem ansiedade. Evite: tomar decisões importantes por impaciência com a velocidade do processo — o que parece lento agora está construindo base para os próximos sete anos.`,

  3: `O Ano Pessoal 3 é o ano da expressão e da expansão social. A energia que domina é a da comunicação, da criatividade e do prazer de estar no mundo — um ano em que a vida quer ser vivida de forma mais leve e mais visível. Campbell chama o AP 3 de "o ano do florescimento": o que foi plantado nos dois anos anteriores começa a aparecer acima da terra, e a alegria de se expressar está disponível com uma generosidade pouco comum.

Profissionalmente, projetos criativos, de comunicação e visibilidade têm campo fértil. Relacionamentos novos chegam com facilidade — a questão é discernir os duráveis dos efêmeros. A saúde floresce quando há espaço para movimento e expressão. Criativamente, é o melhor ano do ciclo para criar, publicar e mostrar.

Faça: apareça — publique, apresente, conecte-se, termine o que é criativo e deixe que seja visto. Evite: a dispersão que este ano facilita; dizer sim para tudo e não concluir nada é o risco específico do AP 3, e o custo se paga nos anos seguintes.`,

  4: `O Ano Pessoal 4 é o ano do trabalho — e da oportunidade de construir algo que dura. Após a expansão do AP 3, a vida convida ao enraizamento: fundações, sistemas, rotinas eficientes, organização financeira. A energia disponível não é brilhante — é consistente, e é exatamente o que projetos sólidos precisam. Kozminsky descreve o AP 4 como "o ano em que o artesão revela seu caráter": o que você faz quando não há audiência e há apenas o trabalho.

Profissionalmente, é o momento de estruturar, reorganizar e aprofundar — não de lançar o novo. Relacionamentos constroem solidez quando você aparece de forma previsível e confiável. A saúde se beneficia de rotinas regulares de movimento e sono. Criativamente, este é o ano de desenvolver técnica, não de buscar inspiração.

Faça: comprometa-se com uma estrutura de trabalho diária, organize finanças e finalize pendências concretas. Evite: resistir às limitações que o AP 4 naturalmente impõe — tentar forçar expansão num ano de consolidação gera exaustão sem resultado proporcional.`,

  5: `O Ano Pessoal 5 é o ano da mudança — e da liberdade que ela traz quando é abraçada. Após dois anos de construção, a vida convida ao movimento: trocas de ambiente, novos contatos, experiências que expandem o quadro de referência. Campbell chama o AP 5 de "o ano da libertação": o que estava preso — situações, hábitos, perspectivas — encontra espaço para se transformar. A energia é eletrizante e, por isso, instável.

Profissionalmente, este é o ano em que oportunidades chegam de lugares inesperados — e onde a capacidade de se adaptar vale mais do que qualquer plano detalhado. Relacionamentos passam por reconfigurações: os que sobrevivem ao AP 5 são os genuinamente livres. A saúde pede variedade e movimento. Criativamente, é um ano de descoberta e experimentação.

Faça: diga sim para o movimento que chega — mudanças de ambiente, projetos novos, conexões diferentes. Evite: confundir liberdade com fuga; o AP 5 que é bem vivido transforma, não apenas movimenta, e há uma diferença real entre os dois.`,

  6: `O Ano Pessoal 6 é o ano da responsabilidade e do ajuste — e da profundidade que o comprometimento verdadeiro produz. Após a liberdade do AP 5, a vida convida ao pertencimento: família, comunidade, saúde, cuidado com o que importa. Balliett descreve o AP 6 como "o ano em que a beleza do cotidiano se torna visível para quem tem olhos para ver". Não é o ano mais dramático do ciclo — é, frequentemente, um dos mais ricos.

Profissionalmente, colaborações de longo prazo e trabalhos com propósito de cuidado ou criação têm campo fértil. Relacionamentos pedem presença real — não intenção, mas aparecimento consistente. A saúde é a prioridade central deste ano: o corpo comunica o que a mente ainda não processou. Criativamente, projetos com propósito afetivo têm força incomum.

Faça: cuide do que é próximo com atenção deliberada — saúde, vínculos, ambiente físico. Evite: assumir o peso de responsabilidades que não são suas; o risco específico do AP 6 é o excesso de cuidado com os outros em detrimento do próprio equilíbrio.`,

  7: `O Ano Pessoal 7 é o ano do recolhimento e da análise profunda. Após o ajuste do AP 6, a vida convida à interioridade: estudo, reflexão, pesquisa, o desenvolvimento de uma perspectiva que só a solidão produtiva pode gerar. Campbell chama o AP 7 de "o ano do sábio em formação": o mundo exterior oferece menos, mas o mundo interior oferece mais do que qualquer outro momento do ciclo. Não é fácil — e é essencial.

Profissionalmente, projetos de pesquisa, especialização e aprofundamento têm resultado excepcional. Relacionamentos superficiais se afastam naturalmente — os profundos ganham uma dimensão nova. A saúde se beneficia de práticas contemplativas. Criativamente, este é o ano de aprender, não de produzir para o público.

Faça: invista em estudo, solidão produtiva e no aprofundamento de um campo específico. Evite: a paralisia que o excesso de análise pode gerar; o AP 7 convida à reflexão, não à imobilidade — há uma linha entre profundidade e procrastinação intelectual.`,

  8: `O Ano Pessoal 8 é o ano da colheita e do poder executivo. Após a reflexão do AP 7, a vida convida ao campo de ação no mundo material: resultados, reconhecimento, expansão financeira, liderança. Kozminsky descreve o AP 8 como "o ano em que o trabalho de sete anos anteriores encontra sua recompensa visível". É o ano mais produtivo do ciclo para quem construiu com consistência — e o mais frustrante para quem esperou que chegasse sem ter plantado antes.

Profissionalmente, negociações, promoções e iniciativas de escala têm mais chances de êxito agora do que em qualquer outro ano do ciclo. Relacionamentos se beneficiam de clareza de intenção e de comprometimento declarado. A saúde precisa de atenção — a tendência de sobrecarregar o corpo neste ano de alta atividade é real. Criativamente, é o momento de lançar o que estava amadurecendo.

Faça: negocie, avance, peça o reconhecimento que merece e aja com escala. Evite: o controle excessivo e a tendência de medir tudo pelo resultado material — o AP 8 bem vivido usa o poder a serviço de algo maior do que a si mesmo.`,

  9: `O Ano Pessoal 9 é o ano da conclusão e da liberação — o mais rico do ciclo, não o mais difícil. Este é o momento em que nove anos de experiências chegam à sua síntese: o que foi construído pode ser celebrado, o que não serviu pode ser soltado, e o terreno pode ser preparado para o ciclo que se inicia. Campbell descreve o AP 9 como "o ano do mestre que entrega o que sabe": há uma generosidade disponível aqui que não existia nos anos anteriores, porque o ciclo está completo.

Profissionalmente, conclusão de projetos longos, reconhecimento acumulado e encerramento de capítulos têm força específica. Relacionamentos passam por clareza: alguns se aprofundam, outros chegam ao seu fim natural. A saúde pede descanso e integração. Criativamente, obras de síntese — aquelas que reúnem o que você aprendeu — têm profundidade singular.

Faça: conclua, celebre, agradeça e solte o que já cumpriu seu papel. Evite: o apego ao que precisa ir — o maior risco do AP 9 é tentar carregar para o próximo ciclo o que pertence a este.`

};

/* ════════════════════════════════════════════════════════
   MÊS PESSOAL — Textos por número (1–9)
   50–70 palavras por entrada.
   Orientados à ação imediata — perceptivelmente mais curtos e práticos
   do que os textos de Ano Pessoal.
════════════════════════════════════════════════════════ */

const PERSONAL_MONTH_TEXTS = {

  1: `Este mês convida à iniciativa: dar o primeiro passo em algo que você vinha adiando, tomar uma decisão independente, ou redefinir uma direção que perdeu clareza. A energia disponível é de arranque — melhor aproveitada se direcionada a uma única frente de ação. O foco deste período é começar, não planejar o começo.`,

  2: `O foco deste mês é a cooperação e a atenção ao detalhe. Este período convida a fortalecer vínculos existentes, ouvir com mais presença do que o habitual e avançar em projetos que dependem de outros. Paciência com o ritmo dos processos é a habilidade mais valiosa agora — o que parece lento está construindo algo duradouro.`,

  3: `Este mês convida à expressão e à conexão social. É um período favorável para comunicar ideias, aparecer em contextos novos e criar com leveza. O foco deste período é mostrar — o que você faz, o que você pensa, o que você sente. A criatividade tem energia extra agora; aproveite para finalizar e lançar, não apenas para produzir.`,

  4: `O foco deste mês é a organização e a consistência. Este período convida ao trabalho metódico: estruturar o que está disperso, avançar em tarefas que exigem atenção sustentada, resolver pendências concretas. Não é o mês mais empolgante do ciclo — é o que produz os resultados que os meses mais visíveis dependem. Faça o que precisa ser feito.`,

  5: `Este mês convida ao movimento e à abertura ao inesperado. O foco deste período é a adaptabilidade: novas conexões, mudanças de plano, experiências que saem da rotina. Algo que parecia fixo pode se libertar agora, e essa libertação tende a ser bem-vinda. Mantenha a agenda mais flexível do que o habitual e diga sim para o que for genuinamente novo.`,

  6: `O foco deste mês é o cuidado — com vínculos, com saúde e com o ambiente ao redor. Este período convida à responsabilidade afetiva: estar presente para quem importa, ajustar o que está desequilibrado em casa ou no trabalho, e dar atenção ao próprio corpo. Pequenos atos de cuidado consistente têm impacto desproporcional agora.`,

  7: `Este mês convida à introspecção e ao aprofundamento. O foco deste período é a qualidade da atenção, não a quantidade de atividade: ler com mais calma, refletir antes de responder, pesquisar o que você quer entender melhor. É um período em que a solidão produtiva rende mais do que qualquer agitação social. Dê espaço ao que quer ser pensado.`,

  8: `O foco deste mês é a ação executiva e o alinhamento de recursos. Este período convida a negociar, avançar em metas concretas, e exercer autoridade com clareza de intenção. Decisões financeiras e profissionais tomadas agora têm mais sustentação do que em outros períodos. Use a clareza disponível — não é o momento de hesitar diante do que você sabe que precisa ser feito.`,

  9: `Este mês convida à conclusão e ao soltar. O foco deste período é encerrar o que está por encerrar: finalizar projetos, resolver pendências emocionais, reorganizar o que acumulou. Há uma qualidade de limpeza disponível agora que facilita deixar ir — aproveite para criar espaço, física e internamente, para o que está por vir.`

};

/* ════════════════════════════════════════════════════════
   DIA PESSOAL — Nota contextual única
   40 palavras. O número específico é exibido como referência direta
   aos textos TEXTS[n] do sistema central.
════════════════════════════════════════════════════════ */

const PERSONAL_DAY_NOTE = `O Dia Pessoal é o microtom do ciclo: a vibração específica de cada dia, calculada a partir do Mês Pessoal. Não define o que vai acontecer — define o tipo de energia disponível para navegar o que aparecer. Consulte o número do dia como um convite de atenção, não como uma previsão.`;

export { PERSONAL_YEAR_TEXTS, PERSONAL_MONTH_TEXTS, PERSONAL_DAY_NOTE };
