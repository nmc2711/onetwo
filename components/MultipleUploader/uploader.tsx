import React, { useState, useCallback } from 'react';
import { uniqueId } from 'lodash';
import fileSize from 'filesize';
import { useDropzone } from 'react-dropzone';

import { TUploader } from 'types/uploader';

import Wrapper from './wrapper';


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
   }: any = useDropzone({ onDrop });

  return (
    <Wrapper
      isDragAccept={isDragAccept}
      isDragReject={isDragReject}
      isDragAcceptColor={isDragAcceptColor}
      isDragNotAcceptColor={isDragNotAcceptColor}
      isDragRejectColor={isDragRejectColor}
      width={width}
      height={height}
      {...getRootProps()}
    >
      <input {...getInputProps()} />
    </Wrapper>
  )
}
export default MultipleUploader;
