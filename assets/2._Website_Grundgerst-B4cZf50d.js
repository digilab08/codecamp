const e=`# 🏗️ Das Grundgerüst einer Webseite\r
\r
Eine Webseite hat immer einen festen Rahmen – ähnlich wie ein Aufsatz:\r
\r
- Deckblatt\r
- Überschrift\r
- Text\r
- Fazit\r
\r
In HTML sieht dieses "Deckblatt" so aus:\r
\r
\`\`\`html\r
<!DOCTYPE html>\r
<html>\r
  <head>\r
    <title>Meine erste Seite</title>\r
  </head>\r
  <body>\r
    <h1>Hallo Welt!</h1>\r
    <p>Hier schreibe ich meinen ersten Text.</p>\r
  </body>\r
</html>\r
\`\`\`\r
\r
## 📝 Erklärung:\r
\r
- \`<!DOCTYPE html>\` → Sagt dem Browser: "Hey, das ist HTML5!"\r
- \`<html> ... </html>\` → Alles, was zu deiner Webseite gehört.\r
- \`<head> ... </head>\` → Dinge, die man nicht direkt sieht (Titel, Infos).\r
- \`<title> ... </title>\` → Wird oben im Tab vom Browser angezeigt.\r
- \`<body> ... </body>\` → Alles, was sichtbar ist – Überschriften, Texte, Bilder.\r
\r
👉 **Aufgabe:**\r
\r
- Erstelle eine neue Textdatei, nenne sie \`index.html\`. Denn wenn der Browser nicht genau weis was er öffnen soll versucht er \`index.html\` zu öffnen.\r
- Kopiere den Code hinein oder gib ein \`!\` und dann enter.\r
- Drücke ganz obenrechts auf dieses Symbol:\r
\r
![Html-Vorschau-Symbol](/codecamp/img/html_preview.png)\r
\r
- Tadaa, deine erste Webseite ist fertig!\r
`;export{e as default};
