import { FieldNameTypes } from 'components/recruit/RecruitField';
import { DeveloperFieldName } from 'components/recruit/RecruitField/RecruitDeveloper';
import Yapp from 'constants/yapp';

/**
 * 작성 Tip
 * - 줄바꿈은 <br /> 태그를 넣어주세요!
 * - <span class="test">테스트</span> 과 같은 html 태그와 class 를 넣어서 사용할 수 있습니다!
 */

/* 현재 모집중이면 true 아니면 false */
export const IS_RECRUITING = false;

/** Banner  */
export const RECRUIT_BANNER = {
  title: '지금은 모집기간이 아닙니다',
  description: `4기 모집이 완료되었습니다!<br />다음 기수는 2025년 3월에 예정되어 있습니다.`,
  buttonName: `5기에서 만나요!`,
};

export const RECRUIT_BANNER_ACTIVE = {
  title: `YAPP<br class="mobile" /> ${Yapp.YAPP_GENERATION}기 모집`,
  description: `YAPP ${Yapp.YAPP_GENERATION}기에서 4개월간 활동할<br class="mobile" /> PM(기획자)/디자이너/개발자 신입 회원을<br class="mobile" /> 모집합니다.<br class="desktop" /> 
    IT 분야에 대한 열정과 의지가<br class="mobile" /> 넘치고, 동아리에서 다양한 사람들과 즐겁게<br class="mobile" /> 활동하고 싶은 분들의 많은 지원 바랍니다!`,
  buttonName: `${Yapp.YAPP_GENERATION}기 지원하기`,
};

export const NEXT_GENERATION_RECRUIT_LINK = '구글 폼 작성';

/** 모집 개요 */
export const RECRUIT_OVERVIEW = {
  title: '모집 개요',
  overviewContents: [
    {
      subTitle: '인재상',
      description: `책임감을 가지고 팀과 함께 프로덕트를 만들어나갈 수 있는 누구나`,
    },
    {
      subTitle: '지원자격',
      description: `<li>매주 수요일 방과후에 진행되는 전공 동아리 시간에 참여할 수 있는 분</li>
      <li>항상 열정적이고 최선을 다하시는 분</li>
      <span class="small">중복 동아리 활동 불가</span>
      `,
    },
    {
      subTitle: '지원방법',
      description: `1차 서류
      <div class="smallGrey">지원폼 작성</div>
      2차 면접
      <div class="smallGrey">면접 이후 최종합격</div>`,
    },
  ],
};

/* 모집 일정 */
export const RECRUIT_SCHEDULE = {
  title: '모집 일정',
  schedules: [
    {
      subTitle: '서류 접수',
      description: `2025. 3. ??. (?)
      ~ 3. ??. (??) 23:59`,
    },
    {
      subTitle: '서류 결과 발표',
      description: `2025. 3. ??. (?)
     `,
    },
    {
      subTitle: '온라인 인터뷰',
      description: `2025. 3. ??. (?)
      ~ ??. ?. (?)`,
    },
    {
      subTitle: '최종 발표',
      description: `2025. 3. ??. (?)`,
    },
  ],
};

/* 자주 묻는 질문 */
export const RECRUIT_FAQ = {
  title: '자주 묻는 질문',
  faqs: [
    {
      subTitle: 'MAS는 어떤 동아리인가요?',
      description: `작성예정`,
      isOpen: false,
    },
    {
      subTitle: '실력이 뛰어난 사람만 지원할 수 있나요?',
      description: `작성예정`,
      isOpen: false,
    },
    {
      subTitle: '정기 모임(세션)은 언제, 어디서 하나요?',
      description: `작성 예정`,
      isOpen: false,
    },
    {
      subTitle: '동아리 활동은 어떤 게 있나요?',
      description: `작성예정`,
      isOpen: false,
    },
  ],
};

/* 모집 분야 */
export const RECRUIT_FIELD_NAMES: FieldNameTypes[] = ['디자이너', '개발자'];

export const RECRUIT_DEVELOPER_FIELD_NAMES: DeveloperFieldName[] = [
  'iOS',
  'Android',
  'Web',
  'Server',
  // 'Flutter',
];

/* PM */
export const RECRUIT_EXPLAIN_PROJECT_MANAGER = {
  content1: `작성예정.
  `,
  content2: `작성예정`,
  content3: `작성예정`,
};

/* 디자이너 */
export const RECRUIT_EXPLAIN_DESIGNER = {
  content1: `작성예정
  `,
  content2: `작성예정`,
  content3: `작성예정`,
};

/* iOS */
export const RECRUIT_EXPLAIN_IOS_DEVELOPER = {
  content1: `작성예정.
  `,
  content2: `작성예정`,
  content3: `작성예정`,
};

/* Android */
export const RECRUIT_EXPLAIN_ANDROID_DEVELOPER = {
  content1: `작성예정.
  `,
  content2: `작성예정`,
  content3: `작성예정`,
};

/* Web */
export const RECRUIT_EXPLAIN_WEB_DEVELOPER = {
  content1: `작성예정.
  `,
  content2: `작성예정`,
  content3: `작성예정`,
};

/* Server */
export const RECRUIT_EXPLAIN_SERVER_DEVELOPER = {
  content1: `작성예정.
  `,
  content2: `작성예정`,
  content3: `작성예정`,
};
/* Flutter (24기 기준 Cross-Flatform flutter 팀만 모집 <= 최종적으로 모집 안하면 닫기) */
export const RECRUIT_EXPLAIN_FLUTTER_DEVELOPER = {
  content1: `작성예정.
  `,
  content2: `작성예정`,
  content3: `작성예정`,
};

/* 문의 사항 */
export const RECRUIT_ENQUIRY = {
  title: '더 궁금하신 내용이 있거나<br /> 문의 사항이 있으신가요?',
  description: `마스 지원 관련 문의는<br class="mobile" /> 마스 공식 인스타 디엠으로 문의주세요!.<br/>
  <span class="ps">(마스 공식 계정은 항상 열려있습니다)</span>`,
  buttonName: '문의 하기',
};
