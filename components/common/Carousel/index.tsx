import React, { useMemo, useRef, useCallback } from 'react';
import styled, { css } from 'styled-components';
import Slider, { Settings } from 'react-slick';
import Link from 'next/link';
import Image from 'next/image';
import media from 'styles/media';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Breakpoints from 'constants/breakpoints';
import { ArrowRight, ArrowLeft } from 'public/assets/icons';

type CarouselDataType = {
  title: string;
  link: string;
  image: string;
};

export interface CarouselProps {
  data: CarouselDataType[];
}

// react-slick의 Slider를 any로 캐스팅하여 JSX 구성 요소로 사용
const TypedSlider = Slider as any;

function Carousel({ data }: CarouselProps) {
  const slickRef = useRef<Slider>(null);
  const settings = useMemo<Settings>(
    () => ({
      dots: true,
      arrows: true,
      centerMode: true,
      centerPadding: '220px',
      slidesToShow: 3,
      infinite: true,
      arrow: false,
      autoplay: true,
      speed: 800,
      pauseOnHover: true,
      draggable: true,
      responsive: [
        {
          breakpoint: Breakpoints.small,
          settings: {
            centerPadding: '0',
          },
        },
      ],
    }),
    [],
  );

  const handlePrevious = useCallback(() => slickRef.current!.slickPrev(), []);
  const handleNext = useCallback(() => slickRef.current!.slickNext(), []);

  return (
    <CarouselContainer>
      <TypedSlider ref={slickRef} {...settings}>
        {data.map(({ title, link, image }, index) => (
          <Link href={link} key={index} passHref>
            <ProjectCard className="project-card">
              <Image
                src={image}
                alt="Project Card Image"
                layout="fill"
                placeholder="blur"
                blurDataURL={image}
              />
              <ProjectBlurCard>{title}</ProjectBlurCard>
            </ProjectCard>
          </Link>
        ))}
      </TypedSlider>
      <>
        <Arrow left onClick={handlePrevious}>
          <ArrowLeft />
        </Arrow>
        <Arrow onClick={handleNext}>
          <ArrowRight />
        </Arrow>
      </>
    </CarouselContainer>
  );
}

const CarouselContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  min-width: 1920px;
  margin: 10px 0 64px;
  overflow: hidden;

  .slick-slide {
    height: 400px;
  }

  .slick-list .slick-track {
    height: 331px;
  }
  .slick-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    transition: transform 1.5s;
  }

  .slick-center.slick-active {
    transform: scale(1.2);

    ${media.small} {
      transform: none;
    }
  }

  .slick-dots {
    padding-bottom: 20px;
    button::before {
      color: ${({ theme }) => theme.palette.grey_900};
    }

    .slick-active {
      button::before {
        color: ${({ theme }) => theme.palette.black};
      }
    }

    ${media.small} {
      padding-bottom: 60px;
    }
  }
`;

const ProjectCard = styled.div`
  position: relative;
  display: block;
  border-radius: 20px;
  overflow: hidden;
  cursor: pointer;
  filter: drop-shadow(
    0px 5px 40px ${({ theme }) => theme.palette.grey_850 + '10'}
  );

  width: 409px !important;
  height: 229px !important;

  ${media.mobile} {
    width: 335px !important;
    height: 189px !important;
  }

  :hover {
    > span {
      visibility: visible;
    }
  }
`;

const ProjectBlurCard = styled.span`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  visibility: hidden;
  color: ${({ theme }) => theme.palette.white};
  background: ${({ theme }) => theme.palette.black + '50'};
  ${({ theme }) => theme.textStyle.web.Button}
`;

const Arrow = styled.button<{ left?: boolean }>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  svg {
    width: 48px;
    height: 48px;
  }

  ${({ left }) =>
    left
      ? css`
          left: 38.5%;
        `
      : css`
          right: 38.5%;
        `};

  ${media.mobile} {
    svg {
      width: 32px;
      height: 32px;
    }

    ${({ left }) =>
      left
        ? css`
            left: 40%;
          `
        : css`
            right: 40%;
          `};
  }

  ${media.small} {
    svg {
      width: 28px;
      height: 28px;
    }
    ${({ left }) =>
      left
        ? css`
            left: 42%;
          `
        : css`
            right: 42%;
          `};
  }
`;

export default Carousel;
