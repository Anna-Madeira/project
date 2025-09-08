import { BrowserRouter } from 'react-router-dom';

import { AppThemeProvider, DrawerProvider } from '../Shared/contexts';
import { MenuLateral } from '../Shared/components';
import { AppRoutes } from '../Routes';

export const App = () => {
  return (
    <AppThemeProvider>
      <DrawerProvider>
        <BrowserRouter>

          <MenuLateral>
            <AppRoutes />
          </MenuLateral>

        </BrowserRouter>
      </DrawerProvider>
    </AppThemeProvider>
  );
};