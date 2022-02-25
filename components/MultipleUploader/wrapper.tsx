/**
* @title : file-uploader Wrapping components
*/

import React, { useEffect, useState, forwardRef, useImperativeHandle, ReactNode } from 'react';

import Uploader from './uploader';
import FilesList from './fileList';
interface TUploadWrapper {
  imagesArray: any;
  handleSetImagesArray: any;
  multipleFiles: any;
  apiEndpoint: any;
  ref?: any;
  addIcon? : ReactNode;
};

const UploaderWrapper: React.FC<TUploadWrapper> = forwardRef(({ imagesArray, handleSetImagesArray, multipleFiles, apiEndpoint, addIcon,
}, ref: any) => {
  const [processedFilesArray, setProcessedFilesArray] = useState([]);

  // sideEffect
  useEffect(() => {
    () => () => {imagesArray.map((image: any) => {
      URL.revokeObjectURL(image.preview);
    })}
  }, []);

  useEffect(() => {
    handleSetImagesArray(processedFilesArray);
  }, [processedFilesArray]);

  const handleDeleteImage = async (index: any) => {
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

  useImperativeHandle(ref, () => ({
    handleStartUploadingFiles() {
      handleProcessFiles();
    }
  }));

  return (
    <Uploader
      handleSetImagesArray={handleSetImagesArray}
      multipleFiles={multipleFiles}
      addIcon={addIcon}
    >
      {/* {imagesArray.length > 0 && (
          <FilesList
            imagesArray={imagesArray}
            handleDeleteImage={handleDeleteImage}
            width={width}
            height={height}
          />
        )} */}
    </Uploader>
  )
})
UploaderWrapper.displayName = "UploaderWrapper";
export default UploaderWrapper;
