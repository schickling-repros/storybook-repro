import { Meta } from '@storybook/react'
import React from 'react'
import { Input } from './Input'

export default {
  title: 'Input',
  component: Input,
} as Meta

export const Default = () => (
  <div>
    <div>Test title 1</div>
    <Input placeholder="Test" />
  </div>
)
