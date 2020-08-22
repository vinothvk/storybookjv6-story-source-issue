import React from 'react';
import { Greeting } from '../components/Greeting';

const Template = (args) => <Greeting {...args} />;

export const TitleOnly = Template.bind({});
TitleOnly.args = { title: 'hello' };
