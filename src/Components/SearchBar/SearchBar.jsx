import React, { useState } from 'react';
import './SearchBar.css'

const SearchBar = ({songs, setSongs}) => {
    const [category, setCategory] = useState('')

    const musicFilter = (category) => {
        setCategory(category)
    }

    function filterMusicTable(filterSongs){
        const musicFiltered = songs.filter((song) => song[category] === filterSongs);
        setSongs(musicFiltered)
    }
    return ( 
        <div onSubmit={filterMusicTable} id='bar'>
            <label>Category:</label>
            <select  onChange={(event) => musicFilter(event.target.value)}
            value={category}>
                <option value={''}>All</option>
                <option value={'title'}>Title</option>
                <option value={'artist'}>Artist</option>
                <option value={'album'}>Album</option>
                <option value={'release_date'}>Release Date</option>
                <option value={'genre'}>Genre</option>
            </select>
            <select onChange={(event) => filterMusicTable(event.target.value)}>
            {songs.map((song) => {
                return (
                    <option>{song[category]}</option>
                );
            })}
            </select>
        </div>
     );
}
 
export default SearchBar;




