import { TabMenu } from 'components/common';
import { ReactElement, useState } from 'react';
import styled from 'styled-components';
import { SectionTemplate, SectionTitle } from '..';

export const TABS = ['1기', '2기', '3기', '4기', '5기'] as const;
export type FieldNameTypes = (typeof TABS)[number];

function RecruitField(): ReactElement {
  const [field, setField] = useState<FieldNameTypes>('1기');

  return (
    <SectionTemplate>
      <SectionTitle title="" />
      <RecruitFieldNameBox>
        <TabMenu
          tabs={TABS}
          currentTab={field}
          onClick={(tab: FieldNameTypes) => setField(tab)}
        />
      </RecruitFieldNameBox>
    </SectionTemplate>
  );
}

const RecruitFieldNameBox = styled.div`
  display: flex;
  justify-content: center;
`;

export default RecruitField;
