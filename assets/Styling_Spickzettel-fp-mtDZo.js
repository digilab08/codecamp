const n=`## Styling Spickzettel

### Einführung

CSS bietet viele Möglichkeiten und ist mehr als nur das Layout von Seiten.

#### External stylesheet

\`\`\`html
<link href="./path/to/stylesheet/style.css" rel="stylesheet" type="text/css" />
\`\`\`

#### Internal stylesheet

\`\`\`html
<style>
  body {
    background-color: linen;
  }
</style>
\`\`\`

#### Inline styles

\`\`\`html
<h2 style="text-align: center;">Centered text</h2>

<p style="color: blue; font-size: 18px;">Blue, 18-point text</p>
\`\`\`

---

## Add class

\`\`\`html
<div class="classname"></div>
<div class="class1 ... classn"></div>
\`\`\`

Unterstützt mehrere Klassen auf einem Element.

---

## !important

\`\`\`css
.post-title {
  color: blue !important;
}
\`\`\`

Überschreibt alle vorherigen Styling-Regeln.

---

## Selector

\`\`\`css
h1 {
}
#job-title {
}
div.hero {
}
div > p {
}
\`\`\`

Siehe: [Selectors](#css-selectors)

---

## Text color

\`\`\`css
color: #2a2aff;
color: green;
color: rgb(34, 12, 64, 0.6);
color: hsla(30 100% 50% / 0.6);
\`\`\`

Siehe: [Colors](#css-colors)

---

## Background

\`\`\`css
background-color: blue;
background-image: url('nyan-cat.gif');
background-image: url('../image.png');
\`\`\`

Siehe: [Backgrounds](#css-backgrounds)

---

## Font

\`\`\`css
.page-title {
  font-weight: bold;
  font-size: 30px;
  font-family: 'Courier New';
}
\`\`\`

Siehe: [Fonts](#css-fonts)

---

## Position

\`\`\`css
.box {
  position: relative;
  top: 20px;
  left: 20px;
}
\`\`\`

Siehe auch: [Position](https://learn-the-web.algonquindesign.ca/topics/css-layout-cheat-sheet/)

---

## Animation

\`\`\`css
animation: 300ms linear 0s infinite;

animation: bounce 300ms linear infinite;
\`\`\`

Siehe: [Animation](#css-animation)

---

## Comment

\`\`\`css
/* This is a single line comment */

/* This is a 
   multi-line comment */
\`\`\`

---

## Flex layout

\`\`\`css
div {
  display: flex;
  justify-content: center;
}
div {
  display: flex;
  justify-content: flex-start;
}
\`\`\`

Siehe: [Flexbox](#css-flexbox) | [Flex Tricks](#css-flexbox-tricks)

---

## Grid layout

\`\`\`css
#container {
  display: grid;
  grid: repeat(2, 60px) / auto-flow 80px;
}

#container > div {
  background-color: #8ca0ff;
  width: 50px;
  height: 50px;
}
\`\`\`

Siehe: [Grid Layout](#css-grid-layout)

---

## Variable & Counter

\`\`\`css
counter-set: subsection;
counter-increment: subsection;
counter-reset: subsection 0;

:root {
  --bg-color: brown;
}
element {
  background-color: var(--bg-color);
}
\`\`\`

Siehe: [Dynamic content](#css-dynamic-content)

## Quellenverzeichnis

Diese Seite ist stark angelehnt an: [quickref.me](https://quickref.me/css3)
`;export{n as default};
