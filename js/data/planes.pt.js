// planes.pt.js — Textos interpretativos dos Planos de Expressão
// Pasta de destino: /js/data/
//
// USO:
//   import { PLANE_DOMINANT, PLANE_LOW, PLANE_SPECIAL } from './data/planes.pt.js';
//
// PLANE_DOMINANT['fisico'|'emocional'|'mental'|'intuitivo']
//   → texto do plano dominante (100–120 palavras)
//
// PLANE_LOW['fisico'|'emocional'|'mental'|'intuitivo']
//   → nota de convite quando o plano tem 0 ou mínimo de letras (60–80 palavras)
//
// PLANE_SPECIAL['equilibrio'|'semFisico'|'semIntuitivo']
//   → configurações especiais

/* ════════════════════════════════════════════════
   PLANE_DOMINANT — Plano com mais letras no nome
   Como a pessoa processa a realidade, força principal,
   área de atenção e pergunta de autoconhecimento.
   100–120 palavras por entrada.
════════════════════════════════════════════════ */

const PLANE_DOMINANT = {

  fisico: `Sua porta de entrada para a realidade é a ação. Antes de analisar ou sentir em profundidade, você já está se movendo — testando, construindo, ajustando pelo contato direto com o que é concreto. O Plano Físico dominante confere uma inteligência prática rara: você aprende fazendo, e sua credibilidade natural está em resultados tangíveis. A força dessa configuração é a capacidade de manifestar onde outros ainda estão planejando. A área de atenção é o que fica de fora quando o foco é a ação: os registros internos mais sutis — emoções não processadas, intuições não ouvidas — podem se acumular em silêncio. O que dentro de você precisa ser sentido antes de ser feito?`,

  emocional: `Sua porta de entrada para a realidade é a relação. Antes de agir ou analisar, você já sente o campo — quem está bem, o que está desequilibrado, o que a situação emocionalmente pede. O Plano Emocional dominante confere uma inteligência relacional profunda: você percebe nuances que outros ignoram, e sua presença em qualquer ambiente cria um efeito de campo que as pessoas sentem sem conseguir nomear. A força dessa configuração é a capacidade de nutrir conexões genuínas e de ler a realidade humana com precisão. A área de atenção é o risco de tomar decisões por estado emocional quando a situação pediria distância analítica. O que você sente agora — e o que você sabe?`,

  mental: `Sua porta de entrada para a realidade é a análise. Antes de agir ou sentir, você já está organizando a informação — identificando padrões, avaliando possibilidades, formulando a pergunta certa. O Plano Mental dominante confere uma capacidade analítica que torna seu pensamento uma das suas ferramentas mais confiáveis. Você raramente age sem ter mapeado o terreno, e essa clareza estrutural é uma das suas forças mais reconhecidas. A área de atenção é o que a mente deixa de fora ao estruturar demais: o corpo que sente antes de pensar, a emoção que sabe antes de entender, a intuição que chega antes da evidência. Quando foi a última vez que você agiu sem saber por quê?`,

  intuitivo: `Sua porta de entrada para a realidade é a percepção direta. Antes de analisar ou agir, você já recebeu algo — uma impressão, uma leitura do campo, uma certeza que chegou antes de qualquer dado concreto. O Plano Intuitivo dominante não é misticismo: é um estilo cognitivo que integra informações sutis antes da consciência racional tê-las processado. Você toma decisões por síntese antes de ter explicação — e frequentemente está certo de formas que surpreendem quem dependia de mais dados. A área de atenção é a comunicação dessas percepções: o que você sabe por dentro pode ser difícil de traduzir em linguagem que outros possam seguir. Como você comunica o que percebe sem ter como provar?`

};

/* ════════════════════════════════════════════════
   PLANE_LOW — Convite quando o plano tem mínimo de letras
   Tom de oportunidade, não de carência.
   60–80 palavras por entrada.
════════════════════════════════════════════════ */

const PLANE_LOW = {

  fisico: `O Plano Físico tem pouca representação no seu nome — não uma ausência de capacidade, mas um convite a cultivar a inteligência do corpo e da ação concreta. Seu processamento tende a acontecer em registros mais internos antes de chegar à manifestação. O desenvolvimento aqui passa por aprender a confiar na ação como forma de conhecimento: às vezes a melhor forma de entender algo é começar a fazê-lo antes de ter certeza.`,

  emocional: `O Plano Emocional tem pouca representação no seu nome — não uma frieza de caráter, mas um convite a aprofundar a linguagem das emoções e das relações. Seu processamento tende ao analítico ou ao intuitivo antes de passar pelo sentir explícito. O desenvolvimento aqui abre um registro de inteligência que enriquece os outros sem substituí-los: a emoção que é reconhecida antes de ser gerenciada frequentemente carrega informações que nenhuma análise consegue substituir.`,

  mental: `O Plano Mental tem pouca representação no seu nome — não uma limitação intelectual, mas um convite a fortalecer a estruturação analítica do pensamento. Seu processamento tende a acontecer por ação direta, por sentimento ou por percepção intuitiva antes de passar pela análise formal. O desenvolvimento aqui cria uma capacidade de articular em linguagem lógica o que você já sabe por outros meios — tornando o que você percebe acessível a quem pensa de forma mais sequencial.`,

  intuitivo: `O Plano Intuitivo tem pouca representação no seu nome — não uma incapacidade de perceber além do racional, mas um convite a desenvolver maior confiança no que chega antes da evidência. Seu processamento tende ao concreto, ao emocional ou ao analítico antes de passar pela percepção direta. O desenvolvimento aqui abre um canal de informação que opera abaixo do nível da atenção consciente: aprender a notar o que você sente antes de saber por quê é o primeiro movimento nessa direção.`

};

/* ════════════════════════════════════════════════
   PLANE_SPECIAL — Configurações especiais
════════════════════════════════════════════════ */

const PLANE_SPECIAL = {

  // Todos os planos com contagens similares
  equilibrio: `Seus quatro planos têm distribuição equilibrada — nenhum domina com folga sobre os outros. É versatilidade estrutural — acesso real a quatro registros de processamento sem a compulsão de um único canal dominante. Você tem acesso a múltiplos registros de processamento sem a compulsão de um único canal dominante. A força dessa configuração é a adaptabilidade real: você consegue agir, sentir, analisar e perceber intuitivamente conforme a situação exige — em vez de traduzir tudo para a linguagem do seu plano favorito. O desafio é a direção: sem uma frequência dominante guiando, a escolha de qual plano ativar é sua — e isso exige autoconhecimento.`,

  // Nenhuma ou quase nenhuma letra no plano físico
  semFisico: `O Plano Físico está ausente ou quase ausente no seu nome. Isso não significa desconexão do corpo — mas sugere que sua relação com a materialidade e a ação concreta exige atenção deliberada. Você provavelmente processa a realidade em registros mais internos (emocional, mental ou intuitivo) antes de chegar à manifestação física. O desenvolvimento nessa área abre acesso a uma inteligência prática que os outros planos não cobrem: o corpo sabe coisas que a mente ainda não formulou, e a ação revela o que a reflexão apenas antecipa.`,

  // Nenhuma ou quase nenhuma letra no plano intuitivo
  semIntuitivo: `O Plano Intuitivo está ausente ou quase ausente no seu nome. Isso não implica falta de profundidade — mas sugere que seu acesso ao conhecimento não-racional, ao que chega antes da evidência, pode exigir cultivo consciente. Você provavelmente depende mais dos planos físico, emocional ou mental para navegar o mundo, e esses registros são robustos. O desenvolvimento aqui não é substituir sua lógica por feeling, mas aprender a notar as informações sutis que já chegam — e que muitas vezes são descartadas antes de serem reconhecidas como dados.`

};

export { PLANE_DOMINANT, PLANE_LOW, PLANE_SPECIAL };
