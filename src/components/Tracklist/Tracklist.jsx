import React from 'react';
import TrackForm from '../TrackForm/TrackForm';


const Tracklist = (props) => {
  const tracks = props.tracks || [];

  return (
    <>
      <h2>Tracklist</h2>
      <div>
        {!tracks.length ? 
          <div>
            <p>No tracks available.</p>
          </div>
        : (
          <>
            <ul className="trackList">
              {tracks.map((track) => (
                <li 
                  key={track._id}
                  className="trackItem"
                  onClick={() => props.handleSelect(track)}
                >
                  {track.name}
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
      <button onClick={props.handleFormView}> 
        {props.isFormOpen ? 'Close Form' : 'Add New Track'}
      </button>
    </>
  );
};

export default Tracklist;