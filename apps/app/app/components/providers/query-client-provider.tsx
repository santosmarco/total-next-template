'use client';

import {
  QueryClient,
  QueryClientProvider as QueryClientProvider_,
} from '@tanstack/react-query';

export type QueryClientProviderProps = {
  readonly children: React.ReactNode;
};

const queryClient = new QueryClient();

export function QueryClientProvider({ children }: QueryClientProviderProps) {
  return (
    <QueryClientProvider_ client={queryClient}>{children}</QueryClientProvider_>
  );
}
