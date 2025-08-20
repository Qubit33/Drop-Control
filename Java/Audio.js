const audio = document.getElementById('audio');
const playBtn = document.getElementById('playBtn');

playBtn.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    playBtn.textContent = '⏸️ Pause';
  } else {
    audio.pause();
    playBtn.textContent = '▶️ Play';
  }
});

audio.addEventListener('ended', () => {
  playBtn.textContent = '▶️ Play';
});

window.addEventListener('beforeunload', () => {
  audio.pause();
  audio.currentTime = 0;
});

document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    audio.pause();
    audio.currentTime = 0;
    playBtn.textContent = '▶️ Play';
  }
});