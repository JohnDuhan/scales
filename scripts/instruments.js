    function scaleSelect(d){
      console.log(d.id,3);
      console.log(d,instrSelection,segment);
      console.log(segment,3);
      isUpper = false;
      if (instrSelection == ""){document.getElementById('output').innerHTML = "<h4>Select an instrument</h4>"; return;}
      if (segment == ""){document.getElementById('output').innerHTML = "<h4>Select a segment</h4>";}

      scaleSelection = $(d).val();
      ogScaleSelection = scaleSelection;


      //adjust for each instrument
      if (instrSelection == "flute"){
        switch (scaleSelection){
          case "c":
          scaleSelection = "c";
          octave = 4;
          break;
                    
          case "g":
          scaleSelection = "g";
          octave = 4;
          break;

          case "d":
          scaleSelection = "d";
          octave = 5;
          break;

          case "a":
          scaleSelection = "a";
          octave = 4;
          break;

          case "e":
          scaleSelection = "e";
          octave = 4;
          break;

          case "b":
          scaleSelection = "b";
          octave = 4;
          break;

          case "cb":
          scaleSelection = "cb";
          octave = 5;
          break;

          case "f#":
          scaleSelection = "f#";
          octave = 4;
          break;

          case "gb":
          scaleSelection = "gb";
          octave = 4;
          break;

          case "c#":
          scaleSelection = "c#";
          octave = 5;
          break;

          case "db":
          scaleSelection = "db";
          octave = 5;
          break;

          case "ab":
          scaleSelection = "ab";
          octave = 4;
          break;

          case "eb":
          scaleSelection = "eb";
          octave = 4;
          break;

          case "bb":
          scaleSelection = "bb";
          octave = 4;
          break;

          case "f":
          scaleSelection = "f";
          octave = 4;
          break;
        }
        console.log(scaleSelection, 93);
      }
      if (instrSelection == "oboe"){
        switch (scaleSelection){
          case "c":
          scaleSelection = "c";
          octave = 5;
          break;
                    
          case "g":
          scaleSelection = "g";
          octave = 4;
          break;

          case "d":
          scaleSelection = "d";
          octave = 4;
          break;

          case "a":
          scaleSelection = "a";
          octave = 4;
          break;

          case "e":
          scaleSelection = "e";
          octave = 4;
          break;

          case "b":
          scaleSelection = "b";
          octave = 4;
          break;

          case "cb":
          scaleSelection = "cb";
          octave = 5;
          break;

          case "f#":
          scaleSelection = "f#";
          octave = 4;
          break;

          case "gb":
          scaleSelection = "gb";
          octave = 4;
          break;

          case "c#":
          scaleSelection = "c#";
          octave = 5;
          break;

          case "db":
          scaleSelection = "db";
          octave = 4;
          break;

          case "ab":
          scaleSelection = "ab";
          octave = 4;
          break;

          case "eb":
          scaleSelection = "eb";
          octave = 4;
          break;

          case "bb":
          scaleSelection = "bb";
          octave = 5;
          break;

          case "f":
          scaleSelection = "f";
          octave = 4;
          break;
        }
        console.log(scaleSelection, 93);
      }
        if (instrSelection == "bassoon"){
        switch (scaleSelection){
          case "c":
          scaleSelection = "c";
          octave = 3;
          break;
                    
          case "g":
          scaleSelection = "g";
          octave = 2;
          break;

          case "d":
          scaleSelection = "d";
          octave = 3;
          break;

          case "a":
          scaleSelection = "a";
          octave = 2;
          break;

          case "e":
          scaleSelection = "e";
          octave = 3;
          break;

          case "b":
          scaleSelection = "b";
          octave = 2;
          break;

          case "cb":
          scaleSelection = "cb";
          octave = 3;
          break;

          case "f#":
          scaleSelection = "f#";
          octave = 2;
          break;

          case "gb":
          scaleSelection = "gb";
          octave = 2;
          break;

          case "c#":
          scaleSelection = "c#";
          octave = 3;
          break;

          case "db":
          scaleSelection = "db";
          octave = 3;
          break;

          case "ab":
          scaleSelection = "ab";
          octave = 2;
          break;

          case "eb":
          scaleSelection = "eb";
          octave = 2;
          break;

          case "bb":
          scaleSelection = "bb";
          octave = 2;
          break;

          case "f":
          scaleSelection = "f";
          octave = 2;
          break;            
        }
      if (instrSelection == "trombone"||instrSelection == "euphonium"){
        switch (scaleSelection){
          case "c":
          scaleSelection = "c";
          octave = 3;
          break;
                    
          case "g":
          scaleSelection = "g";
          octave = 2;
          break;

          case "d":
          scaleSelection = "d";
          octave = 3;
          break;

          case "a":
          scaleSelection = "a";
          octave = 2;
          break;

          case "e":
          scaleSelection = "e";
          octave = 3;
          break;

          case "b":
          scaleSelection = "b";
          octave = 2;
          break;

          case "cb":
          scaleSelection = "cb";
          octave = 3;
          break;

          case "f#":
          scaleSelection = "f#";
          octave = 2;
          break;

          case "gb":
          scaleSelection = "gb";
          octave = 2;
          break;

          case "c#":
          scaleSelection = "c#";
          octave = 3;
          break;

          case "db":
          scaleSelection = "db";
          octave = 3;
          break;

          case "ab":
          scaleSelection = "ab";
          octave = 2;
          break;

          case "eb":
          scaleSelection = "eb";
          octave = 3;
          break;

          case "bb":
          scaleSelection = "bb";
          octave = 2;
          break;

          case "f":
          scaleSelection = "f";
          octave = 2;
          break;
        }
        console.log(scaleSelection, 93);
      }
      if (instrSelection == "clarinet"){
        switch (scaleSelection){
          case "fb":
          scaleSelection = "gb";
          octave = 3;
          break;

          case "bbb":
          scaleSelection = "cb";
          octave = 4;
          break;

          case "c":
          scaleSelection = "d";
          octave = 4;
          break;

          case "g":
          scaleSelection = "a";
          octave = 3;
          break;

          case "d":
          scaleSelection = "e";
          octave = 3;
          break;

          case "a":
          scaleSelection = "b";
          octave = 3;
          break;

          case "e":
          scaleSelection = "f#";
          octave = 3;
          break;

          case "b":
          scaleSelection = "c#";
          octave = 4;
          break;

          case "cb":
          scaleSelection = "db";
          octave = 4;
          break;

          case "f#":
          scaleSelection = "ab";
          octave = 3;
          break;

          case "gb":
          scaleSelection = "ab";
          octave = 3;
          break;

          case "c#":
          scaleSelection = "eb";
          octave = 4;
          break;

          case "db":
          scaleSelection = "eb";
          octave = 4;
          break;

          case "ab":
          scaleSelection = "bb";
          octave = 3;
          break;

          case "eb":
          scaleSelection = "f";
          octave = 3;
          break;

          case "bb":
          scaleSelection = "c";
          octave = 4;
          break;

          case "f":
          scaleSelection = "g";
          octave = 3;
          break;

        }
        console.log(scaleSelection, 93);
      }
      if (instrSelection == "bassclar"){
        switch (scaleSelection){
          case "fb":
          scaleSelection = "gb";
          octave = 3;
          break;

          case "bbb":
          scaleSelection = "cb";
          octave = 4;
          break;

          case "c":
          scaleSelection = "d";
          octave = 4;
          break;

          case "g":
          scaleSelection = "a";
          octave = 3;
          break;

          case "d":
          scaleSelection = "e";
          octave = 3;
          break;

          case "a":
          scaleSelection = "b";
          octave = 3;
          break;

          case "e":
          scaleSelection = "f#";
          octave = 3;
          break;

          case "b":
          scaleSelection = "c#";
          octave = 4;
          break;

          case "cb":
          scaleSelection = "db";
          octave = 4;
          break;

          case "f#":
          scaleSelection = "ab";
          octave = 3;
          break;

          case "gb":
          scaleSelection = "ab";
          octave = 3;
          break;

          case "c#":
          scaleSelection = "eb";
          octave = 4;
          break;

          case "db":
          scaleSelection = "eb";
          octave = 4;
          break;

          case "ab":
          scaleSelection = "bb";
          octave = 3;
          break;

          case "eb":
          scaleSelection = "f";
          octave = 3;
          break;

          case "bb":
          scaleSelection = "c";
          octave = 4;
          break;

          case "f":
          scaleSelection = "g";
          octave = 3;
          break;

        }
        console.log(scaleSelection, 93);
      }
      if (instrSelection == "altosax"){
        switch (scaleSelection){
          case "bbb":
          scaleSelection = "gb";
          octave = 4;
          break;

          case "ebb":
          scaleSelection = "cb";
          octave = 4;
          break;


          case "fb":
          scaleSelection = "db";
          octave = 4;
          break;

          case "ebb":
          scaleSelection = "cb";
          octave = 4;
          break;

          case "c":
          scaleSelection = "a";
          octave = 4;
          break;
          
          case "g":
          scaleSelection = "e";
          octave = 4;
          break;

          case "d":
          scaleSelection = "b";
          octave = 3;
          break;

          case "a":
          scaleSelection = "f#";
          octave = 4;
          break;

          case "e":
          scaleSelection = "c#";
          octave = 4;
          break;

          case "b":
          scaleSelection = "ab";
          octave = 4;
          break;

          case "cb":
          scaleSelection = "ab";
          octave = 4;
          break;

          case "f#":
          scaleSelection = "eb";
          octave = 4;
          break;

          case "gb":
          scaleSelection = "eb";
          octave = 4;
          break;

          case "c#":
          scaleSelection = "bb";
          octave = 3;
          break;

          case "db":
          scaleSelection = "bb";
          octave = 3;
          break;

          case "ab":
          scaleSelection = "f";
          octave = 4;
          break;

          case "eb":
          scaleSelection = "c";
          octave = 4;
          break;

          case "bb":
          scaleSelection = "g";
          octave = 4;
          break;

          case "f":
          scaleSelection = "d";
          octave = 4;
          break;
        }
        console.log(scaleSelection, 93);
      }
      if (instrSelection == "tensax"){
        switch (scaleSelection){

          case "fb":
          scaleSelection = "gb";
          octave = 4;
          break;

          case "bbb":
          scaleSelection = "cb";
          octave = 4;
          break;

          case "c":
          scaleSelection = "d";
          octave = 4;
          break;

          case "g":
          scaleSelection = "a";
          octave = 4;
          break;

          case "d":
          scaleSelection = "e";
          octave = 4;
          break;

          case "a":
          scaleSelection = "b";
          octave = 4;
          break;

          case "e":
          scaleSelection = "f#";
          octave = 4;
          break;

          case "b":
          scaleSelection = "c#";
          octave = 4;
          break;

          case "cb":
          scaleSelection = "db";
          octave = 4;
          break;

          case "f#":
          scaleSelection = "ab";
          octave = 4;
          break;

          case "gb":
          scaleSelection = "ab";
          octave = 4;
          break;

          case "c#":
          scaleSelection = "eb";
          octave = 4;
          break;

          case "db":
          scaleSelection = "eb";
          octave = 4;
          break;

          case "ab":
          scaleSelection = "bb";
          octave = 4;
          break;

          case "eb":
          scaleSelection = "f";
          octave = 4;
          break;

          case "bb":
          scaleSelection = "c";
          octave = 4;
          break;

          case "f":
          scaleSelection = "g";
          octave = 4;
          break;
        }
        console.log(scaleSelection, 93);
      }
      if (instrSelection == "barisax"){
        switch (scaleSelection){

          case "bbb":
          scaleSelection = "gb";
          octave = 4;
          break;

          case "fb":
          scaleSelection = "db";
          octave = 4;
          break;

          case "ebb":
          scaleSelection = "cb";
          octave = 4;
          break;

          case "c":
          scaleSelection = "a";
          octave = 4;
          break;
          
          case "g":
          scaleSelection = "e";
          octave = 4;
          break;

          case "d":
          scaleSelection = "b";
          octave = 3;
          break;

          case "a":
          scaleSelection = "f#";
          octave = 4;
          break;

          case "e":
          scaleSelection = "c#";
          octave = 4;
          break;

          case "b":
          scaleSelection = "ab";
          octave = 4;
          break;

          case "cb":
          scaleSelection = "ab";
          octave = 4;
          break;

          case "f#":
          scaleSelection = "eb";
          octave = 4;
          break;

          case "gb":
          scaleSelection = "eb";
          octave = 4;
          break;

          case "c#":
          scaleSelection = "bb";
          octave = 3;
          break;

          case "db":
          scaleSelection = "bb";
          octave = 3;
          break;

          case "ab":
          scaleSelection = "f";
          octave = 4;
          break;

          case "eb":
          scaleSelection = "c";
          octave = 4;
          break;

          case "bb":
          scaleSelection = "gb";
          octave = 4;
          break;

          case "f":
          scaleSelection = "d";
          octave = 4;
          break;
        }
        console.log(scaleSelection, 93);
      }
      if (instrSelection == "trumpet"){
        switch (scaleSelection){

          case "fb":
          scaleSelection = "gb";
          octave = 3;
          break;

          case "bbb":
          scaleSelection = "cb";
          octave = 4;
          break;

          case "c":
          scaleSelection = "d";
          octave = 4;
          break;

          case "g":
          scaleSelection = "a";
          octave = 3;
          break;

          case "d":
          scaleSelection = "e";
          octave = 4;
          break;

          case "a":
          scaleSelection = "b";
          octave = 3;
          break;

          case "e":
          scaleSelection = "f#";
          octave = 3;
          break;

          case "b":
          scaleSelection = "c#";
          octave = 4;
          break;

          case "cb":
          scaleSelection = "db";
          octave = 4;
          break;

          case "f#":
          scaleSelection = "ab";
          octave = 3;
          break;

          case "gb":
          scaleSelection = "ab";
          octave = 3;
          break;

          case "c#":
          scaleSelection = "eb";
          octave = 4;
          break;

          case "db":
          scaleSelection = "eb";
          octave = 4;
          break;

          case "ab":
          scaleSelection = "bb";
          octave = 3;
          break;

          case "eb":
          scaleSelection = "f";
          octave = 4;
          break;

          case "bb":
          scaleSelection = "c";
          octave = 4;
          break;

          case "f":
          scaleSelection = "g";
          octave = 3;
          break;
        }
        console.log(scaleSelection, 93);
      }
      if (instrSelection == "horn"){
        switch (scaleSelection){
          case "fb":
          scaleSelection = "cb";
          octave = 3;
          break;

          case "c":
          scaleSelection = "g";
          octave = 3;
          break;

          case "g":
          scaleSelection = "d";
          octave = 4;
          break;

          case "d":
          scaleSelection = "a";
          octave = 3;
          break;

          case "a":
          scaleSelection = "e";
          octave = 3;
          break;

          case "e":
          scaleSelection = "b";
          octave = 3;
          break;

          case "b":
          scaleSelection = "f#";
          octave = 3;
          break;

          case "cb":
          scaleSelection = "gb";
          octave = 3;
          break;

          case "f#":
          scaleSelection = "c#";
          octave = 4;
          break;

          case "gb":
          scaleSelection = "db";
          octave = 4;
          break;

          case "c#":
          scaleSelection = "ab";
          octave = 3;
          break;

          case "db":
          scaleSelection = "ab";
          octave = 3;
          break;

          case "ab":
          scaleSelection = "eb";
          octave = 4;
          break;

          case "eb":
          scaleSelection = "bb";
          octave = 3;
          break;

          case "bb":
          scaleSelection = "f";
          octave = 3;
          break;

          case "f":
          scaleSelection = "c";
          octave = 4;
          break;
        }
        console.log(scaleSelection, 93);
      }
      if (instrSelection == "tuba"){
        switch (scaleSelection){
          case "c":
          scaleSelection = "c";
          octave = 2;
          break;
                    
          case "g":
          scaleSelection = "g";
          octave = 1;
          break;

          case "d":
          scaleSelection = "d";
          octave = 2;
          break;

          case "a":
          scaleSelection = "a";
          octave = 1;
          break;

          case "e":
          scaleSelection = "e";
          octave = 2;
          break;

          case "b":
          scaleSelection = "b";
          octave = 1;
          break;

          case "cb":
          scaleSelection = "cb";
          octave = 2;
          break;

          case "f#":
          scaleSelection = "f#";
          octave = 1;
          break;

          case "gb":
          scaleSelection = "gb";
          octave = 1;
          break;

          case "c#":
          scaleSelection = "c#";
          octave = 2;
          break;

          case "db":
          scaleSelection = "db";
          octave = 2;
          break;

          case "ab":
          scaleSelection = "ab";
          octave = 1;
          break;

          case "eb":
          scaleSelection = "eb";
          octave = 2;
          break;

          case "bb":
          scaleSelection = "bb";
          octave = 1;
          break;

          case "f":
          scaleSelection = "f";
          octave = 1;
          break;
        }
        console.log(scaleSelection, 93);
      }
      if (instrSelection == "mallets"){
        switch (scaleSelection){
          case "c":
          scaleSelection = "c";
          octave = 4;
          break;
                    
          case "g":
          scaleSelection = "g";
          octave = 4;
          break;

          case "d":
          scaleSelection = "d";
          octave = 4;
          break;

          case "a":
          scaleSelection = "a";
          octave = 4;
          break;

          case "e":
          scaleSelection = "e";
          octave = 4;
          break;

          case "b":
          scaleSelection = "b";
          octave = 3;
          break;

          case "cb":
          scaleSelection = "cb";
          octave = 4;
          break;

          case "f#":
          scaleSelection = "f#";
          octave = 4;
          break;

          case "gb":
          scaleSelection = "gb";
          octave = 4;
          break;

          case "c#":
          scaleSelection = "c#";
          octave = 4;
          break;

          case "db":
          scaleSelection = "db";
          octave = 4;
          break;

          case "ab":
          scaleSelection = "ab";
          octave = 4;
          break;

          case "eb":
          scaleSelection = "eb";
          octave = 4;
          break;

          case "bb":
          scaleSelection = "bb";
          octave = 3;
          break;

          case "f":
          scaleSelection = "f";
          octave = 4;
          break;
        }
      }
        console.log(scaleSelection, 93);
      if (segment !== ""){processScale(segment);}
    }
