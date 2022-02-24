import React from 'react'

function FileListComponent({ imagesArray }: any) {
  console.log(imagesArray)
  return (
    <div style={{ width: '200px', height: '200px' }}>
      {imagesArray.length > 0 && (
        <>
          {imagesArray.map((image: any, index: number) => (
            <React.Fragment key={image.id}>
              {image.data === undefined ? (
                <>
                  <img src={image.preview} alt={image.name} />
                  {!(imagesArray.length === index + 1) && <div />}
                </>
              ) : (
                <>
                  <img src={image.data.url} alt={image.data.name} />
                  {!(imagesArray.length === index + 1) && <div />}
                </>
              )}
            </React.Fragment>
          ))}
        </>
      )}
    </div>
  )
}

export default FileListComponent;
