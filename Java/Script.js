const audio = document.getElementById('audio');
const playBtn = document.getElementById('playBtn');
const lyrics = document.querySelectorAll('#lyrics p');

playBtn.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    playBtn.textContent = '⏸️ Pause';
  } else {
    audio.pause();
    playBtn.textContent = '▶️ Play';
  }
});

audio.addEventListener('timeupdate', () => {
  let currentTime = audio.currentTime;

  lyrics.forEach(p => {
    const time = parseFloat(p.getAttribute('data-time'));
    if (currentTime >= time) {
      lyrics.forEach(el => el.classList.remove('active'));
      p.classList.add('active');
    }
  });
});

audio.addEventListener('ended', () => {
  playBtn.textContent = '▶️ Play';
});

window.addEventListener('beforeunload', () => {
  audio.pause();
  audio.currentTime = 0; // opcional
});

document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    audio.pause();
    audio.currentTime = 0; // opcional
  }
});