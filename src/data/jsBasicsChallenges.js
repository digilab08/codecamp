export const jsBasicsTopics = [
  {
    id: 'variablen',
    title: 'Variablen',
    storagePrefix: 'js-basics-variablen',
    challenges: [
      {
        id: 'var-1',
        title: 'Variable lesen',
        text: 'Eine Variable speichert einen Wert. Hier wird eine Variable `name` erstellt.',
        code: `let name = 'Sam';`,
        question: 'Welchen Wert hat die Variable name nach der Zuweisung?',
        correctAnswer: 'Sam',
        maxPoints: 10,
      },
      {
        id: 'var-2',
        title: 'Wert ändern',
        text: 'Mit einer neuen Zuweisung kann sich der Inhalt einer Variable ändern.',
        code: `let points = 2;
points = points + 3;`,
        question: 'Welchen Wert hat die Variable points nach diesem Vorgang?',
        correctAnswer: '5',
        maxPoints: 10,
      },
      {
        id: 'var-3',
        title: 'Rechnen mit mehreren Variablen',
        text: 'Du kannst mehrere Variablen zusammen in einer Rechnung verwenden.',
        code: `let apples = 4;
let pears = 3;
let fruits = apples + pears;`,
        question: 'Welchen Wert hat die Variable fruits nach diesem Vorgang?',
        correctAnswer: '7',
        maxPoints: 10,
      },
    ],
  },
]

export const buildChallengeStorageName = (topic, challenge) =>
  `${topic.storagePrefix}-${challenge.id}`

export const buildJsBasicsTopicRoute = (topicId) => `/js-basics/${topicId}`
