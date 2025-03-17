import React from 'react';


const TrackDetails = (props) => {
  if (!props.selected) {
    return (
      <div>
        <h3>No details yet...</h3>
      </div>
    );
  }

  // return statement if props.selected has a truthy value
  return (
    <>

    <div>
      <h1>{props.selected.name}</h1>
      <h2>Artist: {props.selected.artist}</h2>
    </div>
    <button onClick={() => props.handleFormView(props.selected)}>Edit Track</button>
    <button onClick={() => props.handleRemoveTrack(props.selected._id)}>Remove Track</button>

    </>
    
  );
};

export default TrackDetails;