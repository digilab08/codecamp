const n=`# Klassen hinzufügen und entfernen mit Tailwind 🎨\r
\r
Tailwind CSS verwendet viele kleine Klassen, um das Aussehen von Elementen zu steuern. Mit JavaScript können wir diese Klassen ganz einfach hinzufügen und entfernen, um zum Beispiel die Farben zu ändern, ein Element zu verstecken oder wieder sichtbar zu machen.\r
\r
---\r
\r
## 1\\. Eine Klasse hinzufügen ➕\r
\r
Stell dir vor, du hast einen Button und möchtest, dass er **fett gedruckt** wird, wenn du ihn klickst. Die Tailwind-Klasse dafür ist \`font-bold\`.\r
\r
**Beispiel:**\r
\r
\`\`\`html\r
<button id="meinButton" class="bg-blue-500 text-white py-2 px-4 rounded" onclick="machFett()">\r
  Klick mich!\r
</button>\r
\r
<script>\r
  function machFett() {\r
    let button = document.getElementById('meinButton')\r
    // Füge die Tailwind-Klasse hinzu\r
    button.classList.add('font-bold')\r
  }\r
<\/script>\r
\`\`\`\r
\r
Wenn du jetzt auf den Button klickst, wird der Text **fett**.\r
\r
---\r
\r
## 2\\. Eine Klasse entfernen ➖\r
\r
Du hast einen Kasten, der eine rote Hintergrundfarbe hat (\`bg-red-500\`). Mit einem Klick soll diese Farbe verschwinden.\r
\r
**Beispiel:**\r
\r
\`\`\`html\r
<div id="meinKasten" class="bg-red-500 p-4">Roter Kasten</div>\r
<button onclick="farbeEntfernen()">Entferne die Farbe</button>\r
\r
<script>\r
  function farbeEntfernen() {\r
    let kasten = document.getElementById('meinKasten')\r
    // Entferne die Tailwind-Klasse\r
    kasten.classList.remove('bg-red-500')\r
  }\r
<\/script>\r
\`\`\`\r
\r
Wenn du auf den Button klickst, wird die Klasse \`bg-red-500\` entfernt und der Hintergrund wird transparent.\r
\r
---\r
\r
## 3\\. Klassen umschalten 🔄\r
\r
Dies ist besonders nützlich für Dinge wie ein Menü, das auf- und zugeklappt werden kann. Hierfür nutzen wir \`classList.toggle()\`. Stell dir vor, du möchtest ein Element verstecken (\`hidden\`) und wieder anzeigen.\r
\r
**Beispiel:**\r
\r
\`\`\`html\r
<button onclick="zeigUndVersteck()">Zeig/Versteck den Text</button>\r
<p id="meinText" class="text-xl mt-4">Dies ist ein versteckter Text!</p>\r
\r
<script>\r
  function zeigUndVersteck() {\r
    let text = document.getElementById('meinText')\r
    // Schalte die Tailwind-Klasse 'hidden' um\r
    text.classList.toggle('hidden')\r
  }\r
<\/script>\r
\`\`\`\r
\r
Jedes Mal, wenn du auf den Button klickst, fügt \`toggle()\` die Klasse \`hidden\` hinzu oder entfernt sie wieder. Der Text verschwindet und taucht wieder auf.\r
\r
Denk daran: Du kannst jede beliebige Tailwind-Klasse mit diesen Methoden hinzufügen, entfernen oder umschalten\\!\r
`;export{n as default};
