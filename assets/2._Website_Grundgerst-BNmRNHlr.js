const e=`# 🏗️ Das Grundgerüst einer Webseite

Eine Webseite hat immer einen festen Rahmen – ähnlich wie ein Aufsatz:

- Deckblatt
- Überschrift
- Text
- Fazit

In HTML sieht dieses "Deckblatt" so aus:

\`\`\`html
<!DOCTYPE html>
<html>
  <head>
    <title>Meine erste Seite</title>
  </head>
  <body>
    <h1>Hallo Welt!</h1>
    <p>Hier schreibe ich meinen ersten Text.</p>
  </body>
</html>
\`\`\`

## 📝 Erklärung:

- \`<!DOCTYPE html>\` → Sagt dem Browser: "Hey, das ist HTML5!"
- \`<html> ... </html>\` → Alles, was zu deiner Webseite gehört.
- \`<head> ... </head>\` → Dinge, die man nicht direkt sieht (Titel, Infos).
- \`<title> ... </title>\` → Wird oben im Tab vom Browser angezeigt.
- \`<body> ... </body>\` → Alles, was sichtbar ist – Überschriften, Texte, Bilder.

👉 **Aufgabe:**

- Erstelle eine neue Textdatei, nenne sie \`index.html\`. Denn wenn der Browser nicht genau weis was er öffnen soll versucht er \`index.html\` zu öffnen.
- Kopiere den Code hinein oder gib ein \`!\` und dann enter.
- Drücke ganz obenrechts auf dieses Symbol:

![Html-Vorschau-Symbol](/codecamp/img/html_preview.png)

- Tadaa, deine erste Webseite ist fertig!
`;export{e as default};
