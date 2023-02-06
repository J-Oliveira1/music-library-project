import SongRow from "../SongRow/SongRow";

const MusicTable = ({ songs }) => {
  const table = songs.map(song => {
    return  <SongRow song={song} />
  });
  return (
    <section>
      <h1>Joe's Music Library</h1>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Artist</th>
            <th>Album</th>
            <th>Release Date</th>
            <th>Genre</th>
          </tr>
        </thead>
        <tbody>{table}</tbody>
      </table>
    </section>
  );
};

export default MusicTable;

