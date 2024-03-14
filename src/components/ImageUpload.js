import React, { useState } from 'react';
import { storage, db } from './ImageURL';
import { getDownloadURL, ref as storageRef, uploadBytes } from 'firebase/storage';
import { ref as dbRef, push } from 'firebase/database';
import { toast } from 'react-toastify';

function ImageUpload() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedImageName, setSelectedImageName] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleImageUpload = (e) => {
    const file = e.target.files[0]; // Only take the first selected file
    setSelectedImage(file);
    setSelectedImageName(file.name);
  };

  const handleUpload = async () => {
    setIsLoading(true);
    if (selectedImage) {
      const imageRef = storageRef(storage, selectedImage.name);

      try {
        const snapshot = await uploadBytes(imageRef, selectedImage);
        const downloadUrl = await getDownloadURL(snapshot.ref);

        const imagesRef = dbRef(db, 'images');
        push(imagesRef, { imageUrl: downloadUrl, timestamp: new Date().getTime() });

        toast.success('Image uploaded', {
          position: 'top-center',
          autoClose: 3000,
          theme: 'dark',
        });
      } catch (e) {
        console.error('Error uploading image:', e);
      } finally {
        setIsLoading(false);
      }
    } else {
      console.error('No image selected');
    }
  };

  return (
    <div className='main-container'>
      <div>
        <label htmlFor='upload-input' className='custom-upload'>
          Choose Image
          <input id='upload-input' type='file' accept='image/*' onChange={handleImageUpload} className='upload-input' />
        </label>
      </div>
      <div className='selected-images'>
        {selectedImageName && !isLoading && <p className='p-tag'>{selectedImageName}</p>}
      </div>
      <button onClick={handleUpload} className='upload-button'>
        {isLoading ? 'Uploading...' : 'Upload Image'}
      </button>
    </div>
  );
}

export default ImageUpload;
