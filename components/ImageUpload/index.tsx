import { useRef, useEffect, useState } from 'react';

const MAX_FILE = 30;

function useAddImage() {
  const [imageSrc, setImageSrc] = useState();
  const [uploadData, setUploadData] = useState();
  
  function handleOnChange(changeEvent: any) {
    const reader = new FileReader();
    
    reader.onload = function(onLoadEvent: any) {
      setImageSrc(onLoadEvent.target.result);
      setUploadData(undefined);
    }
    
    reader.readAsDataURL(changeEvent.target.files[0]);
      
  }
    
  async function handleOnSubmit(event: any) {
    event.preventDefault();
  }
    
  return (
    <form method="post" onChange={handleOnChange} onSubmit={handleOnSubmit}>
      <p>
        <input type="file" name="file" />
      </p>
    
      <img src={imageSrc} alt="이미지 미리보기" />
    
      {imageSrc && !uploadData && (
        <p>
          <button>Upload Files</button>
        </p>
      )}

      {uploadData && (
        <code><pre>{JSON.stringify(uploadData, null, 2)}</pre></code>
      )}
    </form>
  )
}

export default useAddImage;