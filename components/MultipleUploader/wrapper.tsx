import React, { useEffect, useState, forwardRef, useImperativeHandle, useLayoutEffect } from 'react';
import Uploader from './uploader';

interface TUploadWrapper {
  width: string;
  height: string;
  imagesArray: any;
  handleSetImagesArray: any;
  isDragNotAcceptColor: boolean;
  isDragRejectColor: boolean;
  multipleFiles: any;
  apiEndpoint: any;
};

const UploaderWrapper: React.FC<TUploadWrapper> = (({ 
  width, height, imagesArray, handleSetImagesArray, isDragNotAcceptColor,
  isDragRejectColor, multipleFiles, apiEndpoint,
}, ref) => {
  const [processedFilesArray, setProcessedFilesArray] = useState([]);

  // sideEffect
  useLayoutEffect(() => {
    imagesArray.map((image: any) => {
      URL.revokeObjectURL(image.preview);
    })
  }, []);

  useEffect(() => {
    handleSetImagesArray(processedFilesArray);
  }, [processedFilesArray]);

  const handleDeleteImage = async (index: number) => {
    const tempImagesArray = [...imagesArray];
    tempImagesArray.splice(index, 1);
    handleSetImagesArray(tempImagesArray);
  }

  const handleProcessFiles = () => {
    imagesArray.map(async (file: any) => {
      const formData = new FormData();

      formData.append('file', file.file);
      // fetch logic here
    })
  };

  return (
    <div>
      
    </div>
  )
})
export default UploaderWrapper;
