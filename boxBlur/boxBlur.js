function boxBlur(image) {
  const pixelData = getPixelData(image);

  console.log(pixelData);
}

function getPixelData(image) {
  const pixelData = {
    totalPixels: 0,
    totalPixelValue: 0,
  };

  image.forEach((row) => {
    row.forEach((pixel) => {
      pixelData.totalPixels += 1;
      pixelData.totalPixelValue += pixel;
    });
  });

  return pixelData;
}

const image1 = [
  [1, 1, 1],
  [1, 7, 1],
  [1, 1, 1],
];

console.log(boxBlur(image1));
