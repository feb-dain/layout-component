import type { ElementType, HTMLAttributes } from 'react';
import React from 'react';

import type { Alignment, Size } from './style';
import { positionStyle, widthStyle } from './style';

export interface ContainerProps extends HTMLAttributes<HTMLElement> {
  position?: Alignment;
  maxWidth?: Size;
  minWidth?: Size;
  fluid?: boolean;
  gutter?: boolean;
  tag?: ElementType;
  children?: React.JSX.Element;
}

function Container({
  tag = 'div',
  position = 'center',
  maxWidth,
  minWidth,
  fluid = false,
  gutter = false,
  children,
  ...attributes
}: ContainerProps) {
  const Tag = tag;

  return (
    <Tag
      css={[positionStyle(position), widthStyle({ maxWidth, minWidth, fluid, gutter })]}
      {...attributes}
    >
      {children}
    </Tag>
  );
}

export default Container;