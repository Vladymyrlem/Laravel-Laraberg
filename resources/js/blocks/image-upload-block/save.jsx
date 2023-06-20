import React, {useEffect, useState} from 'react';
import axios from 'axios';

"use client"

const Save = ({attributes: {media}}) => {
    const [imageUrl, setImageUrl] = useState(0);

    useEffect(() => {
        if (media && media.url) {
            uploadImage(media.url);
        }
    }, [media]);

    const uploadImage = async (url) => {
        try {
            const response = await axios.post('/api/upload-image', {url}); // Replace with your Laravel API endpoint for image upload

            if (response.data.success) {
                setImageUrl(response.data.path);
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            {imageUrl && <img src={imageUrl} alt="Uploaded"/>}
        </div>
    );
};

export default Save;
