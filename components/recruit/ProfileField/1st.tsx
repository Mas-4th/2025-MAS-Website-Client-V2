import { RECRUIT_EXPLAIN_PROJECT_MANAGER } from 'database/recruit';
import { ReactElement } from 'react';
import RecruitFieldExplain from './ProFieldExplain';

function RecruitProjectManager(): ReactElement {
  return (
    <RecruitFieldExplain
      fieldName="1기"
      explainContents={RECRUIT_EXPLAIN_PROJECT_MANAGER}
    />
  );
}

export default RecruitProjectManager;
