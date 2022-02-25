/**
* @title : file-uploader Wrapping components
*/
import React, { useEffect, useState, forwardRef, useImperativeHandle, ReactNode } from 'react';
import { Titem } from 'types/uploader';
import Uploader from './uploader';

interface TUploadWrapper {
  imagesArray: Titem[];
  handleSetImagesArray: any;
  multipleFiles: boolean;
  apiEndpoint: string;
  ref: React.ForwardedRef<ReactNode>;
  addIcon? : ReactNode;
};

const UploaderWrapper: React.FC<TUploadWrapper> = forwardRef(({ imagesArray, handleSetImagesArray, multipleFiles, apiEndpoint, addIcon,
}, ref) => {
  const [processedFilesArray, setProcessedFilesArray] = useState([]);

  // SideEffect
  useEffect(() => {
    () => () => {
      imagesArray.map((image: Titem) => {
      URL.revokeObjectURL(image.preview);
    })}
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
    imagesArray.map(async (file: Titem) => {
      const formData = new FormData();

      formData.append('file', file.file);
      // fetch logic here
    })
  };

  useImperativeHandle(ref, () => ({
    handleStartUploadingFiles() {
      handleProcessFiles();
    }
  }));

  return (
    <Uploader
      handleSetImagesArray={handleSetImagesArray}
      multipleFiles={multipleFiles}
      addIcon={addIcon} />
  )
});

UploaderWrapper.displayName = "UploaderWrapper";

export default UploaderWrapper;
