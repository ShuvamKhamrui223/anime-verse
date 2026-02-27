"use client";
import Image, { ImageProps } from "next/image";
import { FC, useState } from "react";

const ImageWithFallback: FC<ImageProps> = (props) => {
  const [imgSrc, setImgSrc] = useState(props.src);
  const defaultSrc = "/landscape-placeholder.svg"; // Path to your local default image
  if (props.src !== "")
    return (
      <Image
        {...props}
        src={imgSrc}
        onError={() => setImgSrc(defaultSrc)}
        alt={props?.alt || "Fallback image"} // Ensure alt text is descriptive
      />
    );
};
export default ImageWithFallback;