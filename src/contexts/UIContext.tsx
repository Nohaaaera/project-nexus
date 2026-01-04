import { createContext, useContext, useState, ReactNode } from 'react';

interface UIContextType {
  isProfileFormCollapsed: boolean;
  setProfileFormCollapsed: (isCollapsed: boolean) => void;
}

const UIContext = createContext<UIContextType | undefined>(undefined);

export function UIProvider({ children }: { children: ReactNode }) {
  const [isProfileFormCollapsed, setProfileFormCollapsed] = useState(true);

  return (
    <UIContext.Provider value={{ isProfileFormCollapsed, setProfileFormCollapsed }}>
      {children}
    </UIContext.Provider>
  );
}

export function useUI() {
  const context = useContext(UIContext);
  if (!context) {
    throw new Error('useUI must be used within a UIProvider');
  }
  return context;
}