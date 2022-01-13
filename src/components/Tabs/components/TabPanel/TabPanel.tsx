import clsx from 'clsx';
import { getPanelId, getTabId, useTabContext } from '../TabContext';
import type { TabPanelProps } from './TabPanel.types';

export const TabPanel = (props: TabPanelProps) => {
  const { children, className, value } = props;

  const context = useTabContext();
  if (context.idPrefix === null || context.value === null) {
    throw new TypeError('No TabContext provided');
  }
  const id = getPanelId(context, value);
  const tabId = getTabId(context, value);

  return (
    <div
      aria-labelledby={tabId}
      id={id}
      hidden={value !== context.value}
      role="tabpanel"
      className={clsx(className)}
    >
      {value === context.value ? children : null}
    </div>
  );
}
