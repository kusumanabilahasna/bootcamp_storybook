import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Modal, { ModalProps } from './modal';

export default {
  title: 'Molecule/Modal',
  component: Modal,
  argTypes: {
    inputType: {
      control: 'radio',
      options: ['rounded', 'simple'],
    },
    inputSize: {
      control: 'radio',
      options: ['small', 'medium', 'large'],
    },
    title: {
      control: 'text',
      defaultValue: 'Modal Title',
    },
    description: {
      control: 'text',
      defaultValue: 'lorem ipsum dolor sit amet consecteur. Arcu vel orci eget pharetra nec.',
    },
    
    primaryButton: {
      control: 'text',
      defaultValue: 'Primary Action',
    },
    
    secondaryButton: {
      control: 'text',
      defaultValue: 'Secondary',
    },
    
  },
  tags: ['autodocs'],
} as Meta;

const Template: StoryFn<ModalProps> = (args) => (
  <div className="modal-story-container">
    <Modal {...args} />
  </div>
);

export const Small = Template.bind({});
Small.args = {
  inputType: 'simple',
  inputSize: 'small',
  title: 'Modal Title',
  description: 'lorem ipsum dolor sit amet consecteur. Arcu vel orci eget pharetra nec.',
  primaryButton: 'Primary Action',
  secondaryButton: 'Secondary',
  onPrimaryButtonClick: action('Primary button clicked'),
  onSecondaryButtonClick: action('Secondary button clicked'),
  onCloseClick: action('Close button clicked'),
  
};

export const Medium = Template.bind({});
Medium.args = {
  inputType: 'simple',
  inputSize: 'medium',
  title: 'Modal Title',
  description: 'lorem ipsum dolor sit amet consecteur. Arcu vel orci eget pharetra nec.',
  primaryButton: 'Primary Action',
  secondaryButton: 'Secondary',
  onPrimaryButtonClick: action('Primary button clicked'),
  onSecondaryButtonClick: action('Secondary button clicked'),
  onCloseClick: action('Close button clicked'),
  
};

export const Large = Template.bind({});
Large.args = {
  inputType: 'simple',
  inputSize: 'large',
  title: 'Modal Title',
  description: 'lorem ipsum dolor sit amet consecteur. Arcu vel orci eget pharetra nec.',
  primaryButton: 'Primary Action',
  secondaryButton: 'Secondary',
  onPrimaryButtonClick: action('Primary button clicked'),
  onSecondaryButtonClick: action('Secondary button clicked'),
  onCloseClick: action('Close button clicked'),
  
};
