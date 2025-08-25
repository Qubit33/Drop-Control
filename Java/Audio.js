const audio = document.getElementById('audio');
const playBtn = document.getElementById('playBtn');
let soundEnabled = true;

function updatePlayButton() {
  playBtn.textContent = audio.paused ? '▶️ Play' : '⏸️ Pause';
}

function stopAudio() {
  audio.pause();
  audio.currentTime = 0;
  updatePlayButton();
}

function initAudioSystem() {
  const btn = document.getElementById("audioToggleBtn");
  if (btn) {
    btn.addEventListener("click", () => {
      soundEnabled = !soundEnabled;
      btn.innerText = soundEnabled ? "🔊 Som: ON" : "🔇 Som: OFF";
      if (!soundEnabled) stopAudio();
    });
  }
}

playBtn.addEventListener('click', () => {
  if (!soundEnabled) return;

  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
  updatePlayButton();
});

audio.addEventListener('ended', updatePlayButton);

window.addEventListener('beforeunload', stopAudio);
document.addEventListener('visibilitychange', () => {
  if (document.hidden) stopAudio();
});