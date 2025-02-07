import Image from 'next/image'
import React from 'react'

type ImageComponentProps = {
  src: string;
  alt: string;
  className?: string;
  objectFit?:string;
  layout?:string;
  width?:any;
  height?:any;
}

const ImageComponent: React.FC<ImageComponentProps> = ({
  src,
  alt,
  objectFit,
  layout,
  className,
}) => {
  return (
    <Image
      src={src}
      alt={alt}
      layout={layout}
      objectFit={objectFit}
      className={className}
    />
  )
}

export default ImageComponent

