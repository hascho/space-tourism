import { createElement, Children } from 'react';
import type { TypographyProps } from './Typography.types';

export const Typography = (props: TypographyProps) => {
  const { as: type = 'p', children, ...restProps } = props;
  return createElement(type, restProps, Children.toArray(children));
}
