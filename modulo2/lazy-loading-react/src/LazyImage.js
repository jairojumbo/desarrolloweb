import React, { useRef, useEffect, useState } from 'react';

const LazyImage = ({ src, alt, placeholder = '', style = {}, ...props }) => {
  const imgRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const currentRef = imgRef.current;

    if (!currentRef) return;

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
        threshold: 0.1,
      }
    );

    observer.observe(currentRef);

    return () => {
      observer.unobserve(currentRef);
    };
  }, []);

  return React.createElement(
    'img',
    {
      ref: imgRef,
      src: isLoaded ? src : placeholder,
      alt: alt,
      onError: () => setHasError(true),
      ...props,
      style: Object.assign(
        {
          opacity: isLoaded && !hasError ? 1 : 0.5,
          transition: 'opacity 0.3s ease',
          display: hasError ? 'none' : 'block',
        },
        style
      ),
    }
  );
};

export default LazyImage;
