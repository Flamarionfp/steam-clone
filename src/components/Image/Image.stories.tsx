import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Image } from './Image';

export default {
  title: 'subComponents/Image',
  component: Image,
} as ComponentMeta<typeof Image>;

const Template: ComponentStory<typeof Image> = (args) => <Image {...args} />;

export const _Image = Template.bind({});

_Image.args = {
  src: 'https://via.placeholder.com/100',
  alt: 'Imagem de exemplo',
  w: 100,
  h: 100,
};