import { ReactEventHandler } from 'react';

export interface DataSource {
  id: number;
  dataURL: string;
}

export interface TUploader {
  width: string;
  height: string;
  isDragAcceptColor?: boolean;
  isDragNotAcceptColor?: boolean;
  isDragRejectColor?: boolean;
  handleSetImagesArray: any;
  multipleFiles: any;
}

