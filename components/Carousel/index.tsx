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
      if (carouselItemsRef?.current[newIdx]) {
        carouselItemsRef?.current[newIdx]?.scrollIntoView({
          inline: "center",
          behavior: "smooth"
        });
      }
    }
  };

  const handleRightClick = () => {
    if (imageArray && imageArray.length > 0) {
      let newIdx = selectedImageIndex + 1;
      if (newIdx >= imageArray.length) {
        newIdx = 0;
      }
      handleSelectedImageChange(newIdx);
    }
  };

  const handleLeftClick = () => {
    if (imageArray && imageArray.length > 0) {
      let newIdx = selectedImageIndex - 1;
      if (newIdx < 0) {
        newIdx = imageArray.length - 1;
      }
      handleSelectedImageChange(newIdx);
    }
  };

  return (
    <div className="carousel-container">
      <div
        className="selected-image"
        style={{ backgroundImage: `url(${selectedImage?.preview})` }}
      />
      <div className="carousel">
        <div className="carousel__images">
          <MutipleUploader
            ref={childRef}
            imagesArray={imageArray}
            handleSetImagesArray={handleSetImagesArray}
            multipleFiles={true}
            apiEndpoint={`${baseApiUrl}/uploads/images`}
            addIcon={<button>사진 <br />등록</button>}
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
