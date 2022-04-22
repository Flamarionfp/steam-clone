import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { DownloadIcon } from '@chakra-ui/icons'

import { Button } from './Button';

export default {
  title: 'subComponents/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const InstallSteam = Template.bind({});

InstallSteam.args = {
  displayName: 'Instale o Steam',
  leftIcon: <DownloadIcon />,
  onClick: () => null
};
