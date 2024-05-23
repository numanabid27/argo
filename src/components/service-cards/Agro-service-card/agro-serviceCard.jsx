import React from 'react';
import { StyledRoot } from "./styles"; 
import BazaarImage from 'components/BazaarImage';
import Link from 'next/link';

export default function AgroServiceCard({slug, image}){
  return (
    <StyledRoot>
      <Link href={`/products/search/${slug}`}>
        <BazaarImage
          src={image}
          alt="apple-watch-1"
          sx={{
            margin:'0 auto',
            display: "block",
            maxWidth: '100%',
          }}
        />
      </Link>
        
    </StyledRoot>
  )
}
