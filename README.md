# 🎵 Audio Player: "Lose Control" by Teddy Swims

This is a simple HTML + JavaScript project that plays the song **"Lose Control"** by **Teddy Swims** with synchronized lyrics highlighted in real time.

## 🚀 Features

- ▶️ Play/Pause button
- 🕒 Real-time lyrics syncing using `data-time` attributes
- 🔄 Automatically resets play button when the song ends
- ✨ Highlights the currently active lyric line

## 📁 Project Structure

## 🎧 Song Info

- **Title**: *Lose Control*  
- **Artist**: Teddy Swims  
- 🔗 [Listen on YouTube](https://www.youtube.com/watch?v=ojYV-ckR3uY)  
- 🎵 [Spotify Link](https://open.spotify.com/track/7KaDXD6z8bI7fVx3yT3D7D)

> The song belongs to its respective copyright owners.  
> This project is for **educational and demonstrational purposes only**.

## 🧪 How It Works

Each line of lyrics is a `<p>` element with a `data-time` attribute (in seconds).  
JavaScript listens to the `audio.currentTime` and highlights the appropriate line as the song progresses.

## 🖥️ How to Run Locally

1. Clone this repository:

   ```bash
   git clone https://github.com/yourusername/lose-control-lyrics-player.git
   cd lose-control-lyrics-player
