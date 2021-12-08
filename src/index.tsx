import * as React from 'react';


export const Avatar: React.FC<{ src: string, alt: string, size: number }>= ({ src, alt, size }) => {
  return <img src={src} alt={alt} width={size} height={size} style={{borderRadius: 100, objectFit: 'cover'}} />;
};
