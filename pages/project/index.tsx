import { BubbleMenu, Button, ProjectCard, TabMenu } from 'components/common';
import Breakpoints from 'constants/breakpoints';
import useSmoothScroll from 'hooks/useSmoothScroll';
import useWindowDimensions from 'hooks/useWindowDimensions';
import { GetStaticProps } from 'next';
import { useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import media from 'styles/media';
import { ProjectCardType, ProjectField } from 'types/project';
import { getAllProjects } from 'utils/getAllProjects';

// Next.js의 getStaticProps를 사용하여 빌드 타임에 프로젝트 데이터를 가져옴
export const getStaticProps: GetStaticProps = async () => {
  const projects = await getAllProjects(); // 모든 프로젝트 데이터 가져오기

  // 가져온 프로젝트 데이터를 가공하여 필요한 필드만 포함
  const projectData = projects.map(({ project, slug }: any) => {
    return {
      title: project.name, // 프로젝트 제목
      thumbnail: project.thumbnail, // 썸네일 이미지 URL
      tags: project.tags, // 프로젝트 태그 목록
      field: project.field, // 프로젝트의 분야 (WEB, IOS, ANDROID 등)
      generation: project.generation, // 프로젝트 기수 (몇 번째 프로젝트인지)
      url: slug.join('/'), // URL 경로
    };
  });


  // 프로젝트 데이터가 존재하면 props로 반환, 없으면 404 페이지 반환
  if (projectData.length > 0) {
    return {
      props: {
        projects: projectData,
      },
    };
  }

  return {
    notFound: true,
  };
};

// 프로젝트 카테고리 목록 정의
export const PROJECT_CATEGORIES: ProjectField[] = [
  'ALL', // 전체
  'WEB', // 웹 프로젝트
  'IOS', // iOS 프로젝트
  'ANDROID', // 안드로이드 프로젝트
  'ML', // 머신러닝 프로젝트
];

interface ProjectProps {
  projects: ProjectCardType[]; // 프로젝트 데이터 타입 지정
}

const INITIAL_CARD_COUNT = 9; // 기본으로 보여줄 프로젝트 개수
const NEXT_CARD_COUNT = 6; // '더보기' 버튼 클릭 시 추가로 로드할 개수

function Project({ projects }: ProjectProps) {
  const [viewCardCount, setViewCardCount] = useState(INITIAL_CARD_COUNT); // 현재 보여지는 프로젝트 개수 상태
  const [category, setCategory] = useState<ProjectField>(PROJECT_CATEGORIES[0]); // 현재 선택된 카테고리 상태
  const { windowWidth } = useWindowDimensions(); // 현재 창의 너비 가져오기

  // 스크롤 애니메이션을 위한 ref와 트리거 함수 설정
  const { ref: containerRef, trigger: triggerContainerScroll } =
    useSmoothScroll<HTMLDivElement>({ block: 'end' });
  const { ref: categoryRef, trigger: triggerCategoryScroll } =
    useSmoothScroll<HTMLDivElement>({ block: 'start' });

 // 선택된 카테고리에 맞게 프로젝트를 필터링
 const filteredProjects = useMemo(() => {
  return projects.filter((project) => {
    if (category === 'ALL') return true; // ALL 선택 시 모든 프로젝트 반환
    if (Array.isArray(project.field)) {
      return project.field.some(
        (field: string) => field.toUpperCase() === category.toUpperCase()
      );
    }
    return (project.field as string).toUpperCase() === category.toUpperCase();
  });
}, [projects, category]);

// 필터링된 프로젝트를 기수(generation) 기준으로 최신 순 정렬
const sortedProjects = useMemo(() => {
  return [...filteredProjects].sort((a, b) => b.generation - a.generation);
}, [filteredProjects]);

  // '더보기' 버튼 클릭 시 추가적인 프로젝트를 로드하고 스크롤 이동
  const handleMoreButtonClick = () => {
    setViewCardCount((prev) => prev + NEXT_CARD_COUNT);
    setTimeout(() => {
      triggerContainerScroll(); // 부드러운 스크롤 이동 실행
    }, 100);
  };

  // 카테고리가 변경될 때마다 초기 프로젝트 개수 및 스크롤 위치 조정
  useEffect(() => {
    setViewCardCount(INITIAL_CARD_COUNT);
    triggerCategoryScroll();
  }, [category, triggerCategoryScroll]);

  return (
    <ProjectWrapper>
      <ProjectContainer ref={containerRef}>
        <ProjectTitleWrapper>
          기획부터 런칭까지,
          <br />
          다양한 프로젝트를&nbsp;
          {windowWidth <= Breakpoints.medium && <br />}
          경험해 보세요!
        </ProjectTitleWrapper>
        <CategoriesWrapper ref={categoryRef}>
          {windowWidth > Breakpoints.medium ? (
            <TabMenu
              tabs={PROJECT_CATEGORIES}
              currentTab={category}
              onClick={setCategory}
              backgroundColor="white"
            />
          ) : (
            <BubbleMenu
              className="scroll-none"
              tabs={PROJECT_CATEGORIES}
              currentTab={category}
              onClick={setCategory}
              backgroundColor="white"
            />
          )}
        </CategoriesWrapper>
        <ProjectGridWrapper>
          {sortedProjects.slice(0, viewCardCount).map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </ProjectGridWrapper>
        {sortedProjects.length > viewCardCount && (
          <ButtonWrapper>
            <StyledButton
              width={148}
              height={65}
              fontColor="white"
              buttonColor="grey_850"
              onClick={handleMoreButtonClick}
            >
              더보기
            </StyledButton>
          </ButtonWrapper>
        )}
      </ProjectContainer>
    </ProjectWrapper>
  );
}

const ProjectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${media.mobile} {
    align-items: normal;
  }
  padding: 174px 0;
  ${media.mobile} {
    padding: 80px 0;
  }
  background-color: ${({ theme }) => theme.palette.grey_100};
`;

const ProjectContainer = styled.section`
  position: relative;
  flex: 0 1 1200px;
  margin: 0 10px;
`;

const ProjectTitleWrapper = styled.div`
  ${({ theme }) => theme.textStyle.web.Title}
  ${media.tablet} {
    padding: 0 80px;
  }
  ${media.mobile} {
    padding: 0 20px;
    ${({ theme }) => theme.textStyle.mobile.Title_2};
  }
`;

const CategoriesWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 140px;
  ${media.mobile} {
    padding-top: 80px;
  }
`;

const ProjectGridWrapper = styled.div`
  display: grid;
  gap: 30px;
  margin-top: 64px;
  justify-items: center;
  grid-template-columns: repeat(3, 1fr);
  ${media.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }
  ${media.mobile} {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const ButtonWrapper = styled.div`
  text-align: center;
  margin-top: 56px;
`;

const StyledButton = styled(Button)`
  transition: background-color 0.5s;
  &:hover {
    background-color: ${({ theme }) => theme.palette.grey_700};
  }
  ${media.mobile} {
    width: 162px;
    height: 56px;
  }
`;

export default Project;
