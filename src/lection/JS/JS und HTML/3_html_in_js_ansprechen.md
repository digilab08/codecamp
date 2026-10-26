# HTML-Elemente in JavaScript ansprechen

In den letzten Lektionen hast du schon Buttons und Inputs mit JavaScript verbunden.  
Jetzt geht es darum, **beliebige HTML-Elemente gezielt auszuwählen** und ihren Inhalt zu ändern.

Dafür lernen wir:

- wie man einem Element eine `id` gibt,
- wie man es mit JavaScript anspricht,
- wie man Text mit `innerText` **ändert** und **ausliest**,
- wie man ein neues HTML-Element erstellt und an ein anderes Element anhängt.

---

## 1. Einem Element eine `id` geben

Damit JavaScript ein bestimmtes Element findet, gibst du ihm in HTML eine eindeutige `id`:

```html
<h2 id="titel">Willkommen!</h2>
```

Was bedeutet das?

- `id="titel"`: Dieses Element hat jetzt den eindeutigen Namen `titel`.
- Eine `id` sollte auf einer Seite nur **einmal** vorkommen.

---

## 2. Element in JavaScript ansprechen

Mit `document.getElementById(...)` holst du das Element in JavaScript:

```html
<h2 id="titel">Willkommen!</h2>

<script>
  let ueberschrift = document.getElementById('titel')
  alert(ueberschrift.innerText)
</script>
```

- `document.getElementById('titel')`: Sucht das Element mit der `id` `titel`.
- `let ueberschrift = ...`: Speichert das gefundene Element in einer Variable.
- `ueberschrift.innerText`: Liest den sichtbaren Text des Elements aus.

---

## 3. Text mit `innerText` ändern und auslesen

Du kannst den Text eines Elements ändern:

```html
<p id="nachricht">Hallo!</p>
<button onclick="textAendern()">Text ändern</button>

<script>
  function textAendern() {
    let p = document.getElementById('nachricht')

    // Text auslesen
    let alterText = p.innerText
    alert('Vorher stand da: ' + alterText)

    // Text ändern
    p.innerText = 'Der Text wurde geändert.'
  }
</script>
```

Wichtig:

- `innerText` (großes `T`) liest oder setzt den sichtbaren Text.
- `p.innerText` ohne `=`: liest aus.
- `p.innerText = '...'`: schreibt neuen Text hinein.

---

## 4. Neues HTML-Element in JavaScript erstellen

Jetzt erstellen wir ein neues Element mit JavaScript, geben ihm Text und hängen es in die Seite ein.

```html
<div id="liste"></div>
<button onclick="neuesElement()">Neues Element hinzufügen</button>

<script>
  function neuesElement() {
    // 1) Neues Element erzeugen
    let neuerAbsatz = document.createElement('p')

    // 2) Text setzen
    neuerAbsatz.innerText = 'Ich wurde mit JavaScript erstellt.'

    // 3) An bestehendes Element anhängen
    let liste = document.getElementById('liste')
    liste.appendChild(neuerAbsatz)
  }
</script>
```

So läuft es ab:

- `document.createElement('p')` erstellt ein neues `<p>`-Element.
- Mit `innerText` bekommt es einen Text.
- `appendChild(...)` hängt das neue Element als Kind in `#liste` ein.

Jeder Klick auf den Button erstellt einen neuen Absatz.

---

## Komplettes Beispiel

Hier alles zusammen in einem kleinen Beispiel:

```html
<h2 id="titel">Meine Seite</h2>
<p id="info">Noch keine Aktion ausgeführt.</p>
<div id="ausgabe"></div>

<button onclick="titelAendern()">Titel ändern</button>
<button onclick="eintragHinzufuegen()">Eintrag hinzufügen</button>

<script>
  function titelAendern() {
    let titelElement = document.getElementById('titel')
    let alterTitel = titelElement.innerText

    alert('Alter Titel: ' + alterTitel)
    titelElement.innerText = 'Titel wurde geändert!'

    document.getElementById('info').innerText = 'Der Titel wurde erfolgreich aktualisiert.'
  }

  function eintragHinzufuegen() {
    let neuerEintrag = document.createElement('p')
    neuerEintrag.innerText = 'Neuer Eintrag um ' + new Date().toLocaleTimeString()

    let ausgabe = document.getElementById('ausgabe')
    ausgabe.appendChild(neuerEintrag)
  }
</script>
```

---

## Merksatz

- Mit `id` machst du ein Element eindeutig.
- Mit `document.getElementById('...')` findest du es in JavaScript.
- Mit `innerText` kannst du Text auslesen und ändern.
- Mit `createElement(...)` + `appendChild(...)` baust du neue Inhalte dynamisch in die Seite ein.
