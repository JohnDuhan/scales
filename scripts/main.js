

if(document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded',afterDOMLoaded);
} else {
    afterDOMLoaded();
}

function afterDOMLoaded(){
  scaleType();
}

/*
//image to blob/bytes
google.script.run
.withSuccessHandler( function(bytes){ showImage(bytes) })
.loadImageBytes('1gtMk5U7KY_3AQ94rqxzi-eEe44rYyjlz');

function showImage(bytes){
document.getElementById("ItemPreview").src = "data:image/png;base64," + bytes; 
}
*/

const {
  Accidental,
  Renderer,
  Stave,
  StaveNote,
  Voice,
  Formatter
} = Vex.Flow;

function mapScale(notes,segNum){

  console.log(segNum);
  console.log(instrSelection,isConcert,ogScaleSelection,'<--OGscaleselect?',scaleSelection,'js-25');
/*
  //reset dropdown menus
  var elements = document.getElementsByTagName('select');
  for (var i = 0; i < elements.length; i++)
  {
      elements[i].selectedIndex = 0;
  }
*/

    // Create an SVG renderer and attach it to the DIV element named "output".
    const div = document.getElementById('output');

    const renderer = new Renderer(div, Renderer.Backends.SVG);

    //Add scale labels directly to SVG
    console.log(instrSelection,ogScaleSelection,scaleSelection,40);
    const instFirstLetter = instrSelection.slice(0,1);
    var capInstr = instrSelection.replace(instFirstLetter,instFirstLetter.toUpperCase());
    const ogFirstLetter = ogScaleSelection.slice(0,1);
    var capOG = ogScaleSelection.replace(ogFirstLetter,ogFirstLetter.toUpperCase());
    const scaleFirstLetter = scaleSelection.slice(0,1);
    var capScale = scaleSelection.replace(scaleFirstLetter,scaleFirstLetter.toUpperCase());
    console.log(capInstr,capOG,capScale);
    switch (capInstr){
      case "Bassclar":
      capInstr = "Bass Clarinet";
      break;

      case "Altosax":
      capInstr = "Alto Saxophone";
      break;

      case "Tensax":
      capInstr = "Tenor Saxophone";
      break;

      case "Barisax":
      capInstr = "Bari Saxophone";
      break;
    }

    var svg = div.childNodes[0];
    console.log(chromatic,'chromatic');
    console.log(segment,'segment');
    if (!chromatic){
      svg.innerHTML = '<text x="25" y="15" fill="#2196F3" id="svg-text-1">Concert '+capOG+' Major</text><text x="25" y="35" fill="#2196F3" id="svg-text-2">'+capScale+ ' Major for '+ capInstr + 's</text>';
      }
    else {
      svg.innerHTML = '<text x="25" y="15" fill="#2196F3" id="svg-text-1">'+capInstr+' Chromatic Scales</text><text x="25" y="35" fill="#2196F3" id="svg-text-2">Segment '+segText+ '</text>';
    }

    // Configure the rendering context.
    renderer.resize(750, 750);
    const context = renderer.getContext();

    // Create a stave of width 400 at position 10, 40 on the canvas.
    const stave = new Stave(10, 40, 750);

    // Add a clef and time signature.
    if (instrSelection == 'bassoon' || instrSelection == 'trombone' || instrSelection == 'euphonium' || instrSelection == 'tuba'){
      stave.addClef('bass');
    }
    else {
      stave.addClef('treble');
    }

    // Connect it to the rendering context and draw!
    stave.setContext(context).draw();

    // Create a voice in 4/4 and add above notes
    const voice = new Voice({
      num_beats: segNum,
      beat_value: 1
    });
    console.log(notes,'mapscale',95)
    voice.addTickables(notes);

    // Format and justify the notes to 800 pixels.
    new Formatter().joinVoices([voice]).format([voice], 400);

    // Render voice
    voice.draw(context, stave);
    console.log(instrSelection,scaleSelection,101)
    addFingering(notes);

};

function addFingering(notes){
console.log(notes,'addFingering()')
//add url/id's of fingerings
      var fingIdArr = [];
      fingeringsArr.find(function(r){
        var rInstr = r[0].split("?");
        console.log(rInstr,'fing Inst');
        if (instrSelection == rInstr[0]){
          console.log('inst match');
          var instAllPitches = r;
          notes.forEach(function(s){
            instAllPitches.find(function(t){
              var fingParse = t.split("?");
              pitchCheck = fingParse[1];
                if (pitchCheck == s.keys){
                  console.log(pitchCheck,'pitchCheck',s.keys,'s.keys');
                  fingIdArr.push(fingParse[2]);
//use for full inst-pitch-googID                  fingIdArr.push(t);
                  console.log(fingIdArr,39);
                  return true;
                }
              
            })
          });
        }
      });
  var svgNotes = document.getElementById("output").childNodes[0].childNodes;
  console.log(svgNotes,'svgNotes');
  for (var i=3;i<svgNotes.length;i++){
    console.log(fingIdArr[i-3],109);
    var thisSVGnote = svgNotes[i].innerHTML;
  document.getElementById("output").childNodes[0].childNodes[i].innerHTML = '<a href="javascript:void(0)" data-fing="'+fingIdArr[i-3]+'" class="clickable" onclick="clickBtn(this)">'+thisSVGnote+'</a>';
  }


}

