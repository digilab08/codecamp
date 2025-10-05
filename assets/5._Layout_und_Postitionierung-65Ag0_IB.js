const e=`# 🛠️ Flexbox und Grid – Baue deine eigene Bühne!\r
\r
Stell dir vor, du bist ein Bühnenbauer und möchtest deine Schauspieler (Elemente) ganz genau anordnen. Mit **Flexbox** und **Grid** von Tailwind CSS kannst du das super einfach machen! Hier lernst du, wie du deine Elemente wie Bausteine auf der Bühne verteilst.\r
\r
---\r
\r
## 🎯 Flexbox – Die flexible Reihe\r
\r
Mit \`flex\` kannst du Elemente wie Tänzer in einer Reihe oder Spalte anordnen. Du bestimmst, wie sie stehen, wie viel Platz sie bekommen und wie sie sich bewegen.\r
\r
### Beispiel: Eine Reihe von Boxen\r
\r
\`\`\`html\r
<div class="flex bg-gray-100 p-4">\r
  <div class="w-16 h-16 bg-blue-400 m-2"></div>\r
  <div class="w-16 h-16 bg-red-400 m-2"></div>\r
  <div class="w-16 h-16 bg-green-400 m-2"></div>\r
</div>\r
\`\`\`\r
\r
---\r
\r
### 📏 Justify – Wie stehen die Tänzer in der Reihe?\r
\r
Mit \`justify-...\` bestimmst du, wie die Boxen **horizontal** verteilt werden.\r
\r
| Klasse                | Was passiert?                  |\r
|-----------------------|-------------------------------|\r
| \`justify-start\`       | Alle stehen ganz links         |\r
| \`justify-center\`      | Alle stehen in der Mitte       |\r
| \`justify-end\`         | Alle stehen ganz rechts        |\r
| \`justify-between\`     | Erster links, letzter rechts, Rest verteilt |\r
| \`justify-around\`      | Gleich viel Platz um jede Box  |\r
\r
**Beispiel:**\r
\r
\`\`\`html\r
<div class="flex justify-between bg-gray-100 p-4">\r
  <div class="w-16 h-16 bg-blue-400"></div>\r
  <div class="w-16 h-16 bg-red-400"></div>\r
  <div class="w-16 h-16 bg-green-400"></div>\r
</div>\r
\`\`\`\r
\r
---\r
\r
### 🧍 Items – Wie stehen die Tänzer in der Höhe?\r
\r
Mit \`items-...\` bestimmst du, wie die Boxen **vertikal** ausgerichtet werden.\r
\r
| Klasse           | Was passiert?                   |\r
|------------------|--------------------------------|\r
| \`items-start\`    | Alle stehen oben                |\r
| \`items-center\`   | Alle stehen in der Mitte        |\r
| \`items-end\`      | Alle stehen unten               |\r
| \`items-stretch\`  | Alle werden gleich hoch         |\r
\r
**Beispiel:**\r
\r
\`\`\`html\r
<div class="flex items-end h-32 bg-gray-100 p-4">\r
  <div class="w-16 h-8 bg-blue-400"></div>\r
  <div class="w-16 h-16 bg-red-400"></div>\r
  <div class="w-16 h-24 bg-green-400"></div>\r
</div>\r
\`\`\`\r
\r
### ↔️↕️ Flex Direction – Reihe oder Spalte?\r
\r
Mit \`flex-row\` und \`flex-col\` bestimmst du, ob deine Elemente **nebeneinander** (in einer Reihe) oder **untereinander** (in einer Spalte) angeordnet werden.\r
\r
| Klasse        | Was passiert?                        |\r
|---------------|-------------------------------------|\r
| \`flex-row\`    | Elemente stehen nebeneinander (Standard) |\r
| \`flex-col\`    | Elemente stehen untereinander        |\r
\r
**Beispiel:**\r
\r
\`\`\`html\r
<!-- Reihe (Standard) -->\r
<div class="flex flex-row bg-gray-100 p-4">\r
  <div class="w-16 h-16 bg-blue-400 m-2"></div>\r
  <div class="w-16 h-16 bg-red-400 m-2"></div>\r
  <div class="w-16 h-16 bg-green-400 m-2"></div>\r
</div>\r
\r
<!-- Spalte -->\r
<div class="flex flex-col bg-gray-100 p-4 mt-4">\r
  <div class="w-16 h-16 bg-blue-400 m-2"></div>\r
  <div class="w-16 h-16 bg-red-400 m-2"></div>\r
  <div class="w-16 h-16 bg-green-400 m-2"></div>\r
</div>\r
\`\`\`\r
\r
\r
---\r
\r
## 🟩 Grid – Das Schachbrett\r
\r
Mit \`grid\` kannst du ein richtiges Gitter bauen, wie ein Schachbrett. Du bestimmst, wie viele Spalten und Reihen es gibt.\r
\r
### Beispiel: Ein 3x2-Gitter\r
\r
\`\`\`html\r
<div class="grid grid-cols-3 gap-4 bg-gray-100 p-4">\r
  <div class="h-16 bg-blue-400"></div>\r
  <div class="h-16 bg-red-400"></div>\r
  <div class="h-16 bg-green-400"></div>\r
  <div class="h-16 bg-yellow-400"></div>\r
  <div class="h-16 bg-purple-400"></div>\r
  <div class="h-16 bg-pink-400"></div>\r
</div>\r
\`\`\`\r
\r
---\r
\r
### 📏 Grid Justify & Items\r
\r
Auch im Grid kannst du die Ausrichtung bestimmen:\r
\r
| Klasse                | Was passiert?                  |\r
|-----------------------|-------------------------------|\r
| \`justify-items-start\` | Inhalt in jeder Zelle links    |\r
| \`justify-items-center\`| Inhalt in jeder Zelle mittig   |\r
| \`justify-items-end\`   | Inhalt in jeder Zelle rechts   |\r
\r
| Klasse                | Was passiert?                  |\r
|-----------------------|-------------------------------|\r
| \`items-start\`         | Inhalt oben in der Zelle       |\r
| \`items-center\`        | Inhalt mittig in der Zelle     |\r
| \`items-end\`           | Inhalt unten in der Zelle      |\r
\r
**Beispiel:**\r
\r
\`\`\`html\r
<div class="grid grid-cols-3 items-end justify-items-center h-32 bg-gray-100 p-4">\r
  <div class="h-8 w-8 bg-blue-400"></div>\r
  <div class="h-16 w-8 bg-red-400"></div>\r
  <div class="h-24 w-8 bg-green-400"></div>\r
</div>\r
\`\`\`\r
\r
---\r
\r
**Tipp:** Probiere die Klassen aus und schau, wie sich die Boxen bewegen! So wirst du zum Bühnenprofi für Webseiten.\r
`;export{e as default};
