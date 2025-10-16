# Klassen hinzufügen und entfernen mit Tailwind 🎨

Tailwind CSS verwendet viele kleine Klassen, um das Aussehen von Elementen zu steuern. Mit JavaScript können wir diese Klassen ganz einfach hinzufügen und entfernen, um zum Beispiel die Farben zu ändern, ein Element zu verstecken oder wieder sichtbar zu machen.

---

## 1\. Eine Klasse hinzufügen ➕

Stell dir vor, du hast einen Button und möchtest, dass er **fett gedruckt** wird, wenn du ihn klickst. Die Tailwind-Klasse dafür ist `font-bold`.

**Beispiel:**

```html
<button id="meinButton" class="bg-blue-500 text-white py-2 px-4 rounded" onclick="machFett()">
  Klick mich!
</button>

<script>
  function machFett() {
    let button = document.getElementById('meinButton')
    // Füge die Tailwind-Klasse hinzu
    button.classList.add('font-bold')
  }
</script>
```

Wenn du jetzt auf den Button klickst, wird der Text **fett**.

---

## 2\. Eine Klasse entfernen ➖

Du hast einen Kasten, der eine rote Hintergrundfarbe hat (`bg-red-500`). Mit einem Klick soll diese Farbe verschwinden.

**Beispiel:**

```html
<div id="meinKasten" class="bg-red-500 p-4">Roter Kasten</div>
<button onclick="farbeEntfernen()">Entferne die Farbe</button>

<script>
  function farbeEntfernen() {
    let kasten = document.getElementById('meinKasten')
    // Entferne die Tailwind-Klasse
    kasten.classList.remove('bg-red-500')
  }
</script>
```

Wenn du auf den Button klickst, wird die Klasse `bg-red-500` entfernt und der Hintergrund wird transparent.

---

## 3\. Klassen umschalten 🔄

Dies ist besonders nützlich für Dinge wie ein Menü, das auf- und zugeklappt werden kann. Hierfür nutzen wir `classList.toggle()`. Stell dir vor, du möchtest ein Element verstecken (`hidden`) und wieder anzeigen.

**Beispiel:**

```html
<button onclick="zeigUndVersteck()">Zeig/Versteck den Text</button>
<p id="meinText" class="text-xl mt-4">Dies ist ein versteckter Text!</p>

<script>
  function zeigUndVersteck() {
    let text = document.getElementById('meinText')
    // Schalte die Tailwind-Klasse 'hidden' um
    text.classList.toggle('hidden')
  }
</script>
```

Jedes Mal, wenn du auf den Button klickst, fügt `toggle()` die Klasse `hidden` hinzu oder entfernt sie wieder. Der Text verschwindet und taucht wieder auf.

Denk daran: Du kannst jede beliebige Tailwind-Klasse mit diesen Methoden hinzufügen, entfernen oder umschalten\!
