"use client"
import { BrowserRouter } from 'react-router-dom';

import '../app/shared/forms/TraducoesYup';

import { AppThemeProvider, AuthProvider, DrawerProvider } from '../app/shared/contexts';
import { Login, MenuLateral } from '../app/shared/components';
import { AppRoutes } from '../app/Routes';


export default function App(){
  return (
    <AuthProvider>
      <AppThemeProvider>

        <Login>

          <DrawerProvider>
            <BrowserRouter>

              <MenuLateral>
                <AppRoutes />
              </MenuLateral>

            </BrowserRouter>
          </DrawerProvider>

        </Login>

      </AppThemeProvider>
    </AuthProvider>
  );
};