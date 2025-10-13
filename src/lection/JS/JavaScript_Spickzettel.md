## JavaScript Spickzettel

### Einführung

JavaScript ist eine leichtgewichtige, interpretierte Programmiersprache.

---

### JavaScript in HTML

```html
<button onclick="geklickt()">Klick Mich</button>
<script type="text/javascript">
  function geklickt() {
    let text = 'Hallo QuickRef.ME'
    alert(text)
  }
</script>
```

#### Externes JavaScript

```html
<body>
  ...

  <script src="app.js"></script>
</body>
```

---

### Konsole

```javascript
// => Hallo Welt!
console.log('Hallo Welt!')

// Gibt eine Fehlermeldung auf stderr aus
console.error(new Error('Upps!'))
```

---

### Zahlen

```javascript
let menge = 6
let preis = 4.99
```

---

### Variablen

```javascript
let x = null
let name = 'Tamara'
const gefunden = false

// => Tamara, false, null
console.log(name, gefunden, x)

var a
console.log(a) // => undefined
```

---

### Strings (Texte)

```javascript
let einzeln = 'Wo ist mein Hut?'
let doppelt = 'Wo ist mein Hut?'

// => 15
console.log(einzeln.length)
```

---

### Arithmetische Operatoren

```javascript
5 + 5 = 10      // Addition
10 - 5 = 5      // Subtraktion
5 * 10 = 50     // Multiplikation
10 / 5 = 2      // Division
10 % 5 = 0      // Modulo (Restwert)
```

---

### Kommentare

```javascript
// Diese Zeile ist ein Kommentar

/*
Die folgende Konfiguration muss vor
dem Deployment geändert werden.
*/
```

---

### Zuweisungsoperatoren

```javascript
let zahl = 100

// Beide Anweisungen addieren 10
zahl = zahl + 10
zahl += 10

console.log(zahl)
// => 120
```

---

### String-Interpolation

```javascript
let alter = 7

// String-Verkettung
'Tommy ist ' + alter + ' Jahre alt.'

// String-Interpolation (Template-Literale)
;`Tommy ist ${alter} Jahre alt.`
```

---

### `let`-Schlüsselwort

```javascript
let anzahl
console.log(anzahl) // => undefined
anzahl = 10
console.log(anzahl) // => 10
```

---

### `const`-Schlüsselwort

```javascript
const anzahlSpalten = 4

// TypeError: Zuweisung zu konstanter Variable...
anzahlSpalten = 8
```

---

## JavaScript Bedingungen

### `if`-Anweisung

```javascript
const istMailGesendet = true

if (istMailGesendet) {
  console.log('Mail an den Empfänger gesendet')
}
```

---

### Ternärer Operator

```javascript
var x = 1

// => true
ergebnis = x == 1 ? true : false
```

---

### Operatoren

#### Logischer ODER-Operator `||`

```javascript
true || false // true
10 > 5 || 10 > 20 // true
false || false // false
10 > 100 || 10 > 20 // false
```

#### Logischer UND-Operator `&&`

```javascript
true && true // true
1 > 2 && 2 > 1 // false
true && false // false
4 === 4 && 3 > 1 // true
```

#### Vergleichsoperatoren

```javascript
1 > 3 // false
3 > 1 // true
250 >= 250 // true
1 === 1 // true (strikte Gleichheit: Wert und Typ)
1 === 2 // false
1 === '1' // false
```

#### Logischer NICHT-Operator `!`

```javascript
let zuSpaetZurArbeit = true
let gegenteiligerWert = !zuSpaetZurArbeit

// => false
console.log(gegenteiligerWert)
```

#### Nullish Coalescing Operator `??`

Gibt den rechten Wert zurück, wenn der linke `null` oder `undefined` ist.

```javascript
null ?? 'Ich gewinne' // 'Ich gewinne'
undefined ?? 'Ich auch' // 'Ich auch'

false ?? 'Ich verliere' // false
0 ?? 'Ich verliere wieder' // 0
'' ?? 'Verdammt' // ''
```

---

### `else if`

```javascript
const groesse = 10

if (groesse > 100) {
  console.log('Groß')
} else if (groesse > 20) {
  console.log('Mittel')
} else if (groesse > 4) {
  console.log('Klein')
} else {
  console.log('Winzig')
}
// Ausgabe: Klein
```

---

### `switch`-Anweisung

```javascript
const essen = 'Salat'

switch (essen) {
  case 'Auster':
    console.log('Der Geschmack des Meeres')
    break
  case 'Pizza':
    console.log('Ein leckerer Kuchen')
    break
  default:
    console.log('Guten Appetit')
}
```

---

### `==` vs. `===`

```javascript
0 == false // true (Typumwandlung)
0 === false // false (verschiedener Typ)
1 == '1' // true (automatische Typumwandlung)
1 === '1' // false (verschiedener Typ)
null == undefined // true
null === undefined // false
```

`==` prüft nur den **Wert** (lockere Gleichheit), `===` prüft **Wert und Typ** (strikte Gleichheit).

---

## JavaScript Funktionen

### Funktionen

```javascript
// Definition der Funktion:
function summe(zahl1, zahl2) {
  return zahl1 + zahl2
}

// Aufruf der Funktion:
summe(3, 6) // 9
```

---

### Anonyme Funktionen

```javascript
// Benannte Funktion
function raketeZumMars() {
  return 'BOOM!'
}

// Anonyme Funktion, einer Konstante zugewiesen
const raketeZumMars = function () {
  return 'BOOM!'
}
```

---

### Pfeilfunktionen (Arrow Functions, ES6)

#### Mit zwei Argumenten

```javascript
const summe = (param1, param2) => {
  return param1 + param2
}
console.log(summe(2, 5)) // => 7
```

#### Ohne Argumente

```javascript
const gibHalloAus = () => {
  console.log('Hallo')
}
gibHalloAus() // => Hallo
```

#### Mit einem einzigen Argument

```javascript
const pruefeGewicht = (gewicht) => {
  console.log(`Gewicht: ${gewicht}`)
}
pruefeGewicht(25) // => Gewicht: 25
```

#### Kompakte Pfeilfunktionen (implizites `return`)

```javascript
const multipliziere = (a, b) => a * b
// => 60
console.log(multipliziere(2, 30))
```

---

### `return`-Schlüsselwort

```javascript
// Mit return wird ein Wert zurückgegeben
function summe(zahl1, zahl2) {
  return zahl1 + zahl2
}

// Ohne return gibt die Funktion `undefined` zurück
function summe(zahl1, zahl2) {
  zahl1 + zahl2
}
```

---

### Funktionsausdrücke (Function Expressions)

```javascript
const hund = function () {
  return 'Wuff!'
}
```

---

## JavaScript Geltungsbereich (Scope)

### Geltungsbereich

```javascript
function meineFunktion() {
  var pizzaName = 'Margarita'
  // Code hier kann pizzaName verwenden
}

// Code hier kann pizzaName NICHT verwenden
```

---

### Block-Geltungsbereich (`let` & `const`)

```javascript
const istEingeloggt = true

if (istEingeloggt == true) {
  const statusNachricht = 'Eingeloggt.'
}

// Uncaught ReferenceError: statusNachricht is not defined
console.log(statusNachricht)
```

---

### Globale Variablen

```javascript
// Global deklarierte Variable
const farbe = 'blau'

function druckeFarbe() {
  console.log(farbe)
}

druckeFarbe() // => blau
```

---

### `let` vs. `var`

`var` ist funktionsweit gültig, während `let` auf den nächsten umschließenden Block beschränkt ist.

```javascript
for (let i = 0; i < 3; i++) {
  // i ist hier zugänglich ✔️
}
// i ist hier NICHT zugänglich ❌
```

---

```javascript
for (var i = 0; i < 3; i++) {
  // i ist hier zugänglich ✔️
}
// i ist hier ebenfalls zugänglich ✔️
```

---

## JavaScript Arrays

### Arrays

```javascript
const fruechte = ['Apfel', 'Orange', 'Banane']

// Verschiedene Datentypen in einem Array
const daten = [1, 'Hähnchen', false]
```

---

### Eigenschaft `.length`

```javascript
const zahlen = [1, 2, 3, 4]

zahlen.length // 4
```

---

### Index

```javascript
// Auf ein Array-Element zugreifen
const meinArray = [100, 200, 300]

console.log(meinArray[0]) // 100
console.log(meinArray[1]) // 200
```

---

### Tabelle der verändernden Methoden

| Methode   | Fügt hinzu | Entfernt | Am Anfang | Am Ende |
| :-------- | :--------: | :------: | :-------: | :-----: |
| `push`    |     ✔     |          |           |   ✔    |
| `pop`     |            |    ✔    |           |   ✔    |
| `unshift` |     ✔     |          |    ✔     |         |
| `shift`   |            |    ✔    |    ✔     |         |

---

### Methode `.push()`

Fügt Elemente am **Ende** hinzu und gibt die neue Länge des Arrays zurück.

```javascript
// Ein Element hinzufügen:
const warenkorb = ['Apfel', 'Orange']
warenkorb.push('Birne')

// Mehrere Elemente hinzufügen:
const zahlen = [1, 2]
zahlen.push(3, 4, 5)
```

---

### Methode `.pop()`

Entfernt das letzte Element vom **Ende** und gibt dieses Element zurück.

```javascript
const fruechte = ['Apfel', 'Orange', 'Banane']

const frucht = fruechte.pop() // 'Banane'
console.log(fruechte) // ["Apfel", "Orange"]
```

---

### Methode `.shift()`

Entfernt das erste Element vom **Anfang** und gibt dieses Element zurück.

```javascript
let katzen = ['Bob', 'Willy', 'Mini']

katzen.shift() // katzen ist jetzt ['Willy', 'Mini']
```

---

### Methode `.unshift()`

Fügt Elemente am **Anfang** hinzu und gibt die neue Länge des Arrays zurück.

```javascript
let katzen = ['Bob']

// => ['Willy', 'Bob']
katzen.unshift('Willy')

// => ['Puff', 'George', 'Willy', 'Bob']
katzen.unshift('Puff', 'George')
```

---

### Methode `.concat()`

Erstellt ein neues Array, indem es Arrays zusammenfügt, ohne die Original-Arrays zu verändern.

```javascript
const zahlen = [3, 2, 1]
const neueErsteZahl = 4

// => [ 4, 3, 2, 1 ]
;[neueErsteZahl].concat(zahlen)

// => [ 3, 2, 1, 4 ]
zahlen.concat(neueErsteZahl)
```

---

## JavaScript Schleifen

### `while`-Schleife

```javascript
let i = 0
while (i < 5) {
  console.log(i)
  i++
}
// => 0, 1, 2, 3, 4
```

---

### `do…while`-Schleife

Der Codeblock wird mindestens einmal ausgeführt, bevor die Bedingung geprüft wird.

```javascript
let x = 0
let i = 0

do {
  x = x + i
  console.log(x)
  i++
} while (i < 5)
// => 0 1 3 6 10
```

---

### `for`-Schleife

```javascript
for (let i = 0; i < 4; i++) {
  console.log(i)
}

// => 0, 1, 2, 3
```

---

### `break`

Beendet die Schleife vorzeitig.

```javascript
for (let i = 0; i < 99; i++) {
  if (i > 5) {
    break
  }
  console.log(i)
}
// => 0 1 2 3 4 5
```

---

### `continue`

Überspringt die aktuelle Iteration und fährt mit der nächsten fort.

```javascript
for (let i = 0; i < 5; i++) {
  if (i === 3) {
    continue
  }
  console.log('Die Zahl ist ' + i)
}
// Gibt 0, 1, 2, 4 aus
```

---

### `for...in`-Schleife

Iteriert über die **Indizes** (Schlüssel) eines Arrays oder Objekts.

```javascript
const fruechte = ['Apfel', 'Orange', 'Banane']

for (let index in fruechte) {
  console.log(index)
}
// => 0
// => 1
// => 2
```

---

### `for...of`-Schleife

Iteriert über die **Werte** von iterierbaren Objekten (wie Arrays, Strings).

```javascript
const fruechte = ['Apfel', 'Orange', 'Banane']

for (let frucht of fruechte) {
  console.log(frucht)
}
// => Apfel
// => Orange
// => Banane
```

---

## JavaScript Objekte

### Auf Eigenschaften zugreifen

```javascript
const apfel = {
  farbe: 'Grün',
  preis: {
    grosspackung: '3€/kg',
    kleinmenge: '4€/kg',
  },
}
console.log(apfel.farbe) // => Grün
console.log(apfel.preis.grosspackung) // => 3€/kg
```

---

### Veränderbarkeit (Mutability)

Objekte, die mit `const` deklariert werden, können nicht neu zugewiesen, aber ihre Eigenschaften können geändert werden.

```javascript
const student = {
  name: 'Sheldon',
  punkte: 100,
  note: 'A',
}

console.log(student)
// { name: 'Sheldon', punkte: 100, note: 'A' }

delete student.punkte
student.note = 'F'
console.log(student)
// { name: 'Sheldon', note: 'F' }

student = {}
// TypeError: Zuweisung zu konstanter Variable.
```

---

### `this`-Schlüsselwort

Das `this`-Schlüsselwort bezieht sich auf das Objekt, zu dem die Methode gehört.

```javascript
const katze = {
  name: 'Pipey',
  alter: 8,
  welcherName() {
    return this.name
  },
}
console.log(katze.welcherName()) // => Pipey
```

---

### Getters und Setters

Ermöglichen den kontrollierten Zugriff auf Objekteigenschaften.

```javascript
const meineKatze = {
  _name: 'Dottie',
  get name() {
    return this._name
  },
  set name(neuerName) {
    this._name = neuerName
  },
}

// Der Getter wird aufgerufen
console.log(meineKatze.name)

// Der Setter wird aufgerufen
meineKatze.name = 'Yankee'
```

---

## JavaScript Klassen

### Klasse und Konstruktor

```javascript
class Lied {
  constructor(titel, kuenstler) {
    this.titel = titel
    this.kuenstler = kuenstler
  }

  abspielen() {
    console.log(`${this.titel} von ${this.kuenstler} wird abgespielt!`)
  }
}

const meinLied = new Lied('Bohemian Rhapsody', 'Queen')
console.log(meinLied.titel) // => Bohemian Rhapsody
meinLied.abspielen() // => Bohemian Rhapsody von Queen wird abgespielt!
```

---

### Vererbung mit `extends` und `super`

```javascript
// Elternklasse
class Medium {
  constructor(info) {
    this.veroeffentlichungsdatum = info.veroeffentlichungsdatum
    this.name = info.name
  }
}

// Kindklasse
class Lied extends Medium {
  constructor(liedDaten) {
    super(liedDaten) // Ruft den Konstruktor der Elternklasse auf
    this.kuenstler = liedDaten.kuenstler
  }
}

const meinLied = new Lied({
  kuenstler: 'Queen',
  name: 'Bohemian Rhapsody',
  veroeffentlichungsdatum: 1975,
})
```

---

### Statische Methoden

Statische Methoden werden auf der Klasse selbst aufgerufen, nicht auf einer Instanz der Klasse.

```javascript
class Hund {
  constructor(name) {
    this._name = name
  }

  vorstellen() {
    console.log('Das ist ' + this._name + '!')
  }

  // Eine statische Methode
  static bellen() {
    console.log('Wuff!')
  }
}

const meinHund = new Hund('Buster')
meinHund.vorstellen()

// Aufruf der statischen Methode
Hund.bellen()
```

---

## JavaScript Asynchronität

### Promises (Versprechen)

Ein **Promise** ist ein Objekt, das das eventuelle Gelingen oder Scheitern einer asynchronen Operation repräsentiert.

```javascript
const versprechen = new Promise((resolve, reject) => {
  const operationErfolgreich = true

  if (operationErfolgreich) {
    resolve('Operation erfolgreich abgeschlossen!')
  } else {
    reject(new Error('Operation fehlgeschlagen'))
  }
})

versprechen
  .then((ergebnis) => {
    console.log(ergebnis) // Wird bei Erfolg ausgeführt
  })
  .catch((fehler) => {
    console.error(fehler.message) // Wird bei Fehler ausgeführt
  })
```

---

### `async`/`await`

Eine modernere Syntax, um mit Promises zu arbeiten, die den Code lesbarer macht.

```javascript
function holeDaten() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Daten sind da!')
    }, 2000) // Simuliert eine 2-sekündige Netzwerkanfrage
  })
}

async function verarbeiteDaten() {
  try {
    console.log('Warte auf Daten...')
    const daten = await holeDaten() // Hält die Ausführung an, bis das Promise erfüllt ist
    console.log('Nachricht:', daten)
  } catch (fehler) {
    console.error('Fehler beim Abrufen der Daten:', fehler)
  }
}

verarbeiteDaten()
// Konsole:
// Warte auf Daten...
// (2 Sekunden später)
// Nachricht: Daten sind da!
```

---

## JavaScript Anfragen (Requests)

### `fetch` API GET

Die `fetch` API ist die moderne Art, Netzwerkanfragen zu stellen. Sie gibt ein Promise zurück.

```javascript
async function holeNutzer() {
  const url = 'https://jsonplaceholder.typicode.com/users/1'

  try {
    const antwort = await fetch(url)
    if (!antwort.ok) {
      throw new Error(`HTTP-Fehler! Status: ${antwort.status}`)
    }
    const daten = await antwort.json() // Wandelt die Antwort in ein JSON-Objekt um
    console.log(daten)
  } catch (fehler) {
    console.error('Konnte Nutzer nicht abrufen:', fehler)
  }
}

holeNutzer()
```

---

### `fetch` API POST

Senden von Daten an einen Server.

```javascript
async function erstelleBeitrag() {
  const url = 'https://jsonplaceholder.typicode.com/posts'
  const beitragDaten = {
    title: 'foo',
    body: 'bar',
    userId: 1,
  }

  try {
    const antwort = await fetch(url, {
      method: 'POST', // Die HTTP-Methode
      headers: {
        'Content-Type': 'application/json', // Sagt dem Server, dass wir JSON senden
      },
      body: JSON.stringify(beitragDaten), // Wandelt das JS-Objekt in einen JSON-String um
    })

    const antwortDaten = await antwort.json()
    console.log('Erstellter Beitrag:', antwortDaten)
  } catch (fehler) {
    console.error('Fehler beim Erstellen des Beitrags:', fehler)
  }
}

erstelleBeitrag()
```

## Quellenverzeichnis

Diese Seite ist stark angelehnt an: [quickref.me](https://quickref.me/javascript)
