import React, { useState, useCallback } from 'react';
import { uniqueId } from 'lodash';
import fileSize from 'filesize';

import { TUploader } from 'types/uploader'; 


const MultipleUploader: React.FC<TUploader> = ({
  width,
  height,
  isDragAcceptColor,
  isDragNotAcceptColor,
  isDragRejectColor,
  handleSetImagesArray,
  multipleFiles
}) => {

  const createImageObj = (file: any) => {
    return {
      file,
      id: uniqueId(),
      name: file.name,
      readableSize: fileSize(file.size),
      preview: URL.createObjectURL(file),
      progress: 0,
      uploaded: false,
      error: false,
      url: null,
    };
  }

  const onDrop = useCallback((acceptedFiles) => {
    let blobArray = [];
  }, []);


  return (
    <div>
      
    </div>
  )
}
export default MultipleUploader;
