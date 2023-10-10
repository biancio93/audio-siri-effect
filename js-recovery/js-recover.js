// SIRIWAVE 1
let siriWave_1 = new SiriWave({
    container: document.querySelector(".siri-container-1"),
    autostart: false,
    width: 640,
    height: 300,
    style: 'ios9',
    amplitude: 1
  });
  // SIRIWAVE 2
  let siriWave_2 = new SiriWave({
    container: document.querySelector(".siri-container-2"),
    autostart: false,
    width: 640,
    height: 200,
    style: 'ios9',
    amplitude: 1
  });
  // SIRIWAVE 3
  let siriWave_3 = new SiriWave({
    container: document.querySelector(".siri-container-3"),
    autostart: false,
    width: 640,
    height: 200,
    style: 'ios9',
    amplitude: 1
  });
  /* primo elemento */
  siriWave_1.curves[0].definition.color = '30,115,190';
  siriWave_1.curves[1].definition.color = '86,150,206';
  siriWave_1.curves[2].definition.color = '142,185,222';
  siriWave_1.curves[3].definition.color = '198,220,238';
  /* secondo elemento */
  siriWave_2.curves[0].definition.color = '255,160,122';
  siriWave_2.curves[1].definition.color = '86,150,206';
  siriWave_2.curves[2].definition.color = '142,185,222';
  siriWave_2.curves[3].definition.color = '198,220,238';
  /* terzo elemento */
  siriWave_3.curves[0].definition.color = '255,160,122';
  siriWave_3.curves[1].definition.color = '86,150,206';
  siriWave_3.curves[2].definition.color = '142,185,222';
  siriWave_3.curves[3].definition.color = '198,220,238';
  
  siriWave_1.stop();
  siriWave_2.stop();
  siriWave_3.stop();
  
  let aud, aud_2, aud_3;
  let amplitude, amplitude_2, amplitude_3;
  
  function preload() {
    let sound = loadSound('https://www.marinabrizzibraus.it/wp-content/uploads/2022/07/BrizVoc_Gilgamech-3.mp3');
      let sound_2 = loadSound('https://www.marinabrizzibraus.it/wp-content/uploads/2022/07/BrizVoc_Gilgamech-3.mp3');
      let sound_3 = loadSound('https://www.marinabrizzibraus.it/wp-content/uploads/2022/07/BrizVoc_Gilgamech-3.mp3');
  }
  
  function setup() {
    let sound;
    let sound_2;
    let sound_3;
    let ele = createAudio('https://www.marinabrizzibraus.it/wp-content/uploads/2022/07/BrizVoc_Gilgamech-3.mp3');
    ele.autoplay(false);
    ele.parent("test-1");
    ele.showControls();
    ele.connect(sound);
    ele.pause();
    ele.class('audio-controller');
    aud = document.querySelector(".audio-controller");
    console.log(aud);
    aud.addEventListener("play", audioPlay);
    aud.addEventListener("pause", audioStop);
    aud.addEventListener("ended", audioStop);
    amplitude = new p5.Amplitude();
    /* secondo elemento */
    let ele_2 = createAudio('https://www.marinabrizzibraus.it/wp-content/uploads/2022/07/BrizVoc_Gilgamech-3.mp3');
    ele_2.autoplay(false);
    ele_2.parent("test-2");
    ele_2.showControls();
    ele_2.connect(sound_2);
    ele_2.pause();
    ele_2.class('audio-controller-2');
    aud_2 = document.querySelector(".audio-controller-2");
    aud_2.addEventListener("play", audioPlay_2);
    aud_2.addEventListener("pause", audioStop_2);
    aud_2.addEventListener("ended", audioStop_2);
    amplitude_2 = new p5.Amplitude();
    /* terzo elemento */
    let ele_3 = createAudio('https://www.marinabrizzibraus.it/wp-content/uploads/2022/07/BrizVoc_Gilgamech-3.mp3');
    ele_3.autoplay(false);
    ele_3.parent("test-3");
    ele_3.showControls();
    ele_3.connect(sound_3);
    ele_3.pause();
    ele_3.class('audio-controller-3');
    aud_3 = document.querySelector(".audio-controller-3");
    aud_3.addEventListener("play", audioPlay_3);
    aud_3.addEventListener("pause", audioStop_3);
    aud_3.addEventListener("ended", audioStop_3);
    amplitude_3 = new p5.Amplitude();
  }
  
  function draw() {
    let level = amplitude.getLevel();
    let size = map(level, 0, 1, 0, 200);
    siriWave_1.amplitude = size/10;
    /* secondo elemento */
    let level_2 = amplitude_2.getLevel();
    let size_2 = map(level_2, 0, 1, 0, 200);
    siriWave_2.amplitude = size_2/10;
    /* terzo elemento */
    let level_3 = amplitude_3.getLevel();
    let size_3 = map(level_3, 0, 1, 0, 200);
    siriWave_3.amplitude = size_3/10;
  }
  
  
  function audioPlay() {
    siriWave_1.start();
    aud.play();
    console.log('parte 1')
  }
  
  function audioPause() {
    siriWave_1.stop();
  }
  
  function audioStop() {
    console.log('stop');
    siriWave_1.stop();
  }
  /* =============================================================================================== */
  function audioPlay_2() {
    siriWave_2.start();
    aud_2.play();
    console.log('parte 2')
  }
  
  function audioPause_2() {
    siriWave_2.stop();
  }
  
  function audioStop_2() {
    siriWave_2.stop()
  }
  /* =============================================================================================== */
  function audioPlay_3() {
    siriWave_3.start();
    aud_3.play();
  }
  
  function audioPause_3() {
    siriWave_3.stop();
  }
  
  function audioStop_3() {
    siriWave_3.stop();
  }