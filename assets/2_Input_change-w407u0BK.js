const e=`# Inputs verwenden und auf Änderungen reagieren\r
\r
Mit einem Input-Feld können Nutzer Text eingeben. Mit \`onchange\` kann deine Webseite reagieren, sobald sich der Wert geändert hat.\r
\r
---\r
\r
## 1. Ein Input mit \`onchange\`\r
\r
Zuerst erstellen wir ein Input-Feld. Wenn sich der Inhalt ändert und das Feld verlassen wird, wird eine Funktion aufgerufen:\r
\r
\`\`\`html\r
<input type="text" onchange="eingabeGeaendert(this)" placeholder="Schreibe deinen Namen" />\r
\`\`\`\r
\r
Was passiert hier?\r
\r
- \`input\`: Erstellt ein Eingabefeld.\r
- \`type="text"\`: Hier darf normaler Text eingegeben werden.\r
- \`onchange="eingabeGeaendert(this)"\`: Wenn sich der Wert geändert hat und das Feld den Fokus verliert, wird die Funktion \`eingabeGeaendert\` aufgerufen.\r
- \`this\`: Übergibt genau dieses Input-Feld an die Funktion.\r
\r
---\r
\r
## 2. Die Funktion im \`script\`-Bereich\r
\r
Jetzt schreiben wir die Funktion, die auf die Änderung reagiert:\r
\r
\`\`\`html\r
<script>\r
  function eingabeGeaendert(inputFeld) {\r
    alert('Du hast eingegeben: ' + inputFeld.value)\r
  }\r
<\/script>\r
\`\`\`\r
\r
- \`function eingabeGeaendert(inputFeld)\`: Definiert eine Funktion mit dem Parameter \`inputFeld\`.\r
- \`inputFeld.value\`: Liest den aktuellen Text aus dem Input.\r
- \`alert(...)\`: Zeigt den Text in einem Pop-up-Fenster.\r
\r
Wenn du etwas eintippst und danach aus dem Feld herausklickst, erscheint deine Eingabe im Alert.\r
\r
---\r
\r
## 3. Text direkt auf der Seite anzeigen\r
\r
Statt ein Pop-up zu zeigen, kannst du den Text auch in ein \`<p>\`-Element schreiben:\r
\r
\`\`\`html\r
<input type="text" onchange="zeigeText(this)" placeholder="Lieblingsfarbe" />\r
<p id="ausgabe">Hier erscheint deine Eingabe.</p>\r
\r
<script>\r
  function zeigeText(inputFeld) {\r
    document.getElementById('ausgabe').innerText = 'Deine Eingabe ist: ' + inputFeld.value\r
  }\r
<\/script>\r
\`\`\`\r
\r
So funktioniert es:\r
\r
- Das Input löst bei Änderung \`zeigeText(this)\` aus.\r
- Die Funktion liest mit \`inputFeld.value\` den Inhalt.\r
- Mit \`document.getElementById('ausgabe').innerText\` wird der sichtbare Text auf der Seite geändert.\r
\r
---\r
\r
## Wichtig zu wissen\r
\r
\`onchange\` reagiert nicht bei jedem einzelnen Tastendruck, sondern erst dann, wenn:\r
\r
- sich der Wert wirklich geändert hat und\r
- das Input-Feld verlassen wird (zum Beispiel durch Klick daneben).\r
\r
Wenn du später auf jeden Tastendruck reagieren willst, verwendest du stattdessen \`oninput\`.\r
`;export{e as default};
