import React from 'react'

import { StyledImage } from './SImage'

export const Image: React.FC<{ image: string }> = ({
  image,
}) => <StyledImage src={image} alt="" />
