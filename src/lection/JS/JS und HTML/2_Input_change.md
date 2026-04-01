# Inputs verwenden und auf Änderungen reagieren

Mit einem Input-Feld können Nutzer Text eingeben. Mit `onchange` kann deine Webseite reagieren, sobald sich der Wert geändert hat.

---

## 1. Ein Input mit `onchange`

Zuerst erstellen wir ein Input-Feld. Wenn sich der Inhalt ändert und das Feld verlassen wird, wird eine Funktion aufgerufen:

```html
<input type="text" onchange="eingabeGeaendert(this)" placeholder="Schreibe deinen Namen" />
```

Was passiert hier?

- `input`: Erstellt ein Eingabefeld.
- `type="text"`: Hier darf normaler Text eingegeben werden.
- `onchange="eingabeGeaendert(this)"`: Wenn sich der Wert geändert hat und das Feld den Fokus verliert, wird die Funktion `eingabeGeaendert` aufgerufen.
- `this`: Übergibt genau dieses Input-Feld an die Funktion.

---

## 2. Die Funktion im `script`-Bereich

Jetzt schreiben wir die Funktion, die auf die Änderung reagiert:

```html
<script>
  function eingabeGeaendert(inputFeld) {
    alert('Du hast eingegeben: ' + inputFeld.value)
  }
</script>
```

- `function eingabeGeaendert(inputFeld)`: Definiert eine Funktion mit dem Parameter `inputFeld`.
- `inputFeld.value`: Liest den aktuellen Text aus dem Input.
- `alert(...)`: Zeigt den Text in einem Pop-up-Fenster.

Wenn du etwas eintippst und danach aus dem Feld herausklickst, erscheint deine Eingabe im Alert.

---

## 3. Text direkt auf der Seite anzeigen

Statt ein Pop-up zu zeigen, kannst du den Text auch in ein `<p>`-Element schreiben:

```html
<input type="text" onchange="zeigeText(this)" placeholder="Lieblingsfarbe" />
<p id="ausgabe">Hier erscheint deine Eingabe.</p>

<script>
  function zeigeText(inputFeld) {
    document.getElementById('ausgabe').innerText = 'Deine Eingabe ist: ' + inputFeld.value
  }
</script>
```

So funktioniert es:

- Das Input löst bei Änderung `zeigeText(this)` aus.
- Die Funktion liest mit `inputFeld.value` den Inhalt.
- Mit `document.getElementById('ausgabe').innerText` wird der sichtbare Text auf der Seite geändert.

---

## Wichtig zu wissen

`onchange` reagiert nicht bei jedem einzelnen Tastendruck, sondern erst dann, wenn:

- sich der Wert wirklich geändert hat und
- das Input-Feld verlassen wird (zum Beispiel durch Klick daneben).

Wenn du später auf jeden Tastendruck reagieren willst, verwendest du stattdessen `oninput`.
