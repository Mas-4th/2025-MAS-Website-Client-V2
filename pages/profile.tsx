import { BubbleMenu, Button, TabMenu } from 'components/common';
import Breakpoints from 'constants/breakpoints';
import useSmoothScroll from 'hooks/useSmoothScroll';
import useWindowDimensions from 'hooks/useWindowDimensions';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import media from 'styles/media';
import { ProjectCardType } from 'types/project';

export const period = ["1기", "2기", "3기", "4기", "5기"] as const;

type GenerationType = (typeof period)[number];

interface ProjectProps {
  projects: ProjectCardType[];
}

const INITIAL_CARD_COUNT = 9;

function Project({ projects }: ProjectProps) {
  const [viewCardCount, setViewCardCount] = useState(INITIAL_CARD_COUNT);
  const [generation, setGeneration] = useState<GenerationType>("4기");
  const { windowWidth } = useWindowDimensions();

  const { ref: containerRef, trigger: triggerContainerScroll } = useSmoothScroll<HTMLDivElement>({ block: 'end' });
  const { ref: categoryRef, trigger: triggerCategoryScroll } = useSmoothScroll<HTMLDivElement>({ block: 'start' });

  interface Profile {
    name: string;
    photoUrl: string;
    description: string;
  }
  
  const profiles: Record<GenerationType, Profile[]> = {
    "1기": [
      { name: "", photoUrl: "/path/to/photo.jpg", description: "설명" },
      { name: "", photoUrl: "/path/to/photo.jpg", description: "설명" },
      { name: "", photoUrl: "/path/to/photo.jpg", description: "설명" },
      { name: "", photoUrl: "/path/to/photo.jpg", description: "설명" },
      { name: "", photoUrl: "/path/to/photo.jpg", description: "설명" },
      { name: "", photoUrl: "/path/to/photo.jpg", description: "설명" }
    ],
    "2기": [
      { name: "", photoUrl: "/path/to/photo.jpg", description: "설명" },
      { name: "", photoUrl: "/path/to/photo.jpg", description: "설명" },
      { name: "", photoUrl: "/path/to/photo.jpg", description: "설명" },
      { name: "", photoUrl: "/path/to/photo.jpg", description: "설명" },
      { name: "", photoUrl: "/path/to/photo.jpg", description: "설명" },
      { name: "", photoUrl: "/path/to/photo.jpg", description: "설명" }
    ],
    "3기": [
      { name: "양은서", photoUrl: "/path/to/photo.jpg", description: "설명" },
      { name: "피은서", photoUrl: "/path/to/photo.jpg", description: "설명" },
      { name: "안민선", photoUrl: "/path/to/photo.jpg", description: "설명" },
      { name: "이경민", photoUrl: "/path/to/photo.jpg", description: "설명" },
      { name: "이서현", photoUrl: "/path/to/photo.jpg", description: "설명" }
    ],
    "4기": [
      { name: "정희진", photoUrl: "/path/to/photo.jpg", description: "설명" },
      { name: "정현윤", photoUrl: "/path/to/photo.jpg", description: "설명" },
      { name: "박준원", photoUrl: "/path/to/photo.jpg", description: "설명" },
      { name: "박홍준", photoUrl: "/path/to/photo.jpg", description: "설명" },
      { name: "문지우", photoUrl: "/path/to/photo.jpg", description: "설명" },
      { name: "한정훈", photoUrl: "/path/to/photo.jpg", description: "설명" }
    ],
    "5기": [
    ]
  };
  

  useEffect(() => {
    setViewCardCount(INITIAL_CARD_COUNT);
    triggerCategoryScroll();
  }, [generation, triggerCategoryScroll]);

  return (
    <ProjectWrapper>
      <ProjectContainer ref={containerRef}>
        <ProjectTitleWrapper>
          MAS의 자랑스러운,
          <br /> 부원들을&nbsp;
          {windowWidth <= Breakpoints.medium && <br />}소개합니다!
        </ProjectTitleWrapper>
        <CategoriesWrapper ref={categoryRef}>
          {windowWidth > Breakpoints.medium ? (
            <TabMenu tabs={period} currentTab={generation} onClick={setGeneration} backgroundColor="white" />
          ) : (
            <BubbleMenu tabs={period} currentTab={generation} onClick={setGeneration} backgroundColor="white" />
          )}
        </CategoriesWrapper>
      </ProjectContainer>
    </ProjectWrapper>
  );
}

const ProjectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 174px 0;
  background-color: ${({ theme }) => theme.palette.grey_100};
  ${media.mobile} { padding: 80px 0; align-items: normal; }
`;

const ProjectContainer = styled.section`
  position: relative;
  flex: 0 1 1200px;
  margin: 0 10px;
`;

const ProjectTitleWrapper = styled.div`
  ${({ theme }) => theme.textStyle.web.Title}
  ${media.tablet} { padding: 0 80px; }
  ${media.mobile} { padding: 0 20px; ${({ theme }) => theme.textStyle.mobile.Title_2}; }
`;

const CategoriesWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 140px;
  ${media.mobile} { padding-top: 80px; }
`;

export default Project;
