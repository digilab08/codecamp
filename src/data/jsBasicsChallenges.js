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
        maxPoints: 5,
      },
      {
        id: 'var-2',
        title: 'Text in Variablen speichern',
        text: 'Strings (Texte) kannst du genauso in Variablen speichern wie Zahlen.',
        code: `let city = 'Bern';
let favoriteCity = city;`,
        question: 'Welchen Wert hat die Variable favoriteCity?',
        correctAnswer: 'Bern',
        maxPoints: 5,
      },
      {
        id: 'var-3',
        title: 'Zahl in Variable ueberschreiben',
        text: 'Bei einer neuen Zuweisung wird der alte Wert ersetzt.',
        code: `let level = 1;
level = 2;`,
        question: 'Welchen Wert hat level am Ende?',
        correctAnswer: '2',
        maxPoints: 5,
      },
      {
        id: 'var-4',
        title: 'Wert ändern',
        text: 'Mit einer neuen Zuweisung kann sich der Inhalt einer Variable ändern.',
        code: `let points = 2;
points = points + 3;`,
        question: 'Welchen Wert hat die Variable points nach diesem Vorgang?',
        correctAnswer: '5',
        maxPoints: 5,
      },
      {
        id: 'var-5',
        title: 'Rechnen mit mehreren Variablen',
        text: 'Du kannst mehrere Variablen zusammen in einer Rechnung verwenden.',
        code: `let apples = 4;
let pears = 3;
let fruits = apples + pears;`,
        question: 'Welchen Wert hat die Variable fruits nach diesem Vorgang?',
        correctAnswer: '7',
        maxPoints: 5,
      },
      {
        id: 'var-6',
        title: 'Variablen weitergeben',
        text: 'Eine Variable kann den aktuellen Wert einer anderen Variable uebernehmen.',
        code: `let firstName = 'Lina';
let userName = firstName;
firstName = 'Mika';`,
        question: 'Welchen Wert hat userName am Ende?',
        correctAnswer: 'Lina',
        maxPoints: 8,
      },
    ],
  },
  {
    id: 'rechnen',
    title: 'Rechnen mit Variablen und Zahlen',
    storagePrefix: 'js-basics-rechnen',
    challenges: [
      {
        id: 'calc-1',
        title: 'Addition wiederholen',
        text: 'Beim Rechnen mit Variablen bleibt die Grundidee gleich: Wert lesen, rechnen, Ergebnis speichern.',
        code: `let a = 6;
let b = 4;
let sum = a + b;`,
        question: 'Welchen Wert hat die Variable sum?',
        correctAnswer: '10',
        maxPoints: 5,
      },
      {
        id: 'calc-2',
        title: 'Addition mit neuer Zuweisung',
        text: 'Du kannst eine Variable mit sich selbst verrechnen und den neuen Wert wieder in dieselbe Variable schreiben.',
        code: `let score = 10;
score = score + 5;`,
        question: 'Welchen Wert hat die Variable score nach der zweiten Zeile?',
        correctAnswer: '15',
        maxPoints: 5,
      },
      {
        id: 'calc-3',
        title: 'Subtraktion mit Variablen',
        text: 'Subtraktion funktioniert genauso wie Addition: Werte aus Variablen lesen und das Ergebnis speichern.',
        code: `let budget = 20;
let cost = 7;
let left = budget - cost;`,
        question: 'Wie viel steht in left?',
        correctAnswer: '13',
        maxPoints: 5,
      },
      {
        id: 'calc-4',
        title: 'Subtraktion wiederholen',
        text: 'Wiederholung: Bei einer neuen Zuweisung wird der bisherige Wert durch das neue Rechenergebnis ersetzt.',
        code: `let hearts = 9;
hearts = hearts - 2;
hearts = hearts - 3;`,
        question: 'Welchen Wert hat hearts am Ende?',
        correctAnswer: '4',
        maxPoints: 5,
      },
      {
        id: 'calc-5',
        title: 'Multiplikation mit Zahlen',
        text: 'Mit `*` kannst du Werte multiplizieren, zum Beispiel Punkte pro Runde mal Anzahl der Runden.',
        code: `let pointsPerRound = 3;
let rounds = 5;
let total = pointsPerRound * rounds;`,
        question: 'Welchen Wert hat total?',
        correctAnswer: '15',
        maxPoints: 5,
      },
      {
        id: 'calc-6',
        title: 'Division mit Variablen',
        text: 'Division mit `/` teilt einen Wert. Das Ergebnis kann ebenfalls in einer neuen Variable gespeichert werden.',
        code: `let totalCookies = 12;
let kids = 3;
let cookiesPerKid = totalCookies / kids;`,
        question: 'Wie viele Kekse bekommt jedes Kind (cookiesPerKid)?',
        correctAnswer: '4',
        maxPoints: 5,
      },
      {
        id: 'calc-7',
        title: 'Mehrere Rechenschritte',
        text: 'Du kannst mehrere Rechenarten kombinieren. Wichtig ist, nach jeder Zuweisung den neuen Variablenwert mitzudenken.',
        code: `let coins = 5;
coins = coins + 4;
coins = coins * 2;
coins = coins - 3;`,
        question: 'Welchen Wert hat coins am Ende?',
        correctAnswer: '15',
        maxPoints: 8,
      },
      {
        id: 'calc-8',
        title: 'Reihenfolge mit Klammern',
        text: 'Klammern helfen dir, die gewünschte Reihenfolge klar festzulegen und sind beim Rechnen sehr hilfreich.',
        code: `let x = 2;
let y = 3;
let result = (x + y) * 4;`,
        question: 'Welchen Wert hat result?',
        correctAnswer: '20',
        maxPoints: 8,
      },
    ],
  },
  {
    id: 'booleans',
    title: 'Booleans und Vergleiche',
    storagePrefix: 'js-basics-booleans',
    challenges: [
      {
        id: 'bool-1',
        title: 'Boolean lesen',
        text: 'Ein Boolean ist entweder `true` (wahr) oder `false` (falsch). Hier wird direkt ein Boolean gespeichert.',
        code: `let isReady = true;`,
        question: 'Welchen Wert hat die Variable isReady?',
        correctAnswer: 'true',
        maxPoints: 0,
      },
      {
        id: 'bool-2',
        title: 'Gleichheit vergleichen',
        text: 'Mit `===` kannst du prüfen, ob zwei Werte gleich sind. Das Ergebnis ist immer `true` oder `false`.',
        code: `let points = 8;
let isEight = points === 8;`,
        question: 'Welchen Wert hat isEight?',
        correctAnswer: 'true',
        maxPoints: 5,
      },
      {
        id: 'bool-3',
        title: 'Ungleichheit vergleichen',
        text: 'Mit `!==` prüfst du, ob zwei Werte verschieden sind.',
        code: `let level = 3;
let isNotFour = level !== 4;`,
        question: 'Welchen Wert hat isNotFour?',
        correctAnswer: 'true',
        maxPoints: 5,
      },
      {
        id: 'bool-4',
        title: 'Grösser als',
        text: 'Mit `>` vergleichst du, ob ein Wert grösser als ein anderer ist.',
        code: `let coins = 12;
let enoughCoins = coins > 10;`,
        question: 'Welchen Wert hat enoughCoins?',
        correctAnswer: 'true',
        maxPoints: 5,
      },
      {
        id: 'bool-5',
        title: 'Kleiner oder gleich',
        text: 'Mit `<=` kannst du pruefen, ob ein Wert kleiner oder gleich einem anderen Wert ist.',
        code: `let attempts = 4;
let canRetry = attempts <= 3;`,
        question: 'Welchen Wert hat canRetry?',
        correctAnswer: 'false',
        maxPoints: 5,
      },
      {
        id: 'bool-6',
        title: 'Wiederholung: Vergleich nach Rechnung',
        text: 'Wie bei den Rechenaufgaben kannst du erst rechnen und dann das Ergebnis vergleichen.',
        code: `let apples = 2;
apples = apples + 3;
let hasManyApples = apples >= 5;`,
        question: 'Welchen Wert hat hasManyApples am Ende?',
        correctAnswer: 'true',
        maxPoints: 5,
      },
      {
        id: 'bool-7',
        title: 'Wiederholung: Wert ändert sich',
        text: 'Achte darauf: Wenn sich eine Variable ändert, kann sich auch das Ergebnis eines Vergleichs ändern.',
        code: `let hearts = 6;
let isLow = hearts < 5;
hearts = hearts - 2;
let isLowNow = hearts < 5;`,
        question: 'Welchen Wert hat isLowNow?',
        correctAnswer: 'true',
        maxPoints: 5,
      },
      {
        id: 'bool-8',
        title: 'Negation mit Ausrufezeichen',
        text: 'Mit `!` kehrst du einen Boolean um: aus `true` wird `false` und umgekehrt.',
        code: `let isLoggedIn = false;
let needsLogin = !isLoggedIn;`,
        question: 'Welchen Wert hat needsLogin?',
        correctAnswer: 'true',
        maxPoints: 8,
      },
      {
        id: 'bool-9',
        title: 'Wiederholung mit zwei Vergleichen',
        text: 'Mehrere Vergleiche können nacheinander in eigenen Variablen gespeichert werden.',
        code: `let score = 9;
let passedEasy = score >= 5;
let passedHard = score >= 10;`,
        question: 'Welchen Wert hat passedHard?',
        correctAnswer: 'false',
        maxPoints: 5,
      },
      {
        id: 'bool-10',
        title: 'Und-Verknüpfung',
        text: 'Mit `&&` müssen beide Bedingungen `true` sein, damit das Gesamtergebnis `true` ist.',
        code: `let age = 13;
let hasTicket = true;
let canEnter = age >= 12 && hasTicket === true;`,
        question: 'Welchen Wert hat canEnter?',
        correctAnswer: 'true',
        maxPoints: 8,
      },
      {
        id: 'bool-11',
        title: 'Oder-Verknüpfung',
        text: 'Mit `||` reicht es, wenn mindestens eine Bedingung `true` ist.',
        code: `let hasKey = false;
let knowsCode = true;
let canOpenDoor = hasKey || knowsCode;`,
        question: 'Welchen Wert hat canOpenDoor?',
        correctAnswer: 'true',
        maxPoints: 8,
      },
      {
        id: 'bool-12',
        title: 'Klammern in Bedingungen',
        text: 'Klammern machen klar, welche Teile zuerst ausgewertet werden.',
        code: `let points = 4;
let hasBonus = true;
let passed = (points >= 5 && hasBonus) || points >= 7;`,
        question: 'Welchen Wert hat passed?',
        correctAnswer: 'false',
        maxPoints: 10,
      },
      {
        id: 'bool-13',
        title: 'Typen genau vergleichen',
        text: 'Mit `===` werden auch die Typen verglichen. Eine Zahl und ein Text sind nicht gleich.',
        code: `let count = 5;
let textCount = '5';
let isSame = count === textCount;`,
        question: 'Welchen Wert hat isSame?',
        correctAnswer: 'false',
        maxPoints: 10,
      },
      {
        id: 'bool-14',
        title: 'Wiederholung mit und/oder',
        text: 'Du kannst Vergleiche und Verknüpfungen kombinieren. Achte darauf, welche Teilbedingungen `true` sind.',
        code: `let score = 6;
let bonus = 1;
let passed = score >= 7 || (score + bonus >= 7 && bonus > 0);`,
        question: 'Welchen Wert hat passed?',
        correctAnswer: 'true',
        maxPoints: 10,
      },
    ],
  },
  {
    id: 'kontrollstrukturen',
    title: 'Kontrollstrukturen: if, else if, else',
    storagePrefix: 'js-basics-kontrollstrukturen',
    challenges: [
      {
        id: 'ctrl-1',
        title: 'if wird ausgeführt',
        text: 'Ein `if`-Block wird nur ausgeführt, wenn die Bedingung `true` ist.',
        code: `let score = 7;
let result = 'offen';

if (score > 5) {
  result = 'bestanden';
}`,
        question: 'Welchen Wert hat result am Ende?',
        correctAnswer: 'bestanden',
        maxPoints: 5,
      },
      {
        id: 'ctrl-2',
        title: 'if wird nicht ausgeführt',
        text: 'Wenn die Bedingung `false` ist, bleibt der alte Wert unverändert.',
        code: `let score = 3;
let result = 'offen';

if (score > 5) {
  result = 'bestanden';
}`,
        question: 'Welchen Wert hat result am Ende?',
        correctAnswer: 'offen',
        maxPoints: 5,
      },
      {
        id: 'ctrl-3',
        title: 'if mit else',
        text: 'Mit `else` legst du fest, was passieren soll, wenn die Bedingung nicht passt.',
        code: `let lives = 0;
let status = '';

if (lives > 0) {
  status = 'spielen';
} else {
  status = 'game over';
}`,
        question: 'Welchen Wert hat status?',
        correctAnswer: 'game over',
        maxPoints: 5,
      },
      {
        id: 'ctrl-4',
        title: 'if mit else (zweite Variante)',
        text: 'Wiederholung: Genau ein Zweig von `if`/`else` wird ausgeführt.',
        code: `let hasKey = true;
let door = 'zu';

if (hasKey) {
  door = 'offen';
} else {
  door = 'zu';
}`,
        question: 'Welchen Wert hat door?',
        correctAnswer: 'offen',
        maxPoints: 5,
      },
      {
        id: 'ctrl-5',
        title: 'else if Grundidee',
        text: 'Mit `else if` kannst du mehrere Fälle nacheinander pruefen.',
        code: `let points = 8;
let grade = '';

if (points >= 10) {
  grade = 'A';
} else if (points >= 7) {
  grade = 'B';
} else {
  grade = 'C';
}`,
        question: 'Welchen Wert hat grade?',
        correctAnswer: 'B',
        maxPoints: 8,
      },
      {
        id: 'ctrl-6',
        title: 'else if mit drei Fällen',
        text: 'Die Bedingungen werden von oben nach unten geprüft. Der erste passende Fall gewinnt.',
        code: `let temperature = 2;
let weather = '';

if (temperature >= 25) {
  weather = 'heiss';
} else if (temperature >= 10) {
  weather = 'mild';
} else if (temperature >= 0) {
  weather = 'kalt';
} else {
  weather = 'eisig';
}`,
        question: 'Welchen Wert hat weather?',
        correctAnswer: 'kalt',
        maxPoints: 8,
      },
      {
        id: 'ctrl-7',
        title: 'Reihenfolge bei else if',
        text: 'Auch wenn mehrere Bedingungen wahr sein können, wird nur der erste passende Zweig ausgeführt.',
        code: `let age = 16;
let ticket = '';

if (age >= 18) {
  ticket = 'erwachsen';
} else if (age >= 16) {
  ticket = 'jugend';
} else if (age >= 12) {
  ticket = 'kind';
} else {
  ticket = 'mini';
}`,
        question: 'Welchen Wert hat ticket?',
        correctAnswer: 'jugend',
        maxPoints: 8,
      },
      {
        id: 'ctrl-8',
        title: 'if mit logischer Verknüpfung',
        text: 'Bedingungen können mit `&&` kombiniert werden.',
        code: `let age = 14;
let hasHelmet = true;
let canRide = false;

if (age >= 12 && hasHelmet) {
  canRide = true;
} else {
  canRide = false;
}`,
        question: 'Welchen Wert hat canRide?',
        correctAnswer: 'true',
        maxPoints: 8,
      },
      {
        id: 'ctrl-9',
        title: 'if mit oder-Bedingung',
        text: 'Mit `||` reicht mindestens eine passende Teilbedingung.',
        code: `let hasCode = false;
let hasKey = true;
let isOpen = false;

if (hasCode || hasKey) {
  isOpen = true;
} else {
  isOpen = false;
}`,
        question: 'Welchen Wert hat isOpen?',
        correctAnswer: 'true',
        maxPoints: 8,
      },
      {
        id: 'ctrl-10',
        title: 'Verschachteltes if',
        text: 'Ein `if` kann in einem anderen `if` stehen. So baust du feinere Entscheidungen.',
        code: `let points = 9;
let hasBonus = true;
let reward = '';

if (points >= 8) {
  if (hasBonus) {
    reward = 'gold';
  } else {
    reward = 'silber';
  }
} else {
  reward = 'bronze';
}`,
        question: 'Welchen Wert hat reward?',
        correctAnswer: 'gold',
        maxPoints: 10,
      },
      {
        id: 'ctrl-11',
        title: 'Wiederholung: else if und Rechnungen',
        text: 'Du kannst vor den Bedingungen rechnen und das Ergebnis danach mit `if`-Zweigen auswerten.',
        code: `let base = 4;
let bonus = 3;
let total = base + bonus;
let level = '';

if (total >= 10) {
  level = 'pro';
} else if (total >= 7) {
  level = 'fortgeschritten';
} else {
  level = 'starter';
}`,
        question: 'Welchen Wert hat level?',
        correctAnswer: 'fortgeschritten',
        maxPoints: 10,
      },
      {
        id: 'ctrl-12',
        title: 'Wiederholung: mehrere Schritte',
        text: 'Bei längeren Beispielen helfen dir Zwischenwerte und genaues Lesen der Reihenfolge.',
        code: `let energy = 5;
let mode = '';

if (energy > 7) {
  mode = 'sprint';
} else if (energy > 3) {
  mode = 'run';
} else {
  mode = 'rest';
}

if (mode === 'run') {
  energy = energy - 2;
}

if (energy <= 3) {
  mode = 'rest';
}`,
        question: 'Welchen Wert hat mode am Ende?',
        correctAnswer: 'rest',
        maxPoints: 12,
      },
    ],
  },
]

export const buildChallengeStorageName = (topic, challenge) =>
  `${topic.storagePrefix}-${challenge.id}`

export const buildJsBasicsTopicRoute = (topicId) => `/js-basics/${topicId}`
