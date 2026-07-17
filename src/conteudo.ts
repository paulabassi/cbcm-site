import { ASSETS } from './constants';

// ✅ Este é o ÚNICO arquivo que deve ser editado manualmente pelo GitHub.
// Os demais arquivos (translations.ts, constants.ts) não devem ser tocados.

// ⚠️ EDITE SÓ O TEXTO ENTRE ASPAS. NÃO APAGUE VÍRGULAS OU CHAVES { }
export const conteudoOriginal = {
  pt: {
    // ⚠️ EDITE SÓ O TEXTO ENTRE ASPAS. NÃO APAGUE VÍRGULAS OU CHAVES { }
    
    // Banner de Alerta (topo do site)
    alert: {
      message: 'Inscrições e submissões estão encerradas! Nos vemos no evento.'
    },

    // Banner superior com os minicursos
    topBanner: {
      show: true, // Defina como false para esconder o banner do topo completamente
      clickable: true, // Defina como false para que o banner seja apenas informativo, sem clique ou ação
      text: 'Conheça os minicursos',
      bgClass: 'bg-orange-950/90 hover:bg-orange-900 border-b border-orange-500/20',
      textClass: 'text-orange-400 group-hover:text-orange-300'
    },

    // Informações da seção principal do topo (Hero)
    hero: {
      date: '22, 23 e 24 de Julho de 2026',
      feeExtension: 'últimas vagas disponíveis! garanta sua participação!',
      viewSchedule: 'O cronograma completo já está disponível. Clique aqui para conferir!',
      viewScheduleMobile: 'Cronograma já disponível!',
      // Configurações dos botões de ação na seção principal (Hero)
      buttons: {
        schedule: {
          show: true, // Defina como false para esconder este botão
          text: 'Cronograma Atualizado',
          href: '#programacao'
        },
        minicursos: {
          show: true, // Defina como false para esconder este botão
          text: 'Conheça os minicursos'
        },
        posters: {
          show: true, // Defina como false para esconder este botão
          text: 'Normas de Pôster',
          href: '#posters'
        }
      }
    },

    // Anúncio do WhatsApp (Banner verde)
    announcement: {
      whatsapp: 'Informações serão divulgadas no dia do evento pelo grupo de WhatsApp Associados SOCIBRACOM',
      joinGroup: 'Escaneie o QR Code e participe do grupo',
    },

    // Submissão de Resumos
    abstractSubmission: {
      description: 'As submissões de trabalhos para o XIII CBCM estão encerradas.\n\nAgradecemos a todos que enviaram suas pesquisas!',
      submissionCount: '+280 submissões recebidas',
      limit: 'Limite de 1 trabalho por inscrição',
      limitShort: '1 RESUMO POR CPF',
      // Configuração do botão de ver regulamento completo
      regulationButton: {
        show: true, // Defina como false para esconder o botão do regulamento
        text: 'Regulamento Completo'
      }
    },

    // Taxas de Inscrição / Lote
    registration: {
      validUntil: '*LOTE ENCERRADO',
      prices: {
        undergrad: 'R$ 203,50',
        teacher: 'R$ 203,50',
        grad: 'R$ 418,00',
        professional: 'R$ 616,00',
      },
      cta: {
        description: 'As inscrições para o XIII CBCM foram encerradas. Agradecemos a todos pelo interesse e nos vemos no evento!',
        descriptionMobile: 'Inscrições encerradas. Agradecemos a todos e nos vemos no evento!',
      }
    },

    // Hospedagem / Descontos em Hotéis e Local do Evento
    location: {
      venue: 'Faculdade de Arquitetura e Urbanismo e de Design da Universidade de São Paulo - FAUUSP',
      accommodationSubtitle: 'Confira as opções de hospedagem com descontos exclusivos para os congressistas do XIII CBCM.',
      discount: {
        title: 'Hospedagem no Transamérica Fit Villa Lobos',
        description: 'Garanta sua estadia com condições especiais utilizando o PROMO CODE do evento.',
        steps: [
          "Acesse letsatlantica.com.br",
          "Busque por Transamérica Fit Villa Lobos",
          "Defina o período de estadia",
          "Escolha a quantidade de pessoas",
          "Insira XIIICBCM in 'Tem um código?'",
          "Clique em procurar e reserve!"
        ]
      },
      discount2: {
        title: 'Hospedagem no ibis Styles SP Faria Lima',
        description: 'Diárias exclusivas para o evento: R$ 445 (Duplo) | R$ 390 (Single)',
      }
    },

    // Orientações do pôster
    posterGuidelines: {
      formatDetails: [
        'Formato retrato (vertical);',
        'Tamanho máximo de 90x120cm (largura x altura);',
        'Estrutura superior e cordão para ser pendurado em um tripé com gancho único;',
        'Utilize fonte tamanho 32 ou superior para garantir leitura a aproximadamente 1,5 m.'
      ],
      structureItems: [
        'Título idêntico ao do resumo submetido;',
        'Nome de todos os autores e e-mail do autor responsável para correspondência;',
        'Logomarca e/ou nome da instituição de origem;',
        'Conteúdo organizado, preferencialmente, nas seguintes seções:'
      ],
      presentationIntro: 'Durante a apresentação, o autor responsável ou um dos coautores deverá:',
      presentationItems: [
        'Permanecer ao lado do pôster durante todo o horário definido pela organização, conforme o cronograma oficial;',
        'Apresentar o trabalho à comissão avaliadora;',
        'Responder aos questionamentos da comissão avaliadora.'
      ]
    },

    // Minicursos (Short Courses)
    minicursos: {
      show: true, // Defina como false para esconder completamente a seção e botões de minicursos do site
      title: 'Minicursos',
      subtitle: 'Desenvolva suas habilidades práticas e teóricas através dos nossos minicursos altamente qualificados, ministrados por especialistas nacionais e internacionais no Dia 0 (21 de julho de 2026).',
      disclaimer: '*Inscrições exclusivas para congressistas inscritos no XIII CBCM.',
      viewDetails: 'Ver detalhes',
      close: 'Fechar',
      location: 'Escola de Educação Física e Esporte da Universidade de São Paulo (EEFE-USP)',
      date: '21 de julho de 2026',
      howItWorks: {
        title: 'Como funcionará a inscrição?',
        steps: [
          'Nesta etapa será realizada apenas uma pré-inscrição.',
          'As inscrições vão até o dia 15/07 ou até o encerramento das vagas.',
          'Cada minicurso será confirmado somente se atingir o mínimo de 15 inscritos.',
          'Após a confirmação, os participantes pré-inscritos receberão as orientações para efetuar o pagamento da taxa de R$ 50,00, garantindo sua vaga.'
        ],
        limitsLabel: 'Vagas limitadas:',
        limits: [
          'mínimo de 15 participantes para abertura do curso;',
          'máximo de 40 participantes por minicurso.'
        ],
        linkText: 'Link para a pré-inscrição',
        linkUrl: 'https://forms.gle/EK3KyWCauA3d4Dor6'
      },
      courses: [
        {
          id: 'mc1',
          time: '13:30 - 17:30',
          title: 'Minicurso 1: Técnicas de monitoramento cortical durante o controle locomotor: Fundamentos e aplicações com fNIRS',
          instructor: 'Prof. Dr. Diego Orcioli-Silva (UNESP – Rio Claro)',
          description: 'A espectroscopia de infravermelho próximo funcional (fNIRS) tem se tornado uma ferramenta valiosa no mapeamento cortical. Este minicurso introduzirá os fundamentos biofísicos da fNIRS, noções de processamento de sinais hemodinâmicos e exemplos práticos de sua aplicação na investigação do controle cortical da marcha humana em diferentes populações.'
        },
        {
          id: 'mc2',
          time: '13:30 - 15:30',
          title: 'Minicurso 2: Practical Workshop on the Constraints-led Approach and Nonlinear Pedagogy (Ministrado em inglês)',
          instructor: 'Prof. Dr. James Rudd (Norwegian School of Sport Sciences)',
          description: 'Este workshop prático aborda a teoria dos sistemas dinâmicos, dinâmica ecológica e como os profissionais podem criar ambientes de aprendizagem usando a Abordagem Baseada em Restrições (CLA) e a Pedagogia Não Linear. Os participantes explorarão restrições de tarefas, ambientais e individuais para otimizar a aquisição de habilidades e o desenvolvimento atlético.'
        },
        {
          id: 'mc3',
          time: '14:00 - 16:30',
          title: 'Minicurso 3: Introdução ao software R para análise exploratória de dados',
          instructor: 'Prof. Dr. Flávio Henrique Bastos (EEFE-USP)',
          description: 'Uma introdução prática ao ambiente de programação R focado na área de comportamento motor. O curso abordará desde a instalação do ambiente, manipulação e limpeza de bases de dados simples, até a geração de estatísticas descritivas básicas e gráficos informativos de alta qualidade com ggplot2.'
        },
        {
          id: 'mc4',
          time: '14:00 - 16:30',
          title: 'Minicurso 4: Ciência de Redes no Comportamento Motor: Aplicações para avaliação e intervenção motora',
          instructor: 'Prof. Dr. Paulo Felipe Ribeiro Bandeira (URCA)',
          description: 'Aborda a aplicação de métodos baseados em redes complexas para analisar dados de desempenho motor, interações de aprendizagem e redes sociais/socioafetivas em cenários esportivos e escolares. Serão apresentados conceitos teóricos e ferramentas computacionais para mapear e intervir em dinâmicas complexas de movimento.'
        },
        {
          id: 'mc5',
          time: '14:00 - 16:30',
          title: 'Minicurso 5: Avaliação Motora: o teste MABC em foco',
          instructor: 'Prof. Dr. Lúcio Fernandes Ferreira (UFAM)',
          description: 'O Movement Assessment Battery for Children (MABC-2) é um dos instrumentos de referência mundial na identificação e diagnóstico de Transtorno do Desenvolvimento da Coordenação (TDC). Este minicurso foca na correta aplicação, pontuação e interpretação qualitativa e quantitativa dos subtestes do MABC-2.'
        }
      ]
    },

    // Lista de Palestrantes
    speakersList: {
      international: [
        { 
          name: 'Prof. Dr. Fabian Romero Clavijo', 
          role: 'CANADÁ', 
          univ: "Bishop's University",
          image: ASSETS.SPEAKERS.INTERNATIONAL.FABIAN_ROMERO
        },
        { 
          name: 'Prof. Dr. Gregor Schöner', 
          role: 'ALEMANHA', 
          univ: 'Ruhr-Universität Bochum',
          image: ASSETS.SPEAKERS.INTERNATIONAL.GREGOR_SCHONER
        },
        { 
          name: 'Prof. Dr. James Rudd', 
          role: 'NORUEGA', 
          univ: 'Norwegian School of Sport Sciences',
          image: ASSETS.SPEAKERS.INTERNATIONAL.JAMES_RUDD
        },
        { 
          name: 'Prof. Dr. Jean-Jacques Orban de Xivry', 
          role: 'BÉLGICA', 
          univ: 'KU Leuven Institute',
          image: ASSETS.SPEAKERS.INTERNATIONAL.ORBAN_DE_XIVRY
        },
        { 
          name: 'Prof. Dr. José António Maia', 
          role: 'PORTUGAL', 
          univ: 'Faculdade de Desporto da Universidade do Porto',
          image: ASSETS.SPEAKERS.INTERNATIONAL.JOSE_MAIA
        },
        { 
          name: 'Profa. Dra. Katharina Stibrant Sunnerhagen', 
          role: 'SUÉCIA', 
          univ: 'University of Gothenburg',
          image: ASSETS.SPEAKERS.INTERNATIONAL.KATHARINA_SUNNERHAGEN
        },
        { 
          name: 'Prof. Dr. Mark L. Latash', 
          role: 'EUA', 
          univ: 'Pennsylvania State University',
          image: ASSETS.SPEAKERS.INTERNATIONAL.MARK_LATASH
        },
        { 
          name: 'Prof. Dr. Matthias Weigelt', 
          role: 'ALEMANHA', 
          univ: 'University of Paderborn',
          image: ASSETS.SPEAKERS.INTERNATIONAL.MATTHIAS_WEIGELT
        },
        { 
          name: 'Profa. Dra. Sara Pereira', 
          role: 'PORTUGAL', 
          univ: 'Faculdade de Desporto da Universidade do Porto',
          image: ASSETS.SPEAKERS.INTERNATIONAL.SARA_PEREIRA
        },
        { 
          name: 'Prof. Dr. Stuart Baker', 
          role: 'REINO UNIDO', 
          univ: 'Newcastle University',
          image: ASSETS.SPEAKERS.INTERNATIONAL.STUART_BAKER
        },
      ],
      national: [
        { 
          name: 'Profa. Dra. Cinthya Walter', 
          role: 'MA', 
          univ: 'Universidade Federal do Maranhão',
          image: ASSETS.SPEAKERS.NATIONAL.CINTHYA_WALTER
        },
        { 
          name: 'Prof. Dr. Danilo Silva', 
          role: 'SE', 
          univ: 'Universidade Federal de Sergipe',
          image: ASSETS.SPEAKERS.NATIONAL.DANILO_SILVA
        },
        { 
          name: 'Prof. Dr. Fabio Augusto Barbieri', 
          role: 'SP', 
          univ: 'Universidade Estadual Paulista',
          image: ASSETS.SPEAKERS.NATIONAL.FABIO_BARBIERI
        },
        { 
          name: 'Prof. Dr. Giordano Bonuzzi', 
          role: 'DF', 
          univ: 'Universidade de Brasília',
          image: ASSETS.SPEAKERS.NATIONAL.GIORDANO_BONUZZI
        },
        { 
          name: 'Prof. Dr. Go Tani', 
          role: 'SP', 
          univ: 'Escola de Educação Física e Esporte da USP',
          image: ASSETS.SPEAKERS.NATIONAL.GO_TANI
        },
        { 
          name: 'Prof. Dr. Herbert Ugrinowitsch', 
          role: 'MG', 
          univ: 'Universidade Federal de Minas Gerais',
          image: ASSETS.SPEAKERS.NATIONAL.HERBERT_UGRINOWITSCH
        },
        { 
          name: 'Profa. Dra. Isabel de Camargo Neves Sacco', 
          role: 'SP', 
          univ: 'Faculdade de Medicina da USP',
          image: ASSETS.SPEAKERS.NATIONAL.ISABEL_SACCO
        },
        { 
          name: 'Prof. Dr. José Barela', 
          role: 'SP', 
          univ: 'Universidade Estadual Paulista',
          image: ASSETS.SPEAKERS.NATIONAL.JOSE_BARELA
        },
        { 
          name: 'Prof. Dr. José Roberto de Godoi', 
          role: 'RO', 
          univ: 'Universidade Federal de Rondônia',
          image: ASSETS.SPEAKERS.NATIONAL.JOSE_GODOI
        },
        { 
          name: 'Profa. Dra. Juliana Barbosa Goulardins', 
          role: 'BA', 
          univ: 'Escola Bahiana de Medicina e Saúde Pública',
          image: ASSETS.SPEAKERS.NATIONAL.JULIANA_GOULARDINS
        },
        { 
          name: 'Prof. Dr. Lucio Ferreira', 
          role: 'AM', 
          univ: 'Universidade Federal do Amazonas',
          image: ASSETS.SPEAKERS.NATIONAL.LUCIO_FERREIRA
        },
        { 
          name: 'Profa. Dra. Natalia Duarte Pereira', 
          role: 'SP', 
          univ: 'Universidade Federal de São Carlos', 
          image: ASSETS.SPEAKERS.NATIONAL.NATALIA_PEREIRA
        },
        { 
          name: 'Profa. Dra. Paula Fávaro Polastri Zago', 
          role: 'SP', 
          univ: 'Universidade Estadual Paulista', 
          image: ASSETS.SPEAKERS.NATIONAL.PAULA_ZAGO
        },
        { 
          name: 'Dr. Paulo Cezar Rocha dos Santos', 
          role: 'RJ', 
          univ: "Instituto D'Or",
          image: ASSETS.SPEAKERS.NATIONAL.PAULO_CEZAR
        },
        { 
          name: 'Prof. Dr. Paulo Felipe Bandeira', 
          role: 'CE', 
          univ: 'Universidade Regional do Cariri',
          image: ASSETS.SPEAKERS.NATIONAL.PAULO_FELIPE
        },
        { 
          name: 'Prof. Dr. Rafael dos Santos Henrique', 
          role: 'PE', 
          univ: 'Universidade Federal de Pernambuco',
          image: ASSETS.SPEAKERS.NATIONAL.RAFAEL_HENRIQUE
        },
        { 
          name: 'Prof. Dr. Renato Moraes', 
          role: 'SP', 
          univ: 'EEFERP-USP',
          image: ASSETS.SPEAKERS.NATIONAL.RENATO_MORAES
        },
        { 
          name: 'Prof. Dr. Ricardo Drews', 
          role: 'RS', 
          univ: 'Universidade Federal de Santa Maria',
          image: ASSETS.SPEAKERS.NATIONAL.RICARDO_DREWS
        },
        { 
          name: 'Prof. Dr. Rodolfo Benda', 
          role: 'RS', 
          univ: 'Universidade Federal de Pelotas', 
          image: ASSETS.SPEAKERS.NATIONAL.RODOLFO_BENDA
        },
        { 
          name: 'Prof. Dr. Sérgio Tosi Rodrigues', 
          role: 'SP', 
          univ: 'Universidade Estadual Paulista', 
          image: ASSETS.SPEAKERS.NATIONAL.SERGIO_RODRIGUES
        },
        { 
          name: 'Prof. Dr. Vitor Profeta', 
          role: 'MG', 
          univ: 'Universidade Federal de Minas Gerais',
          image: ASSETS.SPEAKERS.NATIONAL.VITOR_PROFETA
        }
      ]
    },

    // Programação completa do Evento
    schedule: {
      day0: [
        { time: '13:30 - 17:30', activity: 'Minicurso: Técnicas de monitoramento cortical durante o controle locomotor: Fundamentos e aplicações com fNIRS', details: 'Prof. Dr. Diego Orcioli-Silva (UNESP-Rio Claro)' },
        { time: '13:30 - 15:30', activity: 'Minicurso: Practical Workshop on the Constraints-led Approach and Nonlinear Pedagogy', details: 'Prof. Dr. James Rudd (Norwegian School of Sport Sciences)' },
        { time: '14:00 - 16:30', activity: 'Minicurso: Introdução ao software R para análise exploratória de dados', details: 'Prof. Dr. Flávio Henrique Bastos (EEFE-USP)' },
        { time: '14:00 - 16:30', activity: 'Minicurso: Ciência de Redes no Comportamento Motor: Aplicações para avaliação e intervenção motora', details: 'Prof. Dr. Paulo Felipe Ribeiro Bandeira (URCA-CE)' },
        { time: '14:00 - 16:30', activity: 'Minicurso: Avaliação Motora: o teste MABC em foco', details: 'Prof. Dr. Lúcio Fernandes Ferreira (UFAM)' },
      ],
      day1: [
        { time: '07:00 - 08:00', activity: 'Recepção' },
        { time: '08:00 - 09:00', activity: 'Abertura do Evento', details: 'Profa. Dra. Andrea M. Freudenheim (EEFEUSP)\n"Relação entre o Laboratório de Comportamento Motor (LACOM) e o Congresso Brasileiro de Comportamento Motor"' },
        { time: '09:00 - 10:00', activity: 'Palestra de Abertura', details: 'Prof. Dr. Mark Latash (Pennsylvania State University)\n"Processes that do not affect task performance"\nModeradora: Profa. Paula Fávaro Polastri Zago (UNESP-Bauru)' },
        { time: '10:00 - 10:30', activity: 'Coffee-Break' },
        { time: '10:30 - 12:00', activity: 'Temas Livres' },
        { time: '12:00 - 13:15', activity: 'Almoço' },
        { time: '13:15 - 13:35', activity: '20 Anos da Brazilian Journal of Motor Behavior', details: 'Prof. Dr. Fábio Barbieri (Presidente da SOCIBRACOM e Editor-Chefe da BJMB)' },
        { time: '13:45 - 15:15', activity: 'Mesas Redondas Simultâneas',  details: '▶ MESA 1 (sala 810) - Neurofisiologia e comportamento motor\nModerador: Prof. Dr. Jorge Oliveira (EEFE-USP)\n• Prof. Dr. Paulo Cezar Rocha dos Santos (Instituto D’Or)\n  Do controle cortical ao comportamento da marcha: plasticidade neural e motora no envelhecimento saudável e patológico\n• Profa. Dra. Paula Fávaro Polastri Zago (UNESP-Bauru)\n  Dinâmica cortical no controle postural: da preparação à resposta às perturbações\n\n▶ MESA 2 (sala 807) - Paradigmas clássicos do controle motor (comportamento visual, marcha e controle postural)\nModerador: Prof. Dr. Umberto Corrêa (EEFE-USP)\n• Prof. Dr. Sérgio Tosi Rodrigues (UNESP-Bauru)\n  Acoplamento percepção-ação durante a condução de veículo em pista sinuosa, sentado ou em pé: proposta de paradigma experimental\n• Prof. Dr. Fábio Barbieri (UNESP-Bauru)\n  Informação visual e locomoção na Doença de Parkinson: evidências e implicações para o controle motor\n• Prof. Dr. Renato Moraes (EEFERP-USP)\n  Controle da locomoção visualmente guiada em jovens e idosos\n\n▶ MESA 3 (sala 812) - Interdependência do Desenvolvimento Motor e outros Domínios\nModerador: Prof. Dr. Luciano Basso (EEFE-USP)\n• Prof. Dr. Lúcio Ferreira (UFAM)\n  Panorama do TDC na Amazônia: incidência, intervenção e acessibilidade\n• Prof. Dr. Paulo Felipe Ribeiro Bandeira (URCA)\n  Interdependência entre domínios do desenvolvimento motor: contribuições da ciência de redes e dos sistemas complexos\n• Prof. Dr. José Roberto Godoi (UNIR)\n  Avaliação da exposição de populações tradicionais ao mercúrio (metilmercúrio): subsídios às políticas públicas de saúde na Amazônia Ocidental\n\n▶ MESA 4 (auditório) - Aprendizagem Motora e Fatores Intervenientes\nModerador: Prof. Dr. Flavio Bastos (EEFE-USP)\n• Prof. Dr. Ricardo Drews (UFSM)\n  Motivação e aprendizagem motora: evidências e linhas de investigação\n• Prof. Dr. Vitor Profeta (UFMG)\n  Aprendizagem motora: reflexões sobre a individualidade e a especificidade\n• Prof. Dr. Giordano Bonuzzi (UnB)\n  Exercício físico e fadiga: efeitos contrastantes na aprendizagem motora'},
        { time: '15:15 - 16:30', activity: 'Coffee Break / Posters' },
        { time: '16:30 - 17:30', activity: 'Palestra', details: 'Prof. Dr. Go Tani (EEFE-USP)\n"Comportamento Motor no Brasil: contribuições para a intervenção profissional em Educação Física"\nModerador: Profa. Dra. Andrea Freudenheim (EEFE-USP)' },
        { time: '17:30 - 18:30', activity: 'Lançamento e assinatura de livro', details: '"Comportamento motor: Pesquisa e intervenção" (Eds. Go Tani & Umberto C. Corrêa)' },
      ],
      day2: [
        { time: '07:00 - 08:00', activity: 'Recepção' },
        { time: '08:00 - 09:00', activity: 'Assembleia SOCIBRACOM' },
        { time: '09:00 - 10:00', activity: 'Palestra', details: 'Profa. Dra. Katharina Sunnerhagen (University of Gothemburg)\n"The trajectory of functioning in the upper extremity after stroke"\nModerador: Prof. Dr. Sergio Silveira (EEFE-USP)' },
        { time: '10:00 - 10:30', activity: 'Coffee Break' },
        { time: '10:30 - 12:00', activity: 'Mesas Redondas Simultâneas',  details: '▶ MESA 1 (sala 810) - Avanços na relação entre Reabilitação e Comportamento Motor\nModerador: Prof. Dr. Jorge Oliveira (EEFE-USP)\n• Profa. Dra. Juliana Goulardins (Escola Bahiana de Medicina e Saúde Pública)\n  Reabilitar ou modular? O papel da neuromodulação nos avanços do comportamento motor\n• Profa. Dra. Isabel Sacco (USP)\n  Avanços na reabilitação de déficits musculoesqueléticos da neuropatia diabética: integrando a biomecânica, o comportamento motor e a prevenção\n• Profa. Dra. Natália Duarte Pereira (UFSCar)\n  Comportamento motor na hemiparesia pós-AVC: novas perspectivas em reabilitação\n\n▶ MESA 2 (sala 807) - As bases do comportamento motor para formação e detecção de talentos no esporte\nModerador: Prof. Dr. Umberto Corrêa (EEFE-USP)\n• Prof. Dr. Fabian Clavijo (INS Quebec)\n  Habilidades perceptivo-cognitivas na detecção e formação de talentos\n• Prof. Dr. Rodolfo Benda (UFPel)\n  Talento esportivo: um fenômeno complexo\n• Prof. Dr. Tony Meireles dos Santos (UFPE)\n  Letramento esportivo mediado por tecnologia: integração entre análise de desempenho, prescrição formativa e microlearning no surfe\n\n▶ MESA 3 (sala 812) - Desenvolvimento Motor e Atividade Física\nModerador: Prof. Dr. Luciano Basso (EEFE-USP)\n• Profa. Dra. Sara Pereira (FADEUP)\n  Exploração da espiral de engajamento motor no modelo de Stodden: resultados de uma análise de mediação no projeto REACT\n• Prof. Dr. Danilo Silva (UFS)\n  Desenvolvimento motor e atividade física: uma aproximação necessária\n• Prof. Dr. Rafael dos Santos Henrique (UFPE)\n  Avanços e perspectivas no estudo do Desenvolvimento Motor e Atividade Física na infância e adolescência\n\n▶ MESA 4 (auditório) - A Intersecção entre Aprendizagem Motora e Desenvolvimento Motor\nModerador: Prof. Dr. Flavio Bastos (EEFE-USP)\n• Prof. Dr. José Barela (UNESP-Bauru)\n  Desenvolvimento e aprendizagem: dois lados da mesma moeda?\n• Prof. Dr. Herbert Ugrinowitsch (UFMG)\n  Intersecção entre Aprendizagem Motora e Desenvolvimento Motor: do fenômeno à investigação\n• Profa. Dra. Cinthya Walter (UFMA)\n  Processo adaptativo: intersecção entre aprendizagem motora e desenvolvimento motor'},
        { time: '12:00 - 13:15', activity: 'Almoço' },
        { time: '13:15 - 14:15', activity: 'Palestra', details: 'Prof. Dr. James Rudd (Norwegian School of Sport Sciences)\n"Designing meaningful movement experiences across the lifecourse: pedagogical insights for skill learning and expertise"\nModerador: Prof. Dr. José Maia (FADEUP)' },
        { time: '14:30 - 15:30', activity: 'Palestra', details: 'Prof. Dr. Matthias Weigelt (Paderborn University)\n"(Neuro-)Cognitive Control of Movement and Performance in Sport"\nModeradora: Profa. Dra. Andrea Freudenheim (EEFE-USP)' },
        {   time: '15:30 - 16:30',  activity: 'Coffee Break / Posters',  details: 'Lançamento e assinatura do livro "Perception-Action Coupling: From posture and gaze to cognition and clinical applications" (Eds. Sergio Tosi Rodrigues, Cédrick T. Bonnet & José Angelo Barela)'},
        { time: '16:30 - 17:30', activity: 'Palestra', details: 'Prof. Dr. José Maia (Universidade do Porto)\n"Por que é “proibido” tratar da coordenação motora de crianças no Desenvolvimento Motor?"\nModerador: Prof. Dr. Go Tani (EEFE-USP)' },
        { time: '19:30', activity: 'Confraternização', details: 'Bar e Restaurante "O Pasquim: Bar & Prosa"\nR. Aspicuelta, 524 - Vila Madalena\nSão Paulo - SP, 05433-011' },
      ],
      day3: [
        { time: '08:00 - 09:00', activity: 'Recepção' },
        { time: '09:00 - 10:00', activity: 'Palestra', details: 'Prof. Dr. Jean-Jacques Orban de Xivry (KU Leuven)\n"Cerebellar age-related structural decline does not translate into functional deficits: Evidence for a motor reserve"\nModerador: Prof. Dr. Fábio Barbieri (UNESP-Bauru)' },
        { time: '10:00 - 10:30', activity: 'Coffee Break' },
        { time: '10:30 - 12:00', activity: 'Temas Livres' },
        { time: '12:00 - 13:15', activity: 'Almoço' },
        { time: '13:15 - 14:15', activity: 'Premiação e Palestra Jovem Pesquisador' },
        { time: '14:30 - 15:30', activity: 'Palestra', details: 'Prof. Dr. Stuart Baker (Newcastle University)\n"How the brain controls reaching"\nModerador: Prof. Dr. Flavio Bastos (EEFE-USP)' },
        { time: '15:30 - 16:30', activity: 'Coffee Break / Posters' },
        { time: '16:30 - 17:30', activity: 'Palestra de Encerramento', details: 'Prof. Dr. Gregor Schöner (Rhur University)\n"How complex are the descending activation patterns that drive simple arm movements?"\nModerador: Prof. Dr. Matheus Pacheco (EEFE-USP)' },
      ]
    },

    // Rodapé / Contato
    footer: {
      email: 'usp.cbcm@gmail.com'
    }
  },
  en: {
    // ⚠️ EDITE SÓ O TEXTO ENTRE ASPAS. NÃO APAGUE VÍRGULAS OU CHAVES { }
    
    // Alert Banner (top of site)
    alert: {
      message: 'Registrations and submissions are closed! See you at the event.'
    },

    // Top banner for short courses
    topBanner: {
      show: true, // Set to false to hide the top banner completely
      clickable: true, // Set to false to make the banner static text with no action or link
      text: 'Discover the short courses',
      bgClass: 'bg-orange-950/90 hover:bg-orange-900 border-b border-orange-500/20',
      textClass: 'text-orange-400 group-hover:text-orange-300'
    },

    // Main top section details (Hero)
    hero: {
      date: 'JULY 22-24, 2026',
      feeExtension: 'Last spots available! Secure your participation.',
      viewSchedule: 'The full schedule is now available. Click here to check it out!',
      viewScheduleMobile: 'Schedule available!',
      // Configuration for the main action buttons (Hero)
      buttons: {
        schedule: {
          show: true, // Set to false to hide this button
          text: 'Updated Schedule',
          href: '#programacao'
        },
        minicursos: {
          show: true, // Set to false to hide this button
          text: 'Short Courses'
        },
        posters: {
          show: true, // Set to false to hide this button
          text: 'Poster Guidelines',
          href: '#posters'
        }
      }
    },

    // WhatsApp Announcement (Green banner)
    announcement: {
      whatsapp: 'Information will be released on the day of the event by the SOCIBRACOM Associates WhatsApp group',
      joinGroup: 'Scan the QR Code and join the group',
    },

    // Abstract Submission
    abstractSubmission: {
      description: 'Abstract submissions for the XIII CBCM are now closed.\n\nThank you to everyone who submitted their research!',
      submissionCount: '+280 submissions received',
      limit: 'Limit of 1 work per registration',
      limitShort: '1 ABSTRACT PER AUTHOR',
      // Regulation Button settings
      regulationButton: {
        show: true, // Set to false to hide the regulation button
        text: 'Full Regulations'
      }
    },

    // Registration Fees
    registration: {
      validUntil: '*REGISTRATION CLOSED',
      prices: {
        undergrad: 'R$ 203.50',
        teacher: 'R$ 203.50',
        grad: 'R$ 418.00',
        professional: 'R$ 616.00',
      },
      cta: {
        description: 'Registrations for the XIII CBCM are now closed. Thank you for your interest and we look forward to seeing you at the event!',
        descriptionMobile: 'Registrations closed. Thank you all and see you at the event!',
      }
    },

    // Hotel Discounts and Venue Information
    location: {
      venue: 'Faculty of Architecture and Urbanism and Design of the University of São Paulo - FAUUSP',
      accommodationSubtitle: 'Check out the accommodation options with exclusive discounts for XIII CBCM attendees.',
      discount: {
        title: 'Accommodation at Transamérica Fit Villa Lobos',
        description: 'Secure your stay with special rates using the official event promo code.',
        steps: [
          "Access letsatlantica.com.br",
          "Search for Transamérica Fit Villa Lobos",
          "Define the stay period",
          "Choose the number of people",
          "Insert XIIICBCM in 'Have a code?'",
          "Click search and reserve!"
        ]
      },
      discount2: {
        title: 'Accommodation at ibis Styles SP Faria Lima',
        description: 'Exclusive rates for the event: R$ 445 (Double) | R$ 390 (Single)',
      }
    },

    // Poster Guidelines
    posterGuidelines: {
      formatDetails: [
        'Portrait format (vertical);',
        'Maximum size of 90x120cm (width x height);',
        'Upper structure and cord to be hung on a single-hook tripod;',
        'Use font size 32 or larger to ensure readability at approximately 1.5 m.'
      ],
      structureItems: [
        'Title identical to the submitted abstract;',
        'Names of all authors and email of the corresponding author for correspondence;',
        'Logo and/or name of the institution of origin;',
        'Content organized, preferably, in the following sections:'
      ],
      presentationIntro: 'During the presentation, the corresponding author or one of the co-authors must:',
      presentationItems: [
        'Remain by the poster during the entire presentation time slot defined by the organization, in accordance with the official schedule;',
        'Present the research to the evaluation committee;',
        'Answer questions from the evaluation committee.'
      ]
    },

    // Short Courses
    minicursos: {
      show: true, // Set to false to completely hide short courses section and buttons from the site
      title: 'Short Courses',
      subtitle: 'Develop your practical and theoretical skills through our highly qualified short courses, led by national and international experts on Day 0 (July 21, 2026).',
      disclaimer: '*Exclusive registration for congress attendees registered for the XIII CBCM.',
      viewDetails: 'View details',
      close: 'Close',
      location: 'School of Physical Education and Sport, University of São Paulo (EEFE-USP)',
      date: 'July 21, 2026',
      howItWorks: {
        title: 'How will registration work?',
        steps: [
          'At this stage, only a pre-registration will be completed.',
          'Registration is open until July 15th or until all slots are filled.',
          'Each short course will only be confirmed if it reaches a minimum of 15 registered participants.',
          'After confirmation, pre-registered participants will receive instructions to complete the payment of the R$ 50.00 fee, securing their spot.'
        ],
        limitsLabel: 'Limited spots:',
        limits: [
          'minimum of 15 participants to open the course;',
          'maximum of 40 participants per short course.'
        ],
        linkText: 'Pre-registration Link',
        linkUrl: 'https://forms.gle/EK3KyWCauA3d4Dor6'
      },
      courses: [
        {
          id: 'mc1',
          time: '01:30 PM - 05:30 PM',
          title: 'Short Course 1: Cortical monitoring techniques during locomotor control: Fundamentals and applications with fNIRS',
          instructor: 'Prof. Dr. Diego Orcioli-Silva (UNESP – Rio Claro)',
          description: 'Functional near-infrared spectroscopy (fNIRS) has emerged as a key tool for cortical mapping. This course covers the biophysical foundations of fNIRS, basics of hemodynamic signal processing, and practical applications in investigating the cortical control of human gait in different cohorts.'
        },
        {
          id: 'mc2',
          time: '01:30 PM - 03:30 PM',
          title: 'Short Course 2: Practical Workshop on the Constraints-led Approach and Nonlinear Pedagogy (Taught in English)',
          instructor: 'Prof. Dr. James Rudd (Norwegian School of Sport Sciences)',
          description: 'This practical workshop covers dynamic systems theory, ecological dynamics, and how practitioners can design learning environments using the Constraints-Led Approach (CLA) and Nonlinear Pedagogy. Attendees will explore task, environmental, and individual constraints to optimize skill acquisition and athletic development.'
        },
        {
          id: 'mc3',
          time: '02:00 PM - 04:30 PM',
          title: 'Short Course 3: Introduction to R software for exploratory data analysis',
          instructor: 'Prof. Dr. Flávio Henrique Bastos (EEFE-USP)',
          description: 'A hands-on introduction to the R programming environment tailored for motor behavior research. The course covers setup, simple database manipulation and cleaning, and generating key descriptive statistics and high-quality informative plots with ggplot2.'
        },
        {
          id: 'mc4',
          time: '02:00 PM - 04:30 PM',
          title: 'Short Course 4: Network Science in Motor Behavior: Applications for evaluation and motor intervention',
          instructor: 'Prof. Dr. Paulo Felipe Ribeiro Bandeira (URCA)',
          description: 'Covers the application of complex network methods to analyze motor performance data, learning interactions, and socio-affective networks in sports and school settings. Theoretical concepts and computational tools will be presented to map and intervene in complex movement dynamics.'
        },
        {
          id: 'mc5',
          time: '02:00 PM - 04:30 PM',
          title: 'Short Course 5: Motor Assessment: the MABC test in focus',
          instructor: 'Prof. Dr. Lúcio Fernandes Ferreira (UFAM)',
          description: 'The Movement Assessment Battery for Children (MABC-2) is one of the world’s gold standard instruments for identifying and diagnosing Developmental Coordination Disorder (DCD). This course covers the correct administration, scoring, and qualitative/quantitative interpretation of the MABC-2.'
        }
      ]
    },

    // Lista de Palestrantes (English)
    speakersList: {
      international: [
        { 
          name: 'Prof. Dr. Fabian Romero Clavijo', 
          role: 'CANADÁ', 
          univ: "Bishop's University",
          image: ASSETS.SPEAKERS.INTERNATIONAL.FABIAN_ROMERO
        },
        { 
          name: 'Prof. Dr. Gregor Schöner', 
          role: 'ALEMANHA', 
          univ: 'Ruhr-Universität Bochum',
          image: ASSETS.SPEAKERS.INTERNATIONAL.GREGOR_SCHONER
        },
        { 
          name: 'Prof. Dr. James Rudd', 
          role: 'NORUEGA', 
          univ: 'Norwegian School of Sport Sciences',
          image: ASSETS.SPEAKERS.INTERNATIONAL.JAMES_RUDD
        },
        { 
          name: 'Prof. Dr. Jean-Jacques Orban de Xivry', 
          role: 'BÉLGICA', 
          univ: 'KU Leuven Institute',
          image: ASSETS.SPEAKERS.INTERNATIONAL.ORBAN_DE_XIVRY
        },
        { 
          name: 'Prof. Dr. José António Maia', 
          role: 'PORTUGAL', 
          univ: 'Faculty of Sport of the University of Porto',
          image: ASSETS.SPEAKERS.INTERNATIONAL.JOSE_MAIA
        },
        { 
          name: 'Profa. Dra. Katharina Stibrant Sunnerhagen', 
          role: 'SUÉCIA', 
          univ: 'University of Gothenburg',
          image: ASSETS.SPEAKERS.INTERNATIONAL.KATHARINA_SUNNERHAGEN
        },
        { 
          name: 'Prof. Dr. Mark L. Latash', 
          role: 'EUA', 
          univ: 'Pennsylvania State University',
          image: ASSETS.SPEAKERS.INTERNATIONAL.MARK_LATASH
        },
        { 
          name: 'Prof. Dr. Matthias Weigelt', 
          role: 'ALEMANHA', 
          univ: 'University of Paderborn',
          image: ASSETS.SPEAKERS.INTERNATIONAL.MATTHIAS_WEIGELT
        },
        { 
          name: 'Profa. Dra. Sara Pereira', 
          role: 'PORTUGAL', 
          univ: 'Faculty of Sport of the University of Porto',
          image: ASSETS.SPEAKERS.INTERNATIONAL.SARA_PEREIRA
        },
        { 
          name: 'Prof. Dr. Stuart Baker', 
          role: 'REINO UNIDO', 
          univ: 'Newcastle University',
          image: ASSETS.SPEAKERS.INTERNATIONAL.STUART_BAKER
        },
      ],
      national: [
        { 
          name: 'Profa. Dra. Cinthya Walter', 
          role: 'MA', 
          univ: 'Federal University of Maranhão',
          image: ASSETS.SPEAKERS.NATIONAL.CINTHYA_WALTER
        },
        { 
          name: 'Prof. Dr. Danilo Silva', 
          role: 'SE', 
          univ: 'Federal University of Sergipe',
          image: ASSETS.SPEAKERS.NATIONAL.DANILO_SILVA
        },
        { 
          name: 'Prof. Dr. Fabio Augusto Barbieri', 
          role: 'SP', 
          univ: 'São Paulo State University',
          image: ASSETS.SPEAKERS.NATIONAL.FABIO_BARBIERI
        },
        { 
          name: 'Prof. Dr. Giordano Bonuzzi', 
          role: 'DF', 
          univ: 'University of Brasília',
          image: ASSETS.SPEAKERS.NATIONAL.GIORDANO_BONUZZI
        },
        { 
          name: 'Prof. Dr. Go Tani', 
          role: 'SP', 
          univ: 'School of Physical Education and Sport - USP',
          image: ASSETS.SPEAKERS.NATIONAL.GO_TANI
        },
        { 
          name: 'Prof. Dr. Herbert Ugrinowitsch', 
          role: 'MG', 
          univ: 'Federal University of Minas Gerais',
          image: ASSETS.SPEAKERS.NATIONAL.HERBERT_UGRINOWITSCH
        },
        { 
          name: 'Profa. Dra. Isabel de Camargo Neves Sacco', 
          role: 'SP', 
          univ: 'School of Medicine - USP',
          image: ASSETS.SPEAKERS.NATIONAL.ISABEL_SACCO
        },
        { 
          name: 'Prof. Dr. José Barela', 
          role: 'SP', 
          univ: 'São Paulo State University',
          image: ASSETS.SPEAKERS.NATIONAL.JOSE_BARELA
        },
        { 
          name: 'Prof. Dr. José Roberto de Godoi', 
          role: 'RO', 
          univ: 'Federal University of Rondônia',
          image: ASSETS.SPEAKERS.NATIONAL.JOSE_GODOI
        },
        { 
          name: 'Profa. Dra. Juliana Barbosa Goulardins', 
          role: 'BA', 
          univ: 'Bahiana School of Medicine and Public Health',
          image: ASSETS.SPEAKERS.NATIONAL.JULIANA_GOULARDINS
        },
        { 
          name: 'Prof. Dr. Lucio Ferreira', 
          role: 'AM', 
          univ: 'Federal University of Amazonas',
          image: ASSETS.SPEAKERS.NATIONAL.LUCIO_FERREIRA
        },
        { 
          name: 'Profa. Dra. Natalia Duarte Pereira', 
          role: 'SP', 
          univ: 'Federal University of São Carlos', 
          image: ASSETS.SPEAKERS.NATIONAL.NATALIA_PEREIRA
        },
        { 
          name: 'Profa. Dra. Paula Fávaro Polastri Zago', 
          role: 'SP', 
          univ: 'São Paulo State University', 
          image: ASSETS.SPEAKERS.NATIONAL.PAULA_ZAGO
        },
        { 
          name: 'Dr. Paulo Cezar Rocha dos Santos', 
          role: 'RJ', 
          univ: "D'Or Institute",
          image: ASSETS.SPEAKERS.NATIONAL.PAULO_CEZAR
        },
        { 
          name: 'Prof. Dr. Paulo Felipe Bandeira', 
          role: 'CE', 
          univ: 'Regional University of Cariri',
          image: ASSETS.SPEAKERS.NATIONAL.PAULO_FELIPE
        },
        { 
          name: 'Prof. Dr. Rafael dos Santos Henrique', 
          role: 'PE', 
          univ: 'Federal University of Pernambuco',
          image: ASSETS.SPEAKERS.NATIONAL.RAFAEL_HENRIQUE
        },
        { 
          name: 'Prof. Dr. Renato Moraes', 
          role: 'SP', 
          univ: 'EEFERP-USP',
          image: ASSETS.SPEAKERS.NATIONAL.RENATO_MORAES
        },
        { 
          name: 'Prof. Dr. Ricardo Drews', 
          role: 'RS', 
          univ: 'Federal University of Santa Maria',
          image: ASSETS.SPEAKERS.NATIONAL.RICARDO_DREWS
        },
        { 
          name: 'Prof. Dr. Rodolfo Benda', 
          role: 'RS', 
          univ: 'Federal University of Pelotas', 
          image: ASSETS.SPEAKERS.NATIONAL.RODOLFO_BENDA
        },
        { 
          name: 'Prof. Dr. Sérgio Tosi Rodrigues', 
          role: 'SP', 
          univ: 'São Paulo State University', 
          image: ASSETS.SPEAKERS.NATIONAL.SERGIO_RODRIGUES
        },
        { 
          name: 'Prof. Dr. Vitor Profeta', 
          role: 'MG', 
          univ: 'Federal University of Minas Gerais',
          image: ASSETS.SPEAKERS.NATIONAL.VITOR_PROFETA
        }
      ]
    },

    // Event Schedule
    schedule: {
      day0: [
        { time: '01:30 PM - 05:30 PM', activity: 'Short Course: Cortical monitoring techniques during locomotor control: Fundamentals and applications with fNIRS', details: 'Prof. Dr. Diego Orcioli-Silva (UNESP-Rio Claro)' },
        { time: '01:30 PM - 03:30 PM', activity: 'Short Course: Practical Workshop on the Constraints-led Approach and Nonlinear Pedagogy', details: 'Prof. Dr. James Rudd (Norwegian School of Sport Sciences)' },
        { time: '02:00 PM - 04:30 PM', activity: 'Short Course: Introduction to R software for exploratory data analysis', details: 'Prof. Dr. Flávio Henrique Bastos (EEFE-USP)' },
        { time: '02:00 PM - 04:30 PM', activity: 'Short Course: Network Science in Motor Behavior: Applications for evaluation and motor intervention', details: 'Prof. Dr. Paulo Felipe Ribeiro Bandeira (URCA-CE)' },
        { time: '02:00 PM - 04:30 PM', activity: 'Short Course: Motor Assessment: the MABC test in focus', details: 'Prof. Dr. Lúcio Fernandes Ferreira (UFAM)' },
      ],
      day1: [
        { time: '07:00 AM - 08:00 AM', activity: 'Reception' },
        { time: '08:00 AM - 09:00 AM', activity: 'Opening Ceremony', details: 'Prof. Dra. Andrea M. Freudenheim (EEFE-USP)\n"Relationship between the Motor Behavior Laboratory (LACOM) and the Brazilian Congress of Motor Behavior"' },
        { time: '09:00 AM - 10:00 AM', activity: 'Opening Keynote', details: 'Prof. Dr. Mark Latash (Pennsylvania State University)\n"Processes that do not affect task performance"\nModerator: Prof. Paula Fávaro Polastri Zago (UNESP-Bauru)' },
        { time: '10:00 AM - 10:30 AM', activity: 'Coffee-Break' },
        { time: '10:30 AM - 12:00 PM', activity: 'Oral Presentations' },
        { time: '12:00 PM - 01:15 PM', activity: 'Lunch' },
        { time: '01:15 PM - 01:35 PM', activity: '20 Years of the Brazilian Journal of Motor Behavior', details: 'Prof. Dr. Fábio Barbieri (President of SOCIBRACOM and Editor-in-Chief of BJMB)' },
        { time: '01:45 PM - 03:15 PM', activity: 'Simultaneous Round Tables', details: '• Neurophysiology and motor behavior (Mod: Prof. Dr. Jorge Oliveira)\n• Classical paradigms of motor control (Mod: Prof. Dr. Umberto Corrêa)\n• Interdependence of Motor Development and other Domains (Mod: Prof. Dr. Luciano Basso)\n• Motor Learning and Intervening Factors (Mod: Prof. Dr. Flavio Bastos)' },
        { time: '03:15 PM - 04:30 PM', activity: 'Coffee Break / Posters' },
        { time: '04:30 PM - 05:30 PM', activity: 'Keynote', details: 'Prof. Dr. Go Tani (EEFE-USP)\n"Motor Behavior in Brazil: contributions to professional intervention in Physical Education"\nModerator: Prof. Dr. Umberto Corrêa (EEFE-USP)' },
        { time: '05:30 PM - 06:30 PM', activity: 'Book Launch and Signing', details: '"Motor behavior: Research and intervention" (Eds. Go Tani & Umberto C. Corrêa)' },
      ],
      day2: [
        { time: '07:00 AM - 08:00 AM', activity: 'Reception' },
        { time: '08:00 AM - 09:00 AM', activity: 'SOCIBRACOM Assembly' },
        { time: '09:00 AM - 10:00 AM', activity: 'Keynote', details: 'Prof. Dr. Katharina Sunnerhagen (University of Gothemburg)\n"The trajectory of functioning in the upper extremity after stroke"\nModerator: Prof. Dr. Giordano Bonuzzi (UnB)' },
        { time: '10:00 AM - 10:30 AM', activity: 'Coffee Break' },
        { time: '10:30 AM - 12:00 PM', activity: 'Simultaneous Round Tables', details: '• Advances in the relationship between Rehabilitation and Motor Behavior (Mod: Prof. Dr. Jorge Oliveira)\n• The bases of motor behavior for talent formation and detection in sport (Mod: Prof. Dr. Umberto Correa)\n• Motor Development and Physical Activity (Mod: Prof. Dr. Luciano Basso)\n• The Intersection between Motor Learning and Motor Development (Mod: Prof. Dr. Flavio Bastos)' },
        { time: '12:00 PM - 01:15 PM', activity: 'Lunch' },
        { time: '01:15 PM - 02:15 PM', activity: 'Keynote', details: 'Prof. Dr. James Rudd (Norwegian School of Sport Sciences)\n"Designing meaningful movement experiences across the lifecourse: pedagogical insights for skill learning and expertise"\nModerator: Prof. Dr. José Maia (FADEUP)' },
        { time: '02:30 PM - 03:30 PM', activity: 'Keynote', details: 'Prof. Dr. Matthias Weigelt (Paderborn University)\n"Cognitive control of movement and performance in sport"\nModerator: Prof. Dra. Andrea Freudenheim (EEFE-USP)' },
        { time: '03:30 PM - 04:30 PM', activity: 'Coffee Break / Posters' },
        { time: '04:30 PM - 05:30 PM', activity: 'Keynote', details: 'Prof. Dr. José Maia (University of Porto)\n"Why is it “forbidden” to deal with children’s motor coordination in Motor Development?"\nModerator: Prof. Dr. Go Tani (EEFE-USP)' },
        { time: '05:30 PM - 06:00 PM', activity: 'Cultural Presentation', details: 'USP Choir' },
        { time: '07:30 PM', activity: 'Event Dinner', details: 'TBA' },
      ],
      day3: [
        { time: '08:00 AM - 09:00 AM', activity: 'Reception' },
        { time: '09:00 AM - 10:00 AM', activity: 'Keynote', details: 'Prof. Dr. Jean-Jacques Orban de Xivry (KU Leuven)\n"Cerebellar age-related structural decline does not translate into functional deficits: Evidence for a motor reserve"\nModerator: Prof. Dr. Fábio Barbieri (UNESP-Bauru)' },
        { time: '10:00 AM - 10:30 AM', activity: 'Coffee Break' },
        { time: '10:30 AM - 12:00 PM', activity: 'Oral Presentations' },
        { time: '12:00 PM - 01:15 PM', activity: 'Lunch' },
        { time: '01:15 PM - 02:15 PM', activity: 'Awards and Young Researcher Keynote' },
        { time: '02:30 PM - 03:30 PM', activity: 'Keynote', details: 'Prof. Dr. Stuart Baker (Newcastle University)\n"How the brain controls reaching"\nModerator: Prof. Dr. Flavio Bastos (EEFE-USP)' },
        { time: '03:30 PM - 04:30 PM', activity: 'Coffee Break / Posters' },
        { time: '04:30 PM - 05:30 PM', activity: 'Closing Keynote', details: 'Prof. Dr. Gregor Schöner (Rhur University)\n"How complex are the descending activation patterns that drive simple arm movements?"\nModerator: Prof. Dr. Flávio Bastos (EEFE-USP)' },
      ]
    },

    // Footer / Contact
    footer: {
      email: 'usp.cbcm@gmail.com'
    }
  }
};
