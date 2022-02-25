import { ReactEventHandler, ReactNode } from 'react';

export interface DataSource {
  id: number;
  dataURL: string;
}

export interface TUploader {
  handleSetImagesArray: any;
  multipleFiles: any;
  addIcon: ReactNode;
}