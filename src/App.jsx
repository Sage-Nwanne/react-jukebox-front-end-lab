import { useState, useEffect } from 'react';
import './App.css';

import trackService from './services/trackService';
import Tracklist from './components/Tracklist/Tracklist';
import TrackForm from './components/TrackForm/TrackForm';
import NowPlaying from './components/NowPlaying/NowPlaying';
import TrackDetails  from './components/TrackDetails/TrackDetails';



const App = () => {

  const [tracks, setTracks] = useState([]);
  const [selectedTrack, setSelectedTrack] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

  useEffect(() => {
    const fetchedTracks = async () => {
      const fetchedTracks = await trackService.trackIndex();
      setTracks(fetchedTracks);
    };
  fetchedTracks(); }, []);


const handleSelect = (track) => {
  setSelectedTrack(track);
  setIsFormOpen(false);
}

const handleFormView = () => {
  setIsFormOpen(!isFormOpen);
};



  const handleAddTrack = async (formData) => {
    try {
      const newTrack = await trackService.createTrack(formData);
      setTracks([...tracks, newTrack]);
      setSelectedTrack(newTrack);
      setIsFormOpen(false);
      
      if (newTrack.err){
        throw new Error('Failed to add track', newTrack.err);
      } 
    } 
    catch (error) {
      console.log(error);
    }
  }


  const handleUpdateTrack = async (formData, id) => {
    try {
      const updatedTrack = await trackService.updateTrack(formData, id);
      if(updatedTrack.err){
        throw new Error('Failed to update track', updatedTrack.err);
      } else {
        setTracks(tracks.map((track) => track._id === id ? updatedTrack : track));
        setIsFormOpen(false);
        setSelectedTrack(updatedTrack);
      }
    } catch (error) {
      console.log(error);
    }
  }

  const handleRemoveTrack = async (id) => {
    try {
      const removedTrack = await trackService.deleteTrack(id);
      if(removedTrack.err){
        throw new Error('Failed to remove track', removedTrack.err);
      } else {
        const updatedTracks = tracks.filter((track) => track._id !== id);
        setTracks(updatedTracks);
        setSelectedTrack(null);
      }
    } catch (error) {
      console.log(error);
    }
  }



  return (
    <>
      <Tracklist 
        tracks={tracks} 
        handleAddTrack={handleAddTrack} 
        handleSelect={handleSelect} 
        handleFormView={handleFormView}
        isFormOpen={isFormOpen}
      />
      {isFormOpen ? (
        <TrackForm 
          handleAddTrack={handleAddTrack} 
          handleUpdateTrack={handleUpdateTrack} 
          selected={selectedTrack}
        />
      ) : (
        <TrackDetails 
          selected={selectedTrack}
          handleFormView={handleFormView} 
          handleRemoveTrack={handleRemoveTrack}
          handleUpdateTrack={handleUpdateTrack}
        />
      )}
    </>
  );

};

export default App;