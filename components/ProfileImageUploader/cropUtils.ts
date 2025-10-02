export const getCroppedImg = (imageSrc: string, pixelCrop: any) => {
    const image = new Image();
    image.src = imageSrc;
  
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
  
    return new Promise((resolve) => {
      image.onload = () => {
        const { x, y, width, height } = pixelCrop;
        canvas.width = width;
        canvas.height = height;
        ctx?.drawImage(image, x, y, width, height, 0, 0, width, height);
        canvas.toBlob((blob) => {
          if (blob) {
            const croppedImageUrl = URL.createObjectURL(blob);
            resolve(croppedImageUrl);
          }
        }, "image/jpeg");
      };
    });
  };
  