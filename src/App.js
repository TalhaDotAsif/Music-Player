import {useState, useEffect} from 'react';
import Player from './components/Player/Player';

function App() {
  const [songs] = useState([
   {
      title: "Slow Down",
      artist: "Selena Gomez",
      img_src: "./images/selena.jpg",
      src: "./music/slowdown.mp3"
    },
    {
      title: "Say my Name",
      artist: "BeBe Rexha",
      img_src: "./images/bebe.jpg",
      src: "./music/saymyname.mp3"
    },
    {
      title: "I knew you were trouble",
      artist: "Taylor Swift",
      img_src: "./images/taylor.jpg",
      src: "./music/iknew.mp3"
    }
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex]);

  return (
    <div className="App">
      <Player 
        currentSongIndex={currentSongIndex} 
        setCurrentSongIndex={setCurrentSongIndex} 
        nextSongIndex={nextSongIndex} 
        songs={songs}
      />
    </div>
  );
}

export default App;