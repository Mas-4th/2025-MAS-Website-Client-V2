import { Story, Meta } from '@storybook/react';
import FloatingButton from 'components/common/FloatingButton';

export default {
  title: 'YAPP Design System/Component/FloatingButton',
  component: FloatingButton,
  parameters: {
    docs: {
      description: {
        component: 'Floating Button',
      },
    },
  },
  argTypes: {},
} as Meta;

const Template: Story<{ children: React.ReactNode }> = (args) => (
  <FloatingButton {...args} />
);

export const defaultFloatingButton = Template.bind({});
defaultFloatingButton.args = {
  children: <></>, // 기본 children을 빈 Fragment로 전달합니다.
};
