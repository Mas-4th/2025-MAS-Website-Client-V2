import { useEffect, useCallback, useRef, useState } from 'react';
import type { ReactElement, ReactNode } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { Box } from 'components/common';
import styled from 'styled-components';
import media from 'styles/media';

export interface AnimatedBoxProps {
  children: ReactNode;
  className?: string;
}

function AnimatedBox({ children, className }: AnimatedBoxProps): ReactElement {
  const animatedDivRef = useRef<HTMLDivElement>(null);
  const [isIntersect, setIsIntersect] = useState(false);

  const handleIntersect: IntersectionObserverCallback = useCallback(
    ([entry], observer) => {
      if (entry.isIntersecting && animatedDivRef.current) {
        observer.unobserve(animatedDivRef.current);
        setIsIntersect(true);
      }
    },
    [],
  );

  const styles = useSpring({
    config: { mass: 200, tension: 1500, friction: 1000 },
    from: { opacity: 0, y: 50 },
    to: isIntersect ? { opacity: 1, y: 0 } : {},
  });

  useEffect(() => {
    let observer: IntersectionObserver;
    if (animatedDivRef.current) {
      observer = new IntersectionObserver(handleIntersect, { threshold: 0.3 });
      observer.observe(animatedDivRef.current);
    }
    return () => observer && observer.disconnect();
  }, [handleIntersect]);

  return (
    <animated.div ref={animatedDivRef} style={styles}>
      <StyledBox
        className={className}
        width={380}
        height={268}
        backgroundColor="white"
        borderRadius={20}
      >
        {children}
      </StyledBox>
    </animated.div>
  );
}

export default AnimatedBox;

/*
  Box의 props에서 'key' 속성을 제거하여 타입 충돌을 회피합니다.
  BoxWrapper는 Box의 props에서 key를 제외한 타입(BoxPropsOmitKey)을 사용합니다.
*/
type BoxPropsOmitKey = Omit<React.ComponentProps<typeof Box>, 'key'>;

const BoxWrapper = (props: BoxPropsOmitKey) => <Box {...props} />;

const StyledBox = styled((props: BoxPropsOmitKey) => <BoxWrapper {...props} />)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0;
  filter: drop-shadow(
    0px 5px 40px ${({ theme }) => theme.palette.grey_850 + '3'}
  );

  .title-text {
    color: ${({ theme }) => theme.palette.grey_500};
    ${({ theme }) => theme.textStyle.web.Subtitle};
  }
  .content-text {
    ${({ theme }) => theme.textStyle.web.Head};
  }

  ${media.mobile} {
    width: 335px;
    height: 220px;

    .title-text {
      ${({ theme }) => theme.textStyle.mobile.Subtitle};
    }
    .content-text {
      ${({ theme }) => theme.textStyle.mobile.Head};
    }
  }
`;
