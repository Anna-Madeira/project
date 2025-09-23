"use client"

import { createContext, useCallback, useContext, useState } from 'react';

interface IDrawerOption {
  icon: React.ComponentType; 
  path: string;
  label: string;
}

interface IDrawerContextData {
  isDrawerOpen: boolean;
  toggleDrawerOpen: () => void;
  drawerOptions: IDrawerOption[];
  setDrawerOptions: (newDrawerOptions: IDrawerOption[]) => void;
}

const DrawerContext = createContext<IDrawerContextData>({
  isDrawerOpen: false,
  toggleDrawerOpen: () => {},
  drawerOptions: [], // Initialize with an empty array
  setDrawerOptions: () => {},
});


export const useDrawerContext = () => {
  return useContext(DrawerContext);
};

interface DrawerProviderProps {
    children: React.ReactNode; 
}


export const DrawerProvider: React.FC<DrawerProviderProps> = ({ children }) => {
  const [drawerOptions, setDrawerOptions] = useState<IDrawerOption[]>([]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawerOpen = useCallback(() => {
    setIsDrawerOpen(oldDrawerOpen => !oldDrawerOpen);
  }, []);

  const handleSetDrawerOptions = useCallback((newDrawerOptions: IDrawerOption[]) => {
    setDrawerOptions(newDrawerOptions);
  }, []);

  return (
    <DrawerContext.Provider value={{ isDrawerOpen, drawerOptions, toggleDrawerOpen, setDrawerOptions: handleSetDrawerOptions }}>
      {children}
    </DrawerContext.Provider>
  );
};