const e=`# 1. HTML Elemente identifizieren\r
\r
Stell dir vor, du hast eine riesige Schatzkiste, die dein **HTML-Dokument** ist. In dieser Kiste gibt es viele verschiedene Spielsachen: Ein Spielzeugauto, einen Teddybären, Bauklötze usw. Jedes dieser Spielsachen hat ein **Etikett** mit einem Namen, damit du es leicht wiederfindest.\r
\r
In JavaScript ist \`document.getElementById\` wie ein magischer Suchbefehl, den du benutzt, um ein ganz bestimmtes Spielzeug mit einem **bestimmten Etikett-Namen** zu finden.\r
\r
---\r
\r
### **Wie es funktioniert**\r
\r
Wenn du in deinem HTML-Code zum Beispiel einen Satz hast, der später verändert werden soll, gibst du ihm ein Etikett (eine **ID**):\r
\r
\`\`\`html\r
<p id="begruessung">Hallo Welt!</p>\r
\`\`\`\r
\r
Die ID in diesem Fall ist \`"begruessung"\`.\r
\r
Wenn du jetzt in deinem JavaScript-Code diesen Satz finden und ändern möchtest, benutzt du \`document.getElementById\` und sagst ihm, nach welchem Etikett er suchen soll:\r
\r
\`\`\`javascript\r
// Finde das HTML-Element mit der ID "begruessung"\r
let meinSatz = document.getElementById('begruessung')\r
\r
// Ändere den Textinhalt dieses Elements\r
meinSatz.textContent = 'Willkommen auf meiner Website!'\r
\`\`\`\r
\r
In diesem Code-Beispiel:\r
\r
1.  \`document.getElementById("begruessung")\` sucht in der Schatzkiste (deinem HTML-Dokument) nach dem Spielzeug mit dem Etikett \`"begruessung"\`.\r
2.  Es findet den \`p\`-Tag und speichert ihn in der Variable \`meinSatz\`.\r
3.  Danach kannst du mit \`meinSatz.textContent\` den Inhalt des Satzes ganz einfach ändern.\r
\r
---\r
\r
### **Wofür man es braucht**\r
\r
Du brauchst \`document.getElementById\`, um deine Webseite **interaktiv** zu machen. Denk an Aktionen wie:\r
\r
- Ein Text ändert sich, wenn jemand einen Knopf drückt.\r
- Ein Bild erscheint oder verschwindet.\r
- Eine Farbe ändert sich, wenn du mit der Maus über ein Element fährst.\r
\r
Ohne diesen Befehl wäre deine Website nur ein statisches Bild. Mit ihm kannst du die Elemente auf deiner Seite gezielt ansprechen und zum Leben erwecken\\! 🎉\r
`;export{e as default};
