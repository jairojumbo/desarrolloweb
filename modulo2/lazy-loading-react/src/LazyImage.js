// LazyImage.jsx
import React, { useRef, useEffect, useState } from 'react';

const LazyImage = ({ src, alt, placeholder = '', style = {}, ...props }) => {
  const imgRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const currentRef = imgRef.current;

    const observer = new IntersectionObserver(
      (entries, observerInstance) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsLoaded(true);
            observerInstance.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: '100px',
      }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <img
      ref={imgRef}
      src={hasError ? placeholder : isLoaded ? src : placeholder}
      alt={alt}
      onError={() => setHasError(true)}
      {...props}
      style={{
        opacity: isLoaded && !hasError ? 1 : 0.5,
        transition: 'opacity 0.3s ease',
        display: hasError ? 'none' : 'block',
        ...style,
      }}
    />
  );
};

export default LazyImage;
