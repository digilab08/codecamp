# Buttons per Klick ausführen

Mit einem Button kannst du auf einer Webseite eine Aktion auslösen. Dafür brauchen wir drei Dinge: einen Button, JavaScript-Code und einen `<script>`-Bereich.

---

## 1\. Ein Button mit `onclick`

Zuerst erstellen wir einen Button in der HTML-Datei:

```html
<button onclick="zauberspruch()">Klick mich!</button>
```

Was passiert hier?

- `button`: Erstellt einen klickbaren Button.
- `onclick="zauberspruch()"`: Bei einem Klick wird die Funktion `zauberspruch()` aufgerufen.

---

## 2\. Die Funktion im `script`-Bereich

Jetzt schreiben wir die Funktion in den `<script>`-Bereich. Der `<script>`-Bereich steht entweder im `<head>` oder am Ende vom `<body>`.

```html
<script>
  function zauberspruch() {
    alert('Hokuspokus!')
  }
</script>
```

- `function zauberspruch()`: Definiert eine Funktion mit dem Namen `zauberspruch`.
- `alert("Hokuspokus!")`: Zeigt ein Hinweisfenster mit Text an.

Wenn du die Seite öffnest und auf den Button klickst, erscheint das Pop-up-Fenster.

## 3. Button-Text direkt ändern

Der Button kann sich selbst an die Funktion übergeben: mit `this`.

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
Dies ist die Funktionsdefinition. Die Funktion heißt `textAendern` und nimmt den Parameter `btn` entgegen. `btn` ist das Button-Element, das beim Klick übergeben wurde.

`btn.innerText = 'Überraschung!'`
Mit dieser Zeile wird der Text des Buttons geändert. `btn.innerText` greift auf den sichtbaren Text zu und setzt ihn auf `Überraschung!`.
