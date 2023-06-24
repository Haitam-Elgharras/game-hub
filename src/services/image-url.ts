// this component is used to optimize the image url by making the image smaller

import noImage from "../assets/no-image-placeholder.webp";
const getCroppedImageUrl = (url: string) => {
  if (!url) return noImage;
  const splitingurl = url.split("/");
  const index = splitingurl.indexOf("media");
  splitingurl.splice(index + 1, 0, "crop/600/400");
  return splitingurl.join("/");
};

export default getCroppedImageUrl;
