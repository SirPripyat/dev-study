# Plano de estudo: Bloco 1 de programação

14/10/2026 · Leonardo Rossi

## Objetivo e como usar

O bloco 1 (8:30-10:00, de segunda a sexta) serve para fechar as lacunas das vagas que você quer, não para rever o que já domina. O plano tem uma semana de preparação e quatro de conteúdo, com um tema por dia e uma entrega por sessão. Os temas assumem vagas de front-end ou full stack com React e entrevistas em inglês.

- Cada sessão termina com algo produzido: código no GitHub, um resumo ou cartões no Anki.
- Se um tema já é seu, pule e use o tempo no seguinte ou em um mock de entrevista.
- Explicações, commits e READMEs em inglês sempre que possível.
- Estudar sem produzir nada no fim não conta como sessão concluída.

## Estrutura de cada sessão (90 min)

Toda sessão segue as mesmas cinco etapas, porque praticar e recuperar o conteúdo de memória fixa mais do que assistir ou reler.

| Minutos | Etapa | O que fazer |
|---|---|---|
| 0-5 | Meta | Escreva a pergunta do dia, por exemplo "por que este componente re-renderiza?" |
| 5-20 | Estudo ativo | Leia a documentação ou veja uma aula curta, anotando só as dúvidas |
| 20-65 | Prática | Reproduza o conceito em código sem copiar. Quebre de propósito e conserte |
| 65-80 | Recuperação | Explique de memória, em voz alta e em inglês, gravando o áudio |
| 80-90 | Registro | 2-3 cartões no Anki e um commit com README curto |

A sexta é diferente: 45 min revisando os cartões e a semana, e 45 min de mock de entrevista.

## Semana 0 (15 e 16/10): preparação

Dois dias para transformar o plano genérico no seu: o que as vagas pedem e onde você está mais fraco.

| Dia | Tarefa | Entregável |
|---|---|---|
| Qui 15/10 | Reúna 5-10 vagas-alvo e liste os requisitos que se repetem | Planilha com cada tecnologia e em quantas vagas ela aparece |
| Sex 16/10 | Dê nota de 1 a 5 a você mesmo em cada tema (React, TypeScript, Next.js, testes, system design, Java/SQL) e reordene as semanas 1 a 4 | Ordem final das semanas |
| Sex 16/10 | Crie o repositório de estudos no GitHub e os decks do Anki: React, JS/TS, Arquitetura, Inglês técnico | Repositório e decks prontos |

Se um tema já está em 4 ou 5, troque a semana dele por prática de entrevista.

## Semana 1 (19-23/10): React a fundo

A semana entende por que o React renderiza, para escrever hooks e telas que não quebram nem ficam lentas.

| Dia | Tema | Prática | Entregável |
|---|---|---|---|
| Seg | Renderização e reconciliação | Crie um componente que rerenderiza demais, ache a causa no Profiler do React DevTools e corrija com keys, composição e memo | Repositório com versão antes/depois e medição |
| Ter | Hooks avançados | Reimplemente useDebounce, usePrevious e um useFetch com cancelamento. Revise armadilhas do useEffect: dependências, cleanup e race conditions | 3 custom hooks com testes simples |
| Qua | Estado e dados | Compare estado local, Context, useReducer e TanStack Query em uma lista paginada com cache e atualização otimista | Mini app com as abordagens e nota de trade-offs |
| Qui | Performance | Code splitting com lazy e Suspense, virtualização de lista longa, useTransition e useDeferredValue | Lista de 10 mil itens fluida, com medições |
| Sex | Revisão e mock | 45 min de cartões e resumo da semana, 45 min de mock de React em inglês | As 5 perguntas em que você mais errou |

## Semana 2 (26-30/10): Next.js e fundamentos de JS e TS

A semana cobre o framework que mais aparece nas vagas de React e os fundamentos de linguagem que costumam cair em entrevista.

| Dia | Tema | Prática | Entregável |
|---|---|---|---|
| Seg | App Router e Server Components | Monte páginas com Server e Client Components e entenda a fronteira do "use client" e o que vai para o bundle | App com 3 rotas e nota do que roda no servidor |
| Ter | Renderização e cache no Next.js | Compare SSR, SSG, ISR e streaming. Use revalidação e estados de loading | Rota com dados dinâmicos e a estratégia justificada |
| Qua | JavaScript fundamental | Event loop, closures, this, promises e async/await. Resolva 10 exercícios de "qual é a saída deste código" | Documento com 10 respostas explicadas em inglês |
| Qui | TypeScript I | Narrowing, unions, generics básicos e tipagem de funções e respostas de API | Um módulo seu migrado para strict |
| Sex | Revisão e mock | 45 min de cartões e resumo, 45 min de mock sobre JS, TS e Next.js em inglês | As 5 perguntas em que você mais errou |

## Semana 3 (2-6/11): TypeScript avançado, testes e web

A semana sobe o nível de TypeScript com React e adiciona o que separa um código que funciona de um código que se sustenta: testes, acessibilidade e performance. Segunda (2/11) é feriado de Finados; se não estudar, empurre o tema dela para a sexta.

| Dia | Tema | Prática | Entregável |
|---|---|---|---|
| Seg | TypeScript avançado | Utility types, mapped types, conditional types e inferência | 5 tipos utilitários próprios com testes de tipo |
| Ter | TypeScript com React | Componentes genéricos, props polimórficas, hooks tipados e discriminated unions para estados de tela | Mini biblioteca com Table e Select tipados |
| Qua | Testes | Vitest e Testing Library: testar comportamento, não implementação. Mocks e queries acessíveis | Suíte de testes cobrindo o fluxo principal de um componente seu |
| Qui | Acessibilidade e Web Vitals | Navegação por teclado, ARIA básico, LCP, INP, CLS e Lighthouse | Relatório antes/depois de uma página sua |
| Sex | Revisão e mock | 45 min de cartões e resumo, 45 min de mock sobre TypeScript, testes e performance em inglês | As 5 perguntas em que você mais errou |

## Semana 4 (9-13/11): arquitetura e system design de front-end

A semana transforma a sua experiência prática em respostas estruturadas de entrevista sênior, em inglês, e termina com uma simulação completa.

| Dia | Tema | Prática | Entregável |
|---|---|---|---|
| Seg | Microfrontends e módulos compartilhados | Module Federation, contratos entre apps, versionamento de biblioteca comum e trade-offs contra monorepo | Resposta de 5 min em inglês: "when would you choose microfrontends?" |
| Ter | Autenticação e permissões no front-end | Fluxo de tokens e refresh, rotas públicas e privadas, permissões por papel | Rota protegida com permissões e um diagrama do fluxo |
| Qua | Desenho de funcionalidades | Projete em papel: notificações com scroll infinito, upload de arquivos para S3 e dashboard com dados em tempo real (WebSocket ou SSE) | 3 desenhos com requisitos, estado, falhas e métricas |
| Qui | Design system e arquitetura de componentes | Tokens, composição, API de componentes, documentação e versionamento | Esboço de design system com 5 componentes |
| Sex | Mock completo e retrospectiva | 45 min de mock técnico (React e design) em inglês, 45 min de retrospectiva das 4 semanas | Plano para as próximas 4 semanas |

## Trilha alternativa para vagas full stack

Se as vagas pedem back-end, troque um dia por semana, o do tema em que você se sente mais forte, por um destes:

- **Semana 1:** SQL e PostgreSQL. Índices, planos de execução (EXPLAIN) e modelagem.
- **Semana 2:** Spring Boot. API REST, validação, tratamento de erros e transações.
- **Semana 3:** segurança e testes de integração. JWT, Keycloak e Testcontainers.
- **Semana 4:** mensageria e cache. RabbitMQ, Redis e modelagem multi-tenant.

A prática e o entregável seguem o mesmo molde: um exercício em código, um commit e 2-3 cartões.

## Entregas, métricas e revisão semanal

O progresso se mede por entregas, não por horas: 4 de 5 sessões por semana já é um bom ritmo.

Revisão de 15 min no domingo: o que fechou, o que ficou para trás e o que ajustar na semana seguinte.

| Métrica | Meta semanal |
|---|---|
| Sessões concluídas | 4 a 5 de 5 |
| Cartões novos no Anki | 10 a 15 |
| Commits de estudo no GitHub | 5 |
| Mock de entrevista (sexta) | 1, em inglês |

Marcos:

- **Semana 0:** lista de vagas e autoavaliação prontas
- **Semanas 1 a 4:** 4 mini projetos publicados, com README em inglês
- **Semana 4:** gravação do mock completo e plano das próximas 4 semanas

## Onde estudar

Comece sempre pela documentação oficial, que está em inglês e já treina o vocabulário técnico das entrevistas.

- **React:** hooks, renderização e Server Components
- **Next.js:** App Router, cache e estratégias de renderização
- **TypeScript:** handbook e utility types
- **Vitest e Testing Library:** testes de componentes
- **JavaScript.info:** event loop, closures e promises
- **web.dev:** Core Web Vitals e acessibilidade
- **Patterns.dev:** padrões de React e performance
- **GreatFrontEnd:** perguntas e system design de front-end
- **Anki:** revisão espaçada dos cartões
