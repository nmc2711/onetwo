import { ReactEventHandler } from 'react';

export interface DataSource {
  id: number;
  dataURL: string;
}

export interface TUploader {
  width: any;
  height: any;
  handleSetImagesArray: any;
  multipleFiles: any;
}