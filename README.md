# scientific-notation

Fork of https://github.com/saebekassebil/scientific-notation,
using [steps, semitones] instead of [fifths, octaves]

See the teoria fork at https://github.com/erikronstrom/teoria for more info.

Parsing notes written in
[Scientific pitch notation](http://en.wikipedia.org/wiki/Scientific_pitch_notation)
returning intervals in steps and semitones relative to A4 (or `a'`)

```js
var scientific = require('scientific-notation');

scientific('A4') // -> [ 0, 0 ]
scientific('C0') //  -> [ -33, -57]
scientific('D#4') // -> [ -4, -6 ]
scientific('A5') // ->  [ 7, 12 ]
```

## usage

```js
var scientific = require('scientific-notation');
```

### scientific(note)

Takes a `note` string in Scientific pitch notation and returns an array
describing the interval of that note relative to A4. The returned interval is
in the format `[steps, semitones]` - that is, an array consisting of two
numbers, the first the number of diatonic steps, the second the number
of semitones between the notes.