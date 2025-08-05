// Java/Save.js

const SaveSystem = {
  saveData: (data) => {
    localStorage.setItem("randomQuanticSave", JSON.stringify(data));
    console.log("Jogo salvo com sucesso:", data);
  },

  loadData: () => {
    const saved = localStorage.getItem("randomQuanticSave");
    if (saved) {
      return JSON.parse(saved);
    }
    return null;
  },

  clearData: () => {
    localStorage.removeItem("randomQuanticSave");
    console.log("Save apagado.");
  }
};

function salvarJogo() {
  const dados = {
    // exemplo de dados que você quer salvar
    score: score,
    player: player,
    pulo: jumpping,
    // ...outros dados do seu jogo
  };

  SaveSystem.saveData(dados);
}