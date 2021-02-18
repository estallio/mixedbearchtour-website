import React from 'react';
import { AiOutlineLink, AiOutlineFileAdd } from 'react-icons/ai';

export const linkIcon = () => (
  <span>
    <AiOutlineLink />
  </span>
)

export const linkRenderer = (props) => (
  <span>
    {props.children}
  </span>
)

export const fileIcon = () => (
  <span>
    <AiOutlineFileAdd />
  </span>
)

export const fileRenderer = (props) => (
  <span>
    {props.children}
  </span>
)
