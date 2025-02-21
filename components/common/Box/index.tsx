import React, { ReactElement, ReactNode, forwardRef } from 'react';
import styled from 'styled-components';
import theme, { PaletteKeyTypes } from 'styles/theme';

interface IBoxStyle {
  backgroundColor?: PaletteKeyTypes;
  width?: number;
  height?: number;
  borderRadius?: number;
  isFullWidth?: boolean;
}

export interface BoxProps
  extends IBoxStyle,
    React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

const Box = forwardRef<HTMLDivElement, BoxProps>(function Box(
  {
    children,
    className,
    width = 0,
    height,
    backgroundColor = 'grey',
    borderRadius = 20,
    ...rest
  },
  ref,
): ReactElement {
  return (
    <StyledBox
      {...rest}
      ref={ref}
      width={width}
      height={height}
      borderRadius={borderRadius}
      backgroundColor={backgroundColor}
      className={className}
    >
      {children}
    </StyledBox>
  );
});

const StyledBox = styled.div<IBoxStyle>`
  width: ${({ isFullWidth, width }) => (isFullWidth ? '100%' : `${width}px`)};
  height: ${({ height }) => (height ? `${height}px` : 'auto')};
  border-radius: ${({ borderRadius }) => borderRadius}px;
  background-color: ${({ backgroundColor }) =>
    backgroundColor && theme.palette[backgroundColor]};
`;

export default Box;
