import { useState } from "react";

interface BackgroundImageProps {
  src: string;
  fallback?: string;
  className?: string;
  children?: React.ReactNode;
}

const DEFAULT_FALLBACK = "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=1920&q=80";

export function BackgroundImage({
  src,
  fallback = DEFAULT_FALLBACK,
  className = "",
  children,
}: BackgroundImageProps) {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (!hasError) {
      setHasError(true);
      setImgSrc(fallback);
    }
  };

  return (
    <div
      className={`absolute inset-0 bg-cover bg-center ${className}`}
      style={{
        backgroundImage: `url(${imgSrc || fallback})`,
      }}
    >
      <img
        src={imgSrc || fallback}
        alt=""
        className="hidden"
        onError={handleError}
        aria-hidden="true"
      />
      {children}
    </div>
  );
}
