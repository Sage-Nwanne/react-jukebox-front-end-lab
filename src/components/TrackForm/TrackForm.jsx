import React, { useState, useEffect } from 'react';

const TrackForm = (props) => {
    const initialState = {
        name: '',
        artist: '',
    };
    
    const [formData, setFormData] = useState(initialState);

    useEffect(() => {
        if (props.selected) {
            setFormData({
                name: props.selected.name,
                artist: props.selected.artist,
            });
        } else {
            setFormData(initialState);
        }
    }, [props.selected]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (props.selected) {
            props.handleUpdateTrack(formData, props.selected._id);
        } else {
            props.handleAddTrack(formData);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor='name'>
                Name:
                <input 
                    type="text" 
                    id="name"
                    value={formData.name} 
                    onChange={handleChange} 
                    name="name" 
                />
            </label>
            <label htmlFor='artist'>
                Artist:
                <input 
                    type="text" 
                    id="artist"
                    value={formData.artist} 
                    onChange={handleChange} 
                    name="artist" 
                />
            </label>
            
            <button type="submit">
                {props.selected ? 'Update Track' : 'Add New Track'}
            </button>
        </form>
    );
};

export default TrackForm;