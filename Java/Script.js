const languageSelect = document.getElementById('languageSelect');
const lyricsContainer = document.getElementById('lyrics');

let lyrics = [];

function getLangCode(language) {
  switch (language) {
    case 'Portuguese': return 'Por';
    case 'Spanish': return 'Spa';
    case 'English': return 'Eng';
    default: return 'Eng';
  }
}

async function loadDialogue(language) {
  const fileName = `Audio/${language}/Dialogues_System_${getLangCode(language)}.txt`;

  try {
    const res = await fetch(fileName);
    if (!res.ok) throw new Error(`Arquivo não encontrado: ${fileName}`);
    const text = await res.text();
    lyricsContainer.innerHTML = text;
    lyrics = lyricsContainer.querySelectorAll('p');
  } catch (err) {
    lyricsContainer.innerHTML = `<p style="color:red;">Erro ao carregar: ${err.message}</p>`;
  }
}

async function initLyrics() {
  try {
    const res = await fetch('Audio/Portuguese/Dialogues_System_Por.txt');
    const html = await res.text();
    lyricsContainer.innerHTML = html;
    lyrics = lyricsContainer.querySelectorAll('p');

    audio.addEventListener('timeupdate', () => {
      const currentTime = audio.currentTime;
      let activeSet = false;

      for (let i = 0; i < lyrics.length; i++) {
        const time = parseFloat(lyrics[i].getAttribute('data-time'));
        const nextTime = i + 1 < lyrics.length
          ? parseFloat(lyrics[i + 1].getAttribute('data-time'))
          : Infinity;

        if (currentTime >= time && currentTime < nextTime) {
          if (!activeSet) {
            lyrics.forEach(el => el.classList.remove('active'));
            lyrics[i].classList.add('active');
            activeSet = true;
          }
        }
      }
    });

  } catch (err) {
    lyricsContainer.innerHTML = `<p style="color:red;">Erro ao carregar: ${err.message}</p>`;
  }
}

languageSelect.addEventListener('change', (e) => {
  loadDialogue(e.target.value);
});

initLyrics();