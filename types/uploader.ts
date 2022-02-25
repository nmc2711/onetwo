import { ReactNode } from 'react';

export interface DataSource {
  id: number;
  dataURL: string;
}

export interface TUploader {
  handleSetImagesArray: any;
  multipleFiles: any;
  addIcon: ReactNode;
}

export interface Titem {
  error: boolean;
  file: any;
  id: string;
  name: string;
  preview: string;
  progress: number;
  readableSize: string;
  uploaded: boolean;
  url: string | null;
};

export type TDropZone = {
  getRootProps: any;
  getInputProps: any;
  isDragActive: boolean;
  isDragAccept: boolean;
  isDragReject: boolean;
}