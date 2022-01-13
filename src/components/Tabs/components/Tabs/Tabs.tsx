import * as React from 'react';
import clsx from 'clsx';
import type { TabsProps } from './Tabs.types';
import { getPanelId, getTabId, useTabContext } from '../TabContext';
import { Tab, TabProps } from '../Tab';
import styles from './Tabs.module.css';

export const Tabs = (props: TabsProps) => {
  const {
    children: childrenProp,
    className,
    onChange,
  } = props;
  const context = useTabContext();
  if (context.idPrefix === null || context.value === null) {
    throw new TypeError('No TabContext provided');
  }

  const { value } = context;
  let childIndex = 0;
  const children = React.Children.map(childrenProp, (child) => {
    const tab = child as React.ReactElement<React.PropsWithChildren<TabProps>>;
    
    if (!React.isValidElement(tab) || tab.type !== Tab) {
      return null;
    }

    const childValue = tab.props.value === undefined ? String(childIndex) : tab.props.value;
    const selected = childValue === value;

    childIndex += 1;
    return React.cloneElement(tab, {
      value: childValue,
      selected,
      'aria-controls': getPanelId(context, tab.props.value),
      id: getTabId(context, tab.props.value),
      onChange,
    });
  });

  return (
    <div 
      className={clsx(
        styles.tabs,
        'underline-indicators',
        'flex',
        className,
      )}
      role="tablist"
    >
      {children}
    </div>
  );
}
