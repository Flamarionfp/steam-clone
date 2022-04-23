import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Header } from './Header';

export default {
  title: 'mainComponents/Header',
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const NotAuthenticated = Template.bind({});
export const Authenticated = Template.bind({});

NotAuthenticated.args = {
  isAuthenticated: false,
  isLogoVisible: true,
};

Authenticated.args = {
  isAuthenticated: true,
  isLogoVisible: true,
};