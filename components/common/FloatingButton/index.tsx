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
        observer.unobserve(animatedDivRef.current); // observe 해제
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

  // StyledBox의 타입 오류를 우회하기 위해 any로 캐스팅합니다.
  const BoxComponent: any = StyledBox;

  return (
    <animated.div ref={animatedDivRef} style={styles}>
      <BoxComponent
        className={className}
        width={380}
        height={268}
        backgroundColor="white"
        borderRadius={20}
      >
        {children}
      </BoxComponent>
    </animated.div>
  );
}

export default AnimatedBox;

// 기존 Box를 any로 캐스팅하여 styled-components에 전달
const StyledBox = styled(Box as any)`
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
