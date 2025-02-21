import Masonry from 'react-masonry-css';
import styled from 'styled-components';
import media from 'styles/media';
import { Retrospect } from 'types/project';
import React, { ReactElement } from 'react'; 


interface Props {
  retrospects: Retrospect[];
}

function ProfilePage({ retrospects }: Props): ReactElement {
  return (
    <Container>
      <Masonry
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
      </Masonry>
    </Container>
  );
}

export default ProfilePage;  // ProfilePage로 내보내기

const Container = styled.div`
  margin-bottom: 230px;
  white-space: pre-wrap;

  .my-masonry-grid {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin-left: -30px;
    width: auto;
  }
  .my-masonry-grid_column {
    padding-left: 30px;
    background-clip: padding-box;
  }

  ${media.tablet} {
    width: auto;
    padding: 0 80px;
    margin-bottom: 168px;
    .my-masonry-grid {
      flex-direction: column;
    }
    .my-masonry-grid_column {
      width: auto !important;
    }
  }

  ${media.mobile} {
    padding: 0 20px;
    margin-bottom: 100px;
  }
`;
