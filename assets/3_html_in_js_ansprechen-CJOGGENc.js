const e=`# HTML-Elemente in JavaScript ansprechen\r
\r
In den letzten Lektionen hast du schon Buttons und Inputs mit JavaScript verbunden.  \r
Jetzt geht es darum, **beliebige HTML-Elemente gezielt auszuwählen** und ihren Inhalt zu ändern.\r
\r
Dafür lernen wir:\r
\r
- wie man einem Element eine \`id\` gibt,\r
- wie man es mit JavaScript anspricht,\r
- wie man Text mit \`innerText\` **ändert** und **ausliest**,\r
- wie man ein neues HTML-Element erstellt und an ein anderes Element anhängt.\r
\r
---\r
\r
## 1. Einem Element eine \`id\` geben\r
\r
Damit JavaScript ein bestimmtes Element findet, gibst du ihm in HTML eine eindeutige \`id\`:\r
\r
\`\`\`html\r
<h2 id="titel">Willkommen!</h2>\r
\`\`\`\r
\r
Was bedeutet das?\r
\r
- \`id="titel"\`: Dieses Element hat jetzt den eindeutigen Namen \`titel\`.\r
- Eine \`id\` sollte auf einer Seite nur **einmal** vorkommen.\r
\r
---\r
\r
## 2. Element in JavaScript ansprechen\r
\r
Mit \`document.getElementById(...)\` holst du das Element in JavaScript:\r
\r
\`\`\`html\r
<h2 id="titel">Willkommen!</h2>\r
\r
<script>\r
  let ueberschrift = document.getElementById('titel')\r
  alert(ueberschrift.innerText)\r
<\/script>\r
\`\`\`\r
\r
- \`document.getElementById('titel')\`: Sucht das Element mit der \`id\` \`titel\`.\r
- \`let ueberschrift = ...\`: Speichert das gefundene Element in einer Variable.\r
- \`ueberschrift.innerText\`: Liest den sichtbaren Text des Elements aus.\r
\r
---\r
\r
## 3. Text mit \`innerText\` ändern und auslesen\r
\r
Du kannst den Text eines Elements ändern:\r
\r
\`\`\`html\r
<p id="nachricht">Hallo!</p>\r
<button onclick="textAendern()">Text ändern</button>\r
\r
<script>\r
  function textAendern() {\r
    let p = document.getElementById('nachricht')\r
\r
    // Text auslesen\r
    let alterText = p.innerText\r
    alert('Vorher stand da: ' + alterText)\r
\r
    // Text ändern\r
    p.innerText = 'Der Text wurde geändert.'\r
  }\r
<\/script>\r
\`\`\`\r
\r
Wichtig:\r
\r
- \`innerText\` (großes \`T\`) liest oder setzt den sichtbaren Text.\r
- \`p.innerText\` ohne \`=\`: liest aus.\r
- \`p.innerText = '...'\`: schreibt neuen Text hinein.\r
\r
---\r
\r
## 4. Neues HTML-Element in JavaScript erstellen\r
\r
Jetzt erstellen wir ein neues Element mit JavaScript, geben ihm Text und hängen es in die Seite ein.\r
\r
\`\`\`html\r
<div id="liste"></div>\r
<button onclick="neuesElement()">Neues Element hinzufügen</button>\r
\r
<script>\r
  function neuesElement() {\r
    // 1) Neues Element erzeugen\r
    let neuerAbsatz = document.createElement('p')\r
\r
    // 2) Text setzen\r
    neuerAbsatz.innerText = 'Ich wurde mit JavaScript erstellt.'\r
\r
    // 3) An bestehendes Element anhängen\r
    let liste = document.getElementById('liste')\r
    liste.appendChild(neuerAbsatz)\r
  }\r
<\/script>\r
\`\`\`\r
\r
So läuft es ab:\r
\r
- \`document.createElement('p')\` erstellt ein neues \`<p>\`-Element.\r
- Mit \`innerText\` bekommt es einen Text.\r
- \`appendChild(...)\` hängt das neue Element als Kind in \`#liste\` ein.\r
\r
Jeder Klick auf den Button erstellt einen neuen Absatz.\r
\r
---\r
\r
## Komplettes Beispiel\r
\r
Hier alles zusammen in einem kleinen Beispiel:\r
\r
\`\`\`html\r
<h2 id="titel">Meine Seite</h2>\r
<p id="info">Noch keine Aktion ausgeführt.</p>\r
<div id="ausgabe"></div>\r
\r
<button onclick="titelAendern()">Titel ändern</button>\r
<button onclick="eintragHinzufuegen()">Eintrag hinzufügen</button>\r
\r
<script>\r
  function titelAendern() {\r
    let titelElement = document.getElementById('titel')\r
    let alterTitel = titelElement.innerText\r
\r
    alert('Alter Titel: ' + alterTitel)\r
    titelElement.innerText = 'Titel wurde geändert!'\r
\r
    document.getElementById('info').innerText = 'Der Titel wurde erfolgreich aktualisiert.'\r
  }\r
\r
  function eintragHinzufuegen() {\r
    let neuerEintrag = document.createElement('p')\r
    neuerEintrag.innerText = 'Neuer Eintrag um ' + new Date().toLocaleTimeString()\r
\r
    let ausgabe = document.getElementById('ausgabe')\r
    ausgabe.appendChild(neuerEintrag)\r
  }\r
<\/script>\r
\`\`\`\r
\r
---\r
\r
## Merksatz\r
\r
- Mit \`id\` machst du ein Element eindeutig.\r
- Mit \`document.getElementById('...')\` findest du es in JavaScript.\r
- Mit \`innerText\` kannst du Text auslesen und ändern.\r
- Mit \`createElement(...)\` + \`appendChild(...)\` baust du neue Inhalte dynamisch in die Seite ein.\r
`;export{e as default};
