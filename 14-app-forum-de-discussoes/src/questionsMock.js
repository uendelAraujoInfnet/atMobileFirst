export const questions = [
    {
      question: 'O que é design responsivo?',
      options: [
        'Um design que funciona apenas em dispositivos móveis',
        'Um design que se ajusta a diferentes tamanhos de tela',
        'Um design que responde a cliques do usuário',
        'Um design que usa apenas CSS'
      ],
      correct: 1,
      justification: 'O design responsivo ajusta automaticamente o layout e conteúdo de acordo com o tamanho da tela.'
    },
    {
      question: 'Qual propriedade do CSS permite ajustar o layout com base no tamanho da tela?',
      options: [
        '@media',
        'position',
        'display',
        'float'
      ],
      correct: 0,
      justification: 'A regra @media no CSS é usada para aplicar estilos específicos com base em larguras ou outras características da tela.'
    },
    {
      question: 'O que é viewport em design responsivo?',
      options: [
        'Uma biblioteca JavaScript',
        'A janela visível de um dispositivo',
        'Uma propriedade CSS',
        'Uma regra de responsividade'
      ],
      correct: 1,
      justification: 'Viewport é a área visível da página em um dispositivo, essencial para designs responsivos.'
    },
    {
      question: 'Qual unidade de medida é mais apropriada para layouts responsivos?',
      options: [
        'px',
        'em',
        'rem',
        '%'
      ],
      correct: 3,
      justification: 'Unidades percentuais ajustam o tamanho relativo ao elemento pai, sendo ideais para layouts flexíveis.'
    },
    {
      question: 'Qual ferramenta facilita a criação de layouts flexíveis?',
      options: [
        'CSS Grid',
        'Float',
        'Inline-block',
        'Flexbox'
      ],
      correct: 3,
      justification: 'Flexbox facilita o posicionamento e dimensionamento de elementos em layouts flexíveis.'
    },
    {
      question: 'Qual tag meta é importante para design responsivo?',
      options: [
        '<meta name="viewport">',
        '<meta charset="utf-8">',
        '<meta http-equiv="X-UA-Compatible">',
        '<meta content="noindex">'
      ],
      correct: 0,
      justification: 'A tag <meta name="viewport"> define como o site é exibido em dispositivos móveis.'
    },
    {
      question: 'O que é breakpoint em CSS?',
      options: [
        'Um erro no código',
        'Um ponto de interrupção no código',
        'Um ponto no qual o layout muda de acordo com o tamanho da tela',
        'Uma propriedade de posicionamento'
      ],
      correct: 2,
      justification: 'Breakpoints são pontos definidos para ajustar o layout conforme o tamanho da tela muda.'
    },
    {
      question: 'Qual é uma técnica comum para imagens responsivas?',
      options: [
        'Usar imagens SVG',
        'Especificar várias versões da imagem com srcset',
        'Usar imagens JPG com qualidade alta',
        'Usar a propriedade display para ajustar o tamanho'
      ],
      correct: 1,
      justification: 'O atributo srcset permite definir várias versões de uma imagem para diferentes tamanhos de tela.'
    },
    {
      question: 'Qual destas é uma media query válida?',
      options: [
        '@media only screen and (max-width: 600px)',
        '@query max-width: 600px',
        '@screen media (600px)',
        '@media screen and size 600px'
      ],
      correct: 0,
      justification: 'Essa é a sintaxe correta para uma media query, que aplica estilos com base na largura máxima da tela.'
    },
    {
      question: 'O que é "viewport width" (vw) no CSS?',
      options: [
        'Uma unidade de medida baseada na altura do viewport',
        'Uma unidade de medida baseada na largura do viewport',
        'Uma ferramenta de design para dispositivos móveis',
        'Uma biblioteca para layouts responsivos'
      ],
      correct: 1,
      justification: 'Viewport width (vw) é uma unidade de medida que se ajusta com base na largura do viewport.'
    },
    
    // Mobile-First (10 questões)
    {
      question: 'O que é Mobile-First?',
      options: [
        'A abordagem de desenvolvimento de desktop para mobile',
        'A técnica de design voltada para dispositivos móveis',
        'Uma biblioteca de desenvolvimento mobile',
        'Um framework JavaScript'
      ],
      correct: 1,
      justification: 'Mobile-First é uma técnica de design onde o foco inicial é nos dispositivos móveis.'
    },
    {
      question: 'Qual é a principal vantagem de usar a abordagem Mobile-First?',
      options: [
        'Melhor experiência em desktops',
        'Prioriza o desempenho e a usabilidade em dispositivos móveis',
        'Simplifica o desenvolvimento de aplicações web',
        'Facilita a criação de interfaces complexas'
      ],
      correct: 1,
      justification: 'O Mobile-First garante que a experiência em dispositivos móveis seja otimizada desde o início.'
    },
    {
      question: 'Em qual ordem as consultas de mídia (media queries) são geralmente aplicadas em Mobile-First?',
      options: [
        'Do menor para o maior tamanho de tela',
        'Do maior para o menor tamanho de tela',
        'Apenas para desktops',
        'Em ordem aleatória'
      ],
      correct: 0,
      justification: 'No Mobile-First, o design começa para dispositivos pequenos e as media queries ajustam para telas maiores.'
    },
    {
      question: 'Qual dessas técnicas ajuda no design Mobile-First?',
      options: [
        'Usar breakpoints para telas pequenas',
        'Usar apenas px como unidade de medida',
        'Ignorar telas de desktop',
        'Carregar todos os recursos em dispositivos móveis'
      ],
      correct: 0,
      justification: 'Usar breakpoints apropriados permite que o layout se adapte melhor ao tamanho da tela.'
    },
    {
      question: 'Como uma abordagem Mobile-First impacta o desempenho?',
      options: [
        'Desempenho é piorado para mobile',
        'Melhora o carregamento de recursos para dispositivos móveis',
        'Não há impacto no desempenho',
        'Otimiza apenas o desempenho em desktops'
      ],
      correct: 1,
      justification: 'Mobile-First otimiza a carga e a experiência para dispositivos móveis, resultando em menor consumo de recursos.'
    },
    {
      question: 'Qual propriedade CSS é crucial em designs Mobile-First?',
      options: [
        'min-width',
        'max-width',
        'flex',
        'z-index'
      ],
      correct: 1,
      justification: 'A propriedade max-width ajuda a ajustar o layout em designs responsivos Mobile-First.'
    },
    {
      question: 'Qual é o conceito de "progressive enhancement"?',
      options: [
        'Adicionar recursos móveis a sites existentes',
        'O design básico para todos e melhorias para navegadores mais capazes',
        'Melhorar o desempenho em dispositivos antigos',
        'Criar uma versão desktop primeiro e depois adaptar para mobile'
      ],
      correct: 1,
      justification: 'Progressive enhancement adiciona melhorias para dispositivos mais modernos, mantendo o design básico em outros.'
    },
    {
      question: 'Qual é a melhor prática ao usar fontes em um design Mobile-First?',
      options: [
        'Usar px como unidade principal',
        'Usar em ou rem para permitir redimensionamento',
        'Fixar o tamanho da fonte em 16px',
        'Usar apenas fontes grandes'
      ],
      correct: 1,
      justification: 'Usar em ou rem facilita o redimensionamento da fonte em dispositivos com diferentes densidades de tela.'
    },
    {
      question: 'Por que o Mobile-First é importante no SEO?',
      options: [
        'Motores de busca priorizam sites otimizados para mobile',
        'SEO depende apenas de conteúdo',
        'Design para desktop é irrelevante',
        'Google não se preocupa com designs responsivos'
      ],
      correct: 0,
      justification: 'Sites otimizados para dispositivos móveis são priorizados por motores de busca como o Google.'
    },
    {
      question: 'Qual é a primeira etapa ao criar um layout Mobile-First?',
      options: [
        'Criar uma versão desktop e depois ajustar',
        'Criar uma estrutura leve e depois adicionar breakpoints',
        'Ignorar o desempenho em mobile',
        'Definir o layout para telas grandes primeiro'
      ],
      correct: 1,
      justification: 'Em Mobile-First, o layout básico é feito para dispositivos móveis e depois adaptado para telas maiores.'
    },
    
    // Usabilidade e ReactJS/Native (10 questões)
    {
      question: 'Qual é um princípio importante de usabilidade em web design?',
      options: [
        'Adicionar animações complexas',
        'Facilitar a navegação e a interação do usuário',
        'Usar cores vibrantes em toda a página',
        'Carregar todas as imagens de uma só vez'
      ],
      correct: 1,
      justification: 'A usabilidade se concentra em facilitar a navegação e a interação para o usuário.'
    },
    {
      question: 'Qual é o objetivo principal da usabilidade?',
      options: [
        'Tornar a interface bonita',
        'Garantir que o usuário possa usar o produto de forma eficiente e satisfatória',
        'Adicionar o máximo de funcionalidades',
        'Carregar a página o mais rápido possível'
      ],
      correct: 1,
      justification: 'Usabilidade visa facilitar o uso do produto de forma eficiente e satisfatória.'
    },
    {
      question: 'Como ReactJS melhora a usabilidade?',
      options: [
        'Permite desenvolvimento mobile',
        'Cria componentes reutilizáveis e atualiza a UI dinamicamente',
        'É mais rápido que CSS',
        'Usa HTML puro'
      ],
      correct: 1,
      justification: 'React permite criar interfaces dinâmicas e componentes reutilizáveis, melhorando a experiência do usuário.'
    },
    {
      question: 'Qual destes é um componente de ciclo de vida do React?',
      options: [
        'componentDidMount',
        'useEffect',
        'render',
        'All of the above'
      ],
      correct: 3,
      justification: 'Todos esses são métodos ou hooks utilizados no ciclo de vida de componentes do React.'
    },
    {
      question: 'O que é React Native?',
      options: [
        'Uma biblioteca para desenvolvimento mobile',
        'Uma versão móvel do ReactJS',
        'Uma ferramenta para criar sites responsivos',
        'Uma biblioteca para criação de APIs'
      ],
      correct: 0,
      justification: 'React Native é uma biblioteca para o desenvolvimento de aplicativos móveis usando React.'
    },
    {
      question: 'Como o React Native difere do ReactJS?',
      options: [
        'React Native é para web, ReactJS é para mobile',
        'React Native usa componentes nativos, ReactJS usa DOM',
        'ReactJS é mais rápido que o React Native',
        'ReactJS não permite criar aplicativos móveis'
      ],
      correct: 1,
      justification: 'React Native usa componentes nativos do sistema operacional enquanto ReactJS manipula o DOM da web.'
    },
    {
      question: 'O que é um hook no React?',
      options: [
        'Uma função especial que permite usar estado e outros recursos no React',
        'Um método para renderizar componentes',
        'Uma API para manipulação de eventos',
        'Um sistema de roteamento'
      ],
      correct: 0,
      justification: 'Hooks são funções especiais que permitem usar estado e outros recursos em componentes funcionais.'
    },
    {
      question: 'Qual hook permite a adição de efeitos colaterais em um componente funcional no React?',
      options: [
        'useState',
        'useEffect',
        'useContext',
        'useReducer'
      ],
      correct: 1,
      justification: 'useEffect permite realizar efeitos colaterais, como chamadas de API, em componentes funcionais.'
    },
    {
      question: 'O que significa o termo "props" no React?',
      options: [
        'Propriedades passadas para componentes',
        'A função principal do React',
        'O layout de um componente',
        'Uma função de ciclo de vida'
      ],
      correct: 0,
      justification: 'Props (propriedades) são parâmetros passados para componentes React para personalizar seu comportamento.'
    },
    {
      question: 'Como funciona o Virtual DOM no React?',
      options: [
        'É uma cópia do DOM real que React usa para otimizar atualizações',
        'É o DOM gerado em tempo real pelo navegador',
        'É uma biblioteca externa usada pelo React',
        'É o DOM do sistema operacional'
      ],
      correct: 0,
      justification: 'O Virtual DOM é uma cópia do DOM real que React usa para minimizar alterações desnecessárias e melhorar a performance.'
    }
  ];
