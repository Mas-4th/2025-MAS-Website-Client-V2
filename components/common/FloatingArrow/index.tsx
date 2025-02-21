import { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import media from 'styles/media';

function FloatingArrow() {
  const [isHideArrow, setIsHideArrow] = useState(false);

  // 'e' 매개변수의 타입을 Event로 명시하고, window.scrollY를 사용하여 스크롤 위치를 확인합니다.
  const checkScroll = useCallback((e: Event) => {
    const scrollTop = window.scrollY || 0;
    setIsHideArrow(scrollTop > 100);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', checkScroll, { capture: true });
    return () => window.removeEventListener('scroll', checkScroll);
  }, [checkScroll]);

  return (
    <>
      {!isHideArrow && (
        <ArrowDownContainer>
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M24 3V45M24 45L42 28.3266M24 45L6 28.3266"
              stroke="white"
              strokeWidth="3.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </ArrowDownContainer>
      )}
    </>
  );
}

export default FloatingArrow;

const ArrowDownContainer = styled.div`
  position: fixed;
  bottom: 100px;
  left: 0px;
  transform: translateX(calc(50vw - 50%));
  z-index: 10000;
  svg {
    width: 64px;
    height: 64px;
  }

  ${media.custom(743)} {
    & > svg {
      width: 48px;
      height: 48px;
    }
  }
`;
