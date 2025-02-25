import { RECRUIT_EXPLAIN_DESIGNER } from 'database/recruit';
import React, { ReactElement } from 'react';
import RecruitFieldExplain from './ProFieldExplain';

function RecruitDesigner(): ReactElement {
  return (
    <>
      <RecruitFieldExplain
        fieldName="2기"
        explainContents={RECRUIT_EXPLAIN_DESIGNER}
      />
    </>
  );
}

export default RecruitDesigner;
