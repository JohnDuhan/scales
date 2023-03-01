const {
  Renderer,
  Stave,
  StaveNote,
  Voice,
  Formatter
} = Vex.Flow;

const VF = Vex.Flow;

// Create an SVG renderer and attach it to the DIV element named "boo".
var vf = new VF.Factory({renderer: {elementId: 'output'}});
var score = vf.EasyScore();
var system = vf.System();

// Create a voice in 4/4 and add above notes
const voice = new Voice({
  num_beats: 14,
  beat_value: 1
});

system.addStave({
  voices: [score.voice(score.notes('C#5/q, B4, A4, G#4'))]
}).addClef('treble').addTimeSignature('14/1');

vf.draw();
