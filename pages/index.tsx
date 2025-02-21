import type { ReactElement } from 'react';
import {
  AnimatedTextSection,
  GridSection,
  NewsSection,
  ProjectSection,
} from 'components/home';

function Home(): ReactElement {
  return (
    <>
      <AnimatedTextSection />
      <GridSection />
      <ProjectSection />
      <NewsSection />
    </>
  );
}

export default Home;
