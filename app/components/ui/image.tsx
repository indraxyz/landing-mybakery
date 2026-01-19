import { useState } from "react";
import { cn } from "~/lib/utils";

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallback?: string;
  alt: string;
}

const DEFAULT_FALLBACK = "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&q=80";

export function Image({ src, fallback = DEFAULT_FALLBACK, alt, className, ...props }: ImageProps) {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (!hasError) {
      setHasError(true);
      setImgSrc(fallback);
    }
  };

  return (
    <img
      src={imgSrc || fallback}
      alt={alt}
      onError={handleError}
      className={cn(className)}
      {...props}
    />
  );
}
