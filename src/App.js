import React, { useState, useEffect } from "react";
import axios from "axios";
import MusicTable from "./Components/MusicTable/MusicTable";
import AddNewSong from "./Components/AddNewSong/AddNewSong";

function App() {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    getAllSongs();
  }, []);

  async function addingNewSong(song) {
    const response = await axios.post("http://127.0.0.1:8000/api/music/", song);
    if(response.status === 201){
      await getAllSongs();
    }
  }

  async function getAllSongs() {
    const response = await axios.get("http://127.0.0.1:8000/api/music/");
    setSongs(response.data);
    console.log(response.data);
  }

  return (
    <div>
      <MusicTable songs={songs} />
      <AddNewSong addingNewSong={addingNewSong}/>
    </div>
  );
}

export default App;
