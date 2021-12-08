import * as React from 'react';

interface avatarInterface {
  src: string,
  alt: string,
  size: number
}

export const Avatar = ({ src, alt, size }: avatarInterface) => {
  return <img src={src} alt={alt} width={size} height={size} style={{borderRadius: 100, objectFit: 'cover'}} />;
};
