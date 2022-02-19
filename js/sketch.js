// Andrew Ellender 2022
let button, button1, button2, button3, wetMix1, delay1, wetMix2, delay2,
 wetMix3, delay3, wetMix4, delay4, ps1, ps2, ps3, ps4, wm1, wm2, wm3, wm4,
 rv1, rv2, rv3, rv4, wm11, wm22, wm33, wm44;

delay1 = new Tone.FeedbackDelay(0.5, 0.5).toDestination();
delay2 = new Tone.FeedbackDelay(0.5, 0.5).toDestination();
delay3 = new Tone.FeedbackDelay(0.5, 0.5).toDestination();
delay4 = new Tone.FeedbackDelay(0.5, 0.5).toDestination();

ps1 = new Tone.PitchShift(4).toDestination();
ps2 = new Tone.PitchShift(4).toDestination();
ps3 = new Tone.PitchShift(4).toDestination();
ps4 = new Tone.PitchShift(4).toDestination();

rv1 = new Tone.PingPongDelay("4n", .2).toDestination();
rv2 = new Tone.PingPongDelay("4n", .2).toDestination();
rv3 = new Tone.PingPongDelay("4n", .2).toDestination();
rv4 = new Tone.PingPongDelay("4n", .2).toDestination();


let sounds = new Tone.Players({
  'g3' :'media/g3.mp3',
  'g4': 'media/g4.mp3',
  'g5': 'media/g5.mp3',
  'c5': 'media/c5.mp3'
})




function setup(){
  createCanvas(1600,500);
  sounds.toDestination();


  button = createButton('g3').size(400,300);
  button.position(0,0);
  button.mousePressed(playSound);

  button1 = createButton('g4').size(400,300);
  button1.position(400,0);
  button1.mousePressed(playSound1);

  button2 = createButton('g5').size(400,300);
  button2.position(800,0);
  button2.mousePressed(playSound2);

  button3 = createButton('c5').size(400,300);
  button3.position(1200,0);
  button3.mousePressed(playSound3);

  wetMix1 = createSlider(0, 1, 1, 0);
  wetMix1.style("width", "200px");
  wetMix1.position(0, 350);

  wetMix2 = createSlider(0, 1, 1, 0);
  wetMix2.style("width", "200px");
  wetMix2.position(400, 350);

  wetMix3 = createSlider(0, 1, 1, 0);
  wetMix3.style("width", "200px");
  wetMix3.position(800, 350);

  wetMix4 = createSlider(0, 1, 1, 0);
  wetMix4.style("width", "200px");
  wetMix4.position(1200, 350);

  wm1 = createSlider(0,1,1,0);
  wm1.style("width", "200px");
  wm1.position(0, 400);

  wm2 = createSlider(0,1,1,0);
  wm2.style("width", "200px");
  wm2.position(400, 400);

  wm3 = createSlider(0,1,1,0);
  wm3.style("width", "200px");
  wm3.position(800, 400);

  wm4 = createSlider(0,1,1,0);
  wm4.style("width", "200px");
  wm4.position(1200, 400);

  wm11 = createSlider(0,1,1,0);
  wm11.style("width", "200px");
  wm11.position(0, 450);

  wm22 = createSlider(0,1,1,0);
  wm22.style("width", "200px");
  wm22.position(400, 450);

  wm33 = createSlider(0,1,1,0);
  wm33.style("width", "200px");
  wm33.position(800, 450);

  wm44 = createSlider(0,1,1,0);
  wm44.style("width", "200px");
  wm44.position(1200, 450);

}

function draw(){

  delay1.wet.value = wetMix1.value();
  delay2.wet.value = wetMix2.value();
  delay3.wet.value = wetMix3.value();
  delay4.wet.value = wetMix4.value();

  ps1.wet.value = wm1.value();
  ps2.wet.value = wm2.value();
  ps3.wet.value = wm3.value();
  ps4.wet.value = wm4.value();

  rv1.wet.value = wm11.value();
  rv2.wet.value = wm22.value();
  rv3.wet.value = wm33.value();
  rv4.wet.value = wm44.value();


  background(255);
  textSize(10);
  fill("black");
  textAlign(CENTER);
  text(int(wetMix1.value() * 100) + "% effected sound delayed", 70, 350);
  text(int(wetMix2.value() * 100) + "% effected sound delayed", 470, 350);
  text(int(wetMix3.value() * 100) + "% effected sound delayed", 870, 350);
  text(int(wetMix4.value() * 100) + "% effected sound delayed", 1270, 350);

  text(int(wm1.value() * 100) + "% effect sound pitchshift", 70, 400);
  text(int(wm2.value() * 100) + "% effect sound pitchshift", 470, 400);
  text(int(wm3.value() * 100) + "% effect sound pitchshift", 870, 400);
  text(int(wm4.value() * 100) + "% effect sound pitchshift", 1270, 400);

  text(int(wm11.value() * 100) + "% effect sound pingponged", 70, 450);
  text(int(wm22.value() * 100) + "% effect sound pingponged", 470, 450);
  text(int(wm33.value() * 100) + "% effect sound pingponged", 870, 450);
  text(int(wm44.value() * 100) + "% effect sound pingponged", 1270, 450);


}


function playSound(){
  sounds.player('g3').start().connect(delay1).connect(ps1).connect(rv1);
}

function playSound1(){
  sounds.player('g4').start().connect(delay2).connect(ps2).connect(rv2);
}

function playSound2(){
  sounds.player('g5').start().connect(delay3).connect(ps3).connect(rv3);
}

function playSound3(){
  sounds.player('c5').start().connect(delay4).connect(ps4).connect(rv4);
}