const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const rec = new SpeechRecognition;
const instructions = document.getElementById('instructions');

rec.lang = 'en-US';
rec.continuous = true;

rec.onresult = function(e) {
  const acceptedColors = [
    'red',
    'blue',
    'green',
    'yellow',
    'pink',
    'brown',
    'purple',
    'orange',
    'black',
    'white'
  ];

  console.log(e);

  for (let i = e.resultIndex; i < e.results.length; i++) {
    instructions.innerHTML = 'Say a color...';
    instructions.style.color = 'black';

    const script = e.results[i][0].transcript.toLowerCase().trim();
    console.log(e.resultIndex, script);
    
    if(acceptedColors.includes(script)) {
      document.body.style.backgroundColor = script;
      if (script === 'black') {
        document.body.style.backgroundColor = script;
        instructions.style.color = 'white';
      }
    } else {
      instructions.innerHTML = 'Please try a different color...';
    }
  }
}

rec.start();