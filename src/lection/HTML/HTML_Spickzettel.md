## Erste Schritte

### hallo.html

```html
<!DOCTYPE html>
<html lang="de">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>HTML5 Grundgerüst</title>
  </head>
  <body>
    <h1>Hallo Welt, hallo QuickRef.ME!</h1>
  </body>
</html>
```

### Kommentar

```html
<!-- this is a comment -->

<!--
    Or you can comment out a
    large number of lines.
-->
```

### Absatz

```html
<p>Ich komme von QuickRef.ME</p>
<p>Teile schnelle Referenz-Spickzettel.</p>
```

Siehe: [Das Absatz-Element (p)](https://developer.mozilla.org/de/docs/Web/HTML/Element/p)

### HTML-Link

```html
<a href="https://quickref.me">QuickRef</a>
<a href="mailto:max@abc.de">E-Mail</a>
<a href="tel:+4912345678">Anrufen</a>
<a href="sms:+4912345678&body=ha%20ha">Nachricht</a>
```

|     |          |                                                          |
| --- | -------- | -------------------------------------------------------- |
|     | `href`   | Die URL, auf die der Hyperlink verweist                  |
|     | `rel`    | Beziehung der verlinkten URL                             |
|     | `target` | Ziel des Links: <br>`_self`, `_blank`, `_top`, `_parent` |

Siehe: [Die \<a\> Attribute](https://developer.mozilla.org/de/docs/Web/HTML/Element/a#attribute)

### Bild-Tag (Image)

```html
<img loading="lazy" src="https://xxx.png" alt="Bild hier beschreiben" width="400" height="400" />
```

|     |           |                                     |
| --- | --------- | ----------------------------------- |
|     | `src`     | Erforderlich, Bild-Ort              |
|     | `alt`     | Beschreibung des Bildes             |
|     | `width`   | Breite des Bildes                   |
|     | `height`  | Höhe des Bildes                     |
|     | `loading` | Wie der Browser das Bild laden soll |

Siehe: [Das Bild-Einbettungs-Element (img)](https://developer.mozilla.org/de/docs/Web/HTML/Element/img)

### Textformatierungs-Tags

```html
<b>Fetter Text</b>
<strong>Dieser Text ist wichtig</strong>
<i>Kursiver Text</i>
<em>Dieser Text ist hervorgehoben</em>
<u>Unterstrichener Text</u>
<pre>Vorformatierter Text</pre>
<code>Quellcode</code>
<del>Gelöschter Text</del>
<mark>Hervorgehobener Text (HTML5)</mark>
<ins>Eingefügter Text</ins>
<sup>Macht Text hochgestellt</sup>
<sub>Macht Text tiefgestellt</sub>
<small>Macht Text kleiner</small>
<kbd>Strg</kbd>
<blockquote>Text als Zitatblock</blockquote>
```

### Überschriften

```html
<h1>Das ist Überschrift 1</h1>
<h2>Das ist Überschrift 2</h2>
<h3>Das ist Überschrift 3</h3>
<h4>Das ist Überschrift 4</h4>
<h5>Das ist Überschrift 5</h5>
<h6>Das ist Überschrift 6</h6>
```

Du solltest nur eine `<h1>` auf deiner Seite haben.

### Seitenbereiche

|                 |                                                |
| --------------- | ---------------------------------------------- |
| `<div></div>`   | Ein Bereich oder Abschnitt des Seiteninhalts   |
| `<span></span>` | Ein Bereich von Text innerhalb anderen Inhalts |
| `<p></p>`       | Ein Textabsatz                                 |
| `<br>`          | Zeilenumbruch                                  |
| `<hr>`          | Horizontale Trennlinie                         |

Diese Tags werden verwendet, um deine Seite in Abschnitte zu unterteilen.

### Inline-Frame

```html
<iframe
  title="New York"
  width="342"
  height="306"
  id="gmap_canvas"
  src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"
  scrolling="no"
>
</iframe>
```

**Vorschau:**

<iframe title="New York" width="342" height="306" id="gmap_canvas" src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed" scrolling="no">
</iframe>

Siehe: [Das Inline-Frame-Element (iframe)](https://developer.mozilla.org/de/docs/Web/HTML/Element/iframe)

### JavaScript in HTML

```html
<script type="text/javascript">
  let text = 'Hallo QuickRef.ME'
  alert(text)
</script>
```

#### Externes JavaScript

```html
<body>
  ...

  <script src="app.js"></script>
</body>
```

### CSS in HTML

```html
<style type="text/css">
  h1 {
    color: purple;
  }
</style>
```

#### Externes Stylesheet

```html
<head>
  ...
  <link rel="stylesheet" href="style.css" />
</head>
```

---

## HTML5-Tags

### Dokument

```html
<body>
  <header>
    <nav>...</nav>
  </header>
  <main>
    <h1>QuickRef.ME</h1>
  </main>
  <footer>
    <p>©2023 QuickRef.ME</p>
  </footer>
</body>
```

### Kopfzeilen-Navigation

```html
<header>
  <nav>
    <ul>
      <li><a href="#">Seite bearbeiten</a></li>
      <li><a href="#">Twitter</a></li>
      <li><a href="#">Facebook</a></li>
    </ul>
  </nav>
</header>
```

### HTML5-Tags Tabelle

|                                                                                 |                                                       |
| ------------------------------------------------------------------------------- | ----------------------------------------------------- |
| [article](https://developer.mozilla.org/de/docs/Web/HTML/Element/article)       | Inhalt, der für sich allein steht                     |
| [aside](https://developer.mozilla.org/de/docs/Web/HTML/Element/aside)           | Sekundärer Inhalt                                     |
| [audio](https://developer.mozilla.org/de/docs/Web/HTML/Element/audio)           | Bettet einen Ton oder Audiostream ein                 |
| [bdi](https://developer.mozilla.org/de/docs/Web/HTML/Element/bdi)               | Das bidirektionale Isolations-Element                 |
| [canvas](https://developer.mozilla.org/de/docs/Web/HTML/Element/canvas)         | Grafiken via JavaScript zeichnen                      |
| [data](https://developer.mozilla.org/de/docs/Web/HTML/Element/data)             | Maschinenlesbarer Inhalt                              |
| [datalist](https://developer.mozilla.org/de/docs/Web/HTML/Element/datalist)     | Eine Liste vordefinierter Optionen                    |
| [details](https://developer.mozilla.org/de/docs/Web/HTML/Element/details)       | Zusätzliche Informationen                             |
| [dialog](https://developer.mozilla.org/de/docs/Web/HTML/Element/dialog)         | Eine Dialogbox oder ein Unterfenster                  |
| [embed](https://developer.mozilla.org/de/docs/Web/HTML/Element/embed)           | Bettet externe Anwendungen ein                        |
| [figcaption](https://developer.mozilla.org/de/docs/Web/HTML/Element/figcaption) | Eine Bildunterschrift oder Legende für eine Abbildung |
| [figure](https://developer.mozilla.org/de/docs/Web/HTML/Element/figure)         | Eine illustrierte Abbildung                           |
| [footer](https://developer.mozilla.org/de/docs/Web/HTML/Element/footer)         | Fußzeile oder am wenigsten wichtiger Inhalt           |
| [header](https://developer.mozilla.org/de/docs/Web/HTML/Element/header)         | Kopfzeile oder wichtige Informationen                 |
| [main](https://developer.mozilla.org/de/docs/Web/HTML/Element/main)             | Der Hauptinhalt des Dokuments                         |
| [mark](https://developer.mozilla.org/de/docs/Web/HTML/Element/mark)             | Hervorgehobener Text                                  |
| [meter](https://developer.mozilla.org/de/docs/Web/HTML/Element/meter)           | Ein skalarer Wert innerhalb eines bekannten Bereichs  |
| [nav](https://developer.mozilla.org/de/docs/Web/HTML/Element/nav)               | Ein Abschnitt mit Navigationslinks                    |
| [output](https://developer.mozilla.org/de/docs/Web/HTML/Element/output)         | Das Ergebnis einer Berechnung                         |
| [picture](https://developer.mozilla.org/de/docs/Web/HTML/Element/picture)       | Ein Container für mehrere Bildquellen                 |
| [progress](https://developer.mozilla.org/de/docs/Web/HTML/Element/progress)     | Der Fortschritt einer Aufgabe                         |
| [rp](https://developer.mozilla.org/de/docs/Web/HTML/Element/rp)                 | Bietet Fallback-Klammern                              |
| [rt](https://developer.mozilla.org/de/docs/Web/HTML/Element/rt)                 | Definiert die Aussprache eines Zeichens               |
| [ruby](https://developer.mozilla.org/de/docs/Web/HTML/Element/ruby)             | Repräsentiert eine Ruby-Annotation                    |
| [section](https://developer.mozilla.org/de/docs/Web/HTML/Element/section)       | Eine Gruppe zusammengehöriger Inhalte                 |
| [source](https://developer.mozilla.org/de/docs/Web/HTML/Element/source)         | Ressourcen für Medienelemente                         |
| [summary](https://developer.mozilla.org/de/docs/Web/HTML/Element/summary)       | Eine Zusammenfassung für das `<details>`-Element      |
| [template](https://developer.mozilla.org/de/docs/Web/HTML/Element/template)     | Definiert HTML-Fragmente                              |
| [time](https://developer.mozilla.org/de/docs/Web/HTML/Element/time)             | Eine Uhrzeit oder ein Datum                           |
| [track](https://developer.mozilla.org/de/docs/Web/HTML/Element/track)           | Textspuren für Medienelemente                         |
| [video](https://developer.mozilla.org/de/docs/Web/HTML/Element/video)           | Bettet Video ein                                      |
| [wbr](https://developer.mozilla.org/de/docs/Web/HTML/Element/wbr)               | Eine Stelle für einen möglichen Zeilenumbruch         |

### HTML5 Video

```html
<video controls="" width="100%">
  <source
    src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
    type="video/mp4"
  />
  Entschuldigung, dein Browser unterstützt keine eingebetteten Videos.
</video>
```

**Vorschau:**
<video controls="" width="100%">

<source src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" type="video/mp4">
Sorry, your browser doesn't support embedded videos.
</video>

### HTML5 Audio

```html
<audio controls src="https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3">
  Dein Browser unterstützt das Audio-Element nicht.
</audio>
```

**Vorschau:**

<audio controls="" class="w-full" src="https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3">
Your browser does not support the audio element.
</audio>

### HTML5 Ruby

```html
<ruby> 汉 <rp>(</rp><rt>hàn</rt><rp>)</rp> 字 <rp>(</rp><rt>zì</rt><rp>)</rp> </ruby>
```

### HTML5 bdi

```html
<ul>
  <li>Benutzer <bdi>hrefs</bdi>: 60 Punkte</li>
  <li>Benutzer <bdi>jdoe</bdi>: 80 Punkte</li>
  <li>Benutzer <bdi>إيان</bdi>: 90 Punkte</li>
</ul>
```

### HTML5 progress

```html
<progress value="50" max="100"></progress>
```

<progress value="50" max="100" class="w-full"></progress>

### HTML5 mark

```html
<p>Ich liebe <mark>QuickRef.ME</mark></p>
```

<p>I Love <mark>QuickRef.ME</mark></p>

---

## HTML-Tabellen

### Tabellenbeispiel

```html
<table>
  <thead>
    <tr>
      <td>Name</td>
      <td>Alter</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Roberta</td>
      <td>39</td>
    </tr>
    <tr>
      <td>Oliver</td>
      <td>25</td>
    </tr>
  </tbody>
</table>
```

### HTML-Tabellen-Tags

| Tag                                                                             | Beschreibung                                    |
| ------------------------------------------------------------------------------- | ----------------------------------------------- |
| [`<table>`](https://developer.mozilla.org/de/docs/Web/HTML/Element/table)       | Definiert eine Tabelle                          |
| [`<th>`](https://developer.mozilla.org/de/docs/Web/HTML/Element/th)             | Definiert eine Kopfzeilenzelle in einer Tabelle |
| [`<tr>`](https://developer.mozilla.org/de/docs/Web/HTML/Element/tr)             | Definiert eine Zeile in einer Tabelle           |
| [`<td>`](https://developer.mozilla.org/de/docs/Web/HTML/Element/td)             | Definiert eine Zelle in einer Tabelle           |
| [`<caption>`](https://developer.mozilla.org/de/docs/Web/HTML/Element/caption)   | Definiert eine Tabellenüberschrift              |
| [`<colgroup>`](https://developer.mozilla.org/de/docs/Web/HTML/Element/colgroup) | Definiert eine Gruppe von Spalten               |
| [`<col>`](https://developer.mozilla.org/de/docs/Web/HTML/Element/col)           | Definiert eine Spalte innerhalb einer Tabelle   |
| [`<thead>`](https://developer.mozilla.org/de/docs/Web/HTML/Element/thead)       | Gruppiert den Kopfzeileninhalt                  |
| [`<tbody>`](https://developer.mozilla.org/de/docs/Web/HTML/Element/tbody)       | Gruppiert den Hauptinhalt                       |
| [`<tfoot>`](https://developer.mozilla.org/de/docs/Web/HTML/Element/tfoot)       | Gruppiert den Fußzeileninhalt                   |

### `<td>` Attribute

| Attribut  | Beschreibung                                                        |
| --------- | ------------------------------------------------------------------- |
| `colspan` | Anzahl der Spalten, die eine Zelle umfassen soll                    |
| `headers` | Eine oder mehrere Kopfzeilenzellen, auf die sich eine Zelle bezieht |
| `rowspan` | Anzahl der Zeilen, die eine Zelle umfassen soll                     |

Siehe: [td\#Attribute](https://developer.mozilla.org/de/docs/Web/HTML/Element/td#attribute)

### `<th>` Attribute

| Attribut                                                                        | Beschreibung                                                        |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `colspan`                                                                       | Anzahl der Spalten, die eine Zelle umfassen soll                    |
| `headers`                                                                       | Eine oder mehrere Kopfzeilenzellen, auf die sich eine Zelle bezieht |
| `rowspan`                                                                       | Anzahl der Zeilen, die eine Zelle umfassen soll                     |
| `abbr`                                                                          | Beschreibung des Zelleninhalts                                      |
| [`scope`](https://developer.mozilla.org/de/docs/Web/HTML/Element/th#attr-scope) | Gibt an, worauf sich die Kopfzeile bezieht                          |

Siehe: [th\#Attribute](https://developer.mozilla.org/de/docs/Web/HTML/Element/th#attribute)

---

## HTML-Listen

### Ungeordnete Liste

```html
<ul>
  <li>Ich bin ein Listenelement</li>
  <li>Ich bin ein weiteres Element</li>
  <li>Ich bin noch ein Element</li>
</ul>
```

Siehe: [Das ungeordnete Listen-Element (ul)](https://developer.mozilla.org/de/docs/Web/HTML/Element/ul)

### Geordnete Liste

```html
<ol>
  <li>Ich bin das erste Element</li>
  <li>Ich bin das zweite Element</li>
  <li>Ich bin das dritte Element</li>
</ol>
```

Siehe: [Das geordnete Listen-Element (ol)](https://developer.mozilla.org/de/docs/Web/HTML/Element/ol)

### Definitionsliste

```html
<dl>
  <dt>Ein Begriff</dt>
  <dd>Definition des Begriffs</dd>
  <dt>Ein anderer Begriff</dt>
  <dd>Definition des anderen Begriffs</dd>
</dl>
```

Siehe: [Das Beschreibungslisten-Element (dl)](https://developer.mozilla.org/de/docs/Web/HTML/Element/dl)

---

## HTML-Formulare

### Formular-Tags

```html
<form method="POST" action="api/login">
  <label for="mail">E-Mail: </label>
  <input type="email" id="mail" name="mail" />
  <br />
  <label for="pw">Passwort: </label>
  <input type="password" id="pw" name="pw" />
  <br />
  <input type="submit" value="Anmelden" />
  <br />
  <input type="checkbox" id="ck" name="ck" />
  <label for="ck">Angemeldet bleiben</label>
</form>
```

Das HTML `<form>` Element wird verwendet, um Informationen zu sammeln und an eine externe Quelle zu senden.

### Formular-Attribute

| Attribut   | Beschreibung                                                                                      |
| ---------- | ------------------------------------------------------------------------------------------------- |
| `name`     | Name des Formulars für Skripte                                                                    |
| `action`   | URL des Formular-Skripts                                                                          |
| `method`   | HTTP-Methode, `POST` / `GET` _(Standard)_                                                         |
| `enctype`  | Medientyp, siehe [enctype](https://developer.mozilla.org/de/docs/Web/API/HTMLFormElement/enctype) |
| `onsubmit` | Wird ausgeführt, wenn das Formular abgeschickt wird                                               |
| `onreset`  | Wird ausgeführt, wenn das Formular zurückgesetzt wird                                             |

### Label-Tags

```html
<label
  >Klick mich
  <input type="text" id="benutzer" name="name" />
</label>
```

---

```html
<label for="benutzer">Klick mich</label> <input id="benutzer" type="text" name="name" />
```

`for` in einem Label verweist auf das `id`-Attribut eines Inputs.

### Input-Tags

```html
<label for="Name">Name:</label> <input type="text" name="Name" id="" />
```

Siehe: [HTML Input-Tags](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input)

### Textarea-Tags

```html
<textarea rows="2" cols="30" name="adresse" id="adresse"></textarea>
```

Textarea ist ein mehrzeiliges Texteingabefeld.

### Radio-Buttons

```html
<input type="radio" name="geschlecht" id="m" />
<label for="m">Männlich</label>
<input type="radio" name="geschlecht" id="w" />
<label for="w">Weiblich</label>
```

Radio-Buttons werden verwendet, damit der Benutzer genau eine Option auswählen kann.

### Checkboxen

```html
<input type="checkbox" name="sport" id="fussball" />
<label for="fussball">Fußball</label>
<input type="checkbox" name="sport" id="baseball" />
<label for="baseball">Baseball</label>
```

Checkboxen erlauben dem Benutzer, eine oder mehrere Optionen auszuwählen.

### Select-Tags

```html
<label for="stadt">Stadt:</label>
<select name="stadt" id="stadt">
  <option value="1">Berlin</option>
  <option value="2">München</option>
  <option value="3">Hamburg</option>
</select>
```

Eine Select-Box ist eine Dropdown-Liste mit Optionen.

### Fieldset-Tags

```html
<fieldset>
  <legend>Dein Lieblingsmonster</legend>
  <input type="radio" id="kra" name="monster" />
  <label for="kra">Krake</label><br />
  <input type="radio" id="sas" name="monster" />
  <label for="sas">Sasquatch</label>
</fieldset>
```

### Datalist-Tags (HTML5)

```html
<label for="b">Wähle einen Browser: </label>
<input list="liste" id="b" name="browser" />
<datalist id="liste">
  <option value="Chrome"></option>
  <option value="Firefox"></option>
  <option value="Internet Explorer"></option>
  <option value="Opera"></option>
  <option value="Safari"></option>
  <option value="Microsoft Edge"></option>
</datalist>
```

### Senden- und Zurücksetzen-Buttons

```html
<form action="registrieren.php" method="post">
  <label for="name_feld">Name:</label>
  <input type="text" name="name" id="name_feld" />
  <input type="submit" value="Senden" />
  <input type="reset" value="Zurücksetzen" />
</form>
```

`Senden` schickt die Daten an den Server; `Zurücksetzen` setzt sie auf die Standardwerte zurück.

---

## HTML Input-Tags

### Input-Attribute

Das Input-Tag ist ein leeres Element, das den Typ der Information angibt, die vom Benutzer abgefragt werden soll.

```html
<input type="text" name="?" value="?" minlength="6" required />
```

|     |                         |                                                                                                                                               |
| --- | ----------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
|     | `type="…"`              | Der Datentyp, der eingegeben wird                                                                                                             |
|     | `value="…"`             | Standardwert                                                                                                                                  |
|     | `name="…"`              | Wird verwendet, um diese Daten in der HTTP-Anfrage zu beschreiben                                                                             |
|     | `id="…"`                | Eindeutiger Identifikator für andere HTML-Elemente                                                                                            |
|     | `readonly`              | Verhindert, dass der Benutzer den Wert ändert                                                                                                 |
|     | `disabled`              | Deaktiviert jegliche Interaktion                                                                                                              |
|     | `checked`               | Gibt an, ob ein Radio-Button oder eine Checkbox ausgewählt ist                                                                                |
|     | `required`              | Macht die Eingabe verpflichtend, siehe [required](https://developer.mozilla.org/de/docs/Web/HTML/Attributes/required#beispiel)                |
|     | `placeholder="…"`       | Fügt einen temporären Platzhaltertext hinzu, siehe [::placeholder](https://developer.mozilla.org/de/docs/Web/CSS/::placeholder#beispiele)     |
|     | `autocomplete="off"`    | Deaktiviert die Autovervollständigung                                                                                                         |
|     | `autocapitalize="none"` | Deaktiviert die automatische Großschreibung                                                                                                   |
|     | `inputmode="…"`         | Zeigt eine spezifische Tastatur an, siehe [inputmode](https://developer.mozilla.org/de/docs/Web/HTML/Global_attributes/inputmode)             |
|     | `list="…"`              | Die ID einer zugehörigen [datalist](https://developer.mozilla.org/de/docs/Web/HTML/Element/datalist)                                          |
|     | `maxlength="…"`         | Maximale Anzahl an Zeichen                                                                                                                    |
|     | `minlength="…"`         | Minimale Anzahl an Zeichen                                                                                                                    |
|     | `min="…"`               | Minimaler numerischer Wert bei `range` & `number`                                                                                             |
|     | `max="…"`               | Maximaler numerischer Wert bei `range` & `number`                                                                                             |
|     | `step="…"`              | Schrittweite bei `range` & `number`                                                                                                           |
|     | `pattern="…"`           | Gibt einen [Regulären Ausdruck](https://regex101.com/) an, siehe [pattern](https://developer.mozilla.org/de/docs/Web/HTML/Attributes/pattern) |
|     | `autofocus`             | Setzt den Fokus auf das Element                                                                                                               |
|     | `spellcheck`            | Führt eine Rechtschreibprüfung durch                                                                                                          |
|     | `multiple`              | Erlaubt mehrere Werte, siehe [multiple](https://developer.mozilla.org/de/docs/Web/HTML/Attributes/multiple)                                   |
|     | `accept=""`             | Erwarteter Dateityp bei [file](https://developer.mozilla.org/de/docs/Web/HTML/Element/input/file) Uploads                                     |

Siehe auch: [Attribute für das \<input\> Element](https://developer.mozilla.org/de/docs/Web/HTML/Element/input#attribute)

### Input-Typen

|                   |                        |
| ----------------- | ---------------------- |
| `type="checkbox"` | Checkbox               |
| `type="radio"`    | Radio-Button           |
| `type="file"`     | Datei-Upload           |
| `type="hidden"`   | Verstecktes Feld       |
| `type="text"`     | Textfeld               |
| `type="password"` | Passwortfeld           |
| `type="image"`    | Bild als Senden-Button |
| `type="reset"`    | Zurücksetzen-Button    |
| `type="button"`   | Klickbarer Button      |
| `type="submit"`   | Senden-Button          |

#### Neue Input-Typen in HTML5

|                         |                           |
| ----------------------- | ------------------------- |
| `type="color"`          | Farbauswahl               |
| `type="date"`           | Datumsauswahl             |
| `type="time"`           | Zeitauswahl               |
| `type="month"`          | Monats- und Jahresauswahl |
| `type="datetime-local"` | Lokales Datum und Uhrzeit |
| `type="week"`           | Wochen- und Jahresauswahl |
| `type="email"`          | E-Mail-Adresse            |
| `type="tel"`            | Telefonnummer             |
| `type="url"`            | URL                       |
| `type="number"`         | Zahlenfeld                |
| `type="search"`         | Suchfeld                  |
| `type="range"`          | Schieberegler             |

### Input CSS-Selektoren

|               |                               |
| ------------- | ----------------------------- |
| `input:focus` | Wenn es den Tastaturfokus hat |

Siehe: [Input-Pseudoklassen](https://www.w3schools.com/css/css_pseudo_classes.asp)

---

## HTML Meta-Tags

### Meta-Tags

Der Meta-Tag beschreibt Metadaten innerhalb eines HTML-Dokuments.

```html
<meta charset="utf-8" />
```

```html
<title>···</title>
<meta property="og:title" content="···" />
<meta name="twitter:title" content="···" />
```

```html
<link rel="canonical" href="https://···" />
<meta property="og:url" content="https://···" />
<meta name="twitter:url" content="https://···" />
```

```html
<meta name="description" content="···" />
<meta property="og:description" content="···" />
<meta name="twitter:description" content="···" />
```

```html
<meta property="og:image" content="https://···" />
<meta name="twitter:image" content="https://···" />
```

```html
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
```

```html
<meta name="viewport" content="width=device-width" /> <meta name="viewport" content="width=1024" />
```

### Open Graph

```html
<meta property="og:type" content="website" />
<meta property="og:locale" content="de_DE" />
<meta property="og:title" content="HTML Spickzettel" />
<meta property="og:url" content="https://quickref.me/html" />
<meta property="og:image" content="https://xxx.com/bild.jpg" />
<meta property="og:site_name" content="Name deiner Webseite" />
<meta property="og:description" content="Beschreibung dieser Seite" />
```

Wird von Facebook, Instagram, Pinterest, LinkedIn, etc. verwendet.

### Twitter Cards

```html
<meta name="twitter:card" content="summary" />
<meta name="twitter:site" content="@MaxMustermann" />
<meta name="twitter:title" content="HTML Spickzettel" />
<meta name="twitter:url" content="https://quickref.me/html" />
<meta name="twitter:description" content="Beschreibung dieser Seite" />
<meta name="twitter:image" content="https://xxx.com/bild.jpg" />
```

Siehe: [Twitter Card Dokumentation](https://developer.twitter.com/en/docs/tweets/optimize-with-cards/overview/summary)

### Geotagging

```html
<meta name="ICBM" content="52.520008,13.404954" />
<meta name="geo.position" content="52.520008;13.404954" />
<meta name="geo.region" content="de-be" />
<meta name="geo.placename" content="Berlin" />
```

Siehe: [Geotagging](https://de.wikipedia.org/wiki/Geotagging#HTML-Seiten)

---

## Quellenverzeichnis

Diese Seite ist stark angelehnt an: [quickref.me](https://quickref.me/html)
