const audio = document.getElementById('audio');
const playBtn = document.getElementById('playBtn');
const languageSelect = document.getElementById('languageSelect');
const lyricsContainer = document.getElementById('lyrics');

let lyrics = [];

function getLangCode(language) {
  switch(language) {
    case 'Portuguese': return 'Por';
    case 'Spanish': return 'Spa';
    case 'English': return 'Eng';
    default: return 'Eng';
  }
}

function loadDialogue(language) {
  const fileName = `Audio/${language}/Dialogues_System_${getLangCode(language)}.txt`;

  fetch(fileName)
    .then(res => {
      if (!res.ok) throw new Error(`Arquivo não encontrado: ${fileName}`);
      return res.text();
    })
    .then(text => {
      lyricsContainer.innerHTML = text;
      lyrics = lyricsContainer.querySelectorAll('p');
    })
    .catch(err => {
      lyricsContainer.innerHTML = `<p style="color:red;">Erro ao carregar: ${err.message}</p>`;
    });
}

fetch('Audio/Portuguese/Dialogues_System_Por.txt')
  .then(res => res.text())
  .then(html => {
    lyricsContainer.innerHTML = html;
    lyrics = lyricsContainer.querySelectorAll('p');

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

languageSelect.addEventListener('change', (e) => {
  loadDialogue(e.target.value);
});