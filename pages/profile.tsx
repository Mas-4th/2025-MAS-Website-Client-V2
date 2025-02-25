import { ProfileField } from 'components/recruit';
import { ReactElement } from 'react';
import styled from 'styled-components';

function profile(): ReactElement {
  return (
    <Wrapper>
      <ProfileField />
    </Wrapper>
  );
}

const Wrapper = styled.div``;

export default profile;