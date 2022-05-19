import React, { useEffect, useRef, useState } from "react";

import { Titem } from 'types/uploader';

import { baseApiUrl } from 'enum/config';

import MutipleUploader from 'components/MultipleUploader/wrapper';

export type ImageType = { id: string; url: any; preview: string; };

const ImageCarousel = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState<ImageType>();
  const carouselItemsRef = useRef<HTMLDivElement[] | null[]>([]);

  const [imageArray, setImageArray] = useState<Titem[]>([]);

  const childRef = useRef();

  const handleSetImagesArray = (arr: Titem[]) => {
    setImageArray(imageArray.concat(arr));
  }

  useEffect(() => {
    if (imageArray && imageArray[0]) {
      carouselItemsRef.current = carouselItemsRef.current.slice(
        0,
        imageArray.length
      );
      setSelectedImageIndex(0);
      setSelectedImage(imageArray[0]);
    }
  }, [imageArray]);

  const handleSelectedImageChange = (newIdx: number) => {
    if (imageArray && imageArray.length > 0) {
      setSelectedImage(imageArray[newIdx]);
      setSelectedImageIndex(newIdx);
    }
  };

  return (
    <div className="carousel-container">
      {imageArray && imageArray.length === 0 ? 
        <div className="empty-preview-image">
          사진을 등록해주세요
        </div>
        :
        <div
          className="selected-image"
          style={{ backgroundImage: `url(${selectedImage?.preview})` }}
        />}
      <div className="carousel">
        <div className="carousel__images">
          <MutipleUploader
            ref={childRef}
            imagesArray={imageArray}
            handleSetImagesArray={handleSetImagesArray}
            multipleFiles={true}
            apiEndpoint={`${baseApiUrl}/uploads/images`}
            addIcon={<button style={{ width: '100%', height: '78px', background: "black", color: "#fff" }}>사진 <br />등록</button>}
          />
          {imageArray &&
            imageArray.map((image, idx) => (
              <div
                onClick={() => handleSelectedImageChange(idx)}
                style={{ backgroundImage: `url(${image.preview})` }}
                key={image.id}
                className={`carousel__image ${
                  selectedImageIndex === idx && "carousel__image-selected"
                }`}
                ref={(el) => (carouselItemsRef.current[idx] = el)}
              />
            ))}
        </div>
      </div>
    </div>
  );
};
export default ImageCarousel;
