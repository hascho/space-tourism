import {
  useState,
  useEffect,
  createContext,
  useContext,
  useMemo,
  ReactNode,
} from 'react';

const useUniquePrefix = () => {
  const [id, setId] = useState('');
  useEffect(() => {
    setId(`hui-p-${Math.round(Math.random() * 1e5)}`);
  }, []);
  return id;
}

type ContextModel = {
  idPrefix: string | null;
  value: string | null;
}

const Context = createContext<ContextModel>({ idPrefix: null, value: null });

type TabContextProps = {
  children: ReactNode;
  value: string;
}

export const TabContext = (props: TabContextProps) => {
  const { children, value } = props;
  const idPrefix = useUniquePrefix();

  const context = useMemo(() => {
    return { idPrefix, value };
  }, [idPrefix, value]);

  return <Context.Provider value={context}>{children}</Context.Provider>;
}

export const useTabContext = () => {
  return useContext(Context);
}

export const getPanelId = (
  context: ContextModel,
  value: string
) => {
  const { idPrefix } = context;
  if (!idPrefix) {
    return undefined!;
  }
  return `${idPrefix}-P-${value}`;
}

export const getTabId = (
  context: ContextModel,
  value: string
) => {
  const { idPrefix } = context;
  if (!idPrefix) {
    return undefined!;
  }
  return `${idPrefix}-T-${value}`;
}
