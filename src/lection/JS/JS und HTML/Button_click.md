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

## 3. Den Button-Text verändern ✍️

Statt eine ID und getElementById zu verwenden, kann sich der Button selbst an die Funktion übergeben — mit this. So brauchst du keine ID.

```html
<button onclick="textAendern(this)">Klick mich für eine Überraschung!</button>

<script>
  function textAendern(btn) {
    // "btn" ist das übergebene Button-Element
    btn.innerText = 'Überraschung!'
  }
</script>
```

`<button onclick="textAendern(this)"> Klick mich für eine Überraschung!</button>`
Dies ist ein HTML-Button. Das Attribut `onclick` sorgt dafür, dass beim Klick die Funktion `textAendern` aufgerufen wird. Mit `this` wird das aktuelle Button-Element an die Funktion übergeben.

`<script> ... </script>`
Hier steht JavaScript-Code, der im Browser ausgeführt wird.

`function textAendern(btn) { ... }`
Dies ist die Funktionsdefinition. Die Funktion heißt textAendern und nimmt einen Parameter btn entgegen. Dieser Parameter ist das Button-Element, das beim Klick übergeben wurde.

`btn.innerText = 'Überraschung!'`
Mit dieser Zeile wird der Text des Buttons geändert. `btn.innerText` greift auf den sichtbaren Text des Buttons zu und setzt ihn auf `„Überraschung!“`.
