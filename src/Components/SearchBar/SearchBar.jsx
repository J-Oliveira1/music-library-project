import React, { useState } from 'react';


const SearchBar = ({ songs, setSongs }) => {


    const [title, setTitle] = useState('');
    const [artist, setArtist] = useState('');
    const [album, setAlbum] = useState('');
    const [releaseDate, setReleaseDate] = useState('');
    const [genre, setGenre] = useState('');

    function filterSongs(filteredThruSongs) {
        let songsFiltered = songs.filter((song) => song.filter === filteredThruSongs);
        setSongs(songsFiltered)
    }


    return ( 
        <div onSubmit={filterSongs}>
            <label>Category:</label>
            <select>
            <option value={''} >All</option>
            <option value={title} onChange={(event) => setTitle(event.target.value)} >Title</option>
            <option value={artist} onChange={(event) => setArtist(event.target.value)} >Artist</option>
            <option value={album} onChange={(event) => setAlbum(event.target.value)}>Album</option>
            <option value={releaseDate} onChange={(event) => setReleaseDate(event.target.value)}>Release Date</option>
            <option value={genre} onChange={(event) => setGenre(event.target.value)}>Genre</option>
            </select>
        </div>
     );
}
 
export default SearchBar;