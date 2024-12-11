import { DesignSystemProvider } from '@repo/design-system';
import { fonts } from '@repo/design-system/lib/fonts';
import '@repo/design-system/styles/globals.css';
import type { ReactNode } from 'react';
import { AppProviders } from './components/providers';

type RootLayoutProperties = {
  readonly children: ReactNode;
};

const RootLayout = ({ children }: RootLayoutProperties) => (
  <html lang="en" className={fonts} suppressHydrationWarning>
    <body>
      <AppProviders>
        <DesignSystemProvider>{children}</DesignSystemProvider>
      </AppProviders>
    </body>
  </html>
);

export default RootLayout;
