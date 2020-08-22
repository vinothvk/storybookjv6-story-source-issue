import React from 'react';
import { Greeting } from '../components/Greeting';

const Template = (args) => <Greeting {...args} />;

export const WithMessage = Template.bind({});
WithMessage.args = { title: 'hello', message: 'How are you?' };
