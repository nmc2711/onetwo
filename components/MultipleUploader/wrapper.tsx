import React, { useEffect, useState, forwardRef, useImperativeHandle, useLayoutEffect } from 'react';
import Uploader from './uploader';
import FilesList from './fileList';
interface TUploadWrapper {
  width: any;
  height: any;
  imagesArray: any;
  handleSetImagesArray: any;
  isDragNotAcceptColor: any;
  isDragRejectColor: any;
  isDragAcceptColor?: any;
  multipleFiles: any;
  apiEndpoint: any;
  ref?: any;
};

const UploaderWrapper: React.FC<TUploadWrapper> = forwardRef(({ 
  width, height, imagesArray, handleSetImagesArray, isDragNotAcceptColor,
  isDragRejectColor, multipleFiles, apiEndpoint,
}, ref: any) => {
  const [processedFilesArray, setProcessedFilesArray] = useState([]);

  // sideEffect
  useLayoutEffect(() => {
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
    <div style={{ width : '200px', height: '200px' }}>
    <Uploader
      width={width}
      height={height}
      handleSetImagesArray={handleSetImagesArray}
      isDragAcceptColor={isDragNotAcceptColor}
      isDragNotAcceptColor={isDragNotAcceptColor}
      isDragRejectColor={isDragRejectColor}
      multipleFiles={multipleFiles}
    >
      {imagesArray.length > 0 && (
          <FilesList
            imagesArray={imagesArray}
            handleDeleteImage={handleDeleteImage}
            width={width}
            height={height}
          />
        )}
    </Uploader>
    </div>

  )
})
export default UploaderWrapper;
