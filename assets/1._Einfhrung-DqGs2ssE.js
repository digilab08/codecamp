const e=`# Einführung in Tailwind CSS\r
\r
**Tailwind CSS** ist ein Werkzeug, das dir hilft, Webseiten schöner zu machen – und das ganz einfach! Statt viele eigene CSS-Regeln zu schreiben, benutzt du kleine, fertige Klassen direkt im HTML. Damit kannst du zum Beispiel Farben, Abstände oder Schriftarten einstellen, ohne extra CSS-Dateien zu schreiben. So bleibt dein Code übersichtlich und du siehst schnell, was sich ändert.\r
\r
## Wie benutzt man Tailwind CSS?\r
\r
Du kannst Tailwind CSS ganz leicht in deine HTML-Datei einbauen. Dafür brauchst du nur eine Zeile Code. Füge diesen \`<script>\`-Tag in den \`<head>\`-Bereich deiner HTML-Datei ein: \`<script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"><\/script>\`\r
\r
Das sollte dann etwa so aussehen:\r
\`\`\`html\r
<!DOCTYPE html>\r
<html lang="de">\r
<head>\r
    <meta charset="UTF-8">\r
    <meta name="viewport" content="width=device-width, initial-scale=1.0">\r
    <title>Titel</title>\r
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"><\/script>\r
</head>\r
<body>\r
    \r
</body>\r
</html>\r
\`\`\`\r
\r
## Wie verändert man das Styling mit Tailwind?\r
\r
In Tailwind CSS passt du das Aussehen deiner Elemente an, indem du ihnen spezielle Klassen gibst. Jede Klasse steht für eine bestimmte Eigenschaft, zum Beispiel eine Farbe, einen Abstand oder eine Schriftgröße.\r
\r
Hier ein Beispiel:  \r
\`\`\`html\r
<button class="bg-blue-500 text-white px-4 py-2 rounded">\r
    Klick mich!\r
</button>\r
\`\`\`\r
In diesem Beispiel sorgt \`bg-blue-500\` für einen blauen Hintergrund, \`text-white\` für weiße Schrift, \`px-4 py-2\` für Innenabstände und \`rounded\` für abgerundete Ecken.  \r
So kannst du das Styling direkt im HTML steuern, ohne eigene CSS-Regeln zu schreiben.`;export{e as default};
