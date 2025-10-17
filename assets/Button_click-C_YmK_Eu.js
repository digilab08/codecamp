const n=`# Ein einfacher Zaubertrick mit Buttons 🪄\r
\r
Stell dir vor, du hast einen magischen Knopf auf deiner Webseite. Wenn du ihn drückst, passiert etwas Spannendes\\! Um das zu schaffen, brauchen wir drei Dinge: einen Knopf, einen Zauberspruch (das ist der JavaScript-Code) und ein kleines Zauberbuch (das sind die \`<script>\`-Tags).\r
\r
---\r
\r
## 1\\. Der magische Knopf 🧙‍♂️\r
\r
Zuerst brauchen wir einen Knopf, den wir drücken können. Das machen wir so in unserer HTML-Datei:\r
\r
\`\`\`html\r
<button id="meinButton" onclick="zauberspruch()">Klick mich!</button>\r
\`\`\`\r
\r
Was passiert hier?\r
\r
- \`button\`: Sagt, dass dies ein Knopf ist.\r
- \`id="meinButton"\`: Das ist der Name des Knopfes, damit wir ihn später im JS-Code wiedererkennen.\r
- \`onclick="zauberspruch()"\`: Das ist der magische Teil\\! Wenn jemand auf den Knopf klickt (\`onclick\`), soll der Zauberspruch namens \`zauberspruch()\` aufgerufen werden.\r
\r
---\r
\r
## 2\\. Der Zauberspruch im Zauberbuch 📖\r
\r
Jetzt schreiben wir den Zauberspruch in unser Zauberbuch, das sind die \`<script>\`-Tags. Das Zauberbuch kommt entweder in den \`<head>\`-Bereich oder ans Ende des \`<body>\` in deiner HTML-Datei.\r
\r
\`\`\`html\r
<script>\r
  function zauberspruch() {\r
    alert('Hokuspokus!')\r
  }\r
<\/script>\r
\`\`\`\r
\r
- \`function zauberspruch()\`: So beginnt ein neuer Zauberspruch. Sein Name ist \`zauberspruch\`.\r
- \`alert("Hokuspokus!")\`: Das ist, was der Zauberspruch macht. In diesem Fall zeigt er ein kleines Fenster mit dem Text „Hokuspokus\\!“ an.\r
\r
Wenn du jetzt die Seite öffnest und auf den Knopf drückst, siehst du das kleine Pop-up-Fenster\\!\r
\r
## 3. Den Button-Text verändern ✍️\r
\r
Statt eine ID und getElementById zu verwenden, kann sich der Button selbst an die Funktion übergeben — mit this. So brauchst du keine ID.\r
\r
\`\`\`html\r
<button onclick="textAendern(this)">Klick mich für eine Überraschung!</button>\r
\r
<script>\r
  function textAendern(btn) {\r
    // "btn" ist das übergebene Button-Element\r
    btn.innerText = 'Überraschung!'\r
  }\r
<\/script>\r
\`\`\`\r
\r
\`<button onclick="textAendern(this)"> Klick mich für eine Überraschung!</button>\`\r
Dies ist ein HTML-Button. Das Attribut \`onclick\` sorgt dafür, dass beim Klick die Funktion \`textAendern\` aufgerufen wird. Mit \`this\` wird das aktuelle Button-Element an die Funktion übergeben.\r
\r
\`<script> ... <\/script>\`\r
Hier steht JavaScript-Code, der im Browser ausgeführt wird.\r
\r
\`function textAendern(btn) { ... }\`\r
Dies ist die Funktionsdefinition. Die Funktion heißt textAendern und nimmt einen Parameter btn entgegen. Dieser Parameter ist das Button-Element, das beim Klick übergeben wurde.\r
\r
\`btn.innerText = 'Überraschung!'\`\r
Mit dieser Zeile wird der Text des Buttons geändert. \`btn.innerText\` greift auf den sichtbaren Text des Buttons zu und setzt ihn auf \`„Überraschung!“\`.\r
`;export{n as default};
