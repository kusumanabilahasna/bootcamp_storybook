import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Modaldialog, { ModaldialogProps } from './Modaldialog';

export default {
  title: 'Molecule/Modaldialog',
  component: Modaldialog,
  argTypes: {
    isOpen: { control: 'boolean' },
    onClose: { action: 'closed' },
    message: { control: 'text' },
    title: { control: 'text' },
    primaryButton: { control: 'text', defaultValue: 'Primary Action' },
    secondaryButton: { control: 'text', defaultValue: 'Secondary' },
  },
  tags: ['autodocs'],
} as Meta;

const Template: StoryFn<ModaldialogProps> = (args) => {
  const [isOpen, setIsOpen] = useState(args.isOpen);

  return (
    <div className="modal-story-container">
      <Modaldialog
        {...args}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </div>
  );
};

export const Success = Template.bind({});
Success.args = {
  isOpen: true,
  title: 'Modal Title',
  message: 'lorem ipsum dolor sit amet consecteur. Arcu vel orci eget pharetra nec.',
  imageSrc: `${process.env.PUBLIC_URL}/image/success.png`,
  bgColor: "bg-blue-600",
  textBorderColor: "text-blue-600 border-blue-600",
  primaryButton: 'Primary Action',
  secondaryButton: 'Secondary',
};

export const Error = Template.bind({});
Error.args = {
  isOpen: true,
  title: 'Modal Title',
  message: 'lorem ipsum dolor sit amet consecteur. Arcu vel orci eget pharetra nec.',
  imageSrc: `${process.env.PUBLIC_URL}/image/Error.png`,
  bgColor: "bg-blue-600",
  textBorderColor: "text-blue-600 border-blue-600",
  primaryButton: 'Primary Action',
  secondaryButton: 'Secondary',
};

export const Warning1 = Template.bind({});
Warning1.args = {
  isOpen: true,
  title: 'Modal Title',
  message: 'lorem ipsum dolor sit amet consecteur. Arcu vel orci eget pharetra nec.',
  imageSrc: `${process.env.PUBLIC_URL}/image/Warning.png`,
  bgColor: "bg-blue-600",
  textBorderColor: "text-blue-600 border-blue-600",
  primaryButton: 'Primary Action',
  secondaryButton: 'Secondary',
};

export const Info = Template.bind({});
Info.args = {
  isOpen: true,
  title: 'Modal Title',
  message: 'lorem ipsum dolor sit amet consecteur. Arcu vel orci eget pharetra nec.',
  imageSrc: `${process.env.PUBLIC_URL}/image/Question.png`,
  bgColor: "bg-blue-600",
  textBorderColor: "text-blue-600 border-blue-600",
  primaryButton: 'Primary Action',
  secondaryButton: 'Secondary',
};

export const Danger = Template.bind({});
Danger.args = {
  isOpen: true,
  title: 'Modal Title',
  message: 'lorem ipsum dolor sit amet consecteur. Arcu vel orci eget pharetra nec.',
  imageSrc: `${process.env.PUBLIC_URL}/image/Danger.png`,
  bgColor: "bg-red-600",
  textBorderColor: "text-blue-600 border-blue-600",
  primaryButton: 'Primary Action',
  secondaryButton: 'Cancel',
};

export const Warning2 = Template.bind({});
Warning2.args = {
  isOpen: true,
  title: 'Modal Title',
  message: 'lorem ipsum dolor sit amet consecteur. Arcu vel orci eget pharetra nec.',
  imageSrc: `${process.env.PUBLIC_URL}/image/Warning.png`,
  bgColor: "bg-yellow-600",
  textBorderColor: "text-blue-600 border-blue-600",
  primaryButton: 'Primary Action',
  secondaryButton: 'Cancel',
};
