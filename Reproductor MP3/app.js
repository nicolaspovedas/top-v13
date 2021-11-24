//Agregar event  listener al button
//El  event listener  debe reproducir  el archivo
// al reproducir el archivo debe  cambiar la clase del boton de play a  pause y viceversa

const playButton = document.getElementById('play')
const pauseButton = document.getElementById('pause')


const song = new Audio('dontstopmenow.mp3')

// playButton.addEventListener('click', song.play(), false )

playButton.addEventListener("click", event => {
  song.play();
  playButton.classList.add('hide')
  pauseButton.classList.remove('hide')
});


pauseButton.addEventListener("click", event => {
    song.pause();
    pauseButton.classList.add('hide')
    playButton.classList.remove('hide')
  });

// song.play()