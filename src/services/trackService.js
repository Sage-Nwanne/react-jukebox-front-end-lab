import React from 'react';
const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/tracks`;





const trackIndex = async () => {
    try {
        const response = await fetch(BASE_URL);
        const data = await response.json();
        return data;
        
    } catch (error) {
       console.log(error);
    }
  
};


const createTrack = async (formData) => {
    try {
        const response = await fetch(BASE_URL, {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(formData)
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
    
};

const updateTrack = async (formData, id) => {
    try {
        const response = await fetch(`${BASE_URL}/${id}`, {
            method: 'PUT',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(formData)
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
    
};

const deleteTrack = async (id) => {
    try {
        const response = await fetch(`${BASE_URL}/${id}`, {
            method: 'DELETE',

            
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error)
    }
    
};

export default { trackIndex, createTrack, updateTrack, deleteTrack };