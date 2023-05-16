import React, { useEffect, useState } from 'react';
import { Image } from 'cloudinary-react';

const CloudinaryImages = () => {
    const [images, setImages] = useState([]);
  
    useEffect(() => {
      fetchImages();
    }, []);
  
    const fetchImages = async () => {
      try {
        const response = await fetch('https://api.cloudinary.com/v1_1/dxsxgt40t/image/list', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': '739331922381182'
          }
        });
        const data = await response.json();
        setImages(data.resources);
      } catch (err) {
        console.log(err);
      }
    };
  
    return (
      <div>
        {images.map((image) => (
          <Image key={image.public_id} cloudName="dxsxgt40t" publicId={image.public_id} />
        ))}
      </div>
    );
  };
  
  export default CloudinaryImages;
  