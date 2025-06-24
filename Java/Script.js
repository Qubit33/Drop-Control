const audio = document.getElementById('audio');
const playBtn = document.getElementById('playBtn');
const lyricsContainer = document.getElementById('lyrics');

fetch('Audio/Lose-Control.txt')
  .then(res => res.text())
  .then(html => {
    lyricsContainer.innerHTML = html;

    const lyrics = lyricsContainer.querySelectorAll('p');

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

      lyrics.forEach((p, index) => {
        const time = parseFloat(p.getAttribute('data-time'));
        const next = lyrics[index + 1];
        const nextTime = next ? parseFloat(next.getAttribute('data-time')) : Infinity;

        if (currentTime >= time && currentTime < nextTime) {
          lyrics.forEach(el => el.classList.remove('active'));
          p.classList.add('active');
          // p.scrollIntoView({ behavior: 'smooth', block: 'center' }); // Auto scroll removido
        }
      });
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
      }
    });
  });