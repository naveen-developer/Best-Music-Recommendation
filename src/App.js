import { useState } from "react";
import "./styles.css";
import Aafat from "./Music/Aafat.mp3";
import Akdi_Pakdi from "./Music/Akdi Pakdi.mp3";
import I_Am_Ready from "./Music/I Am Ready.mp3";
import Inthandham from "./Music/Inthandham.mp3";
import Kumkumala from "./Music/Kumkumala.mp3";
import Paraka_Paraka from "./Music/Paraka Paraka.mp3";
import Duniya from "./Music/Duniya.mp3";
import Srivalli from "./Music/Srivalli.mp3";
import Toofan from "./Music/Toofan.mp3";

function App() {
  const [music, setMusic] = useState("Hindi");
  var musicRecommendationDB = {
    Hindi: [
      {
        title: "Duniya",
        rating: 4.1,
        src: Duniya
      },
      {
        title: "Toofan",
        rating: 4.4,
        src: Toofan
      },
      {
        title: "Srivalli",
        rating: 4.3,
        src: Srivalli
      }
    ],
    Malyalam: [
      {
        title: "Inthandham",
        rating: 4.4,
        src: Inthandham
      },
      {
        title: "Kumkumala",
        rating: 4.0,
        src: Kumkumala
      },
      {
        title: "Paraka Paraka",
        rating: 3.5,
        src: Paraka_Paraka
      }
    ],
    Telugu: [
      {
        title: "Affat",
        rating: 4.5,
        src: Aafat
      },
      {
        title: "Akdi Pakdi",
        rating: 4.3,
        src: Akdi_Pakdi
      },
      {
        title: "I Am Ready",
        rating: 4.1,
        src: I_Am_Ready
      }
    ]
  };
  console.log(musicRecommendationDB);
  var genreList = Object.keys(musicRecommendationDB);

  function showMusicRecommendation(event) {
    var recommendation = event.target.innerText;
    setMusic(recommendation);
  }
  return (
    <div className="App">
      <nav className="navbar">
        <h2>Best Music Recommendations</h2>
      </nav>
      <div className="container">
        <h1>🎶 Let's the music speak!</h1>
        <p>Checkout my favourite musics. Select a genre to get started.</p>
        {genreList.map((genre, index) => {
          if (music === genre) {
            return (
              <button
                className="btn-active"
                key={index}
                onClick={showMusicRecommendation}
              >
                {genre}
              </button>
            );
          }
          return (
            <button
              className="btn"
              key={index}
              onClick={showMusicRecommendation}
            >
              {genre}
            </button>
          );
        })}
        <hr style={{ margin: "2rem 0rem" }} />
        <ul>
          {musicRecommendationDB[music].map((genre, index) => {
            return (
              <li key={index}>
                <p id="genre-title">{genre.title}</p>
                <p id="genre-rating">{genre.rating}</p>
                <audio controls src={genre.src}></audio>
              </li>
            );
          })}
        </ul>
      </div>
      <footer>
        <p>
          Copyrights © | 2022 |{" "}
          <a href="#" className="portfolio">
            Naveen Lagishetty
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
