# Ein einfacher Zaubertrick mit Buttons 🪄

Stell dir vor, du hast einen magischen Knopf auf deiner Webseite. Wenn du ihn drückst, passiert etwas Spannendes\! Um das zu schaffen, brauchen wir drei Dinge: einen Knopf, einen Zauberspruch (das ist der JavaScript-Code) und ein kleines Zauberbuch (das sind die `<script>`-Tags).

---

## 1\. Der magische Knopf 🧙‍♂️

Zuerst brauchen wir einen Knopf, den wir drücken können. Das machen wir so in unserer HTML-Datei:

```html
<button id="meinButton" onclick="zauberspruch()">Klick mich!</button>
```

Was passiert hier?

- `button`: Sagt, dass dies ein Knopf ist.
- `id="meinButton"`: Das ist der Name des Knopfes, damit wir ihn später im JS-Code wiedererkennen.
- `onclick="zauberspruch()"`: Das ist der magische Teil\! Wenn jemand auf den Knopf klickt (`onclick`), soll der Zauberspruch namens `zauberspruch()` aufgerufen werden.

---

## 2\. Der Zauberspruch im Zauberbuch 📖

Jetzt schreiben wir den Zauberspruch in unser Zauberbuch, das sind die `<script>`-Tags. Das Zauberbuch kommt entweder in den `<head>`-Bereich oder ans Ende des `<body>` in deiner HTML-Datei.

```html
<script>
  function zauberspruch() {
    alert('Hokuspokus!')
  }
</script>
```

- `function zauberspruch()`: So beginnt ein neuer Zauberspruch. Sein Name ist `zauberspruch`.
- `alert("Hokuspokus!")`: Das ist, was der Zauberspruch macht. In diesem Fall zeigt er ein kleines Fenster mit dem Text „Hokuspokus\!“ an.

Wenn du jetzt die Seite öffnest und auf den Knopf drückst, siehst du das kleine Pop-up-Fenster\!

---

## 3\. Den Button-Text verändern ✍️

Was, wenn der Knopf nach dem Klick seinen Text ändern soll? Wir können den Zauberspruch so anpassen, dass er den Knopf findet und seinen Text verändert. Dafür brauchen wir die `id` des Knopfs.

```html
<button id="meinButton" onclick="textAendern()">Klick mich für eine Überraschung!</button>

<script>
  function textAendern() {
    // Finde den Knopf mit der ID "meinButton"
    let button = document.getElementById('meinButton')

    // Ändere seinen Text!
    button.innerText = 'Überraschung!'
  }
</script>
```

- `document.getElementById("meinButton")`: Das ist wie eine Suchanfrage an das Zauberbuch: „Finde mir das Element, das die ID `meinButton` hat\!“
- `button.innerText = "Überraschung!"`: Das bedeutet: Nimm den Text (`innerText`) vom gefundenen Knopf (`button`) und ändere ihn zu „Überraschung\!“.

Wenn du jetzt auf den Knopf klickst, wird sein Text magisch von „Klick mich für eine Überraschung\!“ zu **„Überraschung\!“**\! ✨
