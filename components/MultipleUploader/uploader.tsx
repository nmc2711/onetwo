import React, { useCallback } from 'react';
import { uniqueId } from 'lodash';
import { useDropzone } from 'react-dropzone';
import fileSize from 'filesize';

import { TUploader, TDropZone } from 'types/uploader';

const MultipleUploader: React.FC<TUploader> = props => {
  const { handleSetImagesArray, multipleFiles, addIcon,
  } = props;
  
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

    if (multipleFiles) {
      acceptedFiles.forEach((file: any) => {
        blobArray.push(createImageObj(file));
      })
    } else {
      blobArray.push(createImageObj(acceptedFiles[0]));
    }
    handleSetImagesArray(blobArray);
  }, [handleSetImagesArray, multipleFiles]);

  const { 
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
   }: TDropZone = useDropzone({ onDrop });

  return (
    <div
      isDragAccept={isDragAccept}
      isDragReject={isDragReject}
      {...getRootProps()}
    >
      <input {...getInputProps()} />
      {isDragActive ? (
          addIcon
        ) : (
          addIcon
        )}
      {props.children}
    </div>
  )
}
export default MultipleUploader;
